import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { ImageSlot } from '../../data/images';

interface SafeImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height' | 'slot'> {
  slot: ImageSlot;
  /** Hero only: loads eagerly with high fetch priority. */
  priority?: boolean;
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
  const alt = slot.decorative ? '' : slot.alt;

  if (hasError) {
    return (
      <div
        className={`w-full h-full min-h-[96px] bg-neutral-50 border border-cloud/60 flex flex-col items-center justify-center gap-1.5 p-3 text-slate-600 select-none ${fallbackClassName}`}
        role="img"
        aria-label={alt || 'Image unavailable'}
      >
        <ImageOff className="w-6 h-6 text-slate-400" aria-hidden="true" />
        <span className="text-[11px] font-medium">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={slot.src}
      alt={alt}
      aria-hidden={slot.decorative ? true : undefined}
      width={slot.width}
      height={slot.height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      sizes={sizes}
      onError={() => {
        console.error('[SafeImage] failed to load', slot.src);
        setHasError(true);
      }}
      className={`w-full h-full object-cover ${className}`}
      {...props}
    />
  );
};
