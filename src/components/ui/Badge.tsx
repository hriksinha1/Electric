import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs italic font-medium font-body tracking-tight text-[#12291F] bg-[#FAF8F1]/90 backdrop-blur-xs border border-white/80 rounded-full shadow-xs select-none ${className}`}
    >
      {children}
    </span>
  );
};
