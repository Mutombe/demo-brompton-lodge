import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Brompton error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 pt-24">
          <div className="text-center max-w-md">
            <p className="font-serif italic text-lg text-mahogany-400">
              Forgive us — a small hiccup.
            </p>
            <h1 className="mt-3 font-display text-4xl text-ink-800">
              Something didn't load as it should.
            </h1>
            <p className="mt-4 text-ink-500 text-sm leading-relaxed">
              Refresh the page, and if the trouble lingers, send us a WhatsApp
              and we'll make sure you get where you were going.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-7 py-3 bg-ink-800 text-sand-50 text-[11px] tracking-[0.16em] uppercase hover:bg-mahogany-400"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-7 py-3 border border-ink-800 text-ink-800 text-[11px] tracking-[0.16em] uppercase hover:bg-ink-800 hover:text-sand-50 transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
