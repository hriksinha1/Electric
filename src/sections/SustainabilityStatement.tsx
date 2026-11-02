import React from 'react';
import { Container } from '../components/ui/Container';
import { IMAGES } from '../data/images';
import { Em } from '../components/ui/Em';

export const SustainabilityStatement: React.FC = () => {
  return (
    <section id="about" aria-labelledby="statement-heading" className="w-full pt-12 md:pt-16 pb-12">
      <Container>
        {/* 3-Image Overlapping Collage */}
        <div className="relative mx-auto max-w-4xl flex items-center justify-center my-6 py-4 px-2 select-none">
          {/* Left Peeking Image (-2 deg) */}
          <div className="w-1/4 sm:w-1/3 aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-md -mr-10 sm:-mr-16 z-0 -rotate-2 opacity-90 transition-transform duration-500 hover:rotate-0">
            <img
              src={IMAGES.products.bottle.src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Dominant Image (1.6:1) */}
          <div className="w-3/5 sm:w-2/3 aspect-[1.6/1] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl z-10 transition-transform duration-500 hover:scale-[1.01]">
            <img
              src={IMAGES.collage.center.src}
              alt={IMAGES.collage.center.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Peeking Image (+2 deg) */}
          <div className="w-1/4 sm:w-1/3 aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-md -ml-10 sm:-ml-16 z-0 rotate-2 opacity-90 transition-transform duration-500 hover:rotate-0">
            <img
              src={IMAGES.gallery.ceramicPots.src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Brand Philosophy Statement with Inline Chips */}
        <div className="mx-auto max-w-3xl text-center mt-10 md:mt-14 px-4">
          <h2
            id="statement-heading"
            className="font-display text-xl sm:text-2xl md:text-[2rem] font-light leading-relaxed text-[#5E615C] text-balance"
          >
            Discover our commitment to{' '}
            {/* Inline Chip 1 */}
            <span
              className="inline-block align-middle w-11 sm:w-13 h-5 sm:h-6 rounded-full overflow-hidden mx-1.5 shadow-xs border border-black/10 select-none"
              aria-hidden="true"
            >
              <img
                src={IMAGES.newsletter.yellowPot.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </span>{' '}
            <Em className="text-[#1B1F1C] font-normal">sustainable</Em> materials, low-impact
            production, and <Em className="text-[#1B1F1C] font-normal">ethical sourcing</Em>{' '}
            partnerships — all crafted to support a healthier planet and a{' '}
            {/* Inline Chip 2 */}
            <span
              className="inline-block align-middle w-11 sm:w-13 h-5 sm:h-6 rounded-full overflow-hidden mx-1.5 shadow-xs border border-black/10 select-none"
              aria-hidden="true"
            >
              <img
                src={IMAGES.gallery.sizzlePan.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </span>{' '}
            <Em className="text-[#1B1F1C] font-normal">greener kitchen.</Em>
          </h2>
        </div>
      </Container>
    </section>
  );
};
