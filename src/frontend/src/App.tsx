import { useState, useEffect } from 'react';
import Prank404Scene from './components/valentine/scenes/Prank404Scene';
import ProposalScene from './components/valentine/scenes/ProposalScene';
import VictoryScene from './components/valentine/scenes/VictoryScene';
import MusicToggle from './components/valentine/MusicToggle';
import GlitchFixTransition from './components/valentine/GlitchFixTransition';

type Scene = 'prank' | 'transition' | 'proposal' | 'victory';

function App() {
  const [scene, setScene] = useState<Scene>('prank');
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (scene !== 'prank') return;

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
  }, [scene, hasInteracted]);

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
