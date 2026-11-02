export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteContact {
  email?: string;
  phone?: string;
  address?: string;
}

export type PolicyKey = 'privacy' | 'terms' | 'shipping' | 'returns';

export interface SiteConfig {
  brandName: string;
  tagline: string;
  currency: { code: string; locale: string };
  navLinks: { label: string; href: string }[];
  contact: SiteContact | null;
  social: SocialLink[];
  policies: Record<PolicyKey, boolean>;
}

export const SITE_CONFIG: SiteConfig = {
  brandName: 'SunshineElectric',
  tagline: 'Electronics & Electrical Essentials',
  currency: {
    code: 'INR',
    locale: 'en-IN',
  },
  navLinks: [
    { label: 'Shop', href: '#shop' },
    { label: 'Categories', href: '#categories' },
    { label: 'Best Deals', href: '#bestsellers' },
    { label: 'New Arrivals', href: '#new-arrivals' },
    { label: 'About Us', href: '#about' },
  ],
  contact: null,
  social: [],
  policies: {
    shipping: false,
    returns: false,
    privacy: false,
    terms: false,
  },
};
