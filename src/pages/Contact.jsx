import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CaretRight, MapPin, Phone, EnvelopeSimple, Clock,
  WhatsappLogo, PaperPlaneTilt, CheckCircle,
} from '@phosphor-icons/react';
import { toast } from 'sonner';
import { business, faqs, helpers } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Hello Brompton — I have an enquiry about a stay.',
  });
  const [channel, setChannel] = useState('whatsapp');
  const [open, setOpen] = useState(null);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error('Please tell us your name and a short message.');
      return;
    }
    const body = `${form.message}

— From:
Name:   ${form.name}
Email:  ${form.email || 'not provided'}
Phone:  ${form.phone || 'not provided'}`;

    if (channel === 'whatsapp') {
      const url = helpers.waHref(body);
      window.open(url, '_blank', 'noopener');
      toast.success('Opening WhatsApp…');
    } else {
      const url = helpers.mailHref('Brompton Guest House — enquiry', body);
      window.location.href = url;
      toast.success('Opening your email…');
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Contact — Brompton Guest House, Harare"
        description="Get in touch with Brompton Guest House — WhatsApp, email, telephone, and directions to Mount Pleasant, Harare."
      />

      <section className="relative bg-sand-100 pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-ink-400 mb-7">
            <Link to="/" className="hover:text-mahogany-400">Home</Link>
            <CaretRight size={12} />
            <span className="text-ink-700">Contact</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-4">Contact</p>
            <h1
              className="font-display text-ink-800 leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}
            >
              Write, call, or come by.
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-ink-600 mt-6 sm:mt-8 max-w-3xl leading-relaxed">
              We answer WhatsApp quickly, telephone during reception hours, and email usually the same day.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Form */}
            <SectionReveal className="lg:col-span-7">
              <div className="bg-sand-100 border border-ink-100 p-6 sm:p-10">
                <h2 className="font-display text-3xl text-ink-800 mb-2">Send us a note</h2>
                <p className="font-serif italic text-ink-500 mb-8">
                  We'll reply by your chosen channel. No queues, no scripts.
                </p>

                {/* Channel toggle */}
                <div className="flex items-center gap-2 mb-7">
                  <button
                    type="button"
                    onClick={() => setChannel('whatsapp')}
                    className={`inline-flex items-center gap-2 px-5 h-11 text-[11px] tracking-[0.16em] uppercase transition-colors ${
                      channel === 'whatsapp'
                        ? 'bg-mahogany-400 text-sand-50'
                        : 'bg-transparent border border-ink-200 text-ink-600 hover:border-mahogany-400'
                    }`}
                  >
                    <WhatsappLogo size={14} weight="fill" /> WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setChannel('email')}
                    className={`inline-flex items-center gap-2 px-5 h-11 text-[11px] tracking-[0.16em] uppercase transition-colors ${
                      channel === 'email'
                        ? 'bg-ink-800 text-sand-50'
                        : 'bg-transparent border border-ink-200 text-ink-600 hover:border-ink-800'
                    }`}
                  >
                    <EnvelopeSimple size={14} /> Email
                  </button>
                </div>

                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400">Your name</span>
                      <input
                        type="text"
                        value={form.name}
                        onChange={onChange('name')}
                        required
                        placeholder="Full name"
                        className="h-11 px-3 text-base sm:text-sm bg-sand-50 border border-ink-200 outline-none focus:border-mahogany-400 transition-colors"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400">Phone / WhatsApp</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={onChange('phone')}
                        placeholder="+263 …"
                        className="h-11 px-3 text-base sm:text-sm bg-sand-50 border border-ink-200 outline-none focus:border-mahogany-400 transition-colors"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400">Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={onChange('email')}
                      placeholder="you@example.com"
                      className="h-11 px-3 text-sm bg-sand-50 border border-ink-200 outline-none focus:border-mahogany-400 transition-colors"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400">Your message</span>
                    <textarea
                      value={form.message}
                      onChange={onChange('message')}
                      required
                      rows={6}
                      className="px-3 py-3 text-base sm:text-sm bg-sand-50 border border-ink-200 outline-none focus:border-mahogany-400 transition-colors resize-y"
                    />
                  </label>
                  <button
                    type="submit"
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 text-[11px] tracking-[0.18em] uppercase transition-colors ${
                      channel === 'whatsapp'
                        ? 'bg-mahogany-400 hover:bg-mahogany-500 text-sand-50'
                        : 'bg-ink-800 hover:bg-mahogany-400 text-sand-50'
                    }`}
                  >
                    {channel === 'whatsapp' ? (
                      <>
                        <WhatsappLogo size={14} weight="fill" /> Send on WhatsApp
                      </>
                    ) : (
                      <>
                        <PaperPlaneTilt size={14} /> Send by email
                      </>
                    )}
                  </button>
                </form>
              </div>
            </SectionReveal>

            {/* Sidebar */}
            <aside className="lg:col-span-5 space-y-7">
              <SectionReveal delay={100}>
                <div className="p-6 sm:p-7 border border-ink-100">
                  <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">The house</p>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <MapPin size={18} className="text-mahogany-400 mt-0.5 shrink-0" />
                      <span className="text-ink-700">{business.address}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone size={18} className="text-mahogany-400 mt-0.5 shrink-0" />
                      <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="text-ink-700 hover:text-mahogany-400">{business.phone}</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <WhatsappLogo size={18} className="text-mahogany-400 mt-0.5 shrink-0" />
                      <a
                        href={helpers.waHref('Hello Brompton, I have an enquiry.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-700 hover:text-mahogany-400"
                      >
                        {business.whatsappDisplay}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <EnvelopeSimple size={18} className="text-mahogany-400 mt-0.5 shrink-0" />
                      <a href={`mailto:${business.email}`} className="text-ink-700 hover:text-mahogany-400">
                        {business.email}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock size={18} className="text-mahogany-400 mt-0.5 shrink-0" />
                      <span className="text-ink-700">
                        Reception {business.hours.reception}
                        <br />
                        Check-in {business.hours.checkIn} · out {business.hours.checkOut}
                      </span>
                    </li>
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={200}>
                <div className="overflow-hidden border border-ink-100">
                  <iframe
                    title="Brompton Guest House location map"
                    src="https://www.google.com/maps?q=Mount+Pleasant+Harare+Zimbabwe&output=embed"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </SectionReveal>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-20 sm:py-28 bg-sand-100">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="text-center mb-12">
            <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany-400 mb-3">Questions</p>
            <h2 className="font-display text-4xl sm:text-5xl text-ink-800 text-balance">
              The things guests most often ask.
            </h2>
          </SectionReveal>

          <div className="border-t border-ink-200">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-ink-200">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left flex items-start justify-between gap-6 py-5 sm:py-6 group"
                  >
                    <span className="font-display text-lg sm:text-xl text-ink-800 group-hover:text-mahogany-400 transition-colors">
                      {f.q}
                    </span>
                    <span className={`shrink-0 mt-1 text-mahogany-400 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
                  >
                    <p className="text-ink-600 text-[15px] leading-relaxed max-w-2xl text-pretty">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
