import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Star, Quotes, MapPin,
  WhatsappLogo, ForkKnife, WifiHigh, Coffee, Leaf, Car, Key,
} from '@phosphor-icons/react';
import {
  hero, rooms, amenities, dining, story, reviews, experiences, business, helpers,
} from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import RoomCard from '../components/RoomCard';
import AmenityCard from '../components/AmenityCard';
import ReservationBar from '../components/ReservationBar';

export default function Home() {
  const featuredRooms = rooms.filter((r) => r.featured);
  const featuredAmenities = amenities.slice(0, 4);

  return (
    <PageTransition>
      <SEO
        title="Brompton Guest House — A Quiet Boutique Lodge in Harare | Zimbabwe"
        description="Brompton Guest House is a residential boutique lodge in Mount Pleasant, Harare. Canopy beds, garden breakfasts, and a warm welcome. Reserve direct."
      />

      {/* ============ HERO (full-bleed real photo) ============ */}
      <section className="relative h-[100svh] min-h-[640px] max-h-[900px] w-full overflow-hidden">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* A gentler scrim — photo is the voice */}
        <div className="absolute inset-0 bg-ink-900/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/70" />

        <div className="relative h-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 flex flex-col justify-end pb-14 sm:pb-16 pt-28">
          <div className="max-w-3xl">
            <p className="font-serif italic text-sand-200 text-base sm:text-lg tracking-wide mb-4 sm:mb-5 animate-fade-up">
              {hero.eyebrow}
            </p>
            <h1 className="font-display text-sand-50 text-[44px] sm:text-6xl lg:text-[80px] leading-[1.02] tracking-tight animate-fade-up" style={{ animationDelay: '120ms' }}>
              {hero.headlineTop}
              <br />
              {hero.headlineBottom}
            </h1>
            <p className="font-serif italic text-mahogany-200 mt-4 sm:mt-5 text-xl sm:text-2xl animate-fade-up" style={{ animationDelay: '240ms' }}>
              {hero.italic}
            </p>
            <p className="mt-7 sm:mt-8 text-sand-100/90 text-base sm:text-lg leading-relaxed max-w-2xl text-pretty animate-fade-up" style={{ animationDelay: '360ms' }}>
              {hero.sub}
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-fade-up" style={{ animationDelay: '480ms' }}>
              <Link
                to={hero.ctaPrimary.to}
                className="inline-flex items-center justify-center gap-2 bg-sand-50 text-ink-800 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-mahogany-400 hover:text-sand-50 transition-colors"
              >
                {hero.ctaPrimary.label}
                <ArrowRight size={14} />
              </Link>
              <a
                href={hero.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-sand-50 text-sand-50 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-sand-50 hover:text-ink-800 transition-colors"
              >
                <WhatsappLogo size={14} weight="fill" />
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RESERVATION BAR (floats over hero/intro seam) ============ */}
      <section className="relative -mt-10 sm:-mt-14 z-20 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <ReservationBar variant="hero" />
      </section>

      {/* ============ INTRO LINES ============ */}
      <section className="relative py-24 sm:py-32 lg:py-36 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">The house</p>
            <h2 className="font-display text-ink-800 text-4xl sm:text-5xl lg:text-[52px] leading-[1.05] text-balance">
              Eight rooms, a garden, and a long wooden breakfast table.
            </h2>
            <div className="hairline w-12 mt-8" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:pt-4">
            <p className="font-serif italic text-xl sm:text-2xl text-ink-700 leading-[1.5] text-pretty">
              There are larger hotels in Harare, and flashier ones. Brompton is neither. It is a small house in a quiet lane in Mount Pleasant — family-run since 2019 — where the emphasis is on the things that actually make a stay: a proper bed, a good breakfast, and a welcome that remembers your name.
            </p>
            <p className="mt-6 text-ink-500 text-[15px] sm:text-base leading-relaxed text-pretty">
              Rooms are handsome without being fussed over. Breakfast is generous and taken in the courtyard. The fibre is fast. The staff are the same faces you met last visit. It is not complicated — which is, we think, the point.
            </p>
          </div>
        </div>
      </section>

      {/* ============ ROOMS EDITORIAL ============ */}
      <section className="relative py-20 sm:py-28 bg-sand-100">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-16">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">Rooms & suites</p>
              <h2 className="font-display text-ink-800 text-4xl sm:text-5xl lg:text-[56px] leading-[1.04] text-balance max-w-2xl">
                Six ways to spend the night.
              </h2>
            </div>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink-700 hover:text-mahogany-400 transition-colors"
            >
              See all rooms
              <ArrowUpRight size={16} />
            </Link>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredRooms.map((room, i) => (
              <SectionReveal key={room.slug} delay={i * 120}>
                <RoomCard room={room} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DINING — FULL-BLEED SPLIT ============ */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <SectionReveal className="lg:col-span-6 order-2 lg:order-1">
              <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">Breakfast, briefly</p>
              <h2 className="font-display text-ink-800 text-4xl sm:text-5xl lg:text-[54px] leading-[1.04] text-balance">
                {dining.heading}
              </h2>
              <div className="hairline w-12 mt-7" />
              <p className="font-serif italic text-lg text-ink-600 leading-relaxed mt-7 text-pretty">
                {dining.sub}
              </p>
              <div className="mt-9 space-y-6">
                {dining.menu.map((section) => (
                  <div key={section.course}>
                    <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-2.5">
                      {section.course}
                    </p>
                    <ul className="space-y-1.5">
                      {section.items.map((it) => (
                        <li key={it} className="text-ink-700 text-[15px] leading-relaxed">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link
                to="/dining"
                className="inline-flex items-center gap-2 mt-10 text-[11px] tracking-[0.18em] uppercase text-ink-800 border-b border-ink-800 pb-1 hover:text-mahogany-400 hover:border-mahogany-400 transition-colors"
              >
                A fuller look at the table
                <ArrowRight size={14} />
              </Link>
            </SectionReveal>

            <SectionReveal delay={150} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-ink-100">
                <img
                  src={dining.image}
                  alt={dining.imageAlt}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 font-serif italic text-sm text-ink-400">
                The in-room tea & coffee tray, before the morning begins.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ============ AMENITIES GRID ============ */}
      <section className="relative py-20 sm:py-28 bg-ink-900 text-sand-100 overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="absolute top-0 right-0 w-[40%] max-w-[500px] aspect-square lantern-glow animate-gentle-float" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-300 mb-3">Small kindnesses</p>
            <h2 className="font-display text-sand-50 text-4xl sm:text-5xl lg:text-[54px] leading-[1.04] text-balance">
              The list is short — on purpose.
            </h2>
            <p className="font-serif italic text-sand-200/80 text-lg leading-relaxed mt-6 max-w-2xl text-pretty">
              We've left the spa and the gym and the fifty-seat conference room to other hotels. What we keep, we do properly.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {featuredAmenities.map((a, i) => (
              <SectionReveal key={a.title} delay={i * 90}>
                <AmenityCardDark {...a} />
              </SectionReveal>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/amenities"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-sand-50 border-b border-sand-50 pb-1 hover:text-mahogany-300 hover:border-mahogany-300 transition-colors"
            >
              Everything in the house
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ STORY — PORTRAIT SIDE BY SIDE ============ */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <SectionReveal className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-100">
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </SectionReveal>
            <SectionReveal delay={150} className="lg:col-span-6 lg:col-start-7">
              <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">{story.eyebrow}</p>
              <h2 className="font-display text-ink-800 text-4xl sm:text-5xl lg:text-[54px] leading-[1.04] text-balance">
                {story.title}
              </h2>
              <div className="hairline w-12 mt-7 mb-7" />
              <div className="space-y-5 text-ink-600 text-[15px] sm:text-base leading-relaxed text-pretty">
                {story.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-7 font-serif italic text-ink-500">{story.signature}</p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-[11px] tracking-[0.18em] uppercase text-ink-800 border-b border-ink-800 pb-1 hover:text-mahogany-400 hover:border-mahogany-400 transition-colors"
              >
                More of the story
                <ArrowRight size={14} />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="relative py-20 sm:py-28 bg-sand-100">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">In their words</p>
            <h2 className="font-display text-ink-800 text-4xl sm:text-5xl lg:text-[54px] leading-[1.04] text-balance">
              What guests have said.
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-6">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={16} weight="fill" className="text-mahogany-400" />
              ))}
              <span className="ml-2.5 text-sm text-ink-500 font-serif italic">
                4.9 average across Booking.com, Google, TripAdvisor
              </span>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {reviews.slice(0, 3).map((r, i) => (
              <SectionReveal key={r.author} delay={i * 110}>
                <article className="relative h-full bg-sand-50 border border-ink-100 p-7 sm:p-8">
                  <Quotes
                    size={28}
                    weight="fill"
                    className="text-mahogany-400/20 absolute top-5 right-5"
                  />
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: r.source === 'Booking.com' ? Math.round(r.rating / 2) : r.rating }).map(
                      (_, k) => (
                        <Star key={k} size={13} weight="fill" className="text-mahogany-400" />
                      )
                    )}
                  </div>
                  <h3 className="font-display text-lg text-ink-800 mb-3 leading-tight">{r.title}</h3>
                  <p className="text-ink-600 text-[14px] leading-relaxed text-pretty">“{r.body}”</p>
                  <div className="mt-6 pt-5 border-t border-ink-100 flex items-center justify-between text-xs">
                    <span className="font-medium text-ink-700">{r.author}</span>
                    <span className="text-ink-400 font-serif italic">{r.source} · {r.date}</span>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AROUND HARARE ============ */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">Around the house</p>
              <h2 className="font-display text-ink-800 text-4xl sm:text-5xl lg:text-[54px] leading-[1.04] text-balance">
                What's nearby, and worth the walk.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-ink-500 text-sm">
              <MapPin size={14} className="text-mahogany-400" />
              <span className="font-serif italic">Mount Pleasant, northern suburbs of Harare</span>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {experiences.map((e, i) => (
              <SectionReveal key={e.title} delay={i * 100}>
                <div className="h-full p-6 sm:p-7 border-t border-ink-200 hover:border-mahogany-400 transition-colors">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-mahogany-400 mb-3">{e.distance}</p>
                  <h3 className="font-display text-2xl text-ink-800 leading-tight mb-3">{e.title}</h3>
                  <p className="text-[14px] text-ink-500 leading-relaxed text-pretty">{e.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA with real photo BG ============ */}
      <section className="relative overflow-hidden">
        <img
          src="/images/deluxe-room.jpg"
          alt="Deluxe queen room at Brompton at dusk"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink-900/70" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-10 py-24 sm:py-32 text-center">
          <p className="font-serif italic text-mahogany-200 text-lg sm:text-xl mb-5">
            Rooms are booked as they come
          </p>
          <h2 className="font-display text-sand-50 text-4xl sm:text-5xl lg:text-[56px] leading-[1.04] text-balance">
            Come and stay with us.
          </h2>
          <p className="mt-6 text-sand-100/90 text-base sm:text-lg leading-relaxed max-w-xl mx-auto text-pretty">
            Eight rooms. Long weekends go quickly, and so do the first warm days of October. Reserve direct for our best rate and a welcome gin on arrival.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              to="/reservations"
              className="inline-flex items-center justify-center gap-2 bg-sand-50 text-ink-800 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-mahogany-400 hover:text-sand-50 transition-colors"
            >
              Reserve a room
              <ArrowRight size={14} />
            </Link>
            <a
              href={helpers.waHref(`Hello Brompton, I'd like to reserve a room.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-sand-50 text-sand-50 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-sand-50 hover:text-ink-800 transition-colors"
            >
              <WhatsappLogo size={14} weight="fill" />
              WhatsApp the house
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

// Small dark variant used inside the amenities section
function AmenityCardDark({ icon, title, body }) {
  const Icons = {
    ForkKnife, WifiHigh, Coffee, Car, Leaf, Key,
  };
  const Icon = Icons[icon] || Coffee;
  return (
    <div className="group relative p-6 sm:p-7 border border-sand-100/15 hover:border-mahogany-300 transition-colors h-full">
      <div className="h-11 w-11 flex items-center justify-center text-mahogany-300 mb-5 border border-mahogany-300/30 group-hover:bg-mahogany-300 group-hover:text-ink-900 transition-colors">
        <Icon size={20} weight="light" />
      </div>
      <h3 className="font-display text-xl text-sand-50 mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-sand-200/70 leading-relaxed text-pretty">{body}</p>
    </div>
  );
}
