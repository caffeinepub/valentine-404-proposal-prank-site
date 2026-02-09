import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function EvasiveNoButton() {
  const [hoverCount, setHoverCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPositioned, setIsPositioned] = useState(false);
  const [showDenial, setShowDenial] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getButtonText = () => {
    if (hoverCount === 0) return 'NO';
    if (hoverCount === 1) return 'Please don\'t... 😭';
    if (hoverCount === 2) return 'I\'m scared!';
    return 'YES PLEASE!';
  };

  const getButtonScale = () => {
    if (hoverCount === 1) return 0.85;
    return 1;
  };

  const moveButton = () => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const buttonRect = button.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate safe bounds (keep button fully visible)
    const maxX = viewportWidth - buttonRect.width - 20;
    const maxY = viewportHeight - buttonRect.height - 20;
    const minX = 20;
    const minY = 20;

    // Generate random position within safe bounds
    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    setPosition({ x: newX, y: newY });
    setIsPositioned(true);
    setHoverCount(prev => prev + 1);
  };

  const handleHover = () => {
    moveButton();
  };

  const handleTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    moveButton();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDenial(true);
    setTimeout(() => {
      setShowDenial(false);
      setHoverCount(0);
      setIsPositioned(false);
    }, 2000);
  };

  const buttonStyle = isPositioned
    ? {
        position: 'fixed' as const,
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `scale(${getButtonScale()})`,
        transition: hoverCount >= 2 ? 'all 0.15s ease-out' : 'all 0.3s ease-out',
      }
    : {
        transform: `scale(${getButtonScale()})`,
        transition: 'all 0.3s ease-out',
      };

  return (
    <>
      <Button
        ref={buttonRef}
        onMouseEnter={handleHover}
        onTouchStart={handleTouch}
        onClick={handleClick}
        className={`flex-1 h-16 text-2xl font-bold bg-romantic-red hover:bg-romantic-red-dark text-white rounded-2xl shadow-xl transition-all duration-300 ${
          hoverCount >= 3 ? 'animate-shake' : ''
        }`}
        style={buttonStyle}
      >
        {getButtonText()}
      </Button>

      {showDenial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-romantic-red text-white px-8 py-6 rounded-2xl shadow-2xl text-2xl font-bold animate-bounce-in">
            Rejection Denied! 💔 Try again~
          </div>
        </div>
      )}
    </>
  );
}
