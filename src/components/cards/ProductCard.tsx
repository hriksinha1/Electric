import React, { useState } from 'react';
import { Product, ProductVariant } from '../../data/products';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useCart } from '../../hooks/useCart';

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, selectedVariant, 1);
  };

  return (
    <article
      className="group flex flex-col h-full bg-[#FAF8F1] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
      onClick={() => onSelect?.(product)}
    >
      {/* 7:9 Image container on warm stone gradient */}
      <div className="relative aspect-[7/9] w-full bg-gradient-to-b from-[#C9C8C1] to-[#EFECE4] overflow-hidden flex items-center justify-center p-6">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <Badge>{product.badge}</Badge>
          </div>
        )}

        {/* Product photo with scale hover */}
        <img
          src={selectedVariant.image || product.image}
          alt={product.alt}
          loading="lazy"
          decoding="async"
          className="w-[82%] h-[82%] object-contain drop-shadow-md transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Info Area */}
      <div className="flex flex-col flex-1 p-4 bg-[#FAF8F1]">
        {/* Swatches */}
        <div
          className="flex items-center gap-2 mb-2.5"
          role="radiogroup"
          aria-label={`Color variants for ${product.title}`}
        >
          {product.variants.map((v) => {
            const isSelected = selectedVariant.id === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVariant(v);
                }}
                className={`w-3.5 h-3.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#14543B] ${
                  isSelected ? 'ring-2 ring-offset-1 ring-[#14543B] scale-110' : 'opacity-85 hover:opacity-100'
                }`}
                style={{ backgroundColor: v.color }}
                aria-label={v.name}
                aria-checked={isSelected}
                role="radio"
              />
            );
          })}
        </div>

        {/* Title (2-line clamp) */}
        <h3 className="font-body text-[15px] font-normal leading-snug text-[#1B1F1C] line-clamp-2 min-h-[2.6rem] mb-3">
          {product.title}
        </h3>

        {/* Price & Action */}
        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="font-display text-base font-semibold text-[#1B1F1C] tabular-nums">
            ${product.price.toFixed(2)}
          </span>
          <Button
            variant="primary"
            size="md"
            onClick={handleAddToCart}
            aria-label={`Add ${product.title} to cart`}
            className="!h-8 !px-3.5 !text-xs font-medium"
          >
            + Cart
          </Button>
        </div>
      </div>
    </article>
  );
};
