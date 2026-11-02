import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary: blue; light: white on dark; outlined: navy outline; onDark: white outline */
  variant?: 'primary' | 'light' | 'outlined' | 'onDark';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  onClick,
  disabled,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'group inline-flex items-center justify-center rounded-md font-medium font-body transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
    light: 'bg-white text-navy-900 hover:bg-blue-50 focus-visible:ring-white shadow-sm',
    outlined:
      'bg-transparent border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white focus-visible:ring-navy-900',
    onDark:
      'bg-transparent border border-white/80 text-white hover:bg-white hover:text-navy-900 focus-visible:ring-white',
  } as const;

  const sizes = {
    xs: 'h-8 px-3.5 text-xs',
    sm: 'h-9 px-4 text-xs font-semibold',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base font-semibold',
  } as const;

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick as never} {...(props as object)}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
