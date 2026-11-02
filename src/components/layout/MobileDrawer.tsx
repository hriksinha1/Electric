import React, { useEffect } from 'react';
import { Search, User, X } from 'lucide-react';
import { SITE_CONFIG } from '../../data/site';

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
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="fixed inset-0 bg-navy-950/60 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-4/5 max-w-sm bg-navy-950 text-white flex flex-col justify-between p-6 shadow-2xl z-10 animate-in slide-in-from-left duration-300">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-display text-xl font-semibold uppercase tracking-[-0.03em]">
              {SITE_CONFIG.brandName}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5 text-white/80" aria-hidden="true" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full mt-6 flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl text-left text-sm text-white/80 hover:bg-white/15 transition-colors"
          >
            <Search className="w-4 h-4 text-white/60" aria-hidden="true" />
            <span>Search products...</span>
          </button>

          <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="text-lg font-display text-white/90 hover:text-blue-500 py-2 transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenAccount();
            }}
            className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors"
          >
            <User className="w-4 h-4" aria-hidden="true" />
            <span>Account details</span>
          </button>
          <p className="text-xs text-white/60 font-body">{SITE_CONFIG.tagline}</p>
        </div>
      </div>
    </div>
  );
};
