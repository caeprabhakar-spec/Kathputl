import React from 'react';
import { weddingData, WeddingEvent } from '../data/weddingData';
import { Calendar, Clock, MapPin, Sparkles, Shirt } from 'lucide-react';

export const EventCards: React.FC = () => {
  return (
    <section id="events" className="relative w-full py-16 px-4">
      <div className="max-w-[480px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-royal-heading tracking-[0.25em] text-[#E7C76B] uppercase">
            <span>⚜</span>
            <span>Utsav & Celebrations</span>
            <span>⚜</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-royal-title text-gold-shimmer">
            Wedding Itinerary
          </h2>
          <p className="mt-1 text-sm font-body-serif italic text-[#F4E5C7]/80">
            A vibrant symphony of music, colors, rituals, and puppetry
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C79A3B] to-transparent mx-auto mt-4" />
        </div>

        {/* List of Miniature Rajasthani Invitation Panels */}
        <div className="space-y-6">
          {weddingData.events.map((event: WeddingEvent, index: number) => (
            <div
              key={event.id}
              className="relative rounded-2xl bg-gradient-to-b from-[#3A080F] to-[#220409] border-2 border-[#C79A3B]/60 p-5 sm:p-6 shadow-2xl overflow-hidden hover:border-[#E7C76B] transition-all group"
            >
              {/* Marionette String Anchor Accent */}
              <div className="absolute top-0 right-6 w-3 h-3 rounded-full bg-[#C79A3B] border border-[#5A3206] shadow" />
              <div className="absolute top-0 right-7.5 w-[1px] h-6 bg-[#C79A3B]/50" />

              {/* Card Top Banner with Hindi title & Event Step */}
              <div className="flex items-center justify-between border-b border-[#C79A3B]/30 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-[#520914] border border-[#E7C76B] flex items-center justify-center text-[11px] font-royal-title text-[#FFEAA7]">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-folk tracking-widest text-[#E7C76B] font-semibold">
                    {event.hindiTitle}
                  </span>
                </div>
                
                {/* Decorative Bell / Lamp Tag */}
                <div className="flex items-center space-x-1 text-xs text-[#FFEAA7]">
                  <Sparkles className="w-3.5 h-3.5 text-[#E7C76B]" />
                  <span className="text-[10px] uppercase font-royal-heading tracking-widest text-[#E7C76B]">
                    Royal Pavilion
                  </span>
                </div>
              </div>

              {/* Event Title */}
              <h3 className="text-xl sm:text-2xl font-royal-title text-[#FFEAA7] group-hover:text-gold-shimmer transition-colors">
                {event.title}
              </h3>
              <p className="text-xs text-[#E7C76B]/90 font-body-serif italic -mt-0.5 mb-4">
                {event.subtitle}
              </p>

              {/* Date, Time & Venue Specs */}
              <div className="space-y-2.5 text-xs sm:text-sm font-body-serif text-[#F4E5C7]/90 bg-[#1A0307]/70 p-3.5 rounded-xl border border-[#C79A3B]/20">
                <div className="flex items-start space-x-2.5">
                  <Calendar className="w-4 h-4 text-[#E7C76B] flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-[#FFFDF5]">{event.date}</span>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-[#E7C76B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#FFEAA7]">{event.time}</span>
                </div>

                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#E7C76B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F4E5C7]/85">{event.venue}</span>
                </div>

                {event.dressCode && (
                  <div className="flex items-start space-x-2.5 pt-1 border-t border-[#C79A3B]/20 text-[11px] text-[#FFEAA7]/90">
                    <Shirt className="w-3.5 h-3.5 text-[#E7C76B] flex-shrink-0 mt-0.5" />
                    <span>Attire: {event.dressCode}</span>
                  </div>
                )}
              </div>

              {/* Narrative description */}
              <p className="mt-3.5 text-xs sm:text-sm font-body-serif text-[#F4E5C7]/80 leading-relaxed italic">
                {event.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
