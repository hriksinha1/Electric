import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';

interface PolicyDialogProps {
  /** Policy title to show, or null when closed. */
  title: string | null;
  onClose: () => void;
}

export const PolicyDialog: React.FC<PolicyDialogProps> = ({ title, onClose }) => {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!title) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [title, onClose]);

  if (!title) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-dialog-title"
    >
      <div className="fixed inset-0 bg-navy-950/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative z-10 w-full max-w-sm bg-white rounded-xl shadow-2xl p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 id="policy-dialog-title" className="font-display text-lg font-semibold text-navy-900">
            {title}
          </h2>
          <button
            ref={closeRef}
            onClick={onClose}
            className="p-1 -m-1 rounded text-slate-600 hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Close"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">This page is being prepared.</p>
        <Button variant="primary" size="md" onClick={onClose} className="mt-5">
          Close
        </Button>
      </div>
    </div>
  );
};
