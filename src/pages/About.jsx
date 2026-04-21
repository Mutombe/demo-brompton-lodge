import React from 'react';
import { Link } from 'react-router-dom';
import { CaretRight, ArrowRight } from '@phosphor-icons/react';
import { story, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="Our Story — Brompton Guest House, Harare"
        description="Brompton Guest House is a family-run boutique lodge in Mount Pleasant, Harare. Here's how we came to be, and why we do it the way we do."
      />

      <section className="relative bg-sand-100 pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-ink-400 mb-7">
            <Link to="/" className="hover:text-mahogany-400">Home</Link>
            <CaretRight size={12} />
            <span className="text-ink-700">About</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-4">{story.eyebrow}</p>
            <h1 className="font-display text-ink-800 text-5xl sm:text-6xl lg:text-[84px] leading-[0.98] tracking-tight text-balance">
              {story.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Editorial body */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <SectionReveal className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-100 sticky top-28">
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </SectionReveal>
            <div className="lg:col-span-7 lg:col-start-6">
              <SectionReveal>
                <p className="font-serif italic text-2xl sm:text-3xl text-ink-700 leading-[1.4] text-pretty">
                  "We wanted to run the sort of place we'd like to stay in ourselves."
                </p>
                <div className="hairline w-12 mt-7 mb-9" />
                <div className="space-y-6 text-ink-600 text-[16px] sm:text-[17px] leading-[1.75] text-pretty">
                  {story.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <p className="mt-10 font-serif italic text-lg text-ink-500">{story.signature}</p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values — three columns */}
      <section className="relative py-20 sm:py-28 bg-sand-100">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="max-w-2xl mb-14">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">How we run the house</p>
            <h2 className="font-display text-ink-800 text-4xl sm:text-5xl leading-[1.04] text-balance">
              Three quiet principles.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {[
              {
                title: '01 — Keep it small.',
                body: "Eight rooms is our maximum. It's a number that lets us know every guest by name and every room's quirks by heart.",
              },
              {
                title: '02 — Cook real food.',
                body: "A proper breakfast, made from what's in season, served on good china. There is no buffet, no warming lamp.",
              },
              {
                title: '03 — Let people be.',
                body: "Service that helps when wanted, and stays out of the way when not. Guests ought to feel like house-guests — not audited.",
              },
            ].map((v, i) => (
              <SectionReveal key={v.title} delay={i * 120}>
                <div className="border-t border-ink-800 pt-6">
                  <h3 className="font-display text-2xl sm:text-3xl text-ink-800 mb-4 leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-ink-600 text-[15px] leading-relaxed text-pretty">{v.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
          <h2 className="font-display text-ink-800 text-3xl sm:text-4xl lg:text-5xl leading-[1.04] text-balance">
            Come and see for yourself.
          </h2>
          <Link
            to="/reservations"
            className="inline-flex items-center gap-2 mt-9 bg-ink-800 text-sand-50 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-mahogany-400 transition-colors"
          >
            Reserve a room
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
