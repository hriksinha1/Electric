import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS, Product } from '../../data/products';
import { SearchIcon, CloseIcon } from '../icons';
import { useCart } from '../../hooks/useCart';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addItem } = useCart();

  const filteredProducts = PRODUCTS.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredProducts.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredProducts.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const product = filteredProducts[selectedIndex];
      if (product) {
        addItem(product);
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Product Search"
      onKeyDown={handleKeyDown}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/10">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-black/10 bg-[#FAF8F1]">
          <SearchIcon className="w-5 h-5 text-[#5E615C] shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search eco kitchenware, bamboo, kettle, cookware..."
            className="w-full bg-transparent text-[#1B1F1C] placeholder-[#5E615C] text-base md:text-lg focus:outline-none font-body"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#5E615C] hover:text-[#1B1F1C] p-1 text-xs"
              aria-label="Clear search input"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#5E615C] transition-colors"
            aria-label="Close search"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 flex flex-col gap-2">
          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center text-[#5E615C]">
              <p className="font-display text-lg text-[#1B1F1C]">No matches found</p>
              <p className="text-sm mt-1">Try searching for &quot;bamboo&quot;, &quot;kettle&quot;, or &quot;cookware&quot;.</p>
            </div>
          ) : (
            filteredProducts.map((product, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={product.id}
                  onClick={() => {
                    addItem(product);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected ? 'bg-[#EEEFDC]' : 'hover:bg-[#FAF8F1]'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-14 h-14 object-contain rounded-lg bg-[#EFECE4] p-1 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-[#14543B] uppercase tracking-wider">
                        {product.category}
                      </span>
                      {product.badge && (
                        <span className="text-[10px] bg-black/5 px-2 py-0.5 rounded-full text-[#5E615C]">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm font-medium text-[#1B1F1C] truncate mt-0.5">
                      {product.title}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-display text-sm font-semibold text-[#1B1F1C] tabular-nums block">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-[#14543B] font-medium">+ Add to cart</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Search Footer Tips */}
        <div className="px-5 py-2.5 bg-[#FAF8F1] border-t border-black/5 flex items-center justify-between text-xs text-[#5E615C]">
          <span>Navigate with ↑ and ↓</span>
          <span>Press Enter to add to cart</span>
          <span>ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
