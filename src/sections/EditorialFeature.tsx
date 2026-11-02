import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Em } from '../components/ui/Em';
import { SafeImage } from '../components/ui/SafeImage';
import { ImageSlot } from '../data/images';

export interface EditorialFeatureProps {
  id?: string;
  variant: 'text-left' | 'text-right';
  titlePrefix: string;
  titleAccent: string;
  description: string;
  image: ImageSlot;
  ctaText?: string;
  ctaHref?: string;
}

export const EditorialFeature: React.FC<EditorialFeatureProps> = ({
  id,
  variant,
  titlePrefix,
  titleAccent,
  description,
  image,
  ctaText = 'Shop Now →',
  ctaHref = '#shop',
}) => {
  const isTextLeft = variant === 'text-left';

  return (
    <div id={id} className="w-full py-2 scroll-mt-4">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center p-2 sm:p-4 lg:p-0">
          <div
            className={`flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 sm:py-10 max-w-lg order-2 ${
              isTextLeft ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <h2 className="font-display text-[clamp(2rem,3.6vw,3.25rem)] font-medium tracking-tight text-navy-900 leading-[1.05]">
              {titlePrefix} <Em>{titleAccent}</Em>
            </h2>
            <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed mt-4 mb-6 max-w-md text-pretty">
              {description}
            </p>
            <div>
              <Button variant="primary" size="md" href={ctaHref}>
                {ctaText}
              </Button>
            </div>
          </div>

          <div
            className={`relative w-full aspect-[4/3] sm:aspect-[1.22/1] rounded-lg overflow-hidden bg-mist order-1 ${
              isTextLeft ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <SafeImage
              slot={image}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
