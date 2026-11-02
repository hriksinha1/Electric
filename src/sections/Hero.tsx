import React from 'react';
import { Container } from '../components/ui/Container';
import { Header } from '../components/layout/Header';
import { Button } from '../components/ui/Button';
import { Em } from '../components/ui/Em';
import { SafeImage } from '../components/ui/SafeImage';
import { IMAGES } from '../data/images';

interface HeroProps {
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
  onToggleAccount: (e: React.MouseEvent) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSearch, onOpenMobileMenu, onToggleAccount }) => {
  return (
    <section aria-labelledby="hero-title" className="w-full pt-4 md:pt-6">
      <Container>
        <div className="relative w-full rounded-xl overflow-hidden min-h-[560px] md:min-h-[620px] lg:aspect-[21/10] flex flex-col justify-between bg-navy-950 shadow-sm">
          <SafeImage
            slot={IMAGES.hero}
            priority
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="absolute inset-0 object-cover object-right md:object-center select-none"
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(11,18,32,0.82) 0%, rgba(11,18,32,0.45) 50%, rgba(11,18,32,0.05) 80%), linear-gradient(0deg, rgba(11,18,32,0.6) 0%, rgba(11,18,32,0) 45%)',
            }}
          />

          <Header
            onOpenSearch={onOpenSearch}
            onOpenMobileMenu={onOpenMobileMenu}
            onToggleAccount={onToggleAccount}
          />

          <div className="relative z-10 p-6 md:p-12 lg:p-14 mt-auto">
            <div className="max-w-xl text-white">
              <h1
                id="hero-title"
                className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium tracking-[-0.03em] leading-[1.04] text-balance"
              >
                Powering your world, one <Em onDark>innovation</Em> at a time.
              </h1>

              <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed max-w-md mt-4 sm:mt-5 text-pretty">
                Discover electronics and everyday essentials designed to keep you connected, productive and
                powered.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                <Button variant="primary" size="lg" href="#shop">
                  Shop Now
                </Button>
                <Button variant="onDark" size="lg" href="#categories">
                  Explore Categories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
