import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { IMAGES } from '../data/images';
import { CheckIcon } from '../components/icons';

interface NewsletterProps {
  onShowToast: (msg: string) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onShowToast }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!emailPattern.test(email.trim())) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitted(true);
    onShowToast('Thank you for subscribing! (Demo only — no email was sent)');
  };

  return (
    <section aria-labelledby="newsletter-heading" className="w-full py-8 md:py-12">
      <Container>
        <div className="relative w-full min-h-[540px] md:min-h-[580px] bg-[#1C3A2C] bg-grain rounded-2xl md:rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden flex flex-col justify-center items-center text-center shadow-xl">
          {/* Top-Left Image: Red Dutch Oven */}
          <div className="hidden lg:block absolute top-6 left-6 w-[22%] max-w-[240px] aspect-[1.6/1] rounded-xl overflow-hidden shadow-lg border border-white/10 select-none">
            <img
              src={IMAGES.newsletter.dutchOven.src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-Left Image: Yellow Pot */}
          <div className="hidden lg:block absolute bottom-6 left-10 w-[22%] max-w-[240px] aspect-[1.6/1] rounded-xl overflow-hidden shadow-lg border border-white/10 select-none">
            <img
              src={IMAGES.newsletter.yellowPot.src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top-Right Image: Ceramic Bowls (positioned with safe margin to NEVER overlap 10% Off) */}
          <div className="hidden lg:block absolute top-6 right-6 w-[22%] max-w-[240px] aspect-[1.6/1] rounded-xl overflow-hidden shadow-lg border border-white/10 select-none">
            <img
              src={IMAGES.newsletter.ceramicBowls.src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-Right Image: Family Cooking */}
          <div className="hidden lg:block absolute bottom-6 right-10 w-[22%] max-w-[240px] aspect-[1.6/1] rounded-xl overflow-hidden shadow-lg border border-white/10 select-none">
            <img
              src={IMAGES.newsletter.familyCooking.src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Column: Copy & Form */}
          <div className="relative z-10 max-w-lg w-full flex flex-col items-center my-auto py-6">
            <span className="font-display text-lg sm:text-xl md:text-2xl font-light text-[#F6F0C8] tracking-tight">
              Get Recipes
            </span>

            <h2
              id="newsletter-heading"
              className="font-display text-5xl sm:text-6xl lg:text-[4.75rem] font-bold text-[#F6F0C8] tracking-tight leading-[0.98] mt-1 mb-6 select-none"
            >
              10% Off
            </h2>

            {/* Email Form */}
            {isSubmitted ? (
              <div className="flex items-center gap-2.5 px-6 py-3.5 bg-[#FAF8F1]/10 border border-[#F6F0C8]/40 rounded-full text-[#F6F0C8] text-sm animate-in fade-in duration-300">
                <CheckIcon className="w-4 h-4 text-[#F6F0C8]" />
                <span>Thanks! This is a demo preview, so no real email was sent.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-2">
                <div className="flex items-center w-full rounded-none overflow-hidden border border-[#F6F0C8]/80 focus-within:ring-2 focus-within:ring-[#F6F0C8] bg-transparent">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Your Email"
                    className="flex-1 bg-transparent px-4 py-3 text-sm sm:text-base text-[#FAF8F1] placeholder-[#F6F0C8]/60 focus:outline-none font-body"
                    aria-describedby={error ? 'newsletter-error' : undefined}
                  />
                  <button
                    type="submit"
                    className="h-full px-6 py-3 bg-[#F6F0C8] hover:bg-[#EFE7B0] text-[#1B1F1C] font-body text-xs sm:text-sm font-semibold transition-colors shrink-0 select-none cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p id="newsletter-error" className="text-xs text-[#FCA5A5] text-left px-1" role="alert">
                    {error}
                  </p>
                )}
              </form>
            )}

            <p className="font-body text-xs sm:text-sm text-[#F6F0C8]/80 leading-relaxed max-w-sm mt-5 text-pretty">
              Eco-friendly recipes, cooking tips, and a 10% discount on sustainable kitchenware for a
              greener lifestyle.
            </p>
          </div>

          {/* Mobile Reflow: 2x2 grid below form */}
          <div className="lg:hidden grid grid-cols-2 gap-3 w-full max-w-md mt-6 pt-4 border-t border-white/10 select-none">
            <img
              src={IMAGES.newsletter.dutchOven.src}
              alt=""
              aria-hidden="true"
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-sm"
            />
            <img
              src={IMAGES.newsletter.ceramicBowls.src}
              alt=""
              aria-hidden="true"
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-sm"
            />
            <img
              src={IMAGES.newsletter.yellowPot.src}
              alt=""
              aria-hidden="true"
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-sm"
            />
            <img
              src={IMAGES.newsletter.familyCooking.src}
              alt=""
              aria-hidden="true"
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
