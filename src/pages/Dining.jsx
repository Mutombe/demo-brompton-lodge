import React from 'react';
import { Link } from 'react-router-dom';
import { CaretRight, ArrowRight, Coffee, Leaf } from '@phosphor-icons/react';
import { dining, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function Dining() {
  return (
    <PageTransition>
      <SEO
        title="Dining & Breakfast — Brompton Guest House, Harare"
        description="Breakfast at Brompton is generous, made to order, and taken in the courtyard. Seasonal fruit, warm sourdough, eggs any way."
      />

      <section className="relative bg-sand-100 pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-ink-400 mb-7">
            <Link to="/" className="hover:text-mahogany-400">Home</Link>
            <CaretRight size={12} />
            <span className="text-ink-700">Dining</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-4">Dining</p>
              <h1 className="font-display text-ink-800 text-5xl sm:text-6xl lg:text-[76px] leading-[0.98] tracking-tight text-balance">
                {dining.heading}
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-3">
              <p className="font-serif italic text-lg text-ink-600 leading-relaxed text-pretty">
                {dining.sub}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed photo */}
      <section className="relative">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="relative aspect-[21/9] overflow-hidden bg-ink-200 -mt-6">
            <img
              src={dining.image}
              alt={dining.imageAlt}
              onError={(e) => (e.currentTarget.style.display = 'none')}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Menu editorial */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="mb-14">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">The morning menu</p>
              <h2 className="font-display text-ink-800 text-4xl sm:text-5xl leading-[1.04] text-balance">
                A menu that doesn't change much — on purpose.
              </h2>
              <div className="hairline w-12 mt-7" />
              <p className="mt-7 text-ink-600 text-base leading-relaxed text-pretty">
                Breakfast is served every morning from 07:30 to 10:00 in the courtyard, weather permitting, and at the long mahogany table indoors when it doesn't. If you'd prefer it brought to your room, ask the evening before.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14">
            {dining.menu.map((section, i) => (
              <SectionReveal key={section.course} delay={i * 110}>
                <div>
                  <p className="font-display text-2xl text-mahogany-400 mb-5 display-rule">
                    {section.course}
                  </p>
                  <ul className="space-y-3">
                    {section.items.map((it) => (
                      <li key={it} className="text-ink-700 text-[15px] leading-relaxed font-serif">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="relative py-16 sm:py-20 bg-sand-100">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <Coffee size={28} weight="light" className="text-mahogany-400 mx-auto mb-5" />
          <p className="font-serif italic text-xl sm:text-2xl text-ink-700 leading-relaxed text-pretty">
            “{dining.note}”
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src="/images/corridor.jpg"
          alt="The corridor leading to the garden breakfast courtyard"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink-900/68" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-10 py-24 sm:py-28 text-center">
          <Leaf size={32} weight="light" className="text-mahogany-300 mx-auto mb-5" />
          <h2 className="font-display text-sand-50 text-4xl sm:text-5xl leading-tight text-balance">
            Stay the night. Breakfast is on us.
          </h2>
          <p className="mt-5 text-sand-100/90 text-base sm:text-lg max-w-xl mx-auto text-pretty">
            Every room at Brompton includes a proper, made-to-order breakfast in the garden — no quiet upsell, no tick-box buffet.
          </p>
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 mt-9 bg-sand-50 text-ink-800 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-mahogany-400 hover:text-sand-50 transition-colors"
          >
            See the rooms
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
