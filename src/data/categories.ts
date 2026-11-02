import { IMAGES, ImageSlot } from './images';

export type CategoryKey =
  | 'smartphones'
  | 'computers'
  | 'audio'
  | 'appliances'
  | 'tvs'
  | 'smart-home'
  | 'gaming'
  | 'electrical';

export interface Category {
  id: string;
  key: CategoryKey;
  name: string;
  tagline: string;
  image?: ImageSlot;
  featured: boolean;
}

export const CATEGORIES: Category[] = [
  {
    id: 'cat-smartphones',
    key: 'smartphones',
    name: 'Mobiles & Smartphones',
    tagline: 'Flagship devices, fast processors & pro camera systems',
    image: IMAGES.categories.smartphones,
    featured: true,
  },
  {
    id: 'cat-computers',
    key: 'computers',
    name: 'Computers & Laptops',
    tagline: 'Ultrabooks, workstations & everyday computing',
    image: IMAGES.categories.computers,
    featured: true,
  },
  {
    id: 'cat-audio',
    key: 'audio',
    name: 'Audio & Headphones',
    tagline: 'Wireless over-ear headphones, earbuds & studio sound',
    image: IMAGES.categories.audio,
    featured: true,
  },
  {
    id: 'cat-appliances',
    key: 'appliances',
    name: 'Home Appliances',
    tagline: 'Intelligent cleaning, air care & domestic gadgets',
    image: IMAGES.categories.appliances,
    featured: true,
  },
  {
    id: 'cat-tvs',
    key: 'tvs',
    name: 'TVs & Entertainment',
    tagline: '4K Ultra HD displays & smart streaming home theater',
    featured: false,
  },
  {
    id: 'cat-smart-home',
    key: 'smart-home',
    name: 'Smart Home',
    tagline: 'Wi-Fi plugs, sensors, smart lighting & hubs',
    featured: false,
  },
  {
    id: 'cat-gaming',
    key: 'gaming',
    name: 'Gaming Accessories',
    tagline: 'Precision mechanical keyboards, low-latency mice & gear',
    featured: false,
  },
  {
    id: 'cat-electrical',
    key: 'electrical',
    name: 'Electrical Accessories',
    tagline: 'Surge protectors, power strips, charging cables & adapters',
    featured: false,
  },
];
