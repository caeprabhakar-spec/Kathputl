import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { Sparkles } from 'lucide-react';

interface OpeningScreenProps {
  onOpen: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleSealTap = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Cinematic sequence timing:
    // 0ms: seal presses inward and shines
    // 400ms: curtains part smoothly
    // 2200ms: transition complete, reveal full vertical story
    setTimeout(() => {
      onOpen();
    }, 2200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#150608] select-none transition-opacity duration-700 ${
        isOpening ? 'pointer-events-none' : ''
      }`}
    >
      {/* Outer Mobile Frame Container */}
      <div className="relative w-full max-w-[520px] h-full mx-auto flex flex-col justify-between overflow-hidden shadow-2xl">
        
        {/* Kathputli Stage Background Image (behind curtains) */}
        <div className="absolute inset-0 z-0">
          <img
            src={weddingData.assets.background}
            onError={(e) => {
              // Graceful fallback to SVG
              (e.target as HTMLImageElement).src = weddingData.assets.backgroundFallback;
            }}
            alt="Rajasthani Kathputli Wedding Stage"
            className="w-full h-full object-cover object-center filter brightness-90"
            referrerPolicy="no-referrer"
          />
          {/* Subtle warm ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#38070D]/40 via-transparent to-[#1F0408]/70" />
        </div>

        {/* Suspended Puppet Marionette Strings (Top to Sides) */}
        <div className="absolute top-0 inset-x-0 h-48 z-10 pointer-events-none flex justify-between px-10 opacity-70">
          <div className="w-[1px] h-full bg-gradient-to-b from-[#C79A3B] via-[#C79A3B]/40 to-transparent" />
          <div className="w-[1px] h-full bg-gradient-to-b from-[#C79A3B] via-[#C79A3B]/50 to-transparent" />
          <div className="w-[1px] h-full bg-gradient-to-b from-[#C79A3B] via-[#C79A3B]/40 to-transparent" />
        </div>

        {/* Top Ornate Theatre Valance & Brass Bells */}
        <div className="relative z-20 w-full pt-3 px-4 flex flex-col items-center">
          <div className="flex items-center space-x-2 text-[#E7C76B] text-xs uppercase tracking-[0.25em] font-royal-heading drop-shadow-md">
            <span>⚜</span>
            <span>The Royal Invitation</span>
            <span>⚜</span>
          </div>
          <h1 className="mt-1 text-2xl md:text-3xl text-gold-shimmer font-royal-title text-center drop-shadow-lg">
            {weddingData.groom} & {weddingData.bride}
          </h1>
          <p className="text-[11px] text-[#F4E5C7]/80 tracking-widest font-body-serif uppercase mt-0.5">
            {weddingData.displayDate} • Jaipur, Rajasthan
          </p>

          {/* Hanging Brass Bells / Pom-poms */}
          <div className="flex justify-between w-full max-w-[340px] mt-2 px-6">
            <span className="animate-bell-sway text-[#E7C76B] text-lg filter drop-shadow">🔔</span>
            <span className="text-orange-400 text-sm filter drop-shadow">🏵️</span>
            <span className="animate-bell-sway text-[#E7C76B] text-xl filter drop-shadow [animation-delay:0.5s]">🔔</span>
            <span className="text-emerald-400 text-sm filter drop-shadow">🏵️</span>
            <span className="animate-bell-sway text-[#E7C76B] text-lg filter drop-shadow [animation-delay:1s]">🔔</span>
          </div>
        </div>

        {/* SIDE KATHPUTLI PUPPETS (Partially peeking behind side curtains) */}
        {/* Groom Kathputli (Left) */}
        <div
          className={`absolute left-0 bottom-24 w-40 md:w-48 h-80 z-15 pointer-events-none transition-all duration-1000 ease-out ${
            isOpening ? 'opacity-100 translate-x-2 scale-105' : 'opacity-85 -translate-x-6'
          }`}
        >
          <img
            src={weddingData.assets.groom}
            onError={(e) => {
              (e.target as HTMLImageElement).src = weddingData.assets.groomFallback;
            }}
            alt="Groom Kathputli Puppet"
            className="w-full h-full object-contain filter drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Bride Kathputli (Right) */}
        <div
          className={`absolute right-0 bottom-24 w-40 md:w-48 h-80 z-15 pointer-events-none transition-all duration-1000 ease-out ${
            isOpening ? 'opacity-100 -translate-x-2 scale-105' : 'opacity-85 translate-x-6'
          }`}
        >
          <img
            src={weddingData.assets.bride}
            onError={(e) => {
              (e.target as HTMLImageElement).src = weddingData.assets.brideFallback;
            }}
            alt="Bride Kathputli Puppet"
            className="w-full h-full object-contain filter drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* CINEMATIC VELVET THEATRE CURTAINS (MEETING IN CENTER) */}
        <div className="absolute inset-0 z-20 pointer-events-none flex overflow-hidden">
          {/* Left Velvet Curtain */}
          <div
            className={`w-1/2 h-full bg-gradient-to-r from-[#42060C] via-[#851624] to-[#600C17] border-r-2 border-[#E7C76B]/90 shadow-[10px_0_30px_rgba(0,0,0,0.8)] transition-transform duration-[1800ms] ease-in-out ${
              isOpening ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            {/* Curtain texture, folds & gold border */}
            <div className="w-full h-full opacity-35 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-black" />
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-[#C79A3B] to-transparent opacity-80" />
            {/* Hanging Curtain Tassel on Left Edge */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E7C76B] text-2xl animate-tassel-float">
              🪢
            </div>
          </div>

          {/* Right Velvet Curtain */}
          <div
            className={`w-1/2 h-full bg-gradient-to-l from-[#42060C] via-[#851624] to-[#600C17] border-l-2 border-[#E7C76B]/90 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] transition-transform duration-[1800ms] ease-in-out ${
              isOpening ? 'translate-x-full' : 'translate-x-0'
            }`}
          >
            {/* Curtain texture, folds & gold border */}
            <div className="w-full h-full opacity-35 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-black" />
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-[#C79A3B] to-transparent opacity-80" />
            {/* Hanging Curtain Tassel on Right Edge */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#E7C76B] text-2xl animate-tassel-float [animation-delay:0.7s]">
              🪢
            </div>
          </div>
        </div>

        {/* FLOATING GOLDEN PARTICLES */}
        <div className="absolute inset-0 z-25 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-ping opacity-60" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#E7C76B] animate-pulse opacity-75" />
          <div className="absolute bottom-1/3 left-1/5 w-1 h-1 rounded-full bg-[#FFF] animate-ping opacity-50 [animation-delay:1.2s]" />
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 rounded-full bg-[#FFEAA7] animate-diya opacity-70" />
        </div>

        {/* CENTER INTERACTIVE WAX SEAL: "TAP TO OPEN" */}
        <div className="relative z-30 flex-1 flex flex-col items-center justify-center px-4">
          <div
            onClick={handleSealTap}
            role="button"
            tabIndex={0}
            aria-label="Tap to open the Royal Kathputli Wedding Invitation"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSealTap();
              }
            }}
            className={`group relative cursor-pointer touch-manipulation transform transition-all duration-700 focus:outline-none ${
              isOpening
                ? 'scale-75 opacity-0 rotate-12 blur-sm'
                : 'hover:scale-105 active:scale-95'
            }`}
          >
            {/* Glowing Golden Aura Behind Seal */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#E7C76B]/40 via-[#C79A3B]/60 to-[#FFEAA7]/40 blur-xl opacity-75 animate-pulse" />

            {/* Concentric Rotating Folk Ring Accent */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-[#E7C76B]/50 animate-[spin_25s_linear_infinite]" />

            {/* Gold Wax Seal Image */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 animate-seal-pulse">
              <img
                src={weddingData.assets.seal}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = weddingData.assets.sealFallback;
                }}
                alt="Royal Gold Seal - Tap to Open"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Elegant Prompt Text Below Seal */}
          <div
            className={`mt-4 text-center transition-all duration-500 ${
              isOpening ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#2C070C]/80 border border-[#C79A3B]/60 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E7C76B] animate-spin [animation-duration:8s]" />
              <span className="text-xs font-royal-heading tracking-[0.2em] text-[#FFEAA7] uppercase font-semibold">
                Tap Seal to Unveil
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#E7C76B] animate-spin [animation-duration:8s]" />
            </div>
            <p className="text-[12px] text-[#F4E5C7]/75 font-body-serif italic mt-2">
              Padharo Mhare Desh • An Interactive Puppet Experience
            </p>
          </div>
        </div>

        {/* BOTTOM THEATRE FOOTER & AUSPICIOUS SYMBOLS */}
        <div className="relative z-20 pb-6 px-4 text-center">
          <div className="flex items-center justify-center space-x-3 text-[#C79A3B]">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C79A3B]" />
            <span className="text-sm font-folk">शुभ विवाह</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C79A3B]" />
          </div>
          <p className="text-[11px] text-[#F4E5C7]/60 font-sans-clean tracking-wider uppercase mt-1">
            Tap anywhere on the gold seal to begin
          </p>
        </div>

      </div>
    </div>
  );
};
