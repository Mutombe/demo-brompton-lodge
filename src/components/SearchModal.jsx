import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlass,
  X,
  WhatsappLogo,
  ArrowRight,
  Bed,
  Sparkle,
  ForkKnife,
  Compass,
} from '@phosphor-icons/react';
import { rooms, amenities, dining, business, helpers } from '../data/siteData';

const PAGES = [
  { label: 'Home', to: '/', keywords: 'home start welcome' },
  { label: 'Rooms', to: '/rooms', keywords: 'rooms suites beds bedroom accommodation stay' },
  { label: 'Dining', to: '/dining', keywords: 'dining breakfast food restaurant menu courtyard garden' },
  { label: 'Amenities', to: '/amenities', keywords: 'amenities facilities wifi parking spa features' },
  { label: 'Gallery', to: '/gallery', keywords: 'gallery photos pictures images' },
  { label: 'Reservations', to: '/reservations', keywords: 'reserve book booking availability rates' },
  { label: 'About', to: '/about', keywords: 'about story family mount pleasant harare' },
  { label: 'Contact', to: '/contact', keywords: 'contact phone whatsapp email directions' },
];

const SUGGESTIONS = ['executive suite', 'breakfast', 'garden', 'spa', 'wifi', 'airport'];

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQ('');
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const { roomHits, amenityHits, diningHits, pageHits, total } = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) {
      return { roomHits: [], amenityHits: [], diningHits: [], pageHits: [], total: 0 };
    }

    const roomHits = rooms.filter((r) => {
      const hay = [
        r.name,
        r.subtitle,
        r.description,
        r.bedType,
        ...(r.amenities || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return hay.includes(n);
    });

    const amenityHits = amenities.filter((a) => {
      const hay = [a.title, a.body, a.icon].filter(Boolean).join(' ').toLowerCase();
      return hay.includes(n);
    });

    // Dining: search heading, sub, menu items
    const diningItems = [];
    const diningHaystack = [dining.heading, dining.sub, dining.note]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    if (diningHaystack.includes(n)) {
      diningItems.push({
        title: 'Breakfast in the courtyard',
        snippet: dining.sub,
        to: '/dining',
      });
    }
    (dining.menu || []).forEach((course) => {
      (course.items || []).forEach((item) => {
        if (item.toLowerCase().includes(n) || (course.course || '').toLowerCase().includes(n)) {
          diningItems.push({
            title: item,
            snippet: course.course,
            to: '/dining',
          });
        }
      });
    });

    const pageHits = PAGES.filter((p) => {
      const hay = (p.label + ' ' + p.keywords).toLowerCase();
      return hay.includes(n);
    });

    const total =
      roomHits.length + amenityHits.length + diningItems.length + pageHits.length;
    return {
      roomHits,
      amenityHits,
      diningHits: diningItems.slice(0, 8),
      pageHits,
      total,
    };
  }, [q]);

  const waHref = helpers.waHref(
    `Hello Brompton — I'm looking for "${q.trim() || 'information'}". Could you help?`
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-sand-50/95 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-10 pt-10 pb-20">
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-6 right-6 lg:top-8 lg:right-10 h-10 w-10 flex items-center justify-center text-ink-700 hover:text-mahogany-400 transition-colors"
        >
          <X size={22} />
        </button>

        <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 text-center mt-6">
          Search the house
        </p>
        <p className="font-serif italic text-lg text-ink-500 text-center mt-2">
          looking for something?
        </p>

        <div className="relative mt-5 max-w-2xl mx-auto">
          <MagnifyingGlass
            size={22}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-ink-400"
          />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try 'executive suite'…"
            className="w-full pl-10 pr-4 py-4 sm:py-5 bg-transparent border-b border-ink-300 focus:border-mahogany-400 outline-none text-2xl sm:text-4xl font-display text-ink-900 placeholder:text-ink-300 transition-colors"
          />
        </div>

        <div className="mt-12">
          {/* Empty state — no query */}
          {!q.trim() && (
            <div className="max-w-2xl mx-auto">
              <p className="text-[10px] tracking-[0.22em] uppercase text-ink-400 mb-4 text-center">
                Try one of these
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQ(s)}
                    className="px-4 py-2 text-sm border border-ink-200 hover:border-mahogany-400 hover:text-mahogany-400 transition-colors capitalize font-serif italic"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <p className="text-center font-serif italic text-xs text-ink-400 mt-6">
                Try: executive suite, breakfast, garden, spa
              </p>
            </div>
          )}

          {/* No results */}
          {q.trim() && total === 0 && (
            <div className="text-center py-12 max-w-xl mx-auto">
              <p className="font-display text-2xl sm:text-3xl text-ink-800 leading-tight">
                Nothing matches that yet.
              </p>
              <p className="mt-3 font-serif italic text-ink-500">
                Can't find it? Our reception can help directly.
              </p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-ink-800 text-sand-50 hover:bg-mahogany-400 text-[11px] tracking-[0.16em] uppercase transition-colors"
              >
                <WhatsappLogo size={14} weight="fill" />
                Chat with reception
                <ArrowRight size={12} />
              </a>
            </div>
          )}

          {/* Results */}
          {q.trim() && total > 0 && (
            <div className="space-y-12">
              <p className="text-[10px] tracking-[0.22em] uppercase text-ink-400 text-center">
                {total} {total === 1 ? 'match' : 'matches'}
              </p>

              {roomHits.length > 0 && (
                <section>
                  <div className="flex items-baseline justify-between gap-4 mb-5 border-b border-ink-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Bed size={16} className="text-mahogany-400" />
                      <h3 className="font-display text-xl text-ink-800">Rooms</h3>
                    </div>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400">
                      {roomHits.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {roomHits.map((r) => (
                      <Link
                        key={r.slug}
                        to={`/rooms/${r.slug}`}
                        onClick={onClose}
                        className="group block"
                      >
                        <div className="relative overflow-hidden bg-ink-100 aspect-[4/5]">
                          <img
                            src={r.images?.[0]}
                            alt={r.name}
                            loading="lazy"
                            className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                          />
                          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-sand-50">
                            <span className="font-display text-xl">${r.pricePerNight}</span>
                            <span className="text-[10px] tracking-[0.16em] uppercase opacity-90">
                              {r.bedType}
                            </span>
                          </div>
                        </div>
                        <div className="pt-3">
                          <h4 className="font-display text-lg text-ink-800 leading-tight group-hover:text-mahogany-400 transition-colors">
                            {r.name}
                          </h4>
                          <p className="font-serif italic text-ink-500 text-sm mt-0.5 truncate">
                            {r.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {amenityHits.length > 0 && (
                <section>
                  <div className="flex items-baseline justify-between gap-4 mb-5 border-b border-ink-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Sparkle size={16} className="text-mahogany-400" />
                      <h3 className="font-display text-xl text-ink-800">Amenities</h3>
                    </div>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400">
                      {amenityHits.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {amenityHits.map((a) => (
                      <Link
                        key={a.title}
                        to="/amenities"
                        onClick={onClose}
                        className="group block p-5 bg-sand-50 border border-ink-100 hover:border-mahogany-400 transition-colors"
                      >
                        <h4 className="font-display text-lg text-ink-800 leading-tight group-hover:text-mahogany-400 transition-colors">
                          {a.title}
                        </h4>
                        <p className="text-sm text-ink-500 leading-relaxed mt-1.5 line-clamp-2">
                          {a.body}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {diningHits.length > 0 && (
                <section>
                  <div className="flex items-baseline justify-between gap-4 mb-5 border-b border-ink-200 pb-3">
                    <div className="flex items-center gap-2">
                      <ForkKnife size={16} className="text-mahogany-400" />
                      <h3 className="font-display text-xl text-ink-800">Dining</h3>
                    </div>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400">
                      {diningHits.length}
                    </span>
                  </div>
                  <div className="divide-y divide-ink-100 border-y border-ink-100">
                    {diningHits.map((d, i) => (
                      <Link
                        key={i}
                        to={d.to}
                        onClick={onClose}
                        className="group flex items-center justify-between gap-4 py-4 px-2 hover:bg-sand-100 transition-colors"
                      >
                        <div className="min-w-0">
                          <p className="font-display text-base text-ink-800 group-hover:text-mahogany-400 transition-colors truncate">
                            {d.title}
                          </p>
                          {d.snippet && (
                            <p className="font-serif italic text-xs text-ink-500 mt-0.5 truncate">
                              {d.snippet}
                            </p>
                          )}
                        </div>
                        <ArrowRight
                          size={14}
                          className="text-ink-300 group-hover:text-mahogany-400 shrink-0"
                        />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {pageHits.length > 0 && (
                <section>
                  <div className="flex items-baseline justify-between gap-4 mb-5 border-b border-ink-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Compass size={16} className="text-mahogany-400" />
                      <h3 className="font-display text-xl text-ink-800">Pages</h3>
                    </div>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400">
                      {pageHits.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pageHits.map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm border border-ink-200 hover:border-mahogany-400 hover:text-mahogany-400 transition-colors"
                      >
                        {p.label}
                        <ArrowRight size={12} />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              <div className="pt-6 border-t border-ink-100 text-center">
                <p className="font-serif italic text-sm text-ink-500">
                  Still not quite right?
                </p>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 mt-3 text-ink-700 hover:text-mahogany-400 text-[11px] tracking-[0.18em] uppercase border-b border-ink-200 hover:border-mahogany-400 pb-1 transition-colors"
                >
                  <WhatsappLogo size={13} weight="fill" />
                  Chat with reception
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
