import React from 'react';
import {
  ForkKnife, WifiHigh, Coffee, Car, Leaf, Flower, Wine, Key,
  Bed, Users, Clock, Phone, MapPin, Heart, Sun, Sparkle,
  WhatsappLogo,
} from '@phosphor-icons/react';
import { helpers } from '../data/siteData';

const ICONS = {
  ForkKnife, WifiHigh, Coffee, Car, Leaf, Flower, Wine, Key,
  Bed, Users, Clock, Phone, MapPin, Heart, Sun, Sparkle,
};

export default function AmenityCard({ icon, title, body }) {
  const Icon = ICONS[icon] || Sparkle;
  const waHref = helpers.waHref(
    `Hi Brompton, I'd like to enquire about a stay.`
  );

  return (
    <div className="group relative p-6 sm:p-7 bg-sand-50 border border-ink-100 hover:border-mahogany-400 transition-colors duration-500 flex flex-col">
      <div className="h-11 w-11 flex items-center justify-center text-mahogany-400 mb-5 border border-mahogany-400/30 group-hover:bg-mahogany-400 group-hover:text-sand-50 transition-colors duration-400">
        <Icon size={20} weight="light" />
      </div>
      <h3 className="font-display text-xl text-ink-800 mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-ink-500 leading-relaxed text-pretty flex-1">{body}</p>

      <div className="mt-5 pt-4 border-t border-ink-100 flex items-center justify-between gap-3">
        <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400">
          View the house
        </span>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire on WhatsApp"
          className="inline-flex items-center justify-center h-9 w-9 border border-ink-200 text-ink-700 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
        >
          <WhatsappLogo size={15} weight="fill" />
        </a>
      </div>
    </div>
  );
}
