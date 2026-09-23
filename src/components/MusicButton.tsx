import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingAudio } from '../utils/audioPlayer';
import { weddingData } from '../data/weddingData';

interface MusicButtonProps {
  autoStartOnOpen?: boolean;
}

export const MusicButton: React.FC<MusicButtonProps> = ({ autoStartOnOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    weddingAudio.init(weddingData.music);

    if (autoStartOnOpen) {
      weddingAudio.play().then((started) => {
        if (started) setIsPlaying(true);
      });
    }
  }, [autoStartOnOpen]);

  const toggleMusic = () => {
    const active = weddingAudio.toggle();
    setIsPlaying(active);
  };

  return (
    <div className="fixed top-4 right-4 z-45">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Mute royal wedding music' : 'Play royal wedding music'}
        className={`group relative p-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-xl border flex items-center justify-center ${
          isPlaying
            ? 'bg-[#8F1D2C]/90 text-[#FFEAA7] border-[#E7C76B] shadow-[0_0_15px_rgba(231,199,107,0.4)]'
            : 'bg-[#2A060C]/80 text-[#F4E5C7]/70 border-[#C79A3B]/40 hover:text-[#FFEAA7] hover:border-[#E7C76B]'
        }`}
      >
        {/* Rotating Folk Mandala Halo when playing */}
        {isPlaying && (
          <div className="absolute -inset-1 rounded-full border border-dashed border-[#E7C76B]/60 animate-[spin_8s_linear_infinite] pointer-events-none" />
        )}

        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}

        {/* Small tooltip tag */}
        <span className="sr-only">
          {isPlaying ? 'Mute Music' : 'Play Music'}
        </span>
      </button>
    </div>
  );
};
