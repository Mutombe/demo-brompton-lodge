import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, WhatsappLogo, Phone, MagnifyingGlass } from '@phosphor-icons/react';
import { business, helpers } from '../data/siteData';

const links = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/dining', label: 'Dining' },
  { to: '/amenities', label: 'Amenities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = loc.pathname === '/';
  const transparent = isHome && !scrolled;

  const waHref = helpers.waHref(
    `Hello Brompton, I'd like to enquire about availability.`
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-sand-50/94 backdrop-blur-md border-b border-ink-100'
        }`}
      >
        <div
          className={`max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 flex items-center justify-between gap-4 transition-all duration-500 ${
            transparent ? 'h-24' : 'h-20'
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group min-w-0">
            <img
              src={business.logo}
              alt={business.name}
              onError={(e) => (e.currentTarget.style.display = 'none')}
              className={`h-12 sm:h-14 w-auto shrink-0 transition-all duration-500 ${
                transparent ? 'invert brightness-0' : ''
              }`}
              style={transparent ? { filter: 'invert(1) brightness(2)' } : {}}
              loading="eager"
            />
            <span
              className={`font-display text-[18px] sm:text-[21px] leading-none tracking-tight truncate transition-colors duration-500 ${
                transparent ? 'text-sand-50' : 'text-ink-800'
              }`}
            >
              Brompton
              <span
                className={`font-serif italic text-[13px] sm:text-[15px] ml-1.5 ${
                  transparent ? 'text-sand-200' : 'text-ink-500'
                }`}
              >
                Guest House
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13px] font-medium tracking-[0.04em] transition-colors ${
                    transparent
                      ? isActive
                        ? 'text-sand-50'
                        : 'text-sand-100 hover:text-sand-50'
                      : isActive
                      ? 'text-mahogany-400'
                      : 'text-ink-600 hover:text-mahogany-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span
                        className={`absolute -bottom-2 left-0 right-0 h-px ${
                          transparent ? 'bg-sand-50' : 'bg-mahogany-400'
                        }`}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className={`h-10 w-10 flex items-center justify-center transition-colors ${
                transparent
                  ? 'text-sand-50 hover:text-mahogany-200'
                  : 'text-ink-700 hover:text-mahogany-400'
              }`}
            >
              <MagnifyingGlass size={20} />
            </button>
            <Link
              to="/reservations"
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.14em] uppercase transition-all duration-300 ${
                transparent
                  ? 'border border-sand-50 text-sand-50 hover:bg-sand-50 hover:text-ink-800'
                  : 'bg-ink-800 text-sand-50 hover:bg-mahogany-400'
              }`}
            >
              Reserve
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`h-10 w-10 hidden sm:flex items-center justify-center transition-colors ${
                transparent
                  ? 'text-sand-50 hover:text-mahogany-200'
                  : 'text-ink-700 hover:text-mahogany-400'
              }`}
            >
              <WhatsappLogo size={20} />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`h-10 w-10 flex lg:hidden items-center justify-center transition-colors ${
                transparent ? 'text-sand-50' : 'text-ink-800'
              }`}
            >
              <List size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Header spacer — we push content below when navbar is fixed; but only when NOT transparent/home? We overlay hero. Put an empty placeholder for other pages via CSS. */}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-400 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-900/55"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-sand-50 flex flex-col transition-transform duration-400 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-ink-100">
            <span className="font-display text-xl text-ink-800">Brompton</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 flex items-center justify-center text-ink-700"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-0.5">
            <button
              onClick={() => {
                setOpen(false);
                if (onOpenSearch) setTimeout(onOpenSearch, 250);
              }}
              className="flex items-center gap-3 py-3 font-display text-2xl text-ink-800 hover:text-mahogany-400 transition-colors text-left"
            >
              <MagnifyingGlass size={22} />
              Search
            </button>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3 font-display text-2xl transition-colors ${
                    isActive ? 'text-mahogany-400' : 'text-ink-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-ink-100 space-y-3">
            <Link
              to="/reservations"
              className="w-full flex items-center justify-center gap-2 bg-ink-800 text-sand-50 py-3.5 text-xs tracking-[0.16em] uppercase"
            >
              Reserve a room
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-ink-800 text-ink-800 py-3.5 text-xs tracking-[0.16em] uppercase"
            >
              <WhatsappLogo size={16} weight="fill" />
              WhatsApp the house
            </a>
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="w-full flex items-center justify-center gap-2 text-ink-600 py-2 text-sm"
            >
              <Phone size={14} />
              {business.phone}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
