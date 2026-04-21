import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO
        title="Not Found — Brompton Guest House"
        description="We couldn't find the page you were looking for at Brompton Guest House."
      />
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 pt-24 bg-sand-50">
        <div className="text-center max-w-lg">
          <p className="font-serif italic text-lg text-mahogany-400 mb-4">
            You've wandered off the path.
          </p>
          <h1 className="font-display text-ink-800 text-6xl sm:text-7xl leading-[0.98] mb-6">
            404
          </h1>
          <p className="text-ink-500 leading-relaxed mb-10">
            The page you were looking for isn't at Brompton — but the gardens are, the rooms are, and the kettle's always on.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-ink-800 text-sand-50 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-mahogany-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center gap-2 border border-ink-800 text-ink-800 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-ink-800 hover:text-sand-50 transition-colors"
            >
              The rooms
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
