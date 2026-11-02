import React from 'react';
import { BrandValue } from '../../data/values';
import { LeafIcon, GlobeIcon, SproutHandIcon } from '../icons';
import { Em } from '../ui/Em';

interface ValueTileProps {
  value: BrandValue;
}

export const ValueTile: React.FC<ValueTileProps> = ({ value }) => {
  const renderIcon = () => {
    switch (value.icon) {
      case 'leaf':
        return <LeafIcon className="w-5 h-5 text-[#14543B]" />;
      case 'globe':
        return <GlobeIcon className="w-5 h-5 text-[#14543B]" />;
      case 'sprout':
        return <SproutHandIcon className="w-5 h-5 text-[#14543B]" />;
    }
  };

  return (
    <div
      className={`flex items-center justify-center gap-3.5 px-6 py-6 bg-[#EEEFDC] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs ${
        value.isPill ? 'rounded-full shadow-xs' : 'rounded-2xl'
      }`}
    >
      {/* 48px White circular icon holder */}
      <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
        {renderIcon()}
      </div>

      {/* Two line label */}
      <div className="flex flex-col text-left leading-tight">
        <span className="font-display text-base md:text-lg text-[#1B1F1C]">
          <Em className="text-[#12291F]">{value.firstWord}</Em>
        </span>
        <span className="font-display text-base md:text-lg font-normal text-[#1B1F1C]">
          {value.secondWord}
        </span>
      </div>
    </div>
  );
};
