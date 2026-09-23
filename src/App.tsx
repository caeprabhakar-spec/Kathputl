import React, { useState } from 'react';
import { weddingData } from './data/weddingData';
import { OpeningScreen } from './components/OpeningScreen';
import { Hero } from './components/Hero';
import { WelcomeStory } from './components/WelcomeStory';
import { CoupleSection } from './components/CoupleSection';
import { DateSection, Countdown } from './components/DateSection';
import { EventCards } from './components/EventCards';
import { VenueSection } from './components/VenueSection';
import { GallerySection } from './components/GallerySection';
import { RSVPSection } from './components/RSVPSection';
import { BlessingsSection } from './components/BlessingsSection';
import { FinalScreen } from './components/FinalScreen';
import { BottomNav } from './components/BottomNav';
import { MusicButton } from './components/MusicButton';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [musicTrigger, setMusicTrigger] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setMusicTrigger(true);
  };

  const handleReplayInvitation = () => {
    setIsOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToRSVP = () => {
    const el = document.getElementById('rsvp');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#150608] text-[#F4E5C7] overflow-x-hidden">
      
      {/* DESKTOP LUXURY ROYAL PALACE BACKDROP WRAPPER */}
      <div className="fixed inset-0 pointer-events-none hidden md:block z-0 opacity-20">
        <div
          className="w-full h-full bg-cover bg-center filter blur-sm scale-105"
          style={{ backgroundImage: `url(${weddingData.assets.background})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120406] via-[#24060B]/70 to-[#120406]" />
      </div>

      {/* Decorative Hanging Toran & Brass Bells for Desktop Ambiance */}
      <div className="fixed top-0 inset-x-0 hidden lg:flex justify-between px-12 pointer-events-none z-10 text-2xl text-[#E7C76B] opacity-60">
        <span className="animate-bell-sway">🔔</span>
        <span className="animate-bell-sway [animation-delay:0.7s]">🔔</span>
      </div>

      {/* OPENING SCREEN (Closed Velvet Curtains & Tap to Open Seal) */}
      {!isOpened && (
        <OpeningScreen onOpen={handleOpenInvitation} />
      )}

      {/* MAIN INVITATION THEATRE STAGE (MOBILE-FIRST 360px - 520px) */}
      <main className="relative z-10 w-full max-w-[520px] mx-auto min-h-screen bg-[#1A070B] shadow-[0_0_60px_rgba(0,0,0,0.9)] border-x border-[#C79A3B]/30 flex flex-col">
        
        {/* Floating Controls: Music Toggle */}
        <MusicButton autoStartOnOpen={musicTrigger} />

        {/* 1. HERO SECTION: Couple Names, Puppet Crossbars & Welcoming Puppets */}
        <Hero />

        {/* 2. SECTION 1: WELCOME STORY SCROLL */}
        <WelcomeStory />

        {/* 3. SECTION 2: THE ROYAL COUPLE (Prabhakar & Sapna) */}
        <CoupleSection />

        {/* 4. SECTION 3: WEDDING DATE & MUHURAT */}
        <DateSection />

        {/* 5. SECTION 6: LIVE COUNTDOWN TIMER */}
        <Countdown />

        {/* 6. SECTION 4: UTSAV & EVENT ITINERARY (Haldi, Mehendi, Sangeet, Wedding, Reception) */}
        <EventCards />

        {/* 7. SECTION 5: PALACE VENUE & DIRECTIONS (The Oberoi Rajvilas) */}
        <VenueSection />

        {/* 8. SECTION 7: ROYAL MEMORIES GALLERY */}
        <GallerySection />

        {/* 9. SECTION 8: RSVP FORM */}
        <RSVPSection />

        {/* 10. SECTION 9: DIVINE BLESSINGS & SANSKRIT SHLOKA */}
        <BlessingsSection />

        {/* 11. SECTION 10: FINAL SCREEN (Happily Ever After & Replay) */}
        <FinalScreen onReplay={handleReplayInvitation} />

        {/* 12. FLOATING BOTTOM NAVIGATION */}
        {isOpened && (
          <BottomNav onRSVPClick={scrollToRSVP} />
        )}

      </main>

    </div>
  );
}
