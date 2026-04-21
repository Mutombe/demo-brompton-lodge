import React from 'react';
import {
  ForkKnife, WifiHigh, Coffee, Car, Leaf, Flower, Wine, Key,
  Bed, Users, Clock, Phone, MapPin, Heart, Sun, Sparkle,
} from '@phosphor-icons/react';

const ICONS = {
  ForkKnife, WifiHigh, Coffee, Car, Leaf, Flower, Wine, Key,
  Bed, Users, Clock, Phone, MapPin, Heart, Sun, Sparkle,
};

export default function AmenityCard({ icon, title, body }) {
  const Icon = ICONS[icon] || Sparkle;
  return (
    <div className="group relative p-6 sm:p-7 bg-sand-50 border border-ink-100 hover:border-mahogany-400 transition-colors duration-500">
      <div className="h-11 w-11 flex items-center justify-center text-mahogany-400 mb-5 border border-mahogany-400/30 group-hover:bg-mahogany-400 group-hover:text-sand-50 transition-colors duration-400">
        <Icon size={20} weight="light" />
      </div>
      <h3 className="font-display text-xl text-ink-800 mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-ink-500 leading-relaxed text-pretty">{body}</p>
    </div>
  );
}
