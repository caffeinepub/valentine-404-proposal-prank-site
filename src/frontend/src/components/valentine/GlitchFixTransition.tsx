export default function GlitchFixTransition() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 animate-glitch-flash"></div>
      
      <div className="relative z-10 text-center animate-shake-fade">
        <h1 className="text-[clamp(6rem,20vw,12rem)] font-bold text-romantic-pink glitch-text-intense">
          404
        </h1>
        <p className="text-3xl text-white mt-4">Fixing error...</p>
      </div>
    </div>
  );
}
