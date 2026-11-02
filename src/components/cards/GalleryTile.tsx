import React from 'react';
import { GalleryItem } from '../../data/gallery';
import { SafeImage } from '../ui/SafeImage';

interface GalleryTileProps {
  item: GalleryItem;
}

export const GalleryTile: React.FC<GalleryTileProps> = ({ item }) => {
  const aspectClass = item.heightVariant === 'short' ? 'aspect-[1.17/1]' : 'aspect-[0.81/1]';

  return (
    <div className={`group relative w-full ${aspectClass} rounded-lg overflow-hidden select-none bg-mist`}>
      <SafeImage
        slot={item.image}
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 65vw"
        className="transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent pointer-events-none" />
      <p className="absolute bottom-3.5 left-3.5 right-3.5 z-10 font-display text-sm md:text-[15px] font-medium text-white leading-tight pointer-events-none">
        {item.title}
      </p>
    </div>
  );
};
