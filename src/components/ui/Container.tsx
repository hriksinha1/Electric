import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav' | 'main';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as = 'div',
  ...props
}) => {
  const Component = as;
  return (
    <Component
      className={`w-[min(100%-2*var(--gutter),1400px)] mx-auto ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
