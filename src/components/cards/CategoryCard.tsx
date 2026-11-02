import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Category, CategoryKey } from '../../data/categories';
import { SafeImage } from '../ui/SafeImage';

interface CategoryCardProps {
  category: Category;
  onFilter: (key: CategoryKey) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onFilter }) => {
  const handleClick = () => {
    onFilter(category.key);
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="group relative aspect-[2/3] w-full rounded-lg overflow-hidden select-none">
      {category.image && (
        <SafeImage
          slot={category.image}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 48vw, 85vw"
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-center text-center text-white z-10">
        <h3 className="font-display text-xl font-medium tracking-tight mb-3.5">{category.name}</h3>
        <button
          type="button"
          onClick={handleClick}
          aria-label={`Shop ${category.name}`}
          className="inline-flex items-center gap-1 h-8 px-3.5 rounded-md bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
        >
          <span>Shop</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
