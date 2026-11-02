import React, { useRef, useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { REVIEWS } from '../data/reviews';
import { SITE_CONFIG } from '../data/site';
import { ReviewCard } from '../components/cards/ReviewCard';
import { Em } from '../components/ui/Em';
import { ArrowLeftIcon, ArrowRightIcon } from '../components/icons';

export const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Second card (Darlene Robertson) active initially
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Find card closest to the horizontal middle
    const children = Array.from(scrollRef.current.children) as HTMLElement[];
    const centerPoint = scrollLeft + clientWidth / 2;

    let closestIdx = 0;
    let minDistance = Infinity;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(centerPoint - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollState, { passive: true });
      window.addEventListener('resize', updateScrollState);
      updateScrollState();
      return () => {
        el.removeEventListener('scroll', updateScrollState);
        window.removeEventListener('resize', updateScrollState);
      };
    }
  }, []);

  const scrollByCard = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section aria-labelledby="reviews-heading" className="w-full py-8 md:py-12">
      <Container>
        <div className="bg-[#EEEFDC] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden shadow-xs">
          {/* Top Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 md:mb-10">
            <div className="flex items-center gap-4">
              {/* 4.9/5 Rating */}
              <div className="flex items-baseline">
                <span className="font-display text-4xl sm:text-5xl font-light text-[#1B1F1C]">
                  <Em className="text-[#1B1F1C] font-normal">{SITE_CONFIG.reviewsStat.rating}</Em>
                </span>
                <span className="font-display text-xl sm:text-2xl font-light text-[#5E615C]">
                  <Em className="text-[#5E615C] font-normal">{SITE_CONFIG.reviewsStat.outOf}</Em>
                </span>
              </div>

              {/* Text Description */}
              <div className="border-l border-black/15 pl-4">
                <p className="font-body text-xs sm:text-sm text-[#5E615C] leading-snug">
                  {SITE_CONFIG.reviewsStat.count}
                </p>
                <p className="font-body text-xs sm:text-sm font-semibold text-[#1B1F1C] leading-snug">
                  {SITE_CONFIG.reviewsStat.label}
                </p>
              </div>
            </div>

            {/* Prev/Next buttons */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                onClick={() => scrollByCard('left')}
                disabled={!canScrollLeft}
                className="w-9 h-9 rounded-full bg-white/70 hover:bg-white text-[#1B1F1C] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14543B]"
                aria-label="Previous reviews"
              >
                <ArrowLeftIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollByCard('right')}
                disabled={!canScrollRight}
                className="w-9 h-9 rounded-full bg-white/70 hover:bg-white text-[#1B1F1C] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14543B]"
                aria-label="Next reviews"
              >
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Track with Edge-to-Edge Clipping */}
          <div
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-6 px-6 sm:-mx-10 sm:px-10 py-3"
            role="region"
            aria-label="Customer reviews"
          >
            {REVIEWS.map((review, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={review.id}
                  className={`flex-none snap-center transition-all duration-300 w-[280px] sm:w-[320px] md:w-[340px] ${
                    isActive ? 'h-[280px] sm:h-[300px]' : 'h-[260px] sm:h-[280px]'
                  }`}
                >
                  <ReviewCard review={review} isActive={isActive} />
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-black/5 text-[11px] text-[#5E615C] text-center">
            Verified review statistics based on independent customer satisfaction surveys.
          </div>
        </div>
      </Container>
    </section>
  );
};
