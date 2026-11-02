import React from 'react';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import { SITE_CONFIG } from '../../data/site';
import { useCart } from '../../hooks/useCart';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
  onToggleAccount: (e: React.MouseEvent) => void;
}

const ICON_BUTTON =
  'w-10 h-10 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white hover:bg-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white';

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenMobileMenu,
  onToggleAccount,
}) => {
  const { itemCount, openCart } = useCart();

  return (
    <header className="w-full pt-6 md:pt-8 px-6 md:px-10 flex items-center justify-between z-20">
      <div className="flex items-center flex-1">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className={`md:hidden ${ICON_BUTTON}`}
          aria-label="Open mobile navigation"
        >
          <Menu className="w-5 h-5" aria-hidden="true" />
        </button>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 lg:gap-7">
          {SITE_CONFIG.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-body font-medium text-white/95 hover:text-white transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <a
        href="#"
        className="font-display text-lg sm:text-xl md:text-2xl font-semibold uppercase text-white tracking-[-0.03em] select-none hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm"
        aria-label={`${SITE_CONFIG.brandName} home`}
      >
        {SITE_CONFIG.brandName}
      </a>

      <div className="flex items-center justify-end gap-2.5 md:gap-3 flex-1">
        <button
          type="button"
          onClick={onOpenSearch}
          className="hidden md:flex items-center gap-3 h-10 px-4 bg-white/95 hover:bg-white text-navy-900 rounded-xl shadow-xs text-sm font-body transition-all w-48 lg:w-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label="Search products"
        >
          <Search className="w-4 h-4 text-slate-600 shrink-0" aria-hidden="true" />
          <span className="text-slate-600 text-xs">Search products...</span>
          <kbd className="ml-auto text-[10px] font-mono bg-navy-900/5 px-1.5 py-0.5 rounded text-slate-600">
            /
          </kbd>
        </button>

        <button
          type="button"
          onClick={onOpenSearch}
          className={`md:hidden ${ICON_BUTTON}`}
          aria-label="Search products"
        >
          <Search className="w-4 h-4" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={openCart}
          className={`relative ${ICON_BUTTON}`}
          aria-label={`Shopping bag with ${itemCount} items`}
        >
          <ShoppingBag className="w-4 h-4" aria-hidden="true" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-offer text-navy-900 text-[11px] font-bold rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={onToggleAccount}
          className={`hidden sm:flex ${ICON_BUTTON}`}
          aria-label="Account details"
        >
          <User className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};
