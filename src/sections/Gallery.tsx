import React, { useRef, useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryTile } from '../components/cards/GalleryTile';
import { SparkleIcon, ArrowLeftIcon, ArrowRightIcon } from '../components/icons';
import { Em } from '../components/ui/Em';

export const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons, { passive: true });
      window.addEventListener('resize', updateScrollButtons);
      return () => {
        el.removeEventListener('scroll', updateScrollButtons);
        window.removeEventListener('resize', updateScrollButtons);
      };
    }
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollStep = scrollRef.current.clientWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollStep : scrollStep,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="w-full pt-12 md:pt-16 pb-8">
      <Container>
        {/* Heading & Arrow controls */}
        <div className="flex items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <span className="font-display text-sm md:text-base font-light text-[#5E615C] tracking-tight block">
              Thoughtful, Planet-Prioritizing Ideas
            </span>
            <h2
              id="gallery-heading"
              className="font-display text-2xl md:text-3xl font-light text-[#1B1F1C] tracking-tight flex items-center gap-2 mt-0.5"
            >
              <span>and Inspiration</span>
              <SparkleIcon className="w-3.5 h-3.5 text-[#1B1F1C]" />
              <Em className="text-[#1B1F1C]">Gallery</Em>
            </h2>
          </div>

          {/* Top-Right Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollByAmount('left')}
              disabled={!canScrollLeft}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/[0.06] hover:bg-black/10 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-[#1B1F1C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14543B]"
              aria-label="Previous gallery images"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollByAmount('right')}
              disabled={!canScrollRight}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/[0.06] hover:bg-black/10 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-[#1B1F1C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14543B]"
              aria-label="Next gallery images"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5-up alternating height gallery carousel */}
        <div
          ref={scrollRef}
          className="flex items-start gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 -mx-1 px-1"
          role="region"
          aria-label="Inspiration gallery"
        >
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex-none snap-start w-[65%] sm:w-[45%] md:w-[31%] lg:w-[calc((100%-48px)/5)]"
            >
              <GalleryTile item={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
