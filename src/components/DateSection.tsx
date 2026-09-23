import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export const DateSection: React.FC = () => {
  // Parse date components from displayDate or config
  const dateParts = weddingData.displayDate.split(' ');
  const day = dateParts[0] || '23';
  const month = dateParts[1] || 'APRIL';
  const year = dateParts[2] || '2027';

  const handleAddToCalendar = () => {
    // Generate Google Calendar Link
    const startTime = '20270423T130000Z'; // 18:30 IST is 13:00 UTC
    const endTime = '20270423T200000Z';
    const title = encodeURIComponent(`The Royal Vivah: ${weddingData.groom} & ${weddingData.bride}`);
    const details = encodeURIComponent(
      `Celebrating the royal wedding of ${weddingData.groomFullName} and ${weddingData.brideFullName} at ${weddingData.venueName}, Jaipur.`
    );
    const location = encodeURIComponent(`${weddingData.venueName}, ${weddingData.address}`);

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="date" className="relative w-full py-16 px-4">
      <div className="max-w-[460px] mx-auto text-center">
        
        {/* Ornate Rajputana Astronomical Calendar Plaque */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#FAF4E6] to-[#F1E0C0] text-[#2C1810] p-6 sm:p-8 shadow-2xl border-4 border-[#C79A3B] overflow-hidden">
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-2 left-2 text-[#8F1D2C] text-sm">✦</div>
          <div className="absolute top-2 right-2 text-[#8F1D2C] text-sm">✦</div>
          <div className="absolute bottom-2 left-2 text-[#8F1D2C] text-sm">✦</div>
          <div className="absolute bottom-2 right-2 text-[#8F1D2C] text-sm">✦</div>

          <div className="inline-flex items-center space-x-2 text-xs font-royal-heading tracking-[0.25em] text-[#8F1D2C] uppercase font-semibold">
            <span>⚜</span>
            <span>Auspicious Muhurat</span>
            <span>⚜</span>
          </div>

          <h3 className="mt-1 text-base font-royal-heading uppercase tracking-widest text-[#5A0F18]">
            Save The Sacred Date
          </h3>

          {/* GRAND DATE DISPLAY */}
          <div className="my-6 py-4 px-6 rounded-2xl bg-[#FFFDF8] border border-[#C79A3B]/60 shadow-inner flex flex-col items-center">
            <span className="text-xs uppercase font-royal-heading tracking-[0.3em] text-[#8F1D2C] font-semibold">
              {weddingData.displayDay}
            </span>

            {/* Giant Elegant Day Number */}
            <span className="text-7xl sm:text-8xl font-royal-title text-[#8F1D2C] leading-none my-1 tracking-tight drop-shadow-sm font-bold">
              {day}
            </span>

            {/* Month & Year Banner */}
            <span className="text-2xl sm:text-3xl font-royal-heading tracking-[0.25em] text-[#5A0F18] uppercase font-bold">
              {month}
            </span>
            <span className="text-lg font-royal-title tracking-[0.3em] text-[#8F1D2C] font-medium mt-0.5">
              {year}
            </span>
          </div>

          {/* Muhurat & Vedic Tithi */}
          <div className="space-y-2 text-xs sm:text-sm font-body-serif text-[#422518]">
            <div className="flex items-center justify-center space-x-2 text-[#7A1320] font-semibold">
              <Clock className="w-4 h-4 text-[#8F1D2C]" />
              <span>{weddingData.muhuratTime}</span>
            </div>
            <p className="text-[12px] italic text-[#633A11]">
              Tithi: {weddingData.tithi}
            </p>
          </div>

          {/* Add to Calendar Action Button */}
          <div className="mt-6 pt-4 border-t border-[#C79A3B]/40">
            <button
              onClick={handleAddToCalendar}
              aria-label="Add wedding date to Google Calendar"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8F1D2C] via-[#A82637] to-[#8F1D2C] text-[#FFF7D6] font-royal-heading text-xs tracking-widest uppercase font-semibold shadow-lg hover:brightness-110 active:scale-95 transition-all border border-[#E7C76B]"
            >
              <Calendar className="w-4 h-4 text-[#FFEAA7]" />
              <span>Add to Calendar</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.weddingIsoDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="relative w-full py-14 px-4 bg-gradient-to-b from-transparent via-[#2A060C]/60 to-transparent">
      <div className="max-w-[460px] mx-auto text-center">
        
        {/* Header */}
        <div className="inline-flex items-center space-x-2 text-xs font-royal-heading tracking-[0.25em] text-[#E7C76B] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#E7C76B]" />
          <span>The Royal Countdown</span>
          <Sparkles className="w-3.5 h-3.5 text-[#E7C76B]" />
        </div>
        
        <h3 className="mt-2 text-2xl sm:text-3xl font-royal-title text-gold-shimmer">
          Counting Down The Moments
        </h3>
        <p className="text-xs text-[#F4E5C7]/75 font-body-serif italic mt-1">
          Until two souls unite under the sacred wedding mandap
        </p>

        {/* Real-time Clock Dials */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-8">
          
          {/* Days */}
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-[#3E0911] to-[#25050A] border border-[#C79A3B]/50 shadow-xl">
            <span className="text-3xl sm:text-4xl font-royal-title text-[#FFEAA7] font-bold leading-none">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-royal-heading tracking-widest text-[#E7C76B] uppercase mt-2">
              Days
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-[#3E0911] to-[#25050A] border border-[#C79A3B]/50 shadow-xl">
            <span className="text-3xl sm:text-4xl font-royal-title text-[#FFEAA7] font-bold leading-none">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-royal-heading tracking-widest text-[#E7C76B] uppercase mt-2">
              Hours
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-[#3E0911] to-[#25050A] border border-[#C79A3B]/50 shadow-xl">
            <span className="text-3xl sm:text-4xl font-royal-title text-[#FFEAA7] font-bold leading-none">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-royal-heading tracking-widest text-[#E7C76B] uppercase mt-2">
              Minutes
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-[#3E0911] to-[#25050A] border border-[#C79A3B]/50 shadow-xl">
            <span className="text-3xl sm:text-4xl font-royal-title text-gold-shimmer font-bold leading-none">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-royal-heading tracking-widest text-[#E7C76B] uppercase mt-2">
              Seconds
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
