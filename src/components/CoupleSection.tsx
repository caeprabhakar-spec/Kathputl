import React from 'react';
import { weddingData } from '../data/weddingData';
import { Heart, Sparkles } from 'lucide-react';

export const CoupleSection: React.FC = () => {
  return (
    <section id="couple" className="relative w-full py-16 px-4">
      <div className="max-w-[480px] mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-royal-heading tracking-[0.25em] text-[#E7C76B] uppercase">
            <span>⚜</span>
            <span>The Happy Couple</span>
            <span>⚜</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-royal-title text-gold-shimmer">
            Two Hearts, One Soul
          </h2>
          <div className="mt-3 px-6 text-center">
            <p className="font-body-serif italic text-lg sm:text-xl text-[#FFEAA7] leading-relaxed">
              &ldquo;Two souls.
              <br />
              One beautiful journey.
              <br />
              Forever begins here.&rdquo;
            </p>
          </div>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C79A3B] to-transparent mx-auto mt-4" />
        </div>

        {/* Groom Profile Card */}
        <div className="relative mb-8 rounded-2xl bg-gradient-to-b from-[#3E0911] to-[#25050A] border-2 border-[#C79A3B]/60 p-5 shadow-2xl overflow-hidden">
          {/* Subtle puppet strings above card */}
          <div className="absolute top-0 right-10 w-[1px] h-8 bg-[#C79A3B]/60" />
          <div className="absolute top-0 left-10 w-[1px] h-8 bg-[#C79A3B]/60" />

          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* Groom Kathputli Portrait Frame */}
            <div className="relative w-36 h-44 flex-shrink-0 rounded-xl bg-[#1C0508] border border-[#E7C76B]/80 p-2 shadow-inner overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-black" />
              <img
                src={weddingData.assets.groom}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = weddingData.assets.groomFallback;
                }}
                alt="Groom Prabhakar"
                className="w-full h-full object-contain filter drop-shadow-lg"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-1 px-2 py-0.5 rounded bg-[#480811]/90 text-[10px] text-[#FFEAA7] font-royal-heading tracking-wider uppercase border border-[#C79A3B]/50">
                Groom
              </div>
            </div>

            {/* Groom Info */}
            <div className="flex-1 text-center sm:text-left">
              <span className="text-xs uppercase font-royal-heading tracking-widest text-[#E7C76B]">
                The Royal Groom
              </span>
              <h3 className="text-2xl font-royal-title text-[#FFEAA7] mt-0.5">
                {weddingData.groomFullName}
              </h3>
              <p className="text-xs text-[#F4E5C7]/75 font-body-serif italic mt-1">
                {weddingData.groomParents}
              </p>
              <div className="mt-3 p-3 rounded-lg bg-[#180407]/70 border border-[#C79A3B]/20">
                <p className="text-xs sm:text-sm font-body-serif italic text-[#F4E5C7]/90 leading-relaxed">
                  &ldquo;{weddingData.groomQuote}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Auspicious Center Knot Transition */}
        <div className="flex items-center justify-center my-6 space-x-3 text-[#C79A3B]">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C79A3B]" />
          <div className="w-8 h-8 rounded-full bg-[#520914] border border-[#E7C76B] flex items-center justify-center shadow-lg">
            <Heart className="w-3.5 h-3.5 text-[#FFEAA7] fill-[#FFEAA7]" />
          </div>
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C79A3B]" />
        </div>

        {/* Bride Profile Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#3E0911] to-[#25050A] border-2 border-[#C79A3B]/60 p-5 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-10 w-[1px] h-8 bg-[#C79A3B]/60" />
          <div className="absolute top-0 left-10 w-[1px] h-8 bg-[#C79A3B]/60" />

          <div className="flex flex-col sm:flex-row-reverse items-center gap-5">
            {/* Bride Kathputli Portrait Frame */}
            <div className="relative w-36 h-44 flex-shrink-0 rounded-xl bg-[#1C0508] border border-[#E7C76B]/80 p-2 shadow-inner overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-black" />
              <img
                src={weddingData.assets.bride}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = weddingData.assets.brideFallback;
                }}
                alt="Bride Sapna"
                className="w-full h-full object-contain filter drop-shadow-lg"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-1 px-2 py-0.5 rounded bg-[#480811]/90 text-[10px] text-[#FFEAA7] font-royal-heading tracking-wider uppercase border border-[#C79A3B]/50">
                Bride
              </div>
            </div>

            {/* Bride Info */}
            <div className="flex-1 text-center sm:text-right">
              <span className="text-xs uppercase font-royal-heading tracking-widest text-[#E7C76B]">
                The Royal Bride
              </span>
              <h3 className="text-2xl font-royal-title text-[#FFEAA7] mt-0.5">
                {weddingData.brideFullName}
              </h3>
              <p className="text-xs text-[#F4E5C7]/75 font-body-serif italic mt-1">
                {weddingData.brideParents}
              </p>
              <div className="mt-3 p-3 rounded-lg bg-[#180407]/70 border border-[#C79A3B]/20">
                <p className="text-xs sm:text-sm font-body-serif italic text-[#F4E5C7]/90 leading-relaxed">
                  &ldquo;{weddingData.brideQuote}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
