import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES, CategoryKey } from '../../data/categories';
import { formatPrice } from '../../lib/format';
import { SafeImage } from '../ui/SafeImage';
import { useCart } from '../../hooks/useCart';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (key: CategoryKey) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, onSelectCategory }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addItem } = useCart();

  const q = query.toLowerCase().trim();
  const results = PRODUCTS.filter((p) => {
    if (!q) return true;
    const categoryName = CATEGORIES.find((c) => c.key === p.category)?.name ?? '';
    return [p.title, p.category, categoryName, p.description].some((s) => s.toLowerCase().includes(q));
  });

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(t);
        document.body.style.overflow = '';
      };
    }
    setQuery('');
  }, [isOpen]);

  const pickProduct = (index: number) => {
    const product = results[index];
    if (!product || product.availability === 'out-of-stock') return;
    addItem(product);
    onClose();
  };

  const pickCategory = (key: CategoryKey) => {
    onSelectCategory(key);
    onClose();
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      pickProduct(selectedIndex);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-navy-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Product search"
      onKeyDown={handleKeyDown}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-navy-900/10">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-navy-900/10 bg-neutral-50">
          <Search className="w-5 h-5 text-slate-600 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            aria-label="Search products"
            placeholder="Search smartphones, laptops, headphones, TVs..."
            className="w-full bg-transparent text-navy-900 placeholder-slate-600 text-base md:text-lg focus:outline-none font-body"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-navy-900/5 text-slate-600 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {!q && (
          <div className="flex flex-wrap gap-2 px-5 pt-4">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => pickCategory(c.key)}
                className="px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 text-xs font-medium hover:bg-blue-600 hover:text-white transition-colors"
              >
                {c.name}
              </button>
            ))}
          </div>
        )}

        <div className="max-h-[55vh] overflow-y-auto p-4 flex flex-col gap-2">
          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-600">
              <p className="font-display text-lg text-navy-900">No matches found</p>
              <p className="text-sm mt-1">Try &quot;headphones&quot;, &quot;laptop&quot; or &quot;smart plug&quot;.</p>
            </div>
          ) : (
            results.map((product, idx) => {
              const unavailable = product.availability === 'out-of-stock';
              return (
                <div
                  key={product.id}
                  onClick={() => pickProduct(idx)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                    unavailable ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
                  } ${idx === selectedIndex ? 'bg-blue-50' : 'hover:bg-neutral-50'}`}
                >
                  <div className="w-14 h-14 rounded-md bg-mist p-1 shrink-0 overflow-hidden">
                    <SafeImage slot={product.image} className="!object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">
                      {CATEGORIES.find((c) => c.key === product.category)?.name}
                    </span>
                    <p className="font-body text-sm font-medium text-navy-900 truncate mt-0.5">{product.title}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-display text-sm font-semibold text-navy-900 tabular-nums block">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-[11px] text-blue-700 font-medium">
                      {unavailable ? 'Out of stock' : '+ Add to cart'}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="px-5 py-2.5 bg-neutral-50 border-t border-navy-900/5 flex items-center justify-between text-xs text-slate-600">
          <span>↑ ↓ to navigate</span>
          <span>Enter to add</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
};
