import { IMAGES } from './images';

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  heightVariant: 'short' | 'tall'; // short = 1.17:1, tall = 0.81:1
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'SizzlePro Non-Stick Pan',
    image: IMAGES.gallery.sizzlePan.src,
    alt: IMAGES.gallery.sizzlePan.alt,
    heightVariant: 'short',
  },
  {
    id: 'g-2',
    title: 'Grain Slice Board Duo',
    image: IMAGES.gallery.woodBoards.src,
    alt: IMAGES.gallery.woodBoards.alt,
    heightVariant: 'tall',
  },
  {
    id: 'g-3',
    title: 'Bamboo Utensil Set',
    image: IMAGES.products.utensils.src,
    alt: IMAGES.products.utensils.alt,
    heightVariant: 'short',
  },
  {
    id: 'g-4',
    title: 'Glow Pot Ceramic',
    image: IMAGES.gallery.ceramicPots.src,
    alt: IMAGES.gallery.ceramicPots.alt,
    heightVariant: 'tall',
  },
  {
    id: 'g-5',
    title: 'StoneSip Ceramic Cup',
    image: IMAGES.categories.cupeco.src,
    alt: IMAGES.categories.cupeco.alt,
    heightVariant: 'short',
  },
  {
    id: 'g-6',
    title: 'Warm Hearth Casserole',
    image: IMAGES.newsletter.yellowPot.src,
    alt: IMAGES.newsletter.yellowPot.alt,
    heightVariant: 'tall',
  },
  {
    id: 'g-7',
    title: 'Pure Brew Gooseneck',
    image: IMAGES.products.kettle.src,
    alt: IMAGES.products.kettle.alt,
    heightVariant: 'short',
  },
  {
    id: 'g-8',
    title: 'Earthen Pinch Bowls',
    image: IMAGES.newsletter.ceramicBowls.src,
    alt: IMAGES.newsletter.ceramicBowls.alt,
    heightVariant: 'tall',
  },
];
