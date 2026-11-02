import { IMAGES, ImageSlot } from './images';

export interface GalleryItem {
  id: string;
  title: string;
  image: ImageSlot;
  heightVariant: 'short' | 'tall';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Everyday Tablet',
    image: IMAGES.gallery.tablet,
    heightVariant: 'short',
  },
  {
    id: 'g-2',
    title: 'Wireless Earbuds',
    image: IMAGES.gallery.earbuds,
    heightVariant: 'tall',
  },
  {
    id: 'g-3',
    title: 'Wi-Fi Router',
    image: IMAGES.gallery.router,
    heightVariant: 'short',
  },
  {
    id: 'g-4',
    title: 'Home Printer',
    image: IMAGES.gallery.printer,
    heightVariant: 'tall',
  },
  {
    id: 'g-5',
    title: 'Cables & Chargers',
    image: IMAGES.gallery.cables,
    heightVariant: 'short',
  },
  {
    id: 'g-6',
    title: 'Smart Speaker',
    image: IMAGES.gallery.speaker,
    heightVariant: 'tall',
  },
  {
    id: 'g-7',
    title: 'Desk Setup',
    image: IMAGES.gallery.deskSetup,
    heightVariant: 'short',
  },
  {
    id: 'g-8',
    title: 'Precision Mouse',
    image: IMAGES.gallery.mouse,
    heightVariant: 'tall',
  },
];
