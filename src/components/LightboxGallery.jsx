import React, { useEffect, useCallback } from 'react';
import { X, CaretLeft, CaretRight } from '@phosphor-icons/react';

export default function LightboxGallery({ images, index, onClose, onPrev, onNext }) {
  const close = useCallback(() => onClose(), [onClose]);
  const prev = useCallback(() => onPrev(), [onPrev]);
  const next = useCallback(() => onNext(), [onNext]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [close, prev, next]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-ink-900/95 flex items-center justify-center p-4 sm:p-10"
      onClick={close}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
        aria-label="Close"
        className="absolute top-5 right-5 h-11 w-11 text-sand-100 hover:text-sand-50 flex items-center justify-center"
      >
        <X size={24} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous image"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 text-sand-100 hover:text-sand-50 flex items-center justify-center"
      >
        <CaretLeft size={28} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next image"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 text-sand-100 hover:text-sand-50 flex items-center justify-center"
      >
        <CaretRight size={28} />
      </button>
      <figure
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[88vh] flex flex-col items-center"
      >
        <img
          src={img.src}
          alt={img.alt}
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="max-w-full max-h-[82vh] object-contain"
        />
        <figcaption className="mt-4 text-center text-sm text-sand-200/80 font-serif italic">
          {img.alt}
        </figcaption>
      </figure>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.18em] uppercase text-sand-200/60">
        {index + 1} · {images.length}
      </div>
    </div>
  );
}
