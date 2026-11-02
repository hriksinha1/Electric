import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../../data/site';
import { CloseIcon, SearchIcon, UserIcon } from '../icons';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
  onOpenAccount,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide drawer */}
      <div className="relative w-4/5 max-w-sm bg-[#12291F] text-white flex flex-col justify-between p-6 shadow-2xl z-10 animate-in slide-in-from-left duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-display text-2xl font-light text-[#F6F0C8] tracking-[-0.06em]">
              {SITE_CONFIG.brandName}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close navigation"
            >
              <CloseIcon className="w-5 h-5 text-white/80" />
            </button>
          </div>

          {/* Search shortcut */}
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full mt-6 flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl text-left text-sm text-white/80 hover:bg-white/15 transition-colors"
          >
            <SearchIcon className="w-4 h-4 text-white/60" />
            <span>Search products...</span>
          </button>

          {/* Navigation links */}
          <nav className="mt-8 flex flex-col gap-4">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="text-lg font-display text-white/90 hover:text-[#F6F0C8] py-2 transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer info & Account */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenAccount();
            }}
            className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors"
          >
            <UserIcon className="w-4 h-4" />
            <span>Account Details</span>
          </button>
          <p className="text-xs text-white/40 font-body">
            Sustainable Kitchenware for a Greener Home
          </p>
        </div>
      </div>
    </div>
  );
};
