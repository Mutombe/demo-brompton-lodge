import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, Bed, Users, Ruler, CaretRight,
  WhatsappLogo, CheckCircle,
} from '@phosphor-icons/react';
import { rooms, business, helpers } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import RoomCard from '../components/RoomCard';

export default function RoomDetail() {
  const { slug } = useParams();
  const room = rooms.find((r) => r.slug === slug);

  const { prev, next } = useMemo(() => {
    if (!room) return { prev: null, next: null };
    const idx = rooms.findIndex((r) => r.slug === room.slug);
    return {
      prev: rooms[(idx - 1 + rooms.length) % rooms.length],
      next: rooms[(idx + 1) % rooms.length],
    };
  }, [room]);

  const related = useMemo(() => {
    if (!room) return [];
    return rooms.filter((r) => r.slug !== room.slug).slice(0, 3);
  }, [room]);

  if (!room) return <Navigate to="/rooms" replace />;

  const waMsg = helpers.waHref(
    `Hello Brompton — I'd like to enquire about ${room.name}. Could you confirm availability and share the total for my dates?`
  );

  return (
    <PageTransition>
      <SEO
        title={`${room.name} — Brompton Guest House, Harare`}
        description={`${room.name} at Brompton Guest House — ${room.subtitle} From $${room.pricePerNight}/night, breakfast included.`}
      />

      {/* Page hero / breadcrumb */}
      <section className="pt-28 sm:pt-32 pb-6 bg-sand-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-ink-400 mb-3">
            <Link to="/" className="hover:text-mahogany-400">Home</Link>
            <CaretRight size={12} />
            <Link to="/rooms" className="hover:text-mahogany-400">Rooms</Link>
            <CaretRight size={12} />
            <span className="text-ink-700 truncate">{room.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative bg-sand-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 pb-10">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-ink-200">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
            {room.images[1] && (
              <div className="lg:col-span-4">
                <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden bg-ink-200 h-full">
                  <img
                    src={room.images[1]}
                    alt={`${room.name} — alternate view`}
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">Room</p>
              <h1 className="font-display text-ink-800 text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
                {room.name}
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-ink-500 mt-3">{room.subtitle}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-ink-600 text-[14px]">
                <span className="inline-flex items-center gap-2">
                  <Bed size={16} className="text-mahogany-400" /> {room.bedType} bed
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users size={16} className="text-mahogany-400" /> Sleeps {room.sleeps}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Ruler size={16} className="text-mahogany-400" /> {room.sizeSqm} m²
                </span>
              </div>

              <div className="hairline mt-10 mb-10" />

              <p className="text-ink-700 text-lg leading-relaxed text-pretty">{room.description}</p>

              <h2 className="font-display text-2xl text-ink-800 mt-12 mb-5">What's in the room</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-[14px] text-ink-600">
                    <CheckCircle size={16} className="text-mahogany-400 shrink-0 mt-0.5" weight="regular" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5 lg:pl-4">
              <div className="bg-sand-100 border border-ink-100 p-7 sm:p-8 sticky top-28">
                <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">From</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl text-ink-800">${room.pricePerNight}</span>
                  <span className="font-serif italic text-ink-500 text-sm">/ night</span>
                </div>
                <p className="text-[13px] text-ink-500 mt-1">{room.priceNote}</p>
                <div className="hairline my-6" />

                <a
                  href={waMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-ink-800 text-sand-50 py-3.5 text-[11px] tracking-[0.18em] uppercase hover:bg-mahogany-400 transition-colors"
                >
                  <WhatsappLogo size={14} weight="fill" />
                  Enquire on WhatsApp
                </a>
                <Link
                  to="/reservations"
                  className="w-full mt-3 inline-flex items-center justify-center gap-2 border border-ink-800 text-ink-800 py-3.5 text-[11px] tracking-[0.18em] uppercase hover:bg-ink-800 hover:text-sand-50 transition-colors"
                >
                  Reservation form
                </Link>
                <p className="mt-5 text-[13px] font-serif italic text-ink-500 leading-relaxed">
                  Or call the house directly on{' '}
                  <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="text-mahogany-400 hover:underline">
                    {business.phone}
                  </a>
                </p>

                <div className="mt-7 pt-6 border-t border-ink-200 space-y-2.5 text-[13px] text-ink-500">
                  <div className="flex justify-between"><span>Check-in</span><span className="text-ink-700">{business.hours.checkIn}</span></div>
                  <div className="flex justify-between"><span>Check-out</span><span className="text-ink-700">{business.hours.checkOut}</span></div>
                  <div className="flex justify-between"><span>Breakfast</span><span className="text-ink-700">Included</span></div>
                  <div className="flex justify-between"><span>WiFi</span><span className="text-ink-700">Uncapped fibre</span></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Prev / next */}
      <section className="border-t border-ink-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-12 grid sm:grid-cols-2 gap-6">
          <Link
            to={`/rooms/${prev.slug}`}
            className="group flex items-center gap-3 text-ink-600 hover:text-mahogany-400 transition-colors"
          >
            <ArrowLeft size={16} className="shrink-0 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase text-ink-400">Previous</p>
              <p className="font-display text-lg">{prev.name}</p>
            </div>
          </Link>
          <Link
            to={`/rooms/${next.slug}`}
            className="group flex items-center gap-3 text-ink-600 hover:text-mahogany-400 transition-colors sm:justify-end text-right"
          >
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase text-ink-400">Next</p>
              <p className="font-display text-lg">{next.name}</p>
            </div>
            <ArrowRight size={16} className="shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 sm:py-24 bg-sand-100">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 sm:mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-ink-800">Other rooms</h2>
            <Link to="/rooms" className="text-[11px] tracking-[0.18em] uppercase text-ink-700 hover:text-mahogany-400">
              All rooms
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {related.map((r, i) => (
              <RoomCard key={r.slug} room={r} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
