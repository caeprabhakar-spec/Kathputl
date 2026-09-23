import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import { CheckCircle2, Heart, Send, Sparkles, UserCheck } from 'lucide-react';

export const RSVPSection: React.FC = () => {
  const [attendance, setAttendance] = useState<'attending' | 'wishes'>('attending');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [guestsCount, setGuestsCount] = useState('2');
  const [eventsSelected, setEventsSelected] = useState<string[]>(['wedding', 'sangeet']);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if RSVP was previously submitted in this browser
    const existing = localStorage.getItem('kathputli_wedding_rsvp');
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        setName(parsed.name || '');
        setSubmitted(true);
      } catch {
        // Ignore
      }
    }
  }, []);

  const handleEventToggle = (eventId: string) => {
    setEventsSelected((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const rsvpData = {
        name,
        contact,
        attendance,
        guestsCount: attendance === 'attending' ? guestsCount : '0',
        events: attendance === 'attending' ? eventsSelected : [],
        message,
        timestamp: new Date().toISOString(),
      };

      try {
        localStorage.setItem('kathputli_wedding_rsvp', JSON.stringify(rsvpData));
      } catch {
        // Ignore storage error
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="rsvp" className="relative w-full py-16 px-4">
      <div className="max-w-[480px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-royal-heading tracking-[0.25em] text-[#E7C76B] uppercase">
            <span>⚜</span>
            <span>Join The Festivities</span>
            <span>⚜</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-royal-title text-gold-shimmer">
            Will You Join Us?
          </h2>
          <p className="mt-1 text-sm font-body-serif italic text-[#F4E5C7]/80">
            Kindly confirm your auspicious presence by 1st April 2027
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C79A3B] to-transparent mx-auto mt-4" />
        </div>

        {/* RSVP Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#3E0911] to-[#25050A] border-4 border-[#C79A3B] p-6 sm:p-8 shadow-2xl overflow-hidden">
          
          {submitted ? (
            /* Submission Success State */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#186835] border-2 border-[#E7C76B] flex items-center justify-center text-3xl shadow-xl animate-bounce">
                🌸
              </div>

              <h3 className="text-2xl font-royal-title text-[#FFEAA7]">
                Dhanyawad, {name}!
              </h3>

              <div className="px-4 py-3 rounded-xl bg-[#1C0508]/80 border border-[#C79A3B]/40">
                <p className="text-sm font-body-serif text-[#F4E5C7] leading-relaxed">
                  Your heartfelt response has been lovingly recorded. We cannot wait to celebrate with you in Jaipur!
                </p>
              </div>

              <div className="pt-2 text-xs text-[#E7C76B] font-royal-heading tracking-widest uppercase">
                ✦ Padharo Mhare Desh ✦
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-royal-heading text-[#C79A3B] underline hover:text-[#FFEAA7]"
              >
                Update your response
              </button>
            </div>
          ) : (
            /* RSVP Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Toggle: Attending vs Wishes */}
              <div className="grid grid-cols-2 gap-2 p-1.5 rounded-full bg-[#1B0307] border border-[#C79A3B]/50">
                <button
                  type="button"
                  onClick={() => setAttendance('attending')}
                  className={`py-2.5 px-3 rounded-full text-xs font-royal-heading tracking-wider uppercase font-semibold transition-all ${
                    attendance === 'attending'
                      ? 'bg-gradient-to-r from-[#8F1D2C] to-[#B81424] text-[#FFF7D6] shadow-md border border-[#E7C76B]'
                      : 'text-[#F4E5C7]/70 hover:text-[#FFF]'
                  }`}
                >
                  ✓ Yes, I'll Be There
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('wishes')}
                  className={`py-2.5 px-3 rounded-full text-xs font-royal-heading tracking-wider uppercase font-semibold transition-all ${
                    attendance === 'wishes'
                      ? 'bg-gradient-to-r from-[#8F1D2C] to-[#B81424] text-[#FFF7D6] shadow-md border border-[#E7C76B]'
                      : 'text-[#F4E5C7]/70 hover:text-[#FFF]'
                  }`}
                >
                  💌 Send Wishes
                </button>
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-xs font-royal-heading tracking-widest text-[#E7C76B] uppercase mb-1.5">
                  Your Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maharaja Vikramaditya / Guest Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#1D0408] border border-[#C79A3B]/50 text-[#F4E5C7] placeholder-[#F4E5C7]/40 text-sm focus:outline-none focus:border-[#E7C76B] transition-colors"
                />
              </div>

              {/* Contact Field */}
              <div>
                <label className="block text-xs font-royal-heading tracking-widest text-[#E7C76B] uppercase mb-1.5">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-[#1D0408] border border-[#C79A3B]/50 text-[#F4E5C7] placeholder-[#F4E5C7]/40 text-sm focus:outline-none focus:border-[#E7C76B] transition-colors"
                />
              </div>

              {attendance === 'attending' && (
                <>
                  {/* Number of Guests */}
                  <div>
                    <label className="block text-xs font-royal-heading tracking-widest text-[#E7C76B] uppercase mb-1.5">
                      Number of Guests Attending
                    </label>
                    <select
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1D0408] border border-[#C79A3B]/50 text-[#F4E5C7] text-sm focus:outline-none focus:border-[#E7C76B]"
                    >
                      <option value="1">1 Guest (Just Me)</option>
                      <option value="2">2 Guests (Couple / Pair)</option>
                      <option value="3">3 Guests (With Family)</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests (Royal Contingent)</option>
                    </select>
                  </div>

                  {/* Events Attending Checkboxes */}
                  <div>
                    <label className="block text-xs font-royal-heading tracking-widest text-[#E7C76B] uppercase mb-2">
                      Which Celebrations Will You Attend?
                    </label>
                    <div className="space-y-2 text-xs font-body-serif text-[#F4E5C7]">
                      {weddingData.events.map((evt) => (
                        <label
                          key={evt.id}
                          className="flex items-center space-x-3 p-2 rounded-lg bg-[#180306] border border-[#C79A3B]/30 cursor-pointer hover:border-[#E7C76B]/60 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={eventsSelected.includes(evt.id)}
                            onChange={() => handleEventToggle(evt.id)}
                            className="w-4 h-4 accent-[#8F1D2C] rounded"
                          />
                          <span className="font-semibold text-[#FFEAA7]">{evt.title}</span>
                          <span className="text-[11px] text-[#F4E5C7]/60 ml-auto">({evt.date.split(',')[0]})</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Blessings / Note to Couple */}
              <div>
                <label className="block text-xs font-royal-heading tracking-widest text-[#E7C76B] uppercase mb-1.5">
                  Blessings & Wishes For The Couple
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave your warm wishes and blessings for Prabhakar & Sapna..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1D0408] border border-[#C79A3B]/50 text-[#F4E5C7] placeholder-[#F4E5C7]/40 text-sm focus:outline-none focus:border-[#E7C76B] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#8F1D2C] via-[#B81424] to-[#8F1D2C] text-[#FFF7D6] font-royal-heading text-sm tracking-widest uppercase font-bold shadow-xl hover:brightness-110 active:scale-95 transition-all border-2 border-[#E7C76B] flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Recording Your Blessing...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#FFEAA7]" />
                    <span>Confirm Response</span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
