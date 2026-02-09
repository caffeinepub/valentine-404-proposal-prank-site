import EvasiveNoButton from '../EvasiveNoButton';
import { Button } from '@/components/ui/button';

interface ProposalSceneProps {
  onYesClick: () => void;
}

export default function ProposalScene({ onYesClick }: ProposalSceneProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0a1a] via-[#2d1b3d] to-[#4a1f4f]">
      <div className="absolute inset-0 bg-hearts-pattern opacity-10"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center space-y-12 max-w-4xl">
        <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-heading text-romantic-gold leading-tight animate-fade-in-up glow-text">
          Wait... FOUND IT! ❤️ Will you be my Valentine, My Love?
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
          <Button
            onClick={onYesClick}
            className="flex-1 h-16 text-2xl font-bold bg-romantic-green hover:bg-romantic-green-dark text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            YES ❤️
          </Button>
          
          <EvasiveNoButton />
        </div>
      </div>
    </div>
  );
}
