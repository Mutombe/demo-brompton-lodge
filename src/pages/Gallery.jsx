import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CaretRight } from '@phosphor-icons/react';
import { gallery } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import LightboxGallery from '../components/LightboxGallery';

const TAGS = ['All', 'Rooms', 'Details', 'Breakfast', 'Garden', 'House'];

export default function Gallery() {
  const [tag, setTag] = useState('All');
  const [lightIdx, setLightIdx] = useState(null);

  const filtered = useMemo(
    () => (tag === 'All' ? gallery : gallery.filter((g) => g.tag === tag)),
    [tag]
  );

  const open = (i) => setLightIdx(i);
  const close = () => setLightIdx(null);
  const prev = () =>
    setLightIdx((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightIdx((i) => (i + 1) % filtered.length);

  return (
    <PageTransition>
      <SEO
        title="Gallery — Brompton Guest House, Harare"
        description="Inside Brompton Guest House — rooms, garden breakfast, and the quiet details of a residential Harare lodge."
      />

      <section className="relative bg-sand-100 pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-ink-400 mb-7">
            <Link to="/" className="hover:text-mahogany-400">Home</Link>
            <CaretRight size={12} />
            <span className="text-ink-700">Gallery</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-4">Gallery</p>
              <h1
                className="font-display text-ink-800 leading-[0.98] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                A look around the house.
              </h1>
              <p className="font-serif italic text-lg text-ink-600 mt-6 leading-relaxed text-pretty">
                Rooms, gardens, morning light, and the quiet details between them.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-10 flex items-center gap-1 flex-wrap">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`px-4 h-9 text-[11px] tracking-[0.16em] uppercase border transition-colors ${
                  t === tag
                    ? 'bg-ink-800 text-sand-50 border-ink-800'
                    : 'bg-transparent text-ink-600 border-ink-200 hover:border-mahogany-400 hover:text-mahogany-400'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="masonry">
            {filtered.map((g, i) => (
              <button
                key={g.src}
                onClick={() => open(i)}
                className="block w-full group relative overflow-hidden bg-ink-100 focus:outline-none"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  loading={i < 4 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/20 transition-colors" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-sand-50 bg-ink-900/60 px-2 py-1">
                    {g.tag}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightIdx !== null && (
        <LightboxGallery
          images={filtered}
          index={lightIdx}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </PageTransition>
  );
}
