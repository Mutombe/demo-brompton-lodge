import React from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import { business } from '../data/siteData';

export default function FloatingWhatsApp() {
  const number = (business.whatsapp || business.phone || '').replace(/[^0-9]/g, '');
  const href = `https://wa.me/${number}?text=Hi%20Brompton%20Lodge%2C%20I%27d%20like%20to%20enquire%20about%20a%20stay.`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with reception on WhatsApp"
      className="group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <span
          className="h-14 w-14 rounded-full"
          style={{
            backgroundColor: '#25D366',
            opacity: 0.45,
            animation: 'brompton-wa-pulse 2.2s ease-out infinite',
          }}
        />
      </span>

      {/* Desktop hover label */}
      <span className="hidden md:flex mr-3 items-center h-11 px-4 bg-ink-900 text-sand-50 text-[12px] tracking-[0.08em] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap font-serif italic">
        Chat with reception
      </span>

      {/* 56px circle button */}
      <span
        className="relative h-14 w-14 rounded-full flex items-center justify-center shadow-[0_10px_32px_rgba(37,211,102,0.45)] transition-transform duration-300 group-hover:scale-[1.06]"
        style={{ backgroundColor: '#25D366' }}
      >
        <WhatsappLogo size={28} weight="fill" color="#FFFFFF" />
      </span>

      <style>{`
        @keyframes brompton-wa-pulse {
          0% { transform: scale(1); opacity: 0.55; }
          70% { transform: scale(1.65); opacity: 0; }
          100% { transform: scale(1.65); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
