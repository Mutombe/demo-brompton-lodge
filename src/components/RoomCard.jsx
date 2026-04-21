import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users, ArrowUpRight } from '@phosphor-icons/react';

export default function RoomCard({ room, index = 0 }) {
  const img = room.images?.[0];
  return (
    <Link
      to={`/rooms/${room.slug}`}
      className="block group"
    >
      <article className="relative">
        <div className="relative overflow-hidden bg-ink-100 aspect-[4/5]">
          <img
            src={img}
            alt={room.name}
            onError={(e) => (e.currentTarget.style.display = 'none')}
            className="w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            loading={index < 2 ? 'eager' : 'lazy'}
          />
          {/* Soft bottom fade, for the price */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900/55 to-transparent pointer-events-none" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-sand-50">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl leading-none">${room.pricePerNight}</span>
              <span className="font-serif italic text-xs opacity-80">/ night</span>
            </div>
            <span className="text-[10px] tracking-[0.18em] uppercase opacity-90">
              {room.bedType}
            </span>
          </div>
        </div>
        <div className="pt-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl text-ink-800 leading-tight">{room.name}</h3>
            <ArrowUpRight
              size={20}
              className="text-ink-400 group-hover:text-mahogany-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0 mt-1"
            />
          </div>
          <p className="mt-1.5 font-serif italic text-ink-500 text-[15px]">
            {room.subtitle}
          </p>
          <div className="mt-4 flex items-center gap-5 text-xs text-ink-500 tracking-wide">
            <span className="inline-flex items-center gap-1.5">
              <Bed size={14} /> {room.bedType}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users size={14} /> Sleeps {room.sleeps}
            </span>
            <span>{room.sizeSqm} m²</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
