import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryTile } from '../components/cards/GalleryTile';
import { Em } from '../components/ui/Em';
import { useCarousel } from '../hooks/useCarousel';

const NAV =
  'w-9 h-9 md:w-10 md:h-10 rounded-full bg-navy-900/[0.06] hover:bg-navy-900/10 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-navy-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600';

export const Gallery: React.FC = () => {
  const { ref, canScrollLeft, canScrollRight, scrollByCards } = useCarousel();

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="w-full pt-12 md:pt-16 pb-8 scroll-mt-4">
      <Container>
        <div className="flex items-end justify-between gap-4 mb-6 md:mb-8">
          <h2
            id="gallery-heading"
            className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium leading-[1.15] tracking-tight text-navy-900"
          >
            Technology in <Em>everyday life</Em>
          </h2>

          <div className="flex items-center gap-2">
            <button onClick={() => scrollByCards('left', 2)} disabled={!canScrollLeft} className={NAV} aria-label="Previous gallery images">
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button onClick={() => scrollByCards('right', 2)} disabled={!canScrollRight} className={NAV} aria-label="Next gallery images">
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="flex items-start gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 -mx-1 px-1"
          role="region"
          aria-roledescription="carousel"
          aria-label="Technology gallery"
          tabIndex={0}
        >
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="flex-none snap-start w-[65%] sm:w-[45%] md:w-[31%] lg:w-[calc((100%-48px)/5)]">
              <GalleryTile item={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
