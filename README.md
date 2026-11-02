# Homedine — Sustainable Kitchenware

A production-ready, accessible, high-performance landing page for **Homedine**, an environmentally conscious kitchenware brand crafted from bamboo, glass, and sustainable materials.

## Features & Architecture

- **13 Complete Sections in Sequence**:
  1. **Header + Hero**: Cinematic vintage teal kitchen, transparent navigation, cream H1 italic emphasis, and semi-opaque 96% sustainability stat card.
  2. **Eco Essentials Bestselling Products**: Carousel with 7:9 stone-gradient product frames, overlaid navigation arrows, color swatches, badges, and quick-add "+ Cart".
  3. **Lifestyle Kitchen Banner**: 2.16:1 sage shaker kitchen with overlaid brand philosophy statement.
  4. **Brand Values Strip**: Three tiles in `--sage-100` featuring circular line icons; middle "Eco Innovation" tile is pill-shaped (`rounded-full`).
  5. **Explore Categories**: 2:3 vertical cards with dark gradient scrims, category names in italic, and "Shop →" triggers that live-filter the product showcase.
  6. **Best sellers**: Asymmetric editorial split (text left with heading & paragraph, sage/cream rice cookers right).
  7. **New Arrival**: Mirrored editorial split (green steam pot left, text right).
  8. **Inspiration Gallery**: 5-up alternating short (1.17:1) and tall (0.81:1) tiles with bottom-left italic captions and top-right navigation arrows.
  9. **Customer Reviews**: `--sage-100` panel with italic "4.9/5" rating headline and edge-to-edge carousel with inset active white review card.
  10. **Sustainability Statement**: 3-image overlapping collage and philosophy statement with inline miniature image chips.
  11. **Newsletter**: Dark green (`--green-800`) panel with grain texture, 4 corner culinary photos (positioned to prevent any overlap with "10% Off"), and validated subscription form.
  12. **Closing Statement**: Brand closing quote with "Join Us Now ↗" button and quick filter links.
  13. **Footer**: Oversized decorative "Homedine" wordmark and social links.

- **Interactions**:
  - Live Product Search modal (`/` keyboard shortcut, Arrow navigation, Enter to add to cart).
  - Slide-over Shopping Cart drawer with local storage persistence, quantity stepper, variant indicators, and subtotal calculation.
  - Mobile slide-out drawer with focus trap and full navigation.
  - Floating shopping bag trigger that appears when scrolling past the hero.
  - Live category filtering with dismissible filter chips.

## Typography & Design System

- **Display**: Bricolage Grotesque (variable weight & optical sizing)
- **Body**: DM Sans (clean, highly readable modern grotesque)
- **Italic Emphasis**: Applied to focal words via `<Em>` component

## Scripts

```bash
# Run local development server (port 3000)
npm run dev

# Run TypeScript type check
npm run lint

# Build static production bundle into dist/
npm run build

# Preview production build
npm run preview
```

## How to Replace or Swap Images

All asset slots are centralized in `src/data/images.ts`. To change an image, edit the `src` and `alt` properties in `src/data/images.ts` without modifying component logic.

## Demo Disclaimers & Production Roadmap

- **Checkout & Payments**: Payments are currently simulated in the frontend. For production, connect Stripe Elements or Shopify Storefront API.
- **Newsletter**: Form submission validates email format and gives UI confirmation; connect to Klaviyo, Mailchimp, or ConvertKit API.
- **User Accounts**: The account popover informs visitors that accounts are demo-only; wire into Supabase Auth, Clerk, or Firebase Auth.
