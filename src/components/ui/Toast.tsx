import React, { useEffect } from 'react';
import { CheckIcon, CloseIcon } from '../icons';

export interface ToastMessage {
  id: string;
  message: string;
  type?: 'success' | 'info';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onDismiss: (id: string) => void }> = ({
  toast,
  onDismiss,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return (
    <div className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 bg-[#12291F] text-[#FAF8F1] rounded-xl shadow-lg border border-white/10 text-sm font-body animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="flex items-center gap-2.5">
        <span className="w-5 h-5 rounded-full bg-[#14543B] text-[#F6F0C8] flex items-center justify-center shrink-0">
          <CheckIcon className="w-3 h-3" />
        </span>
        <span>{toast.message}</span>
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="text-white/60 hover:text-white p-1 rounded transition-colors"
        aria-label="Dismiss notification"
      >
        <CloseIcon className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
