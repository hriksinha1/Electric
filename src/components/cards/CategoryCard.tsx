import React from 'react';
import { Category } from '../../data/categories';
import { Button } from '../ui/Button';
import { Em } from '../ui/Em';

interface CategoryCardProps {
  category: Category;
  onFilter: (filterKey: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onFilter }) => {
  const handleClick = () => {
    onFilter(category.filterKey);
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative aspect-[2/3] w-full rounded-xl overflow-hidden cursor-pointer select-none"
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Bottom Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08120E]/90 via-[#08120E]/30 to-transparent pointer-events-none" />

      {/* Card Content (Center-Bottom) */}
      <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-center text-center text-white z-10">
        <span className="font-display text-sm tracking-wide text-white/90">Explore</span>
        <h3 className="font-display text-xl text-white mt-0.5 mb-3.5 tracking-tight">
          <Em className="text-white">{category.name}</Em>
        </h3>

        <Button
          variant="cream"
          size="xs"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="shadow-md !h-7.5 !px-3.5 !text-xs"
        >
          <span>Shop</span>
          <span className="ml-1 text-xs group-hover:translate-x-0.5 transition-transform">→</span>
        </Button>
      </div>
    </div>
  );
};
