import React from 'react';
import { Link } from 'react-router-dom';
import { CaretRight, ArrowRight } from '@phosphor-icons/react';
import { amenities, experiences, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import AmenityCard from '../components/AmenityCard';

export default function Amenities() {
  return (
    <PageTransition>
      <SEO
        title="Amenities — Brompton Guest House, Harare"
        description="Everything Brompton offers in-house: breakfast in the garden, fibre WiFi, airport pick-up, honesty bar, and more."
      />

      <section className="relative bg-sand-100 pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-ink-400 mb-7">
            <Link to="/" className="hover:text-mahogany-400">Home</Link>
            <CaretRight size={12} />
            <span className="text-ink-700">Amenities</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-4">What's in the house</p>
            <h1
              className="font-display text-ink-800 leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}
            >
              The small things, done properly.
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-ink-600 mt-6 sm:mt-8 max-w-3xl leading-relaxed text-pretty">
              We've chosen a short list of amenities over a long one. Each of them earns its place, and our quiet preference has always been for the things that genuinely improve a stay.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {amenities.map((a, i) => (
              <SectionReveal key={a.title} delay={i * 80}>
                <AmenityCard {...a} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Around Harare */}
      <section className="relative py-20 sm:py-28 bg-sand-100">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="max-w-3xl mb-14">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">Beyond the gates</p>
            <h2 className="font-display text-ink-800 text-4xl sm:text-5xl leading-[1.04] text-balance">
              A few of the things we'll point you toward.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {experiences.map((e, i) => (
              <SectionReveal key={e.title} delay={i * 100}>
                <div className="h-full p-6 sm:p-7 border-t-2 border-mahogany-400 bg-sand-50">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-mahogany-400 mb-3">{e.distance}</p>
                  <h3 className="font-display text-2xl text-ink-800 leading-tight mb-3">{e.title}</h3>
                  <p className="text-[14px] text-ink-500 leading-relaxed text-pretty">{e.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src="/images/tea-station.jpg"
          alt="The in-room tea and coffee station at Brompton"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink-900/65" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-10 py-24 sm:py-28 text-center">
          <h2 className="font-display text-sand-50 text-4xl sm:text-5xl leading-tight text-balance">
            Quiet comforts, ready for when you arrive.
          </h2>
          <Link
            to="/reservations"
            className="inline-flex items-center gap-2 mt-9 bg-sand-50 text-ink-800 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-mahogany-400 hover:text-sand-50 transition-colors"
          >
            Reserve a room
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
