import React, { useRef, useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { CATEGORIES } from '../data/categories';
import { CategoryCard } from '../components/cards/CategoryCard';
import { SparkleIcon, ArrowLeftIcon, ArrowRightIcon } from '../components/icons';
import { Em } from '../components/ui/Em';

interface CategoriesProps {
  onSelectCategory: (filterKey: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
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

  const scrollByCard = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth / (window.innerWidth >= 1024 ? 4 : 2);
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="categories" aria-labelledby="categories-heading" className="w-full pt-10 md:pt-14 pb-6">
      <Container>
        {/* Heading */}
        <div className="mb-6 md:mb-8">
          <span className="font-display text-sm md:text-base font-light text-[#5E615C] tracking-tight block">
            Explore our thoughtful and
          </span>
          <h2
            id="categories-heading"
            className="font-display text-2xl md:text-3xl font-light text-[#1B1F1C] tracking-tight flex items-center gap-2 mt-0.5"
          >
            <span>planet-first</span>
            <SparkleIcon className="w-3.5 h-3.5 text-[#1B1F1C]" />
            <Em className="text-[#1B1F1C]">Categories</Em>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Overlaid Left Navigation Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scrollByCard('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-[#1B1F1C] shadow-lg flex items-center justify-center hover:bg-[#FAF8F1] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14543B] border border-black/5"
              aria-label="Previous categories"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
          )}

          {/* Overlaid Right Navigation Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scrollByCard('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-[#1B1F1C] shadow-lg flex items-center justify-center hover:bg-[#FAF8F1] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14543B] border border-black/5"
              aria-label="Next categories"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          )}

          {/* Category Track */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 -mx-1 px-1"
            role="region"
            aria-label="Categories carousel"
          >
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="flex-none snap-start w-[85%] sm:w-[48%] lg:w-[calc((100%-36px)/4)]"
              >
                <CategoryCard category={category} onFilter={onSelectCategory} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
