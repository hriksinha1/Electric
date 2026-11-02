import React, { useEffect, useRef } from 'react';
import { User, X } from 'lucide-react';

interface AccountPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountPopover: React.FC<AccountPopoverProps> = ({ isOpen, onClose }) => {
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) onClose();
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={popoverRef}
      className="fixed top-20 right-4 md:right-12 z-50 w-72 max-w-[calc(100%-2rem)] bg-white text-navy-900 rounded-xl shadow-2xl p-5 border border-navy-900/10 animate-in fade-in zoom-in-95 duration-150"
      role="dialog"
      aria-label="Account notice"
    >
      <div className="flex items-center justify-between pb-3 border-b border-navy-900/10">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <User className="w-4 h-4" aria-hidden="true" />
          </span>
          <span className="font-display font-semibold text-sm">Account preview</span>
        </div>
        <button
          onClick={onClose}
          className="text-slate-600 hover:text-navy-900 p-1 rounded"
          aria-label="Close account notice"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
      <p className="py-3 text-xs font-body text-slate-600 leading-relaxed">
        Sign-in and accounts are not connected in this demo. You can still browse, search and try the cart.
      </p>
      <p className="text-[11px] text-blue-700 font-medium bg-blue-50 p-2.5 rounded-md">
        Items in your cart are saved in this browser only.
      </p>
    </div>
  );
};
