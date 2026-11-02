import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PRODUCTS, Product, ProductVariant } from '../data/products';

export interface CartItem {
  product: Product;
  variant?: ProductVariant;
  quantity: number;
}

/** What is persisted: ids and quantities only, so prices and images never go stale. */
interface StoredLine {
  productId: string;
  variantId?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, variantId: string | undefined, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  /** True once if saved lines referred to products that no longer exist. */
  droppedUnavailable: boolean;
  ackDropped: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = 'sunshineelectric-cart-v1';
const LEGACY_KEY = 'homedine-cart-v1';

const lineKey = (productId: string, variantId?: string) => `${productId}::${variantId ?? ''}`;

function hydrate(): { items: CartItem[]; dropped: boolean } {
  try {
    // Deliberate legacy reference (allowlisted in scripts/verify.mjs). Carts saved before the rebrand hold products that no longer exist; discard them outright.
    localStorage.removeItem(LEGACY_KEY);
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [], dropped: false };
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return { items: [], dropped: false };

    const items: CartItem[] = [];
    let dropped = false;
    for (const line of parsed as StoredLine[]) {
      const product = PRODUCTS.find((p) => p.id === line?.productId);
      const quantity = Number(line?.quantity);
      if (!product || !Number.isFinite(quantity) || quantity < 1) {
        dropped = true;
        continue;
      }
      const variant = product.variants?.find((v) => v.id === line.variantId);
      items.push({ product, variant, quantity: Math.floor(quantity) });
    }
    return { items, dropped };
  } catch {
    return { items: [], dropped: false };
  }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [initial] = useState(hydrate);
  const [items, setItems] = useState<CartItem[]>(initial.items);
  const [droppedUnavailable, setDropped] = useState(initial.dropped);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const lines: StoredLine[] = items.map((i) => ({
        productId: i.product.id,
        variantId: i.variant?.id,
        quantity: i.quantity,
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Storage unavailable or disabled
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (product: Product, variant?: ProductVariant, quantity = 1) => {
    if (product.availability === 'out-of-stock') return;
    const selected = variant ?? product.variants?.[0];
    setItems((prev) => {
      const key = lineKey(product.id, selected?.id);
      const index = prev.findIndex((i) => lineKey(i.product.id, i.variant?.id) === key);
      if (index > -1) {
        return prev.map((item, n) =>
          n === index ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, variant: selected, quantity }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, variantId?: string) => {
    const key = lineKey(productId, variantId);
    setItems((prev) => prev.filter((i) => lineKey(i.product.id, i.variant?.id) !== key));
  };

  const updateQuantity = (productId: string, variantId: string | undefined, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, variantId);
      return;
    }
    const key = lineKey(productId, variantId);
    setItems((prev) =>
      prev.map((item) =>
        lineKey(item.product.id, item.variant?.id) === key ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const itemCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        droppedUnavailable,
        ackDropped: () => setDropped(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
