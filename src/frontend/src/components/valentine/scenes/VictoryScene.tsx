import { useEffect } from 'react';
import ConfettiBurst from '../ConfettiBurst';
import HeartRain from '../HeartRain';

// Editable message constant - customize this text as desired
export const VICTORY_MESSAGE = `I knew you'd say YES, my love! ❤️ I love you. Not the cute filtered version — the real, messy, can't breathe without you, ruin the sheets version. You said yes (obviously, who could resist this face?😌😏), so now you're stuck with my hands everywhere, my mouth marking you up, and zero escape from the chaos you love pretending to hate. Thanks for finally admitting that you are mine. Can't wait to make you blush... then beg. 😈❤️. Forever yours, partner in crime 🔥`;

export default function VictoryScene() {
  useEffect(() => {
    // Scroll to top when victory scene loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2d1b3d] via-[#4a1f4f] to-[#6b2d5c]">
      <ConfettiBurst />
      <HeartRain />
      
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center space-y-8 max-w-4xl">
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-heading text-romantic-gold leading-tight animate-bounce-in glow-text-strong">
          YES! 🎉❤️
        </h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-romantic-gold/30">
          <p className="text-[clamp(1.1rem,3vw,1.5rem)] text-white leading-relaxed whitespace-pre-line">
            {VICTORY_MESSAGE}
          </p>
        </div>
        
        <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-romantic-gold/50 max-w-2xl w-full">
          <img 
            src="/assets/generated/hugging-couple-illustration.dim_1200x800.png" 
            alt="Cute couple hugging"
            className="w-full h-auto"
            onError={(e) => {
              // Hide image if it fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  );
}
