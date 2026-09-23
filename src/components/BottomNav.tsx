import React, { useState, useEffect } from 'react';
import { Home, Calendar, MapPin, Send } from 'lucide-react';

interface BottomNavProps {
  onRSVPClick: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onRSVPClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show when scrolling up or at top, hide when scrolling down past 120px
      if (currentScrollY < 120) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 10) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Home', href: '#hero', icon: Home },
    { label: 'Events', href: '#events', icon: Calendar },
    { label: 'Venue', href: '#venue', icon: MapPin },
    { label: 'RSVP', href: '#rsvp', icon: Send, isSpecial: true },
  ];

  return (
    <nav
      aria-label="Wedding Invitation Quick Navigation"
      className={`fixed bottom-4 inset-x-0 z-40 max-w-[380px] mx-auto px-4 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-24'
      }`}
    >
      <div className="flex items-center justify-around py-2 px-3 rounded-full bg-[#2A060C]/90 backdrop-blur-md border border-[#C79A3B]/60 shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.label === 'RSVP') {
                  onRSVPClick();
                }
              }}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-full transition-all ${
                item.isSpecial
                  ? 'bg-gradient-to-r from-[#8F1D2C] to-[#B81424] text-[#FFEAA7] border border-[#E7C76B]/80 shadow-md font-semibold px-4'
                  : 'text-[#F4E5C7]/75 hover:text-[#FFEAA7]'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="text-[10px] font-royal-heading tracking-wider uppercase">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
