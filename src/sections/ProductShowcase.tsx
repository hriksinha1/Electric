import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { ProductCard } from '../components/cards/ProductCard';
import { PRODUCTS, Product } from '../data/products';
import { CATEGORIES, CategoryKey } from '../data/categories';
import { Em } from '../components/ui/Em';
import { useCarousel } from '../hooks/useCarousel';

interface ProductShowcaseProps {
  activeCategoryFilter: CategoryKey | null;
  onSelectFilter: (key: CategoryKey | null) => void;
  onSelectProduct?: (product: Product) => void;
}

const ARROW =
  'absolute top-[35%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-navy-900 shadow-lg flex items-center justify-center hover:bg-neutral-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 border border-navy-900/5';

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  activeCategoryFilter,
  onSelectFilter,
  onSelectProduct,
}) => {
  const displayed = activeCategoryFilter
    ? PRODUCTS.filter((p) => p.category === activeCategoryFilter)
    : PRODUCTS;
  const { ref, canScrollLeft, canScrollRight, scrollByCards } = useCarousel([activeCategoryFilter]);
  const activeName = CATEGORIES.find((c) => c.key === activeCategoryFilter)?.name;

  const chip = (active: boolean) =>
    `inline-flex items-center gap-1.5 h-9 px-3.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
      active ? 'bg-blue-600 text-white' : 'bg-neutral-50 text-navy-900 hover:bg-blue-50'
    }`;

  return (
    <section id="shop" aria-labelledby="shop-heading" className="w-full pt-12 md:pt-16 pb-6 scroll-mt-4">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
          <div>
            <h2
              id="shop-heading"
              className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium leading-[1.15] tracking-tight text-navy-900 text-balance"
            >
              Technology <Em>Essentials</Em>
            </h2>
            <p className="font-body text-sm md:text-base text-slate-600 mt-1">
              Discover products designed for your everyday life.
            </p>
            <p className="font-body text-xs text-slate-600 mt-1">Sample catalogue. Products and prices are for demonstration.</p>
          </div>
          <a
            href="#categories"
            className="font-body text-sm font-medium text-blue-700 underline underline-offset-4 hover:text-blue-600 transition-colors"
          >
            View all →
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter products by category">
          <button type="button" className={chip(!activeCategoryFilter)} aria-pressed={!activeCategoryFilter} onClick={() => onSelectFilter(null)}>
            All
          </button>
          {CATEGORIES.map((c) => {
            const active = c.key === activeCategoryFilter;
            return (
              <button
                key={c.id}
                type="button"
                className={chip(active)}
                aria-pressed={active}
                onClick={() => onSelectFilter(active ? null : c.key)}
              >
                {c.name}
                {active && <X className="w-3.5 h-3.5" aria-label="Clear filter" />}
              </button>
            );
          })}
        </div>

        {displayed.length === 0 ? (
          <div className="rounded-lg bg-neutral-50 py-14 px-6 text-center" role="status">
            <p className="font-display text-lg text-navy-900">No sample products here yet</p>
            <p className="font-body text-sm text-slate-600 mt-1">
              {activeName ? `${activeName} will appear here once products are added.` : ''}
            </p>
            <button
              type="button"
              onClick={() => onSelectFilter(null)}
              className="mt-4 text-sm font-medium text-blue-700 underline underline-offset-4"
            >
              Show all products
            </button>
          </div>
        ) : (
          <div className="relative">
            {canScrollLeft && (
              <button onClick={() => scrollByCards('left')} className={`${ARROW} left-2`} aria-label="Previous products">
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
            {canScrollRight && (
              <button onClick={() => scrollByCards('right')} className={`${ARROW} right-2`} aria-label="Next products">
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            )}

            <div
              ref={ref}
              className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 -mx-1 px-1"
              role="region"
              aria-roledescription="carousel"
              aria-label="Products"
              tabIndex={0}
            >
              {displayed.map((product) => (
                <div key={product.id} className="flex-none snap-start w-[85%] sm:w-[48%] lg:w-[calc((100%-36px)/4)]">
                  <ProductCard product={product} onSelect={onSelectProduct} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
