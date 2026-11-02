import React from 'react';
import { SITE_CONFIG } from '../../data/site';
import { CartBagIcon, UserIcon, SearchIcon, MenuIcon } from '../icons';
import { useCart } from '../../hooks/useCart';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
  onToggleAccount: (e: React.MouseEvent) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenMobileMenu,
  onToggleAccount,
}) => {
  const { itemCount, openCart } = useCart();

  return (
    <header className="w-full pt-6 md:pt-8 px-6 md:px-10 flex items-center justify-between z-20">
      {/* Left zone: Navigation links (Desktop) & Hamburger (Mobile) */}
      <div className="flex items-center">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="md:hidden w-10 h-10 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white hover:bg-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Open mobile navigation"
        >
          <MenuIcon className="w-5 h-5" />
        </button>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {SITE_CONFIG.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-body font-medium text-white/95 hover:text-white transition-colors duration-150 relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Center zone: Brand wordmark */}
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="font-display text-2xl md:text-3xl font-light text-[#F6F0C8] tracking-[-0.06em] select-none hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F6F0C8] rounded-xs"
          aria-label="Homedine Home"
        >
          {SITE_CONFIG.brandName}
        </a>
      </div>

      {/* Right zone: Search pill + Bag icon + Account icon */}
      <div className="flex items-center gap-2.5 md:gap-3">
        {/* Desktop search pill */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="hidden md:flex items-center gap-3 h-10 px-4 bg-white/95 hover:bg-white text-[#1B1F1C] rounded-full shadow-xs text-xs md:text-sm font-body transition-all duration-150 w-56 lg:w-64 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14543B]"
          aria-label="Search products"
        >
          <SearchIcon className="w-4 h-4 text-[#5E615C] shrink-0" />
          <span className="text-[#5E615C] text-xs">Search Product...</span>
          <kbd className="ml-auto text-[10px] font-mono bg-black/5 px-1.5 py-0.5 rounded text-[#5E615C]">
            /
          </kbd>
        </button>

        {/* Mobile search button */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="md:hidden w-10 h-10 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white hover:bg-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Search products"
        >
          <SearchIcon className="w-4 h-4" />
        </button>

        {/* Shopping bag button */}
        <button
          type="button"
          onClick={openCart}
          className="relative w-10 h-10 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white hover:bg-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={`Shopping bag with ${itemCount} items`}
        >
          <CartBagIcon className="w-4 h-4" />
          {itemCount > 0 && (
            <span
              className="absolute -top-1 -right-1 w-5 h-5 bg-[#F6F0C8] text-[#12291F] text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs border border-black/10"
              aria-live="polite"
            >
              {itemCount}
            </span>
          )}
        </button>

        {/* Account button */}
        <button
          type="button"
          onClick={onToggleAccount}
          className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white hover:bg-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="User account details"
        >
          <UserIcon className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
