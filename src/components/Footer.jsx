import React from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramLogo,
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
} from '@phosphor-icons/react';
import { business, helpers } from '../data/siteData';

export default function Footer() {
  const waHref = helpers.waHref(
    `Hello Brompton, I have an enquiry about staying with you.`
  );
  return (
    <footer className="relative bg-ink-900 text-sand-100 mt-24 sm:mt-32">
      <div className="grain" />
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={business.logo}
                alt={business.name}
                onError={(e) => (e.currentTarget.style.display = 'none')}
                className="h-12 w-auto"
                style={{ filter: 'invert(1) brightness(2)' }}
                loading="lazy"
              />
              <span className="font-display text-xl text-sand-50 leading-tight">
                Brompton
                <span className="block font-serif italic text-[13px] text-sand-200">
                  Guest House
                </span>
              </span>
            </Link>
            <p className="text-sm text-sand-200/80 leading-relaxed max-w-xs font-serif italic">
              “A house that behaves like a home.”
            </p>
            <div className="flex items-center gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 border border-sand-100/20 flex items-center justify-center text-sand-100 hover:bg-mahogany-400 hover:border-mahogany-400 transition-colors"
              >
                <InstagramLogo size={16} />
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 border border-sand-100/20 flex items-center justify-center text-sand-100 hover:bg-mahogany-400 hover:border-mahogany-400 transition-colors"
              >
                <WhatsappLogo size={16} />
              </a>
            </div>
          </div>

          {/* The House */}
          <div>
            <h4 className="font-display text-base text-sand-50 mb-5 tracking-wide">
              The House
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/rooms" className="text-sand-200/80 hover:text-sand-50 transition-colors">
                  Rooms & rates
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-sand-200/80 hover:text-sand-50 transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="text-sand-200/80 hover:text-sand-50 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sand-200/80 hover:text-sand-50 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sand-200/80 hover:text-sand-50 transition-colors">
                  Our story
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay */}
          <div>
            <h4 className="font-display text-base text-sand-50 mb-5 tracking-wide">
              Plan a stay
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/reservations" className="text-sand-200/80 hover:text-sand-50 transition-colors">
                  Reserve a room
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sand-200/80 hover:text-sand-50 transition-colors">
                  Contact & directions
                </Link>
              </li>
              <li>
                <Link to="/contact#faq" className="text-sand-200/80 hover:text-sand-50 transition-colors">
                  FAQ
                </Link>
              </li>
              <li className="text-sand-200/80">
                <span className="block text-[11px] tracking-wider uppercase text-sand-200/50 mb-1">Long-stay rates</span>
                Weekly & monthly enquiries welcome
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-display text-base text-sand-50 mb-5 tracking-wide">
              Find us
            </h4>
            <ul className="space-y-3 text-sm text-sand-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-mahogany-300 shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 text-mahogany-300 shrink-0" />
                <span>
                  Reception {business.hours.reception}
                  <br />
                  Check-in {business.hours.checkIn} · out {business.hours.checkOut}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 text-mahogany-300 shrink-0" />
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="hover:text-sand-50"
                >
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple size={16} className="mt-0.5 text-mahogany-300 shrink-0" />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-sand-50"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 sm:mt-16 pt-8 border-t border-sand-100/10 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-xs text-sand-200/60 text-center sm:text-left">
          <p>© 2026 {business.name} · Mount Pleasant, Harare.</p>
          <p className="font-serif italic">
            {business.instagramHandle}
          </p>
        </div>

        <p className="mt-4 text-center text-[11px] text-sand-200/40 tracking-wide">
          Website by{' '}
          <a
            href="https://bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mahogany-300 hover:text-mahogany-200"
          >
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
