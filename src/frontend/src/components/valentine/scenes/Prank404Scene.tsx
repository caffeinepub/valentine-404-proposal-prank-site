import HeartParticles from '../HeartParticles';
import CrackingHeart from '../CrackingHeart';

export default function Prank404Scene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#1a0a1a] to-[#2d1b3d]">
      <HeartParticles />
      
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center space-y-8">
        <h1 className="text-[clamp(6rem,20vw,12rem)] font-bold leading-none glitch-text">
          404
        </h1>
        
        <CrackingHeart />
        
        <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-heading text-romantic-pink leading-tight">
          Love Not Found 💔
        </h2>
        
        <p className="text-[clamp(1rem,3vw,1.5rem)] text-romantic-light max-w-2xl leading-relaxed">
          Error: Valentine Missing... or maybe she's just too shy? 😏 Try clicking around or wait a sec...
        </p>
      </div>
    </div>
  );
}
