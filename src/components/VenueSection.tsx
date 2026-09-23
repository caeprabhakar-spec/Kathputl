import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin, Navigation, Phone, Check, Copy } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${weddingData.venueName}, ${weddingData.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="relative w-full py-16 px-4">
      <div className="max-w-[480px] mx-auto text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center space-x-2 text-xs font-royal-heading tracking-[0.25em] text-[#E7C76B] uppercase mb-2">
          <span>⚜</span>
          <span>The Royal Destination</span>
          <span>⚜</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-royal-title text-gold-shimmer">
          Venue & Directions
        </h2>
        <p className="mt-1 text-sm font-body-serif italic text-[#F4E5C7]/80">
          Where regal Rajasthani hospitality meets timeless grandeur
        </p>
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C79A3B] to-transparent mx-auto mt-4 mb-8" />

        {/* Grand Haveli / Venue Card */}
        <div className="relative rounded-3xl bg-[#FAF4E6] text-[#2C1810] p-6 sm:p-8 shadow-2xl border-4 border-[#C79A3B] overflow-hidden text-center">
          
          {/* Top Border Accent */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#8F1D2C] via-[#C79A3B] to-[#8F1D2C]" />

          {/* Palace Icon Badge */}
          <div className="w-14 h-14 mx-auto rounded-full bg-[#8F1D2C] border-2 border-[#E7C76B] flex items-center justify-center text-2xl shadow-md -mt-2 mb-3">
            🏰
          </div>

          <h3 className="text-2xl sm:text-3xl font-royal-title text-[#5A0F18] font-bold">
            {weddingData.venueName}
          </h3>
          <p className="text-xs uppercase font-royal-heading tracking-widest text-[#8F1D2C] font-semibold mt-0.5">
            {weddingData.venueSubtext}
          </p>

          {/* Full Address Block */}
          <div className="my-5 p-4 rounded-xl bg-[#FFFDF8] border border-[#C79A3B]/40 shadow-inner flex flex-col items-center">
            <MapPin className="w-5 h-5 text-[#8F1D2C] mb-1.5" />
            <p className="font-body-serif text-sm sm:text-base text-[#422518] leading-relaxed max-w-[320px]">
              {weddingData.address}
            </p>

            <button
              onClick={handleCopyAddress}
              aria-label="Copy venue address"
              className="mt-3 inline-flex items-center space-x-1.5 text-xs font-royal-heading text-[#8F1D2C] hover:text-[#5A0F18] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Address Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Full Address</span>
                </>
              )}
            </button>
          </div>

          {/* Distance & Travel Guide */}
          <div className="grid grid-cols-2 gap-2 text-left text-xs font-body-serif bg-[#F4E9D4] p-3 rounded-lg border border-[#C79A3B]/30 mb-6">
            <div>
              <span className="font-semibold text-[#5A0F18] block">✈ Jaipur Airport (JAI):</span>
              <span className="text-[#633A11]">~15 km / 25 mins drive</span>
            </div>
            <div>
              <span className="font-semibold text-[#5A0F18] block">🚆 Jaipur Railway Stn:</span>
              <span className="text-[#633A11]">~18 km / 35 mins drive</span>
            </div>
          </div>

          {/* LARGE GOOGLE MAPS BUTTON */}
          <a
            href={weddingData.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open wedding venue in Google Maps"
            className="w-full inline-flex items-center justify-center space-x-2 py-4 px-6 rounded-full bg-gradient-to-r from-[#8F1D2C] via-[#A82637] to-[#8F1D2C] text-[#FFF7D6] font-royal-heading text-sm tracking-widest uppercase font-bold shadow-xl hover:brightness-110 active:scale-95 transition-all border-2 border-[#E7C76B]"
          >
            <Navigation className="w-4 h-4 text-[#FFEAA7]" />
            <span>Open in Google Maps</span>
          </a>

        </div>

      </div>
    </section>
  );
};
