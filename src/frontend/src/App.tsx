import { useState, useEffect } from 'react';
import Prank404Scene from './components/valentine/scenes/Prank404Scene';
import ProposalScene from './components/valentine/scenes/ProposalScene';
import VictoryScene from './components/valentine/scenes/VictoryScene';
import MusicToggle from './components/valentine/MusicToggle';
import GlitchFixTransition from './components/valentine/GlitchFixTransition';
import InvalidLinkScreen from './components/valentine/InvalidLinkScreen';
import { useSecretTokenGate } from './hooks/useSecretTokenGate';

type Scene = 'prank' | 'transition' | 'proposal' | 'victory';

function App() {
  const { authStatus, isAuthorized } = useSecretTokenGate();
  const [scene, setScene] = useState<Scene>('prank');
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Reset scene state when authorized
    if (isAuthorized) {
      setScene('prank');
      setHasInteracted(false);
    }
  }, [isAuthorized]);

  useEffect(() => {
    if (!isAuthorized || scene !== 'prank') return;

    // Auto-transition after 10-15 seconds (using 12s as middle ground)
    const autoTimer = setTimeout(() => {
      if (!hasInteracted) {
        triggerTransition();
      }
    }, 12000);

    // Interaction listeners for immediate transition
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        triggerTransition();
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('mousemove', handleInteraction);

    return () => {
      clearTimeout(autoTimer);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
    };
  }, [scene, hasInteracted, isAuthorized]);

  const triggerTransition = () => {
    setScene('transition');
    // After transition animation completes, show proposal
    setTimeout(() => {
      setScene('proposal');
    }, 2000);
  };

  const handleYesClick = () => {
    setScene('victory');
  };

  // Show loading or blocked state while checking/blocked
  if (authStatus === 'checking') {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-romantic-red-dark via-romantic-red to-romantic-pink">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">💕</div>
          <p className="text-romantic-light text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (authStatus === 'blocked') {
    return <InvalidLinkScreen />;
  }

  // Show main app content after authorization
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {scene === 'prank' && <Prank404Scene />}
      {scene === 'transition' && <GlitchFixTransition />}
      {scene === 'proposal' && <ProposalScene onYesClick={handleYesClick} />}
      {scene === 'victory' && <VictoryScene />}
      <MusicToggle />
    </div>
  );
}

export default App;
