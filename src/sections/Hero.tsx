import React from 'react';
import { Container } from '../components/ui/Container';
import { Header } from '../components/layout/Header';
import { Button } from '../components/ui/Button';
import { Em } from '../components/ui/Em';
import { LeafIcon } from '../components/icons';
import { IMAGES } from '../data/images';
import { SITE_CONFIG } from '../data/site';

interface HeroProps {
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
  onToggleAccount: (e: React.MouseEvent) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenSearch,
  onOpenMobileMenu,
  onToggleAccount,
}) => {
  return (
    <section aria-labelledby="hero-title" className="w-full pt-4 md:pt-6">
      <Container>
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden min-h-[560px] md:min-h-[620px] lg:aspect-[21/10] flex flex-col justify-between shadow-sm">
          {/* Background Kitchen Image */}
          <img
            src={IMAGES.hero.src}
            alt={IMAGES.hero.alt}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center select-none"
          />

          {/* Gradients for text contrast */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(8,24,18,0.78) 0%, rgba(8,24,18,0.42) 48%, rgba(8,24,18,0.05) 80%), linear-gradient(0deg, rgba(8,24,18,0.65) 0%, rgba(8,24,18,0) 45%)',
            }}
          />

          {/* Header embedded inside hero top */}
          <Header
            onOpenSearch={onOpenSearch}
            onOpenMobileMenu={onOpenMobileMenu}
            onToggleAccount={onToggleAccount}
          />

          {/* Hero Bottom Content & Stat Card */}
          <div className="relative z-10 p-6 md:p-12 lg:p-14 flex flex-col md:flex-row md:items-end justify-between gap-8 mt-auto">
            {/* Left copy & CTA */}
            <div className="max-w-xl text-white">
              <h1
                id="hero-title"
                className="font-display text-4xl sm:text-5xl lg:text-[3.85rem] font-light tracking-[-0.03em] leading-[1.04] text-balance"
              >
                Eco-Friendly
                <br />
                <Em className="text-[#F6F0C8]">Kitchenware</Em> for
                <br />a greener home
              </h1>

              <p className="font-body text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-md mt-4 sm:mt-5 text-pretty">
                Reusable bottles, cookware and utensils made from bamboo, glass and recycled steel,
                thoughtfully designed to last and kind to your kitchen and the planet.
              </p>

              <div className="mt-6 sm:mt-8 flex items-center gap-4">
                <Button variant="cream" size="lg" href="#shop" className="shadow-lg">
                  <span>Shop now</span>
                  <span className="ml-2 text-sm group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </div>

            {/* Right Stat Card (Semi-opaque green panel) */}
            <div className="w-full sm:w-auto md:w-56 shrink-0 bg-[#1C3A2C]/80 backdrop-blur-md border border-white/20 rounded-xl p-5 text-white shadow-xl">
              <div className="flex items-start justify-between gap-2">
                <p className="font-body text-xs sm:text-sm font-normal text-white/90 leading-tight">
                  Natural.
                  <br />
                  Sustainable.
                  <br />
                  Eco-conscious.
                </p>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <LeafIcon className="w-4 h-4 text-[#F6F0C8]" />
                </div>
              </div>

              <div className="mt-4 pt-2">
                <span className="font-display font-light text-5xl lg:text-[3.5rem] tracking-tight leading-none text-[#F6F0C8]">
                  <Em className="text-[#F6F0C8] font-normal">{SITE_CONFIG.statCard.percentage}</Em>
                </span>
                <p className="text-[10px] text-white/60 mt-1.5 leading-tight">
                  {SITE_CONFIG.statCard.footnote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
