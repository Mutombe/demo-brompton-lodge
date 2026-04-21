import React from 'react';
import { Link } from 'react-router-dom';
import { CaretRight, Star } from '@phosphor-icons/react';
import { business, rooms } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import ReservationBar from '../components/ReservationBar';

export default function Reservations() {
  return (
    <PageTransition>
      <SEO
        title="Reserve a Room — Brompton Guest House, Harare"
        description="Reserve a room direct at Brompton Guest House. Eight rooms from $70/night, breakfast included, complimentary airport pick-up on stays over two nights."
      />

      <section className="relative bg-sand-100 pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-ink-400 mb-7">
            <Link to="/" className="hover:text-mahogany-400">Home</Link>
            <CaretRight size={12} />
            <span className="text-ink-700">Reservations</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-4">Reservations</p>
              <h1 className="font-display text-ink-800 text-5xl sm:text-6xl lg:text-[76px] leading-[0.98] tracking-tight text-balance">
                Reserve direct. Arrive with a gin waiting.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-3">
              <p className="font-serif italic text-lg text-ink-600 leading-relaxed text-pretty">
                Fill in the form below, and we'll reply — usually within the hour during office hours — to confirm availability, rate, and any special requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation bar */}
      <section className="relative py-14 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal>
            <ReservationBar variant="light" />
          </SectionReveal>
        </div>
      </section>

      {/* Benefits of direct booking */}
      <section className="relative py-16 sm:py-20 bg-sand-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">Why book direct</p>
            <h2 className="font-display text-ink-800 text-3xl sm:text-4xl leading-[1.04] text-balance">
              A few small benefits for reserving with us.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              { t: 'Best available rate', b: 'No third-party markup. The rate you see is the rate you pay.' },
              { t: 'Complimentary airport transfer', b: 'Included on stays of two nights or more.' },
              { t: 'A welcome gin on arrival', b: "A small pour to begin the stay — compliments of the house." },
              { t: 'Flexible cancellation', b: 'Cancel up to 48 hours before arrival, at no charge.' },
            ].map((it, i) => (
              <SectionReveal key={it.t} delay={i * 80}>
                <div className="h-full p-6 bg-sand-50 border border-ink-100">
                  <Star size={18} weight="fill" className="text-mahogany-400 mb-4" />
                  <h3 className="font-display text-lg text-ink-800 leading-tight mb-2">{it.t}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed text-pretty">{it.b}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rates quick reference */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="text-center mb-10">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">Rates at a glance</p>
            <h2 className="font-display text-ink-800 text-3xl sm:text-4xl leading-[1.04]">
              Room types & nightly rates
            </h2>
            <p className="font-serif italic text-ink-500 mt-3 text-sm">All rates include breakfast for the occupants of the room.</p>
          </SectionReveal>

          <div className="border-t border-ink-200">
            {rooms.map((r) => (
              <Link
                key={r.slug}
                to={`/rooms/${r.slug}`}
                className="block group"
              >
                <div className="flex items-center justify-between gap-6 py-6 border-b border-ink-200 group-hover:bg-sand-100 transition-colors px-2">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl sm:text-2xl text-ink-800 truncate">{r.name}</h3>
                    <p className="font-serif italic text-ink-500 text-sm truncate">{r.subtitle}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-display text-2xl text-ink-800">${r.pricePerNight}</p>
                    <p className="text-[11px] tracking-[0.16em] uppercase text-ink-400">per night</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
