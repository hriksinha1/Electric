import { IMAGES } from './images';

export interface ProductVariant {
  id: string;
  name: string;
  color: string;
  image?: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  badge?: string;
  category: 'Drinkware' | 'Cookware' | 'Appliances' | 'Utensils' | 'Tableware';
  image: string;
  alt: string;
  variants: ProductVariant[];
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-drinkware-bottle',
    title: 'Reusable drinkware for a greener lifestyle.',
    price: 43.85,
    currency: 'USD',
    badge: 'Promotion',
    category: 'Drinkware',
    image: IMAGES.products.bottle.src,
    alt: IMAGES.products.bottle.alt,
    description: 'Triple-wall vacuum insulated stainless steel with recycled bamboo loop cap. Keeps liquids cold for 24 hours.',
    variants: [
      { id: 'v1', name: 'Sky Blue', color: '#93C5FD' },
      { id: 'v2', name: 'Slate Gray', color: '#64748B' },
      { id: 'v3', name: 'Forest Green', color: '#14543B' },
    ],
  },
  {
    id: 'prod-cookware-pots',
    title: 'Non-toxic cookware for sustainable cooking.',
    price: 78.35,
    currency: 'Cookware',
    badge: 'New',
    category: 'Cookware',
    image: IMAGES.products.cookware.src,
    alt: IMAGES.products.cookware.alt,
    description: 'Mineral-based non-toxic ceramic non-stick coating free of PTFE, PFOA, and heavy metals. Oven-safe up to 450°F.',
    variants: [
      { id: 'v1', name: 'Citrus Lime', color: '#A3E635' },
      { id: 'v2', name: 'Terracotta Orange', color: '#EA580C' },
      { id: 'v3', name: 'Ocean Slate', color: '#475569' },
    ],
  },
  {
    id: 'prod-kettle-toaster',
    title: 'Kettle & Toaster eco-friendly meals.',
    price: 143.65,
    currency: 'USD',
    badge: 'Customer favorite',
    category: 'Appliances',
    image: IMAGES.products.kettle.src,
    alt: IMAGES.products.kettle.alt,
    description: 'Precision electric gooseneck kettle made with fluted food-grade steel and responsibly harvested bamboo base.',
    variants: [
      { id: 'v1', name: 'Sage Green', color: '#8FA58A' },
      { id: 'v2', name: 'Clay Sand', color: '#D4C5B9' },
      { id: 'v3', name: 'Nordic Blue', color: '#3B82F6' },
    ],
  },
  {
    id: 'prod-utensil-holder',
    title: 'Bamboo Made Utensil Holder',
    price: 26.27,
    currency: 'USD',
    badge: 'New',
    category: 'Utensils',
    image: IMAGES.products.utensils.src,
    alt: IMAGES.products.utensils.alt,
    description: 'Set of 6 handcrafted FSC-certified bamboo spoons, turners, and dippers stored in a glazed mustard ceramic crock.',
    variants: [
      { id: 'v1', name: 'Mustard Yellow', color: '#EAB308' },
      { id: 'v2', name: 'Olive Green', color: '#65A30D' },
      { id: 'v3', name: 'Charcoal Matte', color: '#334155' },
    ],
  },
  {
    id: 'prod-cup-set',
    title: 'Artisanal Ceramic Cup Duo Set',
    price: 34.00,
    currency: 'USD',
    badge: 'Best seller',
    category: 'Drinkware',
    image: IMAGES.categories.cupeco.src,
    alt: IMAGES.categories.cupeco.alt,
    description: 'Two handcrafted organic clay mugs glazed with lead-free natural earth pigments. Dishwasher and microwave safe.',
    variants: [
      { id: 'v1', name: 'Rust Terracotta', color: '#C2410C' },
      { id: 'v2', name: 'Sand Cream', color: '#F6F0C8' },
      { id: 'v3', name: 'Deep Sage', color: '#4A8760' },
    ],
  },
  {
    id: 'prod-travel-cutlery',
    title: 'Eco Travel Spoonery Cutlery Kit',
    price: 22.50,
    currency: 'USD',
    badge: 'Eco Choice',
    category: 'Utensils',
    image: IMAGES.categories.ecospoonery.src,
    alt: IMAGES.categories.ecospoonery.alt,
    description: 'Anodized titanium fork, spoon, and chopsticks packed in a washable recycled wheat-straw travel case.',
    variants: [
      { id: 'v1', name: 'Navy & Ochre', color: '#1E293B' },
      { id: 'v2', name: 'Forest Green', color: '#14543B' },
      { id: 'v3', name: 'Terracotta', color: '#9A3412' },
    ],
  },
  {
    id: 'prod-cutting-boards',
    title: 'Grain Slice Organic Pebble Boards',
    price: 48.90,
    currency: 'USD',
    badge: 'Staff Pick',
    category: 'Tableware',
    image: IMAGES.gallery.woodBoards.src,
    alt: IMAGES.gallery.woodBoards.alt,
    description: 'Crafted from reclaimed solid walnut and white oak offcuts, treated with natural organic cold-pressed walnut oil.',
    variants: [
      { id: 'v1', name: 'Walnut & Oak', color: '#78350F' },
      { id: 'v2', name: 'Maple Natural', color: '#D97706' },
      { id: 'v3', name: 'Charred Oak', color: '#1C1917' },
    ],
  },
  {
    id: 'prod-steam-pot',
    title: 'OasiSteam Multi-Pot Slow Cooker',
    price: 119.50,
    currency: 'USD',
    badge: 'New Arrival',
    category: 'Appliances',
    image: IMAGES.editorial.newArrival.src,
    alt: IMAGES.editorial.newArrival.alt,
    description: 'Low-energy smart steam cooker with ceramic non-stick insert and tempered glass lid for nutritious zero-waste dining.',
    variants: [
      { id: 'v1', name: 'Dark Moss', color: '#14543B' },
      { id: 'v2', name: 'Pale Sage', color: '#8FA58A' },
      { id: 'v3', name: 'Oatmeal', color: '#E2E8F0' },
    ],
  },
];
