import React, { useEffect } from 'react';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../lib/format';
import { Button } from '../ui/Button';
import { SafeImage } from '../ui/SafeImage';

interface CartDrawerProps {
  onShowToast: (msg: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onShowToast }) => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, itemCount } = useCart();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeCart();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div className="fixed inset-0 bg-navy-950/50 backdrop-blur-xs" onClick={closeCart} />

      <div className="relative w-full max-w-md bg-neutral-50 h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-navy-900/10">
        <div className="flex items-center justify-between p-6 border-b border-navy-900/10 bg-white">
          <div className="flex items-center gap-2">
            <h2 className="font-display text-xl font-semibold text-navy-900">Your cart</h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-sm bg-blue-50 text-blue-700">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-navy-900/5 text-slate-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <ShoppingBag className="w-7 h-7" aria-hidden="true" />
              </div>
              <p className="font-display text-lg text-navy-900">Your cart is empty</p>
              <p className="text-sm text-slate-600 mt-1 max-w-xs">
                Browse the sample catalogue to try out the cart.
              </p>
              <Button variant="primary" size="md" href="#shop" onClick={closeCart} className="mt-6">
                Start shopping
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.variant?.id ?? ''}`}
                className="flex gap-4 p-4 bg-white rounded-lg border border-navy-900/5 shadow-xs"
              >
                <div className="w-20 h-20 rounded-md bg-mist p-1 shrink-0 overflow-hidden">
                  <SafeImage slot={item.product.image} className="!object-contain" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="font-body text-sm font-medium text-navy-900 line-clamp-2">
                      {item.product.title}
                    </h3>
                    {item.variant && (
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="w-3 h-3 rounded-full border border-navy-900/15 inline-block"
                          style={{ backgroundColor: item.variant.color }}
                        />
                        <span className="text-xs text-slate-600">{item.variant.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-navy-900/5">
                    <div className="flex items-center border border-navy-900/15 rounded-md bg-neutral-50 overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variant?.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-navy-900/5 text-slate-600 transition-colors"
                        aria-label={`Decrease quantity of ${item.product.title}`}
                      >
                        <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                      <span className="px-2.5 text-xs font-semibold tabular-nums" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variant?.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-navy-900/5 text-slate-600 transition-colors"
                        aria-label={`Increase quantity of ${item.product.title}`}
                      >
                        <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-semibold text-navy-900 tabular-nums">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(item.product.id, item.variant?.id)}
                        className="text-slate-600 hover:text-red-700 p-1 transition-colors"
                        aria-label={`Remove ${item.product.title}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-navy-900/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-body text-slate-600">Subtotal</span>
              <span className="font-display text-xl font-bold text-navy-900 tabular-nums">
                {formatPrice(subtotal)}
              </span>
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => onShowToast('Demo only. Checkout and payments are not connected.')}
              className="w-full"
            >
              Proceed to checkout
            </Button>
            <p className="text-[11px] text-center text-slate-600">
              Sample catalogue. No real payment or order will be made.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
