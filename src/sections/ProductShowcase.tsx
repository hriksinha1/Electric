import React, { useRef, useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { ProductCard } from '../components/cards/ProductCard';
import { PRODUCTS, Product } from '../data/products';
import { SparkleIcon, ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '../components/icons';
import { Em } from '../components/ui/Em';

interface ProductShowcaseProps {
  activeCategoryFilter?: string | null;
  onClearFilter?: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  activeCategoryFilter,
  onClearFilter,
  onSelectProduct,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const displayedProducts = activeCategoryFilter
    ? PRODUCTS.filter((p) => p.category.toLowerCase() === activeCategoryFilter.toLowerCase())
    : PRODUCTS;

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
  }, [displayedProducts]);

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
    <section id="shop" aria-labelledby="shop-heading" className="w-full pt-12 md:pt-16 pb-6">
      <Container>
        {/* Heading Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <span className="font-display text-sm md:text-base font-light text-[#5E615C] tracking-tight block">
              Eco Essentials Planet-Friendly
            </span>
            <h2
              id="shop-heading"
              className="font-display text-2xl md:text-3xl font-light text-[#1B1F1C] tracking-tight flex items-center gap-2 mt-0.5"
            >
              <span>Bestselling</span>
              <SparkleIcon className="w-3.5 h-3.5 text-[#1B1F1C]" />
              <Em className="text-[#1B1F1C]">Products</Em>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {activeCategoryFilter && (
              <button
                onClick={onClearFilter}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EEEFDC] hover:bg-[#E5E6CE] text-[#14543B] text-xs font-medium rounded-full transition-colors"
                aria-label={`Clear ${activeCategoryFilter} filter`}
              >
                <span>Showing: {activeCategoryFilter}</span>
                <CloseIcon className="w-3.5 h-3.5" />
              </button>
            )}

            <a
              href="#categories"
              className="font-body text-xs md:text-sm font-medium text-[#1B1F1C] underline underline-offset-4 hover:text-[#14543B] transition-colors"
            >
              More products →
            </a>
          </div>
        </div>

        {/* Carousel Container with Overlaid Arrow Buttons */}
        <div className="relative group/carousel">
          {/* Overlaid Left Navigation Button */}
          {canScrollLeft && (
            <button
              onClick={() => scrollByCard('left')}
              className="absolute left-2 top-[35%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-[#1B1F1C] shadow-lg flex items-center justify-center hover:bg-[#FAF8F1] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14543B] border border-black/5"
              aria-label="Previous products"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
          )}

          {/* Overlaid Right Navigation Button */}
          {canScrollRight && (
            <button
              onClick={() => scrollByCard('right')}
              className="absolute right-2 top-[35%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-[#1B1F1C] shadow-lg flex items-center justify-center hover:bg-[#FAF8F1] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14543B] border border-black/5"
              aria-label="Next products"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          )}

          {/* Products Scroll Track */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 -mx-1 px-1"
            role="region"
            aria-label="Products carousel"
          >
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="flex-none snap-start w-[85%] sm:w-[48%] lg:w-[calc((100%-36px)/4)]"
              >
                <ProductCard product={product} onSelect={onSelectProduct} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
