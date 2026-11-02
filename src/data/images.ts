import heroWorkspace from '../assets/images/hero/hero-electronics-workspace.svg';
import lifestyleWorkstation from '../assets/images/promotional/lifestyle-workstation.svg';
import bestsellersFeature from '../assets/images/promotional/bestsellers-feature.svg';
import newArrivalsFeature from '../assets/images/promotional/new-arrivals-feature.svg';

import productSmartphone from '../assets/images/products/product-smartphone.svg';
import productLaptop from '../assets/images/products/product-laptop.svg';
import productHeadphones from '../assets/images/products/product-headphones.svg';
import productTv from '../assets/images/products/product-tv.svg';
import productVacuum from '../assets/images/products/product-vacuum.svg';
import productSmartPlug from '../assets/images/products/product-smart-plug.svg';
import productKeyboard from '../assets/images/products/product-keyboard.svg';
import productPowerStrip from '../assets/images/products/product-power-strip.svg';

import catSmartphones from '../assets/images/categories/cat-smartphones.svg';
import catComputers from '../assets/images/categories/cat-computers.svg';
import catAudio from '../assets/images/categories/cat-audio.svg';
import catAppliances from '../assets/images/categories/cat-appliances.svg';

import galTablet from '../assets/images/gallery/gal-tablet.svg';
import galEarbuds from '../assets/images/gallery/gal-earbuds.svg';
import galRouter from '../assets/images/gallery/gal-router.svg';
import galPrinter from '../assets/images/gallery/gal-printer.svg';
import galCables from '../assets/images/gallery/gal-cables.svg';
import galSpeaker from '../assets/images/gallery/gal-speaker.svg';
import galDeskSetup from '../assets/images/gallery/gal-desk-setup.svg';
import galMouse from '../assets/images/gallery/gal-mouse.svg';

import collageCenter from '../assets/images/promotional/collage-center.svg';
import collageLeft from '../assets/images/promotional/collage-left.svg';
import collageRight from '../assets/images/promotional/collage-right.svg';

import newsletter1 from '../assets/images/promotional/newsletter-1.svg';
import newsletter2 from '../assets/images/promotional/newsletter-2.svg';
import newsletter3 from '../assets/images/promotional/newsletter-3.svg';
import newsletter4 from '../assets/images/promotional/newsletter-4.svg';

export interface ImageSlot {
  src: string;
  alt: string;
  width: number;
  height: number;
  decorative?: boolean;
}

export const IMAGES = {
  hero: {
    src: heroWorkspace,
    alt: 'Laptop, smartphone and wireless headphones on a dark desk with soft ambient lighting',
    width: 2000,
    height: 952,
  },
  lifestyle: {
    src: lifestyleWorkstation,
    alt: 'Clean modern workspace with ultrawide display, laptop and natural light',
    width: 1800,
    height: 833,
  },
  editorial: {
    bestseller: {
      src: bestsellersFeature,
      alt: 'Smart speaker, earbuds case and smartwatch on geometric pedestals',
      width: 1200,
      height: 984,
    },
    newArrival: {
      src: newArrivalsFeature,
      alt: 'Next-generation smartphone and wireless audio accessories on launch podium',
      width: 1200,
      height: 984,
    },
  },
  products: {
    smartphone: {
      src: productSmartphone,
      alt: '6.5-inch AMOLED smartphone with triple camera system on neutral studio background',
      width: 900,
      height: 1157,
    },
    laptop: {
      src: productLaptop,
      alt: '14-inch slim ultrabook laptop with backlit keyboard on neutral background',
      width: 900,
      height: 1157,
    },
    headphones: {
      src: productHeadphones,
      alt: 'Wireless over-ear noise-cancelling headphones on neutral background',
      width: 900,
      height: 1157,
    },
    tv: {
      src: productTv,
      alt: '55-inch thin-bezel 4K smart television on slim stand',
      width: 900,
      height: 1157,
    },
    vacuum: {
      src: productVacuum,
      alt: 'Robot vacuum cleaner with smart navigation lidar sensor',
      width: 900,
      height: 1157,
    },
    smartPlug: {
      src: productSmartPlug,
      alt: 'Compact white smart Wi-Fi plugs with LED status indicators',
      width: 900,
      height: 1157,
    },
    keyboard: {
      src: productKeyboard,
      alt: 'Mechanical gaming keyboard with soft ambient backlighting',
      width: 900,
      height: 1157,
    },
    powerStrip: {
      src: productPowerStrip,
      alt: '6-socket surge-protected power strip with master switch',
      width: 900,
      height: 1157,
    },
  },
  categories: {
    smartphones: {
      src: catSmartphones,
      alt: 'Modern mobile devices and smartphones category',
      width: 848,
      height: 1272,
    },
    computers: {
      src: catComputers,
      alt: 'Laptops, desktops and computing essentials category',
      width: 848,
      height: 1272,
    },
    audio: {
      src: catAudio,
      alt: 'Personal audio, headphones and speakers category',
      width: 848,
      height: 1272,
    },
    appliances: {
      src: catAppliances,
      alt: 'Smart home cleaning and domestic appliances category',
      width: 848,
      height: 1272,
    },
  },
  gallery: {
    tablet: {
      src: galTablet,
      alt: 'Tablet device with precision stylus on desk',
      width: 1200,
      height: 1026,
    },
    earbuds: {
      src: galEarbuds,
      alt: 'Wireless earbuds in compact charging case',
      width: 900,
      height: 1111,
    },
    router: {
      src: galRouter,
      alt: 'High-speed dual-band Wi-Fi router',
      width: 1200,
      height: 1026,
    },
    printer: {
      src: galPrinter,
      alt: 'Compact wireless all-in-one printer',
      width: 900,
      height: 1111,
    },
    cables: {
      src: galCables,
      alt: 'Braided fast-charging cables and power adapters',
      width: 1200,
      height: 1026,
    },
    speaker: {
      src: galSpeaker,
      alt: 'Fabric-wrapped smart home audio speaker',
      width: 900,
      height: 1111,
    },
    deskSetup: {
      src: galDeskSetup,
      alt: 'Dual-monitor ergonomic productivity desk setup',
      width: 1200,
      height: 1026,
    },
    mouse: {
      src: galMouse,
      alt: 'Ergonomic wireless productivity mouse',
      width: 900,
      height: 1111,
    },
  },
  collage: {
    center: {
      src: collageCenter,
      alt: 'Overhead flatlay of laptop, smartphone and audio devices',
      width: 1400,
      height: 875,
    },
    left: {
      src: collageLeft,
      alt: 'Precision aluminum laptop hinge detail',
      width: 700,
      height: 933,
    },
    right: {
      src: collageRight,
      alt: 'Smartphone multi-lens camera module detail',
      width: 700,
      height: 933,
    },
  },
  newsletter: {
    item1: {
      src: newsletter1,
      alt: 'Smartwatch and smartphone on wireless charger',
      width: 900,
      height: 563,
    },
    item2: {
      src: newsletter2,
      alt: 'Wireless earbuds charging case',
      width: 900,
      height: 563,
    },
    item3: {
      src: newsletter3,
      alt: 'Mechanical gaming keyboard and mouse',
      width: 900,
      height: 563,
    },
    item4: {
      src: newsletter4,
      alt: 'Smart home hub and plug on living room shelf',
      width: 900,
      height: 563,
    },
  },
} as const satisfies Record<string, unknown>;
