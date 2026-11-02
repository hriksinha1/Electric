import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'cream' | 'outlined' | 'attached';
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
    'inline-flex items-center justify-center font-medium font-body transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles =
        'bg-[#14543B] text-[#F6F0C8] hover:bg-[#2C6B4D] focus-visible:ring-[#14543B] rounded-full group';
      break;
    case 'cream':
      variantStyles =
        'bg-[#F6F0C8] text-[#1B1F1C] hover:bg-[#EFE7B0] focus-visible:ring-[#F6F0C8] rounded-full group shadow-sm';
      break;
    case 'outlined':
      variantStyles =
        'bg-transparent border border-[#1B1F1C] text-[#1B1F1C] hover:bg-[#1B1F1C] hover:text-[#F6F0C8] focus-visible:ring-[#1B1F1C] rounded-full group';
      break;
    case 'attached':
      variantStyles =
        'bg-[#F6F0C8] text-[#1B1F1C] hover:bg-[#EFE7B0] focus-visible:ring-[#F6F0C8] rounded-none';
      break;
  }

  let sizeStyles = '';
  switch (size) {
    case 'xs':
      sizeStyles = 'h-8 px-3.5 text-xs';
      break;
    case 'sm':
      sizeStyles = 'h-9 px-4 text-xs font-semibold';
      break;
    case 'md':
      sizeStyles = 'h-10 px-4 text-sm font-medium';
      break;
    case 'lg':
      sizeStyles = 'h-12 px-6 text-base font-semibold';
      break;
  }

  const combinedClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick as any} {...(props as any)}>
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
