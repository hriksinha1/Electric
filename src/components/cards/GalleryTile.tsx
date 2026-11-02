import React from 'react';
import { GalleryItem } from '../../data/gallery';
import { Em } from '../ui/Em';

interface GalleryTileProps {
  item: GalleryItem;
}

export const GalleryTile: React.FC<GalleryTileProps> = ({ item }) => {
  // short = 1.17:1 (aspect-[1.17/1]), tall = 0.81:1 (aspect-[0.81/1])
  const aspectClass = item.heightVariant === 'short' ? 'aspect-[1.17/1]' : 'aspect-[0.81/1]';

  return (
    <div
      className={`group relative w-full ${aspectClass} rounded-lg overflow-hidden select-none bg-[#EFECE4]`}
    >
      <img
        src={item.image}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Bottom Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

      {/* Caption Bottom-Left */}
      <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 pointer-events-none">
        <p className="font-display text-sm md:text-[15px] text-white leading-tight drop-shadow-sm">
          <Em className="text-white">{item.title}</Em>
        </p>
      </div>
    </div>
  );
};
