export interface Review {
  id: string;
  quote: string;
  firstName: string;
  lastName: string;
  role: string;
  isInitialActive?: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    quote: "Homedine's glass jars are awesome for storage, and the bamboo utensils are perfect for daily use!",
    firstName: 'Jane',
    lastName: 'Cooper',
    role: 'Nutritionist',
  },
  {
    id: 'rev-2',
    quote: 'Fantastic products and fast delivery. My kitchen feels so much greener!',
    firstName: 'Darlene',
    lastName: 'Robertson',
    role: 'Culinary Instructor',
    isInitialActive: true,
  },
  {
    id: 'rev-3',
    quote: "Love Homedine's eco-style! Glass jars keep things fresh, and bamboo utensils are so chic.",
    firstName: 'Jacob',
    lastName: 'Jones',
    role: 'Food Blogger',
  },
  {
    id: 'rev-4',
    quote: 'The sustainable utensils are well made. My bamboo utensils get daily use and still look new.',
    firstName: 'Esther',
    lastName: 'Howard',
    role: 'Sous Chef',
  },
  {
    id: 'rev-5',
    quote: 'The non-toxic cookware heats up quickly and cleans like a breeze without any chemical residues.',
    firstName: 'Marcus',
    lastName: 'Chen',
    role: 'Recipe Developer',
  },
  {
    id: 'rev-6',
    quote: 'Replacing plastic drinkware with the insulated bottle has completely transformed my daily commute.',
    firstName: 'Elena',
    lastName: 'Rostova',
    role: 'Architect',
  },
  {
    id: 'rev-7',
    quote: 'Beautiful textures, grounded earth tones, and truly durable craftsmanship you can pass down.',
    firstName: 'Amara',
    lastName: 'Okafor',
    role: 'Interior Stylist',
  },
];
