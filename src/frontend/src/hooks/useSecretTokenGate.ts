import { useState, useEffect } from 'react';
import { useActor } from './useActor';

const AUTH_KEY = 'valentine_token_authorized';

export function useSecretTokenGate() {
  const { actor, isFetching } = useActor();
  const [authStatus, setAuthStatus] = useState<'checking' | 'authorized' | 'blocked'>('checking');

  useEffect(() => {
    // Check if already authorized in this session
    const isAuthorized = sessionStorage.getItem(AUTH_KEY) === 'true';
    if (isAuthorized) {
      setAuthStatus('authorized');
      return;
    }

    // Extract token from URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    // If no actor yet, wait
    if (!actor || isFetching) {
      return;
    }

    // Validate token with backend
    const validateToken = async () => {
      try {
        // Pass token to backend (null if missing)
        await actor.authenticateSecretToken(token);
        // Success - mark as authorized
        sessionStorage.setItem(AUTH_KEY, 'true');
        setAuthStatus('authorized');
      } catch (err) {
        // Invalid or missing token
        console.error('Token validation failed:', err);
        setAuthStatus('blocked');
      }
    };

    validateToken();
  }, [actor, isFetching]);

  return {
    authStatus,
    isAuthorized: authStatus === 'authorized',
    isChecking: authStatus === 'checking',
    isBlocked: authStatus === 'blocked',
  };
}
