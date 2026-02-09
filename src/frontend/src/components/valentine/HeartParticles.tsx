export default function HeartParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${15 + Math.random() * 10}s`,
    size: `${0.5 + Math.random() * 1}rem`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute text-romantic-pink/20 animate-float-up"
          style={{
            left: particle.left,
            bottom: '-10%',
            fontSize: particle.size,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
