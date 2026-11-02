import React from 'react';
import { Headset, ShieldCheck, Sparkles } from 'lucide-react';
import { BrandValue } from '../../data/values';

interface ValueTileProps {
  value: BrandValue;
}

const ICONS = { sparkles: Sparkles, shield: ShieldCheck, headset: Headset } as const;

export const ValueTile: React.FC<ValueTileProps> = ({ value }) => {
  const Icon = ICONS[value.icon];

  return (
    <div
      className={`flex items-center gap-3.5 px-6 py-6 bg-blue-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm ${
        value.isPill ? 'rounded-full' : 'rounded-xl'
      }`}
    >
      <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
        <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
      </div>
      <div className="flex flex-col text-left leading-tight min-w-0">
        <h3 className="font-display text-base md:text-lg font-medium text-navy-900">
          {value.firstWord} {value.secondWord}
        </h3>
        <p className="font-body text-xs md:text-sm text-slate-600 mt-1">{value.description}</p>
      </div>
    </div>
  );
};
