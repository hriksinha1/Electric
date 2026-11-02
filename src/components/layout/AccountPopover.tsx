import React, { useEffect, useRef } from 'react';
import { UserIcon, CloseIcon } from '../icons';

interface AccountPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  anchorPosition?: { top: number; right: number };
}

export const AccountPopover: React.FC<AccountPopoverProps> = ({ isOpen, onClose }) => {
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={popoverRef}
      className="fixed top-20 right-6 md:right-12 z-50 w-72 bg-white text-[#1B1F1C] rounded-2xl shadow-2xl p-5 border border-black/10 animate-in fade-in zoom-in-95 duration-150"
      role="dialog"
      aria-modal="true"
      aria-label="Account Notice"
    >
      <div className="flex items-center justify-between pb-3 border-b border-black/10">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-[#EEEFDC] text-[#14543B] flex items-center justify-center">
            <UserIcon className="w-4 h-4" />
          </span>
          <span className="font-display font-semibold text-sm">Account Preview</span>
        </div>
        <button
          onClick={onClose}
          className="text-[#5E615C] hover:text-[#1B1F1C] p-1 rounded"
          aria-label="Close account notice"
        >
          <CloseIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="py-3">
        <p className="text-xs font-body text-[#5E615C] leading-relaxed">
          User authentication and accounts aren&apos;t connected in this preview demo. You can browse,
          search products, configure items, and test cart management directly!
        </p>
      </div>

      <div className="pt-2 text-[11px] text-[#14543B] font-medium bg-[#FAF8F1] p-2.5 rounded-lg border border-black/5">
        Tip: All items added to your cart persist in your local browser session.
      </div>
    </div>
  );
};
