import React from 'react';

interface EmProps {
  children: React.ReactNode;
  className?: string;
}

export const Em: React.FC<EmProps> = ({ children, className = '' }) => {
  return (
    <em className={`italic font-normal tracking-normal not-italic:font-normal inline-block ${className}`}>
      {children}
    </em>
  );
};
