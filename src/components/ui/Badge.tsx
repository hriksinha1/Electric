import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  /** 'offer' is amber with navy text; 'default' is a blue tint. */
  tone?: 'default' | 'offer';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, tone = 'default', className = '' }) => {
  const tones =
    tone === 'offer' ? 'bg-offer text-navy-900' : 'bg-blue-50 text-blue-700 border border-blue-600/10';
  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-semibold font-body tracking-tight rounded-sm select-none ${tones} ${className}`}
    >
      {children}
    </span>
  );
};
