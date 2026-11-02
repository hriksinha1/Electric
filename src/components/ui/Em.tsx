import React from 'react';

/** 'colour' tints the accent word blue; 'italic' restores the original italic look. */
export const ACCENT_STYLE = 'colour' as 'colour' | 'italic';

interface EmProps {
  children: React.ReactNode;
  className?: string;
  /** Use on navy or photographic backgrounds, where bright blue passes contrast. */
  onDark?: boolean;
}

export const Em: React.FC<EmProps> = ({ children, className = '', onDark = false }) => {
  const style =
    ACCENT_STYLE === 'italic'
      ? 'italic font-normal'
      : `not-italic font-medium ${onDark ? 'text-blue-500' : 'text-blue-600'}`;
  return <em className={`${style} tracking-normal inline-block ${className}`}>{children}</em>;
};
