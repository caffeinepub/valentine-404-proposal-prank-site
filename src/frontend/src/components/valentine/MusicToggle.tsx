import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    // TO ADD MUSIC: Replace the empty string below with your audio file URL or path
    // Example: audioRef.current = new Audio('/assets/romantic-music.mp3');
    // Or use a free music URL from a service like Pixabay or similar
    audioRef.current = new Audio('');
    
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current || !audioRef.current.src) {
      console.log('No audio source configured. Add your music URL in MusicToggle.tsx');
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error('Audio play failed:', err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-romantic-pink/80 hover:bg-romantic-pink text-white shadow-lg backdrop-blur-sm"
      size="icon"
    >
      {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
    </Button>
  );
}
