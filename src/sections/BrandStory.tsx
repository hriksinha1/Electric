import React from 'react';
import { Container } from '../components/ui/Container';
import { SafeImage } from '../components/ui/SafeImage';
import { IMAGES } from '../data/images';
import { Em } from '../components/ui/Em';

const LEFT = { ...IMAGES.collage.left, decorative: true };
const RIGHT = { ...IMAGES.collage.right, decorative: true };
const CHIP_A = { ...IMAGES.collage.left, decorative: true };
const CHIP_B = { ...IMAGES.collage.right, decorative: true };

export const BrandStory: React.FC = () => {
  return (
    <section id="about" aria-labelledby="statement-heading" className="w-full pt-12 md:pt-16 pb-12 scroll-mt-4">
      <Container>
        <div className="relative mx-auto max-w-4xl flex items-center justify-center my-6 py-4 px-2 select-none">
          <div className="w-1/4 sm:w-1/3 aspect-[3/4] rounded-lg overflow-hidden shadow-md -mr-10 sm:-mr-16 z-0 -rotate-2 opacity-90 transition-transform duration-500 hover:rotate-0">
            <SafeImage slot={LEFT} sizes="(min-width: 640px) 25vw, 20vw" />
          </div>

          <div className="w-3/5 sm:w-2/3 aspect-[1.6/1] rounded-xl overflow-hidden shadow-xl z-10 transition-transform duration-500 hover:scale-[1.01]">
            <SafeImage slot={IMAGES.collage.center} sizes="(min-width: 1024px) 640px, 60vw" />
          </div>

          <div className="w-1/4 sm:w-1/3 aspect-[3/4] rounded-lg overflow-hidden shadow-md -ml-10 sm:-ml-16 z-0 rotate-2 opacity-90 transition-transform duration-500 hover:rotate-0">
            <SafeImage slot={RIGHT} sizes="(min-width: 640px) 25vw, 20vw" />
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center mt-10 md:mt-14 px-4">
          <h2
            id="statement-heading"
            className="font-display text-[clamp(1.25rem,2.4vw,2rem)] font-normal leading-relaxed text-slate-600 text-balance"
          >
            Bringing{' '}
            <span
              className="inline-block align-middle w-11 sm:w-14 h-5 sm:h-6 rounded-full overflow-hidden mx-1.5 border border-navy-900/10"
              aria-hidden="true"
            >
              <SafeImage slot={CHIP_A} className="object-[50%_30%]" />
            </span>{' '}
            <Em>useful technology</Em> closer to{' '}
            <span
              className="inline-block align-middle w-11 sm:w-14 h-5 sm:h-6 rounded-full overflow-hidden mx-1.5 border border-navy-900/10"
              aria-hidden="true"
            >
              <SafeImage slot={CHIP_B} className="object-[50%_70%]" />
            </span>{' '}
            <Em>everyday life.</Em>
          </h2>
        </div>
      </Container>
    </section>
  );
};
