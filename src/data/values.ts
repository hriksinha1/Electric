export interface BrandValue {
  id: string;
  firstWord: string;
  secondWord: string;
  description: string;
  icon: 'sparkles' | 'shield' | 'headset';
  isPill?: boolean;
}

export const BRAND_VALUES: BrandValue[] = [
  {
    id: 'val-1',
    firstWord: 'Carefully Selected',
    secondWord: 'Products',
    description: 'A focused range, chosen for everyday use.',
    icon: 'sparkles',
    isPill: false,
  },
  {
    id: 'val-2',
    firstWord: 'Secure',
    secondWord: 'Shopping',
    description: "Clear product details, so you know what you're buying.",
    icon: 'shield',
    isPill: true,
  },
  {
    id: 'val-3',
    firstWord: 'Customer',
    secondWord: 'Support',
    description: 'Questions about a product? Get in touch.',
    icon: 'headset',
    isPill: false,
  },
];
