import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { ImageSlot } from '../../data/images';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  slot: ImageSlot;
  priority?: boolean;
  className?: string;
  fallbackClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  slot,
  priority = false,
  className = '',
  fallbackClassName = '',
  sizes,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full h-full min-h-[140px] bg-[#F7F8FA] border border-[#CBD5E1]/40 rounded-lg flex flex-col items-center justify-center p-4 text-[#475569] select-none ${fallbackClassName}`}
        role="img"
        aria-label={slot.alt || 'Image unavailable'}
      >
        <ImageOff className="w-8 h-8 text-[#94A3B8] mb-2" aria-hidden="true" />
        <span className="text-xs font-medium text-[#64748B]">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={slot.src}
      alt={slot.alt}
      width={slot.width}
      height={slot.height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      sizes={sizes}
      onError={() => {
        console.error('[SafeImage] failed to load asset:', slot.src);
        setHasError(true);
      }}
      className={`w-full h-full object-cover ${className}`}
      {...props}
    />
  );
};
