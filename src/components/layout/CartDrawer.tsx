import React, { useEffect } from 'react';
import { useCart } from '../../hooks/useCart';
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon } from '../icons';
import { Button } from '../ui/Button';

interface CartDrawerProps {
  onShowToast: (msg: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onShowToast }) => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, itemCount } = useCart();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const handleCheckout = () => {
    onShowToast('Demo only — payment gateways are not connected.');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Shopping Cart">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-md bg-[#FAF8F1] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-black/10">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-black/10 bg-white">
          <div className="flex items-center gap-2">
            <h2 className="font-display text-xl font-semibold text-[#1B1F1C]">Your Cart</h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EEEFDC] text-[#14543B]">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-black/5 text-[#5E615C] transition-colors"
            aria-label="Close cart"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#EEEFDC] flex items-center justify-center text-[#14543B] mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <p className="font-display text-lg text-[#1B1F1C]">Your cart is empty</p>
              <p className="text-sm text-[#5E615C] mt-1 max-w-xs">
                Explore our planet-friendly essentials to start living sustainably.
              </p>
              <Button variant="primary" size="md" onClick={closeCart} className="mt-6">
                Start shopping
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.variant.id}`}
                className="flex gap-4 p-4 bg-white rounded-xl border border-black/5 shadow-xs"
              >
                <img
                  src={item.product.image}
                  alt={item.product.alt}
                  className="w-20 h-20 object-contain rounded-lg bg-[#EFECE4] p-1 shrink-0"
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="font-body text-sm font-medium text-[#1B1F1C] line-clamp-1">
                      {item.product.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="w-3 h-3 rounded-full border border-black/15 inline-block"
                        style={{ backgroundColor: item.variant.color }}
                      />
                      <span className="text-xs text-[#5E615C]">{item.variant.name}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/5">
                    {/* Stepper */}
                    <div className="flex items-center border border-black/10 rounded-full bg-[#FAF8F1] overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.variant.id, item.quantity - 1)
                        }
                        className="p-1.5 hover:bg-black/5 text-[#5E615C] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <MinusIcon className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-semibold tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.variant.id, item.quantity + 1)
                        }
                        className="p-1.5 hover:bg-black/5 text-[#5E615C] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <PlusIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-semibold text-[#1B1F1C] tabular-nums">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.product.id, item.variant.id)}
                        className="text-[#5E615C] hover:text-red-600 p-1 transition-colors"
                        aria-label={`Remove ${item.product.title}`}
                      >
                        <TrashIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Subtotal & Action */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-black/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-body text-[#5E615C]">Subtotal</span>
              <span className="font-display text-xl font-bold text-[#1B1F1C] tabular-nums">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-[#5E615C]">
              Taxes and carbon-neutral shipping calculated at checkout.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={handleCheckout}
              className="w-full !h-12 text-base font-semibold shadow-md"
            >
              Proceed to Checkout
            </Button>
            <p className="text-[11px] text-center text-[#5E615C]">
              Demo Store — No real payment or charges will be made.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
