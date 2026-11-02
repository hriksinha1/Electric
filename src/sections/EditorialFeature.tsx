import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Em } from '../components/ui/Em';

export interface EditorialFeatureProps {
  id?: string;
  variant: 'text-left' | 'text-right';
  titlePrefix: string;
  titleItalic: string;
  description: string;
  image: string;
  alt: string;
  ctaText?: string;
  ctaHref?: string;
}

export const EditorialFeature: React.FC<EditorialFeatureProps> = ({
  id,
  variant,
  titlePrefix,
  titleItalic,
  description,
  image,
  alt,
  ctaText = 'Shop now →',
  ctaHref = '#shop',
}) => {
  const isTextLeft = variant === 'text-left';

  return (
    <div id={id} className="w-full py-2">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center bg-white rounded-2xl md:rounded-3xl overflow-hidden p-2 sm:p-4 lg:p-0">
          {/* Text Content Column */}
          <div
            className={`flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 sm:py-10 max-w-lg ${
              isTextLeft ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#1B1F1C] leading-[1.05]">
              <span>{titlePrefix} </span>
              <Em className="text-[#1B1F1C] font-normal">{titleItalic}</Em>
            </h2>

            <p className="font-body text-sm sm:text-base text-[#5E615C] leading-relaxed mt-4 mb-6 max-w-md text-pretty">
              {description}
            </p>

            <div>
              <Button
                variant="primary"
                size="sm"
                href={ctaHref}
                className="!h-9 !px-4.5 !text-xs font-medium shadow-xs"
              >
                <span>{ctaText}</span>
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`relative w-full aspect-[4/3] sm:aspect-[1.22/1] rounded-2xl overflow-hidden ${
              isTextLeft ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
            }`}
          >
            <img
              src={image}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
