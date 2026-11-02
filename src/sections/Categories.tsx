import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { CATEGORIES, CategoryKey } from '../data/categories';
import { CategoryCard } from '../components/cards/CategoryCard';
import { Em } from '../components/ui/Em';
import { useCarousel } from '../hooks/useCarousel';

interface CategoriesProps {
  onSelectCategory: (key: CategoryKey) => void;
}

const FEATURED = CATEGORIES.filter((c) => c.featured);

const ARROW =
  'absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-navy-900 shadow-lg flex items-center justify-center hover:bg-neutral-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 border border-navy-900/5';

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const { ref, canScrollLeft, canScrollRight, scrollByCards } = useCarousel();

  return (
    <section id="categories" aria-labelledby="categories-heading" className="w-full pt-10 md:pt-14 pb-6 scroll-mt-4">
      <Container>
        <h2
          id="categories-heading"
          className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium leading-[1.15] tracking-tight text-navy-900 mb-6 md:mb-8"
        >
          Explore our <Em>categories</Em>
        </h2>

        <div className="relative">
          {canScrollLeft && (
            <button onClick={() => scrollByCards('left')} className={`${ARROW} left-2`} aria-label="Previous categories">
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
          {canScrollRight && (
            <button onClick={() => scrollByCards('right')} className={`${ARROW} right-2`} aria-label="Next categories">
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          )}

          <div
            ref={ref}
            className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 -mx-1 px-1"
            role="region"
            aria-roledescription="carousel"
            aria-label="Categories"
          >
            {FEATURED.map((category) => (
              <div key={category.id} className="flex-none snap-start w-[85%] sm:w-[48%] lg:w-[calc((100%-36px)/4)]">
                <CategoryCard category={category} onFilter={onSelectCategory} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
