import React, { useState, useMemo } from 'react';
import { WhatsappLogo, CalendarBlank, UsersThree, Bed } from '@phosphor-icons/react';
import { business, helpers, rooms } from '../data/siteData';

const todayIso = () => {
  const d = new Date();
  return d.toISOString().slice(0, 10);
};
const tomorrowIso = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
};

export default function ReservationBar({ variant = 'hero' }) {
  const [checkIn, setCheckIn] = useState(todayIso());
  const [checkOut, setCheckOut] = useState(tomorrowIso());
  const [guests, setGuests] = useState(2);
  const [roomSlug, setRoomSlug] = useState('any');

  const roomLabel = useMemo(() => {
    if (roomSlug === 'any') return 'Any available room';
    return rooms.find((r) => r.slug === roomSlug)?.name || 'Any available room';
  }, [roomSlug]);

  const msg = `Hello Brompton — I'd like to enquire about a stay.

Check-in:  ${checkIn}
Check-out: ${checkOut}
Guests:    ${guests}
Room:      ${roomLabel}

Could you confirm availability and quote the total? Thank you.`;

  const waUrl = helpers.waHref(msg);

  const isDark = variant === 'hero';

  const baseInput = isDark
    ? 'bg-sand-50/95 text-ink-800 border-sand-50/0 focus:border-mahogany-400'
    : 'bg-sand-50 text-ink-800 border-ink-100 focus:border-mahogany-400';

  return (
    <div
      className={`${
        isDark
          ? 'bg-ink-900/75 backdrop-blur-md border border-sand-50/10'
          : 'bg-sand-50 border border-ink-100 shadow-[0_8px_32px_rgba(0,0,0,0.04)]'
      } p-5 sm:p-6 max-w-3xl`}
    >
      <p
        className={`font-serif italic text-sm mb-4 ${
          isDark ? 'text-sand-200/90' : 'text-ink-500'
        }`}
      >
        Check availability
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <label className="flex flex-col gap-1.5">
          <span
            className={`text-[10px] tracking-[0.18em] uppercase font-medium ${
              isDark ? 'text-sand-200/70' : 'text-ink-400'
            }`}
          >
            Check in
          </span>
          <div className="relative">
            <CalendarBlank
              size={14}
              className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${
                isDark ? 'text-ink-500' : 'text-ink-400'
              }`}
            />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={todayIso()}
              className={`w-full h-11 pl-8 pr-3 text-sm border outline-none transition-colors ${baseInput}`}
            />
          </div>
        </label>
        <label className="flex flex-col gap-1.5">
          <span
            className={`text-[10px] tracking-[0.18em] uppercase font-medium ${
              isDark ? 'text-sand-200/70' : 'text-ink-400'
            }`}
          >
            Check out
          </span>
          <div className="relative">
            <CalendarBlank
              size={14}
              className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${
                isDark ? 'text-ink-500' : 'text-ink-400'
              }`}
            />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn}
              className={`w-full h-11 pl-8 pr-3 text-sm border outline-none transition-colors ${baseInput}`}
            />
          </div>
        </label>
        <label className="flex flex-col gap-1.5">
          <span
            className={`text-[10px] tracking-[0.18em] uppercase font-medium ${
              isDark ? 'text-sand-200/70' : 'text-ink-400'
            }`}
          >
            Guests
          </span>
          <div className="relative">
            <UsersThree
              size={14}
              className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${
                isDark ? 'text-ink-500' : 'text-ink-400'
              }`}
            />
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className={`w-full h-11 pl-8 pr-3 text-sm border outline-none transition-colors appearance-none ${baseInput}`}
            >
              <option value={1}>1 guest</option>
              <option value={2}>2 guests</option>
              <option value={3}>3 guests</option>
              <option value={4}>4 guests</option>
            </select>
          </div>
        </label>
        <label className="flex flex-col gap-1.5">
          <span
            className={`text-[10px] tracking-[0.18em] uppercase font-medium ${
              isDark ? 'text-sand-200/70' : 'text-ink-400'
            }`}
          >
            Room preference
          </span>
          <div className="relative">
            <Bed
              size={14}
              className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${
                isDark ? 'text-ink-500' : 'text-ink-400'
              }`}
            />
            <select
              value={roomSlug}
              onChange={(e) => setRoomSlug(e.target.value)}
              className={`w-full h-11 pl-8 pr-3 text-sm border outline-none transition-colors appearance-none ${baseInput}`}
            >
              <option value="any">Any available</option>
              {rooms.map((r) => (
                <option key={r.slug} value={r.slug}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-mahogany-400 hover:bg-mahogany-500 text-sand-50 py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors"
      >
        <WhatsappLogo size={16} weight="fill" />
        Check availability on WhatsApp
      </a>
      <p
        className={`mt-3 text-center font-serif italic text-xs ${
          isDark ? 'text-sand-200/60' : 'text-ink-400'
        }`}
      >
        Or call the house directly on {business.phone}
      </p>
    </div>
  );
}
