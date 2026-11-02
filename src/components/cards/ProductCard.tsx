import React, { useState } from 'react';
import { Check, Clock, X } from 'lucide-react';
import { Product, ProductVariant } from '../../data/products';
import { CATEGORIES } from '../../data/categories';
import { formatPrice } from '../../lib/format';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SafeImage } from '../ui/SafeImage';
import { useCart } from '../../hooks/useCart';

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
}

const AVAILABILITY = {
  'in-stock': { label: 'In stock', Icon: Check, tone: 'text-slate-600' },
  preorder: { label: 'Pre-order', Icon: Clock, tone: 'text-slate-600' },
  'out-of-stock': { label: 'Out of stock', Icon: X, tone: 'text-slate-600' },
} as const;

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants?.[0]
  );
  const { addItem } = useCart();

  const categoryName = CATEGORIES.find((c) => c.key === product.category)?.name ?? product.category;
  const availability = AVAILABILITY[product.availability];
  const isOutOfStock = product.availability === 'out-of-stock';
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, selectedVariant, 1);
  };

  return (
    <article
      className="group flex flex-col h-full bg-neutral-50 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-md"
      onClick={() => onSelect?.(product)}
    >
      <div className="relative aspect-[4/5] w-full bg-gradient-to-b from-mist to-neutral-50 overflow-hidden flex items-center justify-center p-6">
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge tone={product.badge === 'Deal' ? 'offer' : 'default'}>{product.badge}</Badge>
          </div>
        )}
        <SafeImage
          slot={product.image}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 48vw, 85vw"
          className="!w-[80%] !h-[80%] object-contain drop-shadow-md transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">
          {categoryName}
        </span>

        <h3 className="font-body text-[15px] font-medium leading-snug text-navy-900 line-clamp-2 min-h-[2.6rem] mt-1">
          {product.title}
        </h3>

        {product.variants && product.variants.length > 0 && (
          <div
            className="flex items-center gap-2 mt-2"
            role="radiogroup"
            aria-label={`Colour options for ${product.title}`}
          >
            {product.variants.map((v) => {
              const isSelected = selectedVariant?.id === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={v.name}
                  title={v.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVariant(v);
                  }}
                  className={`w-4 h-4 rounded-full border border-navy-900/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-blue-600 ${
                    isSelected ? 'ring-2 ring-offset-1 ring-blue-600' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: v.color }}
                />
              );
            })}
          </div>
        )}

        <div className="mt-3 flex items-baseline gap-2 flex-wrap">
          <span className="font-display text-lg font-semibold text-navy-900 tabular-nums">
            {formatPrice(product.price)}
          </span>
          {discount !== null && product.originalPrice && (
            <>
              <span className="text-xs text-slate-600 line-through tabular-nums">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-xs font-semibold text-navy-900 bg-offer px-1.5 py-0.5 rounded-sm">
                −{discount}%
              </span>
            </>
          )}
        </div>

        <p className={`mt-1 flex items-center gap-1 text-xs ${availability.tone}`}>
          <availability.Icon className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{availability.label}</span>
        </p>

        <Button
          variant="primary"
          size="md"
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          aria-label={
            isOutOfStock
              ? `${product.title} is out of stock`
              : `${product.availability === 'preorder' ? 'Pre-order' : 'Add'} ${product.title}${
                  product.availability === 'preorder' ? '' : ' to cart'
                }`
          }
          className="mt-4 w-full"
        >
          {isOutOfStock ? 'Out of stock' : product.availability === 'preorder' ? 'Pre-order' : 'Add to cart'}
        </Button>
      </div>
    </article>
  );
};
