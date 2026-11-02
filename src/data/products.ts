import { IMAGES, ImageSlot } from './images';
import { CategoryKey } from './categories';

export type Availability = 'in-stock' | 'out-of-stock' | 'preorder';

export interface ProductVariant {
  id: string;
  name: string;
  color: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: CategoryKey;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: ImageSlot;
  availability: Availability;
  badge?: 'New' | 'Best seller' | 'Deal' | 'Pre-order';
  variants?: ProductVariant[];
  isDemo: true;
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-phone',
    slug: 'amoled-smartphone-128gb',
    title: '6.5" AMOLED Smartphone, 128 GB',
    category: 'smartphones',
    brand: 'Sample Brand',
    price: 24999,
    originalPrice: 27999,
    description: 'High-refresh AMOLED display, 128 GB storage, and a triple rear camera system.',
    image: IMAGES.products.smartphone,
    availability: 'in-stock',
    badge: 'Deal',
    variants: [
      { id: 'v1', name: 'Midnight Black', color: '#0F172A' },
      { id: 'v2', name: 'Electric Blue', color: '#2563EB' },
      { id: 'v3', name: 'Silver Slate', color: '#94A3B8' },
    ],
    isDemo: true,
  },
  {
    id: 'prod-laptop',
    slug: '14-inch-ultrabook-laptop',
    title: '14" Ultrabook Laptop, 16 GB RAM',
    category: 'computers',
    brand: 'Sample Brand',
    price: 62999,
    description: 'Slim lightweight aluminum chassis with 16 GB unified RAM and fast solid-state storage.',
    image: IMAGES.products.laptop,
    availability: 'in-stock',
    badge: 'New',
    isDemo: true,
  },
  {
    id: 'prod-headphones',
    slug: 'wireless-noise-cancelling-headphones',
    title: 'Wireless Noise-Cancelling Headphones',
    category: 'audio',
    brand: 'Sample Brand',
    price: 8499,
    originalPrice: 9999,
    description: 'Over-ear active noise cancellation with memory foam earcups and quick-charge support.',
    image: IMAGES.products.headphones,
    availability: 'in-stock',
    badge: 'Best seller',
    variants: [
      { id: 'v1', name: 'Matte Charcoal', color: '#1E293B' },
      { id: 'v2', name: 'Cobalt Navy', color: '#1D4ED8' },
      { id: 'v3', name: 'Chalk White', color: '#F1F5F9' },
    ],
    isDemo: true,
  },
  {
    id: 'prod-tv',
    slug: '55-inch-4k-smart-tv',
    title: '55" 4K Smart TV',
    category: 'tvs',
    brand: 'Sample Brand',
    price: 38999,
    description: 'Thin-bezel 4K Ultra HD smart television with HDR support and integrated streaming apps.',
    image: IMAGES.products.tv,
    availability: 'preorder',
    badge: 'Pre-order',
    isDemo: true,
  },
  {
    id: 'prod-vacuum',
    slug: 'robot-vacuum-cleaner',
    title: 'Robot Vacuum Cleaner',
    category: 'appliances',
    brand: 'Sample Brand',
    price: 17499,
    originalPrice: 19999,
    description: 'Automated floor vacuum with precision lidar room mapping and multi-surface brush roll.',
    image: IMAGES.products.vacuum,
    availability: 'in-stock',
    badge: 'Deal',
    isDemo: true,
  },
  {
    id: 'prod-plug',
    slug: 'smart-wifi-plug-2-pack',
    title: 'Smart Wi-Fi Plug, 2-pack',
    category: 'smart-home',
    brand: 'Sample Brand',
    price: 1799,
    description: 'Pair of grounded Wi-Fi plugs enabling schedule automation and remote mobile app switching.',
    image: IMAGES.products.smartPlug,
    availability: 'in-stock',
    badge: 'New',
    isDemo: true,
  },
  {
    id: 'prod-keyboard',
    slug: 'mechanical-gaming-keyboard',
    title: 'Mechanical Gaming Keyboard',
    category: 'gaming',
    brand: 'Sample Brand',
    price: 4299,
    description: 'Compact mechanical keyboard featuring tactile switches and adjustable ambient backlighting.',
    image: IMAGES.products.keyboard,
    availability: 'out-of-stock',
    variants: [
      { id: 'v1', name: 'Tactile Blue', color: '#2563EB' },
      { id: 'v2', name: 'Stealth Grey', color: '#334155' },
    ],
    isDemo: true,
  },
  {
    id: 'prod-powerstrip',
    slug: 'surge-protected-power-strip',
    title: '6-Socket Surge-Protected Power Strip',
    category: 'electrical',
    brand: 'Sample Brand',
    price: 1299,
    description: 'Heavy-duty 6-outlet surge protector with illuminated master power switch and circuit protection.',
    image: IMAGES.products.powerStrip,
    availability: 'in-stock',
    badge: 'Best seller',
    isDemo: true,
  },
];
