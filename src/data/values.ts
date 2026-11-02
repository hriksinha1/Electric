export interface BrandValue {
  id: string;
  firstWord: string;
  secondWord: string;
  icon: 'leaf' | 'globe' | 'sprout';
  isPill?: boolean;
}

export const BRAND_VALUES: BrandValue[] = [
  {
    id: 'val-1',
    firstWord: 'Natural',
    secondWord: 'Finish',
    icon: 'leaf',
    isPill: false,
  },
  {
    id: 'val-2',
    firstWord: 'Eco',
    secondWord: 'Innovation',
    icon: 'globe',
    isPill: true, // middle tile is pill-shaped with radius 999px
  },
  {
    id: 'val-3',
    firstWord: 'Sustainable',
    secondWord: 'Materials',
    icon: 'sprout',
    isPill: false,
  },
];
