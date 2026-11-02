import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { REVIEWS } from '../data/reviews';
import { ReviewCard } from '../components/cards/ReviewCard';
import { useCarousel } from '../hooks/useCarousel';

const NAV =
  'w-9 h-9 rounded-full bg-white/80 hover:bg-white text-navy-900 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600';

export const Reviews: React.FC = () => {
  const { ref, canScrollLeft, canScrollRight } = useCarousel();
  const [activeIndex, setActiveIndex] = useState(0);

  if (REVIEWS.length === 0) return null;

  const updateActive = () => {
    const el = ref.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    (Array.from(el.children) as HTMLElement[]).forEach((child, i) => {
      const d = Math.abs(center - (child.offsetLeft + child.offsetWidth / 2));
      if (d < min) {
        min = d;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  const scrollByCard = (direction: 'left' | 'right') =>
    ref.current?.scrollBy({ left: direction === 'left' ? -340 : 340, behavior: 'smooth' });

  return (
    <section aria-labelledby="reviews-heading" className="w-full py-8 md:py-12">
      <Container>
        <div className="bg-blue-50 rounded-xl p-6 sm:p-10 md:p-12 overflow-hidden">
          <div className="flex items-center justify-between gap-6 mb-8 md:mb-10">
            <h2
              id="reviews-heading"
              className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium leading-[1.15] tracking-tight text-navy-900"
            >
              What customers say
            </h2>
            <div className="flex items-center gap-2">
              <button onClick={() => scrollByCard('left')} disabled={!canScrollLeft} className={NAV} aria-label="Previous reviews">
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button onClick={() => scrollByCard('right')} disabled={!canScrollRight} className={NAV} aria-label="Next reviews">
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={ref}
            onScroll={updateActive}
            className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-6 px-6 sm:-mx-10 sm:px-10 py-3"
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer reviews"
            tabIndex={0}
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
        </div>
      </Container>
    </section>
  );
};
