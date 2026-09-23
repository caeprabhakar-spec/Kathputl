import React from 'react';
import { weddingData } from '../data/weddingData';
import { Sparkles } from 'lucide-react';

export const BlessingsSection: React.FC = () => {
  return (
    <section id="blessings" className="relative w-full py-16 px-4">
      <div className="max-w-[460px] mx-auto text-center">
        
        {/* Ornate Frame Scroll */}
        <div className="relative rounded-3xl bg-[#FAF4E6] text-[#2C1810] p-6 sm:p-8 shadow-2xl border-4 border-[#C79A3B] overflow-hidden">
          
          {/* Top Marigold Garland Accent */}
          <div className="flex justify-center space-x-2 text-sm mb-3">
            <span>🏵️</span>
            <span>🏵️</span>
            <span>🏵️</span>
            <span>🏵️</span>
            <span>🏵️</span>
          </div>

          <div className="inline-flex items-center space-x-2 text-xs font-royal-heading tracking-[0.25em] text-[#8F1D2C] uppercase font-semibold">
            <span>⚜</span>
            <span>Divine Blessings</span>
            <span>⚜</span>
          </div>

          <h3 className="mt-1 text-2xl sm:text-3xl font-royal-title text-[#5A0F18] font-bold">
            Blessings & Gratitude
          </h3>

          <div className="w-16 h-[2px] bg-[#C79A3B] mx-auto my-4" />

          {/* Core Blessing Quote */}
          <div className="my-4 p-4 rounded-2xl bg-[#FFFDF8] border border-[#C79A3B]/40 shadow-inner">
            <p className="text-xl sm:text-2xl font-royal-heading text-[#8F1D2C] font-semibold italic">
              &ldquo;Your presence is our greatest gift.&rdquo;
            </p>
          </div>

          {/* Sanskrit Shloka */}
          <div className="my-5 space-y-2">
            <p className="text-sm sm:text-base font-folk text-[#5A0F18] font-semibold leading-relaxed whitespace-pre-line">
              {weddingData.blessings.sanskritShloka}
            </p>
            <p className="text-xs sm:text-sm font-body-serif italic text-[#633A11] max-w-[340px] mx-auto mt-2">
              {weddingData.blessings.shlokaTranslation}
            </p>
          </div>

          {/* Family Request */}
          <p className="text-xs sm:text-sm font-body-serif text-[#422518] leading-relaxed pt-3 border-t border-[#C79A3B]/40">
            {weddingData.blessings.familyBlessing}
          </p>

          {/* Traditional Brass Diya Footer */}
          <div className="mt-6 flex items-center justify-center space-x-4 text-xl">
            <span className="animate-diya">🪔</span>
            <span className="text-xs font-royal-heading uppercase tracking-widest text-[#8F1D2C] font-bold">
              ॥ शुभम् भवतु ॥
            </span>
            <span className="animate-diya [animation-delay:1s]">🪔</span>
          </div>

        </div>

      </div>
    </section>
  );
};
