import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CaretRight } from '@phosphor-icons/react';
import { rooms } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import RoomCard from '../components/RoomCard';

export default function Rooms() {
  return (
    <PageTransition>
      <SEO
        title="Rooms & Rates — Brompton Guest House, Harare"
        description="Six room types at Brompton Guest House — from the Executive Suite to the Long-stay Studio. Canopy beds, ensuite baths, fibre WiFi. Breakfast included."
      />

      {/* Page hero */}
      <section className="relative bg-sand-100 pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-ink-400 mb-7">
            <Link to="/" className="hover:text-mahogany-400">Home</Link>
            <CaretRight size={12} />
            <span className="text-ink-700">Rooms & Suites</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-4">Rooms & rates</p>
            <h1
              className="font-display text-ink-800 leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}
            >
              Six rooms, each with its own character.
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-ink-600 mt-6 sm:mt-8 max-w-3xl leading-relaxed text-pretty">
              Every room at Brompton has been put together by hand — mahogany headboards, linen sheets, brass lanterns. What they share is quiet. What they differ in is size, the side of the garden they look onto, and the way the light falls in the morning.
            </p>
          </div>
        </div>
      </section>

      {/* The full list */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {rooms.map((room, i) => (
              <SectionReveal key={room.slug} delay={i * 90}>
                <RoomCard room={room} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* A small CTA */}
      <section className="relative pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <p className="font-serif italic text-mahogany-400 text-lg mb-3">A note on booking</p>
          <h2 className="font-display text-ink-800 text-3xl sm:text-4xl leading-tight text-balance">
            Reserve direct for the best rate — and a welcome gin on arrival.
          </h2>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/reservations"
              className="inline-flex items-center justify-center gap-2 bg-ink-800 text-sand-50 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-mahogany-400 transition-colors"
            >
              Check availability
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-ink-800 text-ink-800 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-ink-800 hover:text-sand-50 transition-colors"
            >
              Ask a question
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
