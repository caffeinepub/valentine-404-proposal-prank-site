import { AlertCircle, Heart } from 'lucide-react';

export default function InvalidLinkScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-romantic-red-dark via-romantic-red to-romantic-pink p-4 overflow-hidden">
      {/* Subtle heart pattern background */}
      <div className="absolute inset-0 bg-hearts-pattern opacity-20" />
      
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float-up"
            style={{
              left: `${(i * 12.5) + 5}%`,
              animationDuration: `${15 + i * 2}s`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Invalid link card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-romantic-pink/20 animate-fade-in-up">
          {/* Alert icon header */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-romantic-pink/30 blur-xl rounded-full" />
              <div className="relative bg-romantic-pink/20 p-4 rounded-full">
                <AlertCircle className="w-12 h-12 text-romantic-pink" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-heading font-bold text-center text-romantic-light mb-2 glow-text">
            Invalid Link
          </h1>
          <p className="text-center text-muted-foreground mb-6">
            This link is incomplete or invalid. Please check that you're using the correct URL.
          </p>

          {/* Info box */}
          <div className="bg-romantic-pink/10 border border-romantic-pink/30 rounded-lg p-4">
            <p className="text-sm text-romantic-light text-center">
              This is a private surprise that requires a special link to access.
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground/70">
            <Heart className="w-4 h-4" />
            <p className="text-xs text-center">
              Make sure you're using the complete link that was shared with you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
