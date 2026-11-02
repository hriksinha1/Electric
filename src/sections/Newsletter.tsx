import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SafeImage } from '../components/ui/SafeImage';
import { IMAGES } from '../data/images';
import { Em } from '../components/ui/Em';

const PHOTOS = [
  { slot: { ...IMAGES.newsletter.item1, decorative: true }, pos: 'top-6 left-6' },
  { slot: { ...IMAGES.newsletter.item2, decorative: true }, pos: 'bottom-6 left-10' },
  { slot: { ...IMAGES.newsletter.item3, decorative: true }, pos: 'top-6 right-6' },
  { slot: { ...IMAGES.newsletter.item4, decorative: true }, pos: 'bottom-6 right-10' },
];

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) return setError('Please enter your email address.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return setError('Please enter a valid email address.');
    setError('');
    setIsSubmitted(true);
  };

  return (
    <section aria-labelledby="newsletter-heading" className="w-full py-8 md:py-12">
      <Container>
        <div className="relative w-full min-h-[540px] md:min-h-[580px] bg-navy-950 bg-grain rounded-xl p-6 sm:p-10 lg:p-14 overflow-hidden flex flex-col justify-center items-center text-center shadow-xl">
          {PHOTOS.map(({ slot, pos }) => (
            <div
              key={slot.src}
              className={`hidden lg:block absolute ${pos} w-[20%] max-w-[240px] aspect-[1.6/1] rounded-lg overflow-hidden shadow-lg border border-white/10 select-none`}
            >
              <SafeImage slot={slot} sizes="240px" />
            </div>
          ))}

          <div className="relative z-10 max-w-lg w-full flex flex-col items-center my-auto py-6">
            <h2
              id="newsletter-heading"
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium text-white tracking-tight leading-[1.02] mb-5 text-balance"
            >
              Stay Ahead of <Em onDark>What&apos;s Next.</Em>
            </h2>

            <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed max-w-sm mb-7 text-pretty">
              Get updates on new arrivals, product launches and exclusive offers.
            </p>

            {isSubmitted ? (
              <div
                className="flex items-center gap-2.5 px-5 py-3.5 bg-white/10 border border-white/30 rounded-lg text-white text-sm"
                role="status"
              >
                <Check className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                <span>Thanks. This is a demo form, so nothing was sent.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="w-full max-w-md flex flex-col gap-2">
                <div className="flex items-stretch w-full rounded-lg overflow-hidden border border-white/60 focus-within:ring-2 focus-within:ring-blue-500 bg-transparent">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Your email"
                    autoComplete="email"
                    className="flex-1 min-w-0 bg-transparent px-4 py-3 text-sm sm:text-base text-white placeholder-white/70 focus:outline-none font-body"
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? 'newsletter-error' : undefined}
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-body text-sm font-semibold transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:bg-blue-700"
                  >
                    Subscribe
                  </button>
                </div>
                <p id="newsletter-error" aria-live="polite" className="min-h-4 text-xs text-red-300 text-left px-1">
                  {error}
                </p>
              </form>
            )}
          </div>

          <div className="lg:hidden grid grid-cols-2 gap-3 w-full max-w-md mt-6 pt-4 border-t border-white/10 select-none">
            {PHOTOS.map(({ slot }) => (
              <div key={slot.src} className="aspect-[4/3] rounded-md overflow-hidden">
                <SafeImage slot={slot} sizes="50vw" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
