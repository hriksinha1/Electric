import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './hooks/useCart';
import { Hero } from './sections/Hero';
import { ProductShowcase } from './sections/ProductShowcase';
import { LifestyleBanner } from './sections/LifestyleBanner';
import { ValuesStrip } from './sections/ValuesStrip';
import { Categories } from './sections/Categories';
import { EditorialFeature } from './sections/EditorialFeature';
import { Gallery } from './sections/Gallery';
import { Reviews } from './sections/Reviews';
import { SustainabilityStatement } from './sections/SustainabilityStatement';
import { Newsletter } from './sections/Newsletter';
import { ClosingStatement } from './sections/ClosingStatement';
import { Footer } from './components/layout/Footer';
import { SearchOverlay } from './components/layout/SearchOverlay';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { CartDrawer } from './components/layout/CartDrawer';
import { AccountPopover } from './components/layout/AccountPopover';
import { ToastContainer, ToastMessage } from './components/ui/Toast';
import { IMAGES } from './data/images';
import { CartBagIcon } from './components/icons';

function AppContent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [showFloatingCart, setShowFloatingCart] = useState(false);

  const { itemCount, openCart, isOpen: isCartOpen } = useCart();

  const showToast = (message: string) => {
    const newToast: ToastMessage = {
      id: `${Date.now()}-${Math.random()}`,
      message,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Keyboard shortcut '/' to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        !isSearchOpen &&
        !(document.activeElement instanceof HTMLInputElement) &&
        !(document.activeElement instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Floating Cart Button visibility when scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setShowFloatingCart(true);
      } else {
        setShowFloatingCart(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1B1F1C] flex flex-col font-body selection:bg-[#F6F0C8] selection:text-[#14543B]">
      {/* Skip to Content accessible link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#14543B] text-[#F6F0C8] px-4 py-2 rounded-full font-medium shadow-lg"
      >
        Skip to main content
      </a>

      {/* Main Content Area */}
      <main id="main" className="flex-1">
        {/* Section 1: Hero with Transparent Nav & 96% Card */}
        <Hero
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onToggleAccount={() => setIsAccountOpen((prev) => !prev)}
        />

        {/* Section 2: Eco Essentials Bestselling Products */}
        <ProductShowcase
          activeCategoryFilter={activeCategoryFilter}
          onClearFilter={() => setActiveCategoryFilter(null)}
          onSelectProduct={() => {
            // Can open cart or showcase
          }}
        />

        {/* Section 3: Kitchen Lifestyle Banner with Philosophy Scrim */}
        <LifestyleBanner />

        {/* Section 4: Brand Values Strip */}
        <ValuesStrip />

        {/* Section 5: Explore Thoughtful Categories */}
        <Categories
          onSelectCategory={(filterKey) => {
            setActiveCategoryFilter(filterKey);
          }}
        />

        {/* Section 6: Editorial Feature - Best sellers */}
        <EditorialFeature
          id="bestsellers"
          variant="text-left"
          titlePrefix="Best"
          titleItalic="sellers"
          description="A polished rice pot rests on a rustic wooden surface, encircled by fresh herbs, a perfect blend of durability and mindful cooking."
          image={IMAGES.editorial.bestseller.src}
          alt={IMAGES.editorial.bestseller.alt}
          ctaText="Shop now →"
          ctaHref="#shop"
        />

        {/* Section 7: Editorial Feature - New Arrival */}
        <EditorialFeature
          variant="text-right"
          titlePrefix="New"
          titleItalic="Arrival"
          description="OasiSteam showcases a colourful array of fresh, seasonal vegetables, a vibrant celebration of zero-waste, planet-friendly kitchen practices."
          image={IMAGES.editorial.newArrival.src}
          alt={IMAGES.editorial.newArrival.alt}
          ctaText="Shop now →"
          ctaHref="#shop"
        />

        {/* Section 8: Inspiration Gallery */}
        <Gallery />

        {/* Section 9: Customer Reviews Panel */}
        <Reviews />

        {/* Section 10: Sustainability Collage & Chip Philosophy Statement */}
        <SustainabilityStatement />

        {/* Section 11: Newsletter (Get Recipes 10% Off) */}
        <Newsletter onShowToast={showToast} />

        {/* Section 12: Closing Statement */}
        <ClosingStatement
          onSelectCategoryFilter={(category) => {
            setActiveCategoryFilter(category);
          }}
        />
      </main>

      {/* Section 13: Footer with Oversized Wordmark */}
      <Footer onShowToast={showToast} />

      {/* Floating Cart Button (visible on scroll) */}
      {showFloatingCart && !isCartOpen && (
        <button
          onClick={openCart}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#14543B] text-[#F6F0C8] shadow-2xl flex items-center justify-center hover:bg-[#2C6B4D] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#14543B]"
          aria-label={`Open shopping cart with ${itemCount} items`}
        >
          <CartBagIcon className="w-5 h-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F6F0C8] text-[#12291F] text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs border border-black/10">
              {itemCount}
            </span>
          )}
        </button>
      )}

      {/* Modals & Drawers */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
      />

      <CartDrawer onShowToast={showToast} />

      <AccountPopover
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* Toast Notifications */}
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
