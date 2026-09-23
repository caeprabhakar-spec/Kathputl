import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { Heart, RotateCcw, Share2, Sparkles } from 'lucide-react';

interface FinalScreenProps {
  onReplay: () => void;
}

export const FinalScreen: React.FC<FinalScreenProps> = ({ onReplay }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    const text = `⚜ Royal Wedding Invitation: ${weddingData.groom} & ${weddingData.bride} ⚜\nYou are cordially invited to celebrate our wedding at ${weddingData.venueName}, Jaipur on ${weddingData.displayDate}.\nView interactive invitation: ${window.location.href}`;
    if (navigator.share) {
      navigator.share({
        title: `${weddingData.groom} & ${weddingData.bride} Wedding Invitation`,
        text: text,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id="final" className="relative w-full min-h-[90vh] py-16 px-4 flex flex-col justify-between items-center text-center overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src={weddingData.assets.background}
          onError={(e) => {
            (e.target as HTMLImageElement).src = weddingData.assets.backgroundFallback;
          }}
          alt=""
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#150608] via-[#24060B] to-[#150608]" />
      </div>

      {/* Floating Rose Petals Animation Container */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/4 text-xl animate-bounce [animation-duration:4s]">🌸</div>
        <div className="absolute top-20 right-1/4 text-lg animate-bounce [animation-duration:5s] [animation-delay:1s]">🌺</div>
        <div className="absolute top-1/2 left-8 text-2xl animate-bounce [animation-duration:6s] [animation-delay:2s]">🌸</div>
        <div className="absolute top-2/3 right-8 text-xl animate-bounce [animation-duration:4.5s] [animation-delay:1.5s]">🌺</div>
      </div>

      {/* Top Header */}
      <div className="relative z-20 max-w-[460px] mx-auto pt-4">
        <div className="inline-flex items-center space-x-2 text-xs font-royal-heading tracking-[0.25em] text-[#E7C76B] uppercase mb-2">
          <span>⚜</span>
          <span>The Grand Finale</span>
          <span>⚜</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-royal-title text-gold-shimmer leading-tight uppercase font-bold">
          And They Lived
          <br />
          Happily Ever After...
        </h2>

        <p className="mt-3 text-base sm:text-lg font-body-serif italic text-[#FFEAA7]/90 max-w-[340px] mx-auto leading-relaxed">
          &ldquo;Thank you for being part of our story and blessing our new beginnings.&rdquo;
        </p>
      </div>

      {/* BRIDE & GROOM TOGETHER IN REVERENT NAMASTE GESTURE */}
      <div className="relative z-20 max-w-[460px] mx-auto my-6 w-full">
        
        {/* Subtle Marionette crossbar above */}
        <div className="w-48 h-1.5 mx-auto rounded-full bg-[#8A561D] mb-4 opacity-75 shadow" />

        {/* United Kathputli Couple Frame */}
        <div className="relative flex justify-center items-end -space-x-8 px-4">
          
          {/* Groom Kathputli */}
          <div className="w-44 sm:w-52 h-72 sm:h-80 relative transform -rotate-1 animate-puppet-sway">
            <img
              src={weddingData.assets.groom}
              onError={(e) => {
                (e.target as HTMLImageElement).src = weddingData.assets.groomFallback;
              }}
              alt="Groom Prabhakar welcoming with folded hands"
              className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bride Kathputli */}
          <div className="w-44 sm:w-52 h-72 sm:h-80 relative transform rotate-1 animate-puppet-sway [animation-delay:1s]">
            <img
              src={weddingData.assets.bride}
              onError={(e) => {
                (e.target as HTMLImageElement).src = weddingData.assets.brideFallback;
              }}
              alt="Bride Sapna welcoming with folded hands"
              className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>

        {/* Royal Namaste Plaque */}
        <div className="mt-3 inline-flex items-center space-x-2 px-5 py-1.5 rounded-full bg-[#3B070E]/90 border border-[#C79A3B] shadow-xl backdrop-blur-sm">
          <span className="text-xs text-[#FFEAA7]">🙏</span>
          <span className="text-xs font-royal-heading tracking-[0.25em] text-[#FFEAA7] uppercase font-semibold">
            Dhanyawad • Padharo Sa
          </span>
          <span className="text-xs text-[#FFEAA7]">🙏</span>
        </div>
      </div>

      {/* Action Buttons: Replay & Share */}
      <div className="relative z-20 max-w-[460px] mx-auto w-full space-y-3 pb-8">
        
        {/* Share Button */}
        <button
          onClick={handleShare}
          aria-label="Share Wedding Invitation"
          className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#8F1D2C] via-[#A82637] to-[#8F1D2C] text-[#FFF7D6] font-royal-heading text-xs tracking-widest uppercase font-semibold shadow-lg hover:brightness-110 active:scale-95 transition-all border border-[#E7C76B] flex items-center justify-center space-x-2"
        >
          <Share2 className="w-4 h-4 text-[#FFEAA7]" />
          <span>{copiedLink ? 'Invitation Link Copied!' : 'Share Invitation with Family'}</span>
        </button>

        {/* Replay Button */}
        <button
          onClick={onReplay}
          aria-label="Replay opening curtain animation"
          className="w-full py-3 px-6 rounded-full bg-[#200408]/80 text-[#E7C76B] hover:text-[#FFF7D6] font-royal-heading text-xs tracking-widest uppercase font-semibold transition-all border border-[#C79A3B]/40 hover:border-[#E7C76B] flex items-center justify-center space-x-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay Royal Invitation</span>
        </button>

        {/* Footer Credit & Traditional Blessing */}
        <div className="pt-6 text-center">
          <p className="text-[11px] text-[#F4E5C7]/60 font-body-serif tracking-wider">
            {weddingData.groom} & {weddingData.bride} • {weddingData.displayDate} • Jaipur, Rajasthan
          </p>
        </div>

      </div>

    </section>
  );
};
