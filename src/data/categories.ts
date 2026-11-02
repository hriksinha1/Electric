import { IMAGES } from './images';

export interface Category {
  id: string;
  name: string;
  tagline: string;
  image: string;
  alt: string;
  filterKey: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'CupEco',
    tagline: 'Hand-thrown earthen clay and insulated tumblers',
    image: IMAGES.categories.cupeco.src,
    alt: IMAGES.categories.cupeco.alt,
    filterKey: 'Drinkware',
  },
  {
    id: 'cat-2',
    name: 'EcoSpoonery',
    tagline: 'Pocket-ready cutlery and portable dining sets',
    image: IMAGES.categories.ecospoonery.src,
    alt: IMAGES.categories.ecospoonery.alt,
    filterKey: 'Utensils',
  },
  {
    id: 'cat-3',
    name: 'NatureSip',
    tagline: 'Artisan bamboo stirrers, dippers & kitchen spoons',
    image: IMAGES.categories.naturesip.src,
    alt: IMAGES.categories.naturesip.alt,
    filterKey: 'Utensils',
  },
  {
    id: 'cat-4',
    name: 'FreshPitcher',
    tagline: 'Minimalist thermal carafes and drinkware bottles',
    image: IMAGES.categories.freshpitcher.src,
    alt: IMAGES.categories.freshpitcher.alt,
    filterKey: 'Drinkware',
  },
  {
    id: 'cat-5',
    name: 'BambooBoard',
    tagline: 'Organic pebble-shaped chopping blocks',
    image: IMAGES.gallery.woodBoards.src,
    alt: IMAGES.gallery.woodBoards.alt,
    filterKey: 'Tableware',
  },
  {
    id: 'cat-6',
    name: 'GlassKeep',
    tagline: 'Borosilicate storage jars with airtight bamboo lids',
    image: IMAGES.products.cookware.src,
    alt: IMAGES.products.cookware.alt,
    filterKey: 'Cookware',
  },
];
