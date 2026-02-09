export default function HeartRain() {
  const hearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
    size: `${1 + Math.random() * 1.5}rem`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-romantic-pink animate-fall-down"
          style={{
            left: heart.left,
            top: '-10%',
            fontSize: heart.size,
            animationDelay: heart.animationDelay,
            animationDuration: heart.animationDuration,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
