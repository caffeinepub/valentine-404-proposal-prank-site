import { useEffect, useState } from 'react';

export default function CrackingHeart() {
  const [crackProgress, setCrackProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCrackProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-32 my-8">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 10px rgba(255, 105, 180, 0.5))' }}
      >
        {/* Heart shape */}
        <path
          d="M50,85 C50,85 15,60 15,40 C15,25 25,15 35,15 C42,15 47,20 50,25 C53,20 58,15 65,15 C75,15 85,25 85,40 C85,60 50,85 50,85 Z"
          fill="#ff69b4"
          stroke="#ff1493"
          strokeWidth="2"
        />
        
        {/* Crack lines - progressively revealed */}
        <g className="crack-lines" strokeWidth="2" stroke="#8b0000" fill="none">
          <path
            d="M50,25 L50,50"
            strokeDasharray="25"
            strokeDashoffset={25 - (25 * crackProgress) / 100}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
          <path
            d="M50,50 L35,65"
            strokeDasharray="20"
            strokeDashoffset={20 - (20 * Math.max(0, crackProgress - 25)) / 75}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
          <path
            d="M50,50 L65,65"
            strokeDasharray="20"
            strokeDashoffset={20 - (20 * Math.max(0, crackProgress - 50)) / 50}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
          <path
            d="M50,50 L45,70"
            strokeDasharray="22"
            strokeDashoffset={22 - (22 * Math.max(0, crackProgress - 75)) / 25}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
        </g>
      </svg>
    </div>
  );
}
