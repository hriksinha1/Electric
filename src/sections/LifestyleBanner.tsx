import React from 'react';
import { Container } from '../components/ui/Container';
import { SafeImage } from '../components/ui/SafeImage';
import { IMAGES } from '../data/images';
import { Em } from '../components/ui/Em';

export const LifestyleBanner: React.FC = () => {
  return (
    <section aria-label="Everyday technology" className="w-full py-6 md:py-8">
      <Container>
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-[2.16/1] rounded-xl overflow-hidden bg-navy-900">
          <SafeImage
            slot={IMAGES.lifestyle}
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="absolute inset-0 object-center select-none"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(0deg, rgba(11,18,32,0.92) 0%, rgba(11,18,32,0.55) 45%, rgba(11,18,32,0) 80%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12 z-10 max-w-[55%] min-w-[16rem]">
            <p className="font-display text-[clamp(1.25rem,2.4vw,2rem)] font-normal leading-snug text-white text-balance">
              Technology that fits your <Em onDark>everyday life</Em>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
