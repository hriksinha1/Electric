import React from 'react';
import { Container } from '../components/ui/Container';
import { IMAGES } from '../data/images';
import { Em } from '../components/ui/Em';

export const LifestyleBanner: React.FC = () => {
  return (
    <section aria-label="Kitchen craftsmanship story" className="w-full py-6 md:py-8">
      <Container>
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-[2.16/1] rounded-2xl md:rounded-3xl overflow-hidden shadow-xs">
          {/* Lifestyle Kitchen Image */}
          <img
            src={IMAGES.lifestyle.src}
            alt={IMAGES.lifestyle.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
          />

          {/* Bottom Gradient Scrim */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(0deg, rgba(12,31,23,0.92) 0%, rgba(12,31,23,0.55) 45%, rgba(12,31,23,0) 80%)',
            }}
          />

          {/* Statement Overlaid at Bottom-Left */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12 z-10 max-w-2xl">
            <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-[1.7rem] font-light leading-snug text-white/95">
              We craft <Em className="text-white font-normal">kitchenware</Em> you can trust for
              years to come — through everyday meals and evolving{' '}
              <Em className="text-white font-normal">lifestyles</Em>. Each piece is thoughtfully
              made with <Em className="text-[#F6F0C8] font-normal">sustainable materials</Em>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
