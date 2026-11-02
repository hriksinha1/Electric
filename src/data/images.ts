export interface ImageSlot {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  status: 'final' | 'placeholder';
}

export const IMAGES = {
  hero: {
    src: '/src/assets/images/hero_vintage_kitchen_1793602104574.jpg',
    alt: 'Vintage teal kitchen with brass fixtures, wooden worktop, and potted herbs by the window',
    aspectRatio: '21/10',
    status: 'final',
  },
  products: {
    bottle: {
      src: '/src/assets/images/product_reusable_bottle_1793602104962.jpg',
      alt: 'Deep forest green insulated steel reusable water bottle',
      aspectRatio: '7/9',
      status: 'final',
    },
    cookware: {
      src: '/src/assets/images/product_eco_cookware_1793602105731.jpg',
      alt: 'Lime green saucepan and terracotta orange ceramic cooking pot',
      aspectRatio: '7/9',
      status: 'final',
    },
    kettle: {
      src: '/src/assets/images/product_sage_kettle_1793602107008.jpg',
      alt: 'Sage green fluted electric kettle with bamboo handle and wooden base',
      aspectRatio: '7/9',
      status: 'final',
    },
    utensils: {
      src: '/src/assets/images/product_utensil_holder_1793602127308.jpg',
      alt: 'Natural bamboo kitchen spoons in a mustard yellow ceramic utensil crock',
      aspectRatio: '7/9',
      status: 'final',
    },
  },
  lifestyle: {
    src: '/src/assets/images/kitchen_lifestyle_sage_1793602107070.jpg',
    alt: 'Sage green shaker kitchen with warm under-cabinet lighting and checkered floor',
    aspectRatio: '2.16/1',
    status: 'final',
  },
  categories: {
    cupeco: {
      src: '/src/assets/images/cat_cupeco_1793602130429.jpg',
      alt: 'Rustic terracotta handmade ceramic coffee mug on a solid wood block',
      aspectRatio: '2/3',
      status: 'final',
    },
    ecospoonery: {
      src: '/src/assets/images/cat_ecospoonery_1793602130954.jpg',
      alt: 'Eco travel cutlery set in navy and yellow case on green surface',
      aspectRatio: '2/3',
      status: 'final',
    },
    naturesip: {
      src: '/src/assets/images/cat_naturesip_1793602151843.jpg',
      alt: 'Polished wooden cooking utensils in a ceramic container',
      aspectRatio: '2/3',
      status: 'final',
    },
    freshpitcher: {
      src: '/src/assets/images/cat_freshpitcher_1793602151308.jpg',
      alt: 'Hands holding a deep green eco bottle against rich red background',
      aspectRatio: '2/3',
      status: 'final',
    },
  },
  editorial: {
    bestseller: {
      src: '/src/assets/images/bestseller_ricecooker_1793602128300.jpg',
      alt: 'Sage green and cream ceramic rice cookers on terracotta blocks with fresh herbs',
      aspectRatio: '1.22/1',
      status: 'final',
    },
    newArrival: {
      src: '/src/assets/images/newarrival_steampot_1793602130331.jpg',
      alt: 'Modern green steam pot multi-cooker with fresh vegetables against yellow wall',
      aspectRatio: '1.22/1',
      status: 'final',
    },
  },
  gallery: {
    sizzlePan: {
      src: '/src/assets/images/gallery_sizzle_pan_1793602175018.jpg',
      alt: 'Terracotta salmon enameled frying pan with lid beside dark pan overhead',
      status: 'final',
    },
    woodBoards: {
      src: '/src/assets/images/gallery_wood_boards_1793602175782.jpg',
      alt: 'Four artisan organic wood grain cutting boards on dark teal backdrop',
      status: 'final',
    },
    ceramicPots: {
      src: '/src/assets/images/gallery_ceramic_pots_1793602176966.jpg',
      alt: 'Pastel yellow and cream ceramic pots on pastel pedestals',
      status: 'final',
    },
  },
  collage: {
    center: {
      src: '/src/assets/images/collage_center_1793602152004.jpg',
      alt: 'Teal skillet with sunny side up eggs, toasted sourdough, and wooden butter knife',
      aspectRatio: '1.6/1',
      status: 'final',
    },
  },
  newsletter: {
    dutchOven: {
      src: '/src/assets/images/newsletter_dutch_oven_1793602153115.jpg',
      alt: 'Terracotta enameled Dutch oven with artisan crusty bread',
      status: 'final',
    },
    yellowPot: {
      src: '/src/assets/images/newsletter_yellow_pot_1793602177261.jpg',
      alt: 'Yellow casserole pot with chopped carrots on pink stone surface',
      status: 'final',
    },
    ceramicBowls: {
      src: '/src/assets/images/newsletter_ceramic_bowls_1793602178576.jpg',
      alt: 'Glazed handmade ceramic bowls in earth tones',
      status: 'final',
    },
    familyCooking: {
      src: '/src/assets/images/newsletter_family_cooking_1793602153940.jpg',
      alt: 'Grandmother and child happily cooking together in kitchen',
      status: 'final',
    },
  },
} as const;
