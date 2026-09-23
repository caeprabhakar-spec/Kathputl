import React from 'react';
import { weddingData } from '../data/weddingData';

export const WelcomeStory: React.FC = () => {
  return (
    <section id="welcome" className="relative w-full py-16 px-4">
      {/* Background Ornament Accents */}
      <div className="max-w-[460px] mx-auto relative">
        
        {/* Rajasthani Carved Arch Scroll Container */}
        <div className="relative rounded-2xl bg-[#FAF4E6] text-[#2C1810] p-6 sm:p-8 shadow-2xl border-2 border-[#C79A3B] overflow-hidden">
          
          {/* Subtle Top & Bottom Gold Gota Patti Ribbons */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#8F1D2C] via-[#C79A3B] to-[#8F1D2C]" />
          <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-r from-[#8F1D2C] via-[#C79A3B] to-[#8F1D2C]" />

          {/* Traditional Auspicious Watermark */}
          <div className="absolute -right-10 -bottom-10 w-44 h-44 opacity-5 pointer-events-none text-9xl">
            🐘
          </div>

          {/* Header Flourish */}
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl text-[#8F1D2C]">𑁍</span>
            <span className="text-xs uppercase font-royal-heading tracking-[0.25em] text-[#8F1D2C] font-semibold mt-1">
              Section I • Welcome
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-royal-title text-[#5A0F18]">
              A Tale Written In The Stars
            </h3>
            <div className="w-16 h-[2px] bg-[#C79A3B] my-3" />
          </div>

          {/* Core Story Poem */}
          <div className="text-center font-body-serif space-y-4 text-base sm:text-lg leading-relaxed text-[#422518]">
            <p className="italic text-lg sm:text-xl font-medium text-[#7A1320]">
              &ldquo;Once upon a time,
              <br />
              two hearts found their way to each other...&rdquo;
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              In the royal pink city of Jaipur, where historic palaces whisper tales of undying devotion and puppet strings dance to the timeless rhythms of the heart, destiny orchestrated our forever.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              Surrounded by fragrant marigolds, the resplendent glow of antique brass lanterns, and the sweet resonance of shehnai, we embark on the most sacred chapter of our lives.
            </p>
          </div>

          {/* Auspicious Rajasthani Welcome Banner */}
          <div className="mt-6 pt-4 border-t border-[#C79A3B]/40 flex items-center justify-center space-x-3 text-[#7A1320]">
            <span className="text-xs">🪔</span>
            <span className="text-sm font-folk font-bold tracking-widest text-[#8F1D2C]">
              पधारो म्हारे देश • अतिथी देवो भवः
            </span>
            <span className="text-xs">🪔</span>
          </div>

        </div>

      </div>
    </section>
  );
};
