import React from 'react';
import { weddingData } from '../data/weddingData';
import { Heart, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-[92vh] flex flex-col justify-between items-center text-center px-4 pt-12 pb-8 overflow-hidden">
      
      {/* Background Kathputli Stage Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img
          src={weddingData.assets.background}
          onError={(e) => {
            (e.target as HTMLImageElement).src = weddingData.assets.backgroundFallback;
          }}
          alt=""
          className="w-full h-full object-cover object-top filter brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#150608]/90 via-[#26070E]/60 to-[#150608]" />
      </div>

      {/* TOP PUPPET THEATRE RIGGING: Wooden crossbars & strings */}
      <div className="relative z-10 w-full max-w-[460px] mx-auto pt-2">
        {/* Ornate Wooden Marionette Crossbar */}
        <div className="relative h-2.5 mx-8 rounded-full bg-gradient-to-r from-[#633A11] via-[#A87232] to-[#633A11] shadow-md border-b border-[#E7C76B]/40">
          <div className="absolute -top-1 left-4 w-2 h-4 rounded bg-[#412408]" />
          <div className="absolute -top-1 right-4 w-2 h-4 rounded bg-[#412408]" />
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-4 rounded bg-[#5A340C]" />
        </div>

        {/* Suspended Tassels & Temple Bells */}
        <div className="flex justify-between items-start px-6 -mt-1 pointer-events-none">
          {/* Bell 1 */}
          <div className="flex flex-col items-center animate-bell-sway">
            <div className="w-[1px] h-6 bg-[#C79A3B]" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow" />
            <span className="text-sm mt-0.5">🔔</span>
          </div>

          {/* Marigold Garland Strand Center */}
          <div className="flex items-center space-x-1 py-1 px-3 rounded-full bg-[#3B0A11]/60 border border-[#C79A3B]/40 shadow-sm backdrop-blur-sm">
            <span className="text-xs">🏵️</span>
            <span className="text-[10px] text-[#FFEAA7] font-royal-heading tracking-widest uppercase">
              Shree Ganeshay Namah
            </span>
            <span className="text-xs">🏵️</span>
          </div>

          {/* Bell 2 */}
          <div className="flex flex-col items-center animate-bell-sway [animation-delay:0.8s]">
            <div className="w-[1px] h-6 bg-[#C79A3B]" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow" />
            <span className="text-sm mt-0.5">🔔</span>
          </div>
        </div>
      </div>

      {/* PUPPET STRINGS DROPPING TO CHARACTERS */}
      <div className="absolute top-12 left-10 w-[1px] h-64 bg-gradient-to-b from-[#C79A3B]/80 via-[#C79A3B]/30 to-transparent pointer-events-none z-10" />
      <div className="absolute top-12 right-10 w-[1px] h-64 bg-gradient-to-b from-[#C79A3B]/80 via-[#C79A3B]/30 to-transparent pointer-events-none z-10" />

      {/* MAIN INVITATION HEADER & COUPLE NAMES */}
      <div className="relative z-10 w-full max-w-[460px] mx-auto my-auto py-4 flex flex-col items-center">
        
        {/* Auspicious Top Header */}
        <div className="flex items-center space-x-2 text-[#E7C76B] text-xs uppercase tracking-[0.3em] font-royal-heading mb-3">
          <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#E7C76B]" />
          <span>The Royal Wedding</span>
          <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#E7C76B]" />
        </div>

        {/* Central Arch Ornament Frame */}
        <div className="relative w-full px-2 py-4">
          
          {/* Subtle Decorative Golden Corner Flourishes */}
          <div className="absolute top-0 left-4 text-[#C79A3B]/70 text-lg">𑁍</div>
          <div className="absolute top-0 right-4 text-[#C79A3B]/70 text-lg">𑁍</div>

          {/* GROOM NAME */}
          <h2 className="text-[clamp(2.4rem,10vw,4.2rem)] font-royal-title leading-[1.05] tracking-wide text-gold-shimmer drop-shadow-xl uppercase">
            {weddingData.groom}
          </h2>

          {/* Traditional Ampersand with Heart Emblem */}
          <div className="my-1.5 flex items-center justify-center space-x-3 text-[#E7C76B]">
            <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C79A3B]" />
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#420A12] border border-[#C79A3B] text-base font-royal-title text-[#FFEAA7] shadow-inner">
              &
            </span>
            <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C79A3B]" />
          </div>

          {/* BRIDE NAME */}
          <h2 className="text-[clamp(2.4rem,10vw,4.2rem)] font-royal-title leading-[1.05] tracking-wide text-gold-shimmer drop-shadow-xl uppercase">
            {weddingData.bride}
          </h2>

          <div className="absolute bottom-0 left-4 text-[#C79A3B]/70 text-lg">𑁍</div>
          <div className="absolute bottom-0 right-4 text-[#C79A3B]/70 text-lg">𑁍</div>
        </div>

        {/* INVITATION TEXT */}
        <div className="mt-4 px-6 max-w-[380px]">
          <p className="text-base sm:text-lg font-body-serif text-[#F4E5C7] leading-relaxed tracking-wide">
            Together with their families,
            <br />
            invite you to celebrate their wedding
          </p>

          <div className="mt-4 pt-3 border-t border-[#C79A3B]/30 flex flex-col items-center">
            <span className="text-sm font-royal-heading tracking-widest text-[#E7C76B] uppercase font-semibold">
              {weddingData.displayDate}
            </span>
            <span className="text-xs text-[#F4E5C7]/80 font-body-serif italic mt-0.5">
              {weddingData.venueName} • Jaipur
            </span>
          </div>
        </div>

      </div>

      {/* WELCOMING KATHPUTLI PUPPETS (SIDE BY SIDE IN WELCOMING GESTURE) */}
      <div className="relative z-10 w-full max-w-[460px] mx-auto mt-2">
        <div className="relative flex justify-between items-end px-2">
          
          {/* Groom Kathputli (Left Side) */}
          <div className="w-[45%] max-w-[190px] flex flex-col items-center animate-puppet-sway">
            <div className="w-full aspect-[2/3] relative">
              <img
                src={weddingData.assets.groom}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = weddingData.assets.groomFallback;
                }}
                alt="Groom Kathputli Puppet in Royal Sherwani"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Small Name Banner */}
            <div className="mt-1 px-3 py-0.5 rounded-full bg-[#3B070E]/90 border border-[#C79A3B]/60 shadow-md">
              <span className="text-[11px] font-royal-heading tracking-wider text-[#FFEAA7] uppercase">
                Dulha • {weddingData.groom}
              </span>
            </div>
          </div>

          {/* Center Auspicious Vivah Knot / Kalash */}
          <div className="flex-1 pb-6 flex flex-col items-center text-center px-1">
            <div className="w-10 h-10 rounded-full bg-[#520914] border border-[#E7C76B] flex items-center justify-center shadow-lg animate-pulse">
              <Heart className="w-4 h-4 text-[#FFEAA7] fill-[#FFEAA7]" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-royal-heading text-[#C79A3B] mt-2">
              Padharo Sa
            </span>
            <span className="text-[12px] font-body-serif text-[#F4E5C7]/70 italic">
              A royal union
            </span>
          </div>

          {/* Bride Kathputli (Right Side) */}
          <div className="w-[45%] max-w-[190px] flex flex-col items-center animate-puppet-sway [animation-delay:1.5s]">
            <div className="w-full aspect-[2/3] relative">
              <img
                src={weddingData.assets.bride}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = weddingData.assets.brideFallback;
                }}
                alt="Bride Kathputli Puppet in Royal Lehenga"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Small Name Banner */}
            <div className="mt-1 px-3 py-0.5 rounded-full bg-[#3B070E]/90 border border-[#C79A3B]/60 shadow-md">
              <span className="text-[11px] font-royal-heading tracking-wider text-[#FFEAA7] uppercase">
                Dulhan • {weddingData.bride}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="relative z-10 mt-6 flex flex-col items-center">
        <a
          href="#welcome"
          className="text-[#E7C76B]/80 hover:text-[#FFEAA7] flex flex-col items-center transition-colors"
          aria-label="Scroll down to read the story"
        >
          <span className="text-[10px] uppercase font-sans-clean tracking-[0.25em] mb-1">Scroll to Explore</span>
          <span className="text-lg animate-bounce text-[#C79A3B]">⌄</span>
        </a>
      </div>

    </section>
  );
};
