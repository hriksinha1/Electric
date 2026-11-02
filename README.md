# SunshineElectric

A static React storefront landing page for **SunshineElectric**, an electronics and electrical essentials store. Built with React 19, TypeScript, Vite, Tailwind CSS v4, `lucide-react` and `motion`. It has no backend and deploys as plain static files (for example on Vercel).

All products, prices and photographs are **demo data**. Nothing here is a real offer, rating, review, certification, warranty or delivery promise.

## Scripts

```bash
npm install
npm run dev       # dev server on port 3000
npm run lint      # tsc --noEmit
npm run build     # prebuild guard -> vite build -> postbuild guard
npm run preview   # serve dist/
```

`prebuild` and `postbuild` run `scripts/verify.mjs`. The build fails if stale brand or old-catalogue text remains, if an image is referenced by a string path instead of an import, if an emitted asset is missing, or if design files leak into `dist/`.

## Structure

```
src/
  App.tsx, main.tsx, index.css, styles/tokens.css
  data/       images products categories gallery reviews values site
  hooks/      useCart useCarousel useReveal
  lib/        format.ts (formatPrice, driven by SITE_CONFIG.currency)
  sections/   Hero ProductShowcase LifestyleBanner ValuesStrip Categories
              EditorialFeature Gallery Reviews BrandStory Newsletter ClosingStatement
  components/ layout (Header, Footer, drawers, dialogs) cards ui
  assets/images/{hero,promotional,products,categories,gallery}
public/       favicon.svg og-image.svg robots.txt
```

## Image convention

Every photograph is **imported as a module** from `src/assets/images/` in `src/data/images.ts`, so Vite hashes and emits it. Never write a string path into the source tree. `public/` holds only `favicon.svg`, the Open Graph image and `robots.txt`.

Render images with `<SafeImage slot={IMAGES.x.y} />`. It sets intrinsic size, lazy loading and, on failure, logs `console.error` and shows a visible "Image unavailable" tile.

### Image slots

The current files are generated **placeholder illustrations (SVG)**, not photographs. To use real photographs, drop files with the same names (or edit the import and `width`/`height`) in `src/data/images.ts`:

| Folder | Files | Ratio |
|---|---|---|
| `hero/` | `hero-electronics-workspace` | 21:10 (2000x952) |
| `promotional/` | `lifestyle-workstation` | 2.16:1 |
| | `bestsellers-feature`, `new-arrivals-feature` | 1.22:1 |
| | `collage-center` | 1.6:1; `collage-left`, `collage-right` 3:4 |
| | `newsletter-1` to `newsletter-4` | 1.6:1 |
| `products/` | smartphone, laptop, headphones, tv, vacuum, smart-plug, keyboard, power-strip | 7:9 |
| `categories/` | smartphones, computers, audio, appliances | 2:3 |
| `gallery/` | tablet, earbuds, router, printer, cables, speaker, desk-setup, mouse | 1.17:1 / 0.81:1 alternating |

Targets: hero at most 450 KB, others at most 350 KB. No text, logos or readable brand marks in photographs. `public/og-image.svg` should be replaced by a 1200x630 JPG before sharing links widely, since some crawlers ignore SVG.

### Verifying images

After `npm run build && npm run preview`, scroll slowly to the bottom (lazy images load near the viewport), then run in the console. The result must be an empty array:

```js
[...document.images].filter(i => !(i.complete && i.naturalWidth > 0)).map(i => i.currentSrc || i.src)
```

## Configuration

- `src/data/site.ts`: brand name, currency (`INR` / `en-IN`), nav links, `contact` (null until supplied), `social` (empty), `policies`.
- `src/data/reviews.ts`: `REVIEWS_MODE` is `'placeholder'`. Set it to `'verified'` and fill `VERIFIED_REVIEWS` once you have real, permissioned feedback.
- `src/components/ui/Em.tsx`: `ACCENT_STYLE` switches accent words between `'colour'` and `'italic'`.
- `VITE_SITE_URL` (see `.env.example`): production origin used for Open Graph and JSON-LD. Leave empty until the domain is confirmed; no canonical tag is set.

## Cart

The cart stores only `{ productId, variantId?, quantity }` under `sunshineelectric-cart-v1` and rebuilds lines from the catalogue on load. Saved lines for products that no longer exist are dropped with a notice, and the old pre-rebrand cart key is deleted.

## What real integrations would need

- **Checkout and payments**: a payment provider and order backend. The checkout button is a demo toast.
- **Newsletter**: an email service. The form validates and confirms locally; nothing is sent.
- **Accounts**: an auth provider. The account popover is informational.
- **Legal pages**: Privacy, Terms, Shipping and Returns open a "being prepared" dialog until real text exists.
- **Catalogue**: replace `src/data/products.ts` with real inventory, pricing and availability.

## Deploying to Vercel

Framework preset Vite, build command `npm run build`, output directory `dist`. No rewrites or server code needed.
