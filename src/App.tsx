import React, { useState, useEffect, useCallback } from 'react';
import { ShoppingBag } from 'lucide-react';
import { CartProvider, useCart } from './hooks/useCart';
import { Hero } from './sections/Hero';
import { ProductShowcase } from './sections/ProductShowcase';
import { LifestyleBanner } from './sections/LifestyleBanner';
import { ValuesStrip } from './sections/ValuesStrip';
import { Categories } from './sections/Categories';
import { EditorialFeature } from './sections/EditorialFeature';
import { Gallery } from './sections/Gallery';
import { Reviews } from './sections/Reviews';
import { BrandStory } from './sections/BrandStory';
import { Newsletter } from './sections/Newsletter';
import { ClosingStatement } from './sections/ClosingStatement';
import { Footer } from './components/layout/Footer';
import { SearchOverlay } from './components/layout/SearchOverlay';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { CartDrawer } from './components/layout/CartDrawer';
import { AccountPopover } from './components/layout/AccountPopover';
import { PolicyDialog } from './components/layout/PolicyDialog';
import { ToastContainer, ToastMessage } from './components/ui/Toast';
import { CategoryKey } from './data/categories';
import { IMAGES } from './data/images';

function AppContent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [policyTitle, setPolicyTitle] = useState<string | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<CategoryKey | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [showFloatingCart, setShowFloatingCart] = useState(false);

  const { itemCount, openCart, isOpen: isCartOpen, droppedUnavailable, ackDropped } = useCart();

  const showToast = useCallback((message: string) => {
    setToasts((prev) => [...prev, { id: `${Date.now()}-${Math.random()}`, message }]);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    if (droppedUnavailable) {
      showToast('Some items in your saved cart are no longer available.');
      ackDropped();
    }
  }, [droppedUnavailable, ackDropped, showToast]);

  // Keyboard shortcut '/' opens search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (
        e.key === '/' &&
        !isSearchOpen &&
        !(el instanceof HTMLInputElement) &&
        !(el instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Floating cart button appears once the hero is scrolled past
  useEffect(() => {
    const handleScroll = () => setShowFloatingCart(window.scrollY > 480);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSearch = useCallback(() => setIsSearchOpen(false), []);
  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);
  const closeAccount = useCallback(() => setIsAccountOpen(false), []);
  const closePolicy = useCallback(() => setPolicyTitle(null), []);

  return (
    <div className="min-h-screen bg-white text-ink flex flex-col font-body selection:bg-blue-50 selection:text-blue-700">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md font-medium shadow-lg"
      >
        Skip to main content
      </a>

      <main id="main" className="flex-1">
        {/* 1. Hero with transparent nav */}
        <Hero
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onToggleAccount={() => setIsAccountOpen((prev) => !prev)}
        />

        {/* 2. Featured products with category filters */}
        <ProductShowcase
          activeCategoryFilter={activeCategoryFilter}
          onSelectFilter={setActiveCategoryFilter}
        />

        {/* 3. Lifestyle banner */}
        <LifestyleBanner />

        {/* 4. Brand values */}
        <ValuesStrip />

        {/* 5. Explore categories */}
        <Categories onSelectCategory={setActiveCategoryFilter} />

        {/* 6. Best sellers */}
        <EditorialFeature
          id="bestsellers"
          variant="text-left"
          titlePrefix="Best"
          titleAccent="Sellers"
          description="The products our customers reach for first. Browse the favourites across audio, computing and home electronics."
          image={IMAGES.editorial.bestseller}
          ctaText="Shop Now →"
          ctaHref="#shop"
        />

        {/* 7. New arrivals */}
        <EditorialFeature
          id="new-arrivals"
          variant="text-right"
          titlePrefix="New"
          titleAccent="Arrivals"
          description="Fresh additions to the range, from the latest in personal audio to smart home essentials."
          image={IMAGES.editorial.newArrival}
          ctaText="Explore What's New →"
          ctaHref="#shop"
        />

        {/* 8. Technology gallery */}
        <Gallery />

        {/* 9. Reviews (placeholder or verified, see data/reviews.ts) */}
        <Reviews />

        {/* 10. Brand story collage */}
        <BrandStory />

        {/* 11. Newsletter */}
        <Newsletter />

        {/* 12. Closing statement */}
        <ClosingStatement onSelectCategory={setActiveCategoryFilter} />
      </main>

      {/* 13. Footer */}
      <Footer onSelectCategory={setActiveCategoryFilter} onOpenPolicy={setPolicyTitle} />

      {showFloatingCart && !isCartOpen && (
        <button
          onClick={openCart}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-blue-600 text-white shadow-2xl flex items-center justify-center hover:bg-blue-700 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
          aria-label={`Open shopping cart with ${itemCount} items`}
        >
          <ShoppingBag className="w-5 h-5" aria-hidden="true" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-offer text-navy-900 text-[11px] font-bold rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      )}

      <SearchOverlay isOpen={isSearchOpen} onClose={closeSearch} onSelectCategory={setActiveCategoryFilter} />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={closeMobile}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
      />
      <CartDrawer onShowToast={showToast} />
      <AccountPopover isOpen={isAccountOpen} onClose={closeAccount} />
      <PolicyDialog title={policyTitle} onClose={closePolicy} />
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
