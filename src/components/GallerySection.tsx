import React from 'react';
import { weddingData, GalleryPhoto } from '../data/weddingData';
import { Camera, MapPin, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="relative w-full py-16 px-4">
      <div className="max-w-[480px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-royal-heading tracking-[0.25em] text-[#E7C76B] uppercase">
            <span>⚜</span>
            <span>Royal Memories</span>
            <span>⚜</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-royal-title text-gold-shimmer">
            Moments In Time
          </h2>
          <p className="mt-1 text-sm font-body-serif italic text-[#F4E5C7]/80">
            Glimpses of love captured under royal skies
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C79A3B] to-transparent mx-auto mt-4" />
        </div>

        {/* Royal Jharokha Carved Photo Frames Grid */}
        <div className="space-y-8">
          {weddingData.gallery.map((photo: GalleryPhoto, index: number) => (
            <div
              key={photo.id}
              className="relative rounded-2xl bg-gradient-to-b from-[#3E0911] to-[#25050A] border-4 border-[#C79A3B] p-3 sm:p-4 shadow-2xl overflow-hidden"
            >
              {/* Top Ornate Jharokha Arch Accent */}
              <div className="flex items-center justify-between border-b border-[#C79A3B]/40 pb-2 mb-3 text-xs font-royal-heading text-[#E7C76B]">
                <div className="flex items-center space-x-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#E7C76B]" />
                  <span>Memory 0{index + 1}</span>
                </div>
                <div className="flex items-center space-x-1 text-[11px] text-[#FFEAA7]/80">
                  <MapPin className="w-3 h-3 text-[#E7C76B]" />
                  <span>{photo.location}</span>
                </div>
              </div>

              {/* Photo Frame Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#180407] border border-[#E7C76B]/60 shadow-inner">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Royal Caption */}
              <div className="mt-3 px-2 text-center">
                <p className="text-sm font-body-serif italic text-[#FFEAA7]">
                  &ldquo;{photo.caption}&rdquo;
                </p>
              </div>

              {/* Bottom Gold Arch Ribbon */}
              <div className="mt-2 text-center text-[#C79A3B]/50 text-xs">
                ✦ 𑁍 ✦
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
