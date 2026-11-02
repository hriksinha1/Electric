import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { SparkleIcon } from '../components/icons';
import { Em } from '../components/ui/Em';
import { SITE_CONFIG } from '../data/site';

interface ClosingStatementProps {
  onSelectCategoryFilter: (category: string) => void;
}

export const ClosingStatement: React.FC<ClosingStatementProps> = ({
  onSelectCategoryFilter,
}) => {
  const handleCategoryClick = (category: string) => {
    onSelectCategoryFilter(category);
    const shop = document.getElementById('shop');
    if (shop) shop.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinClick = () => {
    const newsletterInput = document.getElementById('newsletter-email');
    if (newsletterInput) {
      newsletterInput.focus();
      newsletterInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section aria-labelledby="closing-heading" className="w-full pt-10 md:pt-14 pb-8 md:pb-12">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-black/10">
          {/* Left statement and Outlined Join Button */}
          <div className="max-w-xl">
            <h2
              id="closing-heading"
              className="font-display text-2xl sm:text-3xl lg:text-[2rem] font-light text-[#5E615C] leading-snug tracking-tight text-balance"
            >
              Homedine promotes sustainable dining with beautifully crafted bamboo and glass{' '}
              <span className="inline-flex items-center gap-1.5 text-[#1B1F1C]">
                <SparkleIcon className="w-4 h-4 text-[#1B1F1C]" />
                <Em className="text-[#1B1F1C] font-normal">Kitchenware!</Em>
              </span>
            </h2>

            <div className="mt-6 sm:mt-8">
              <Button
                variant="outlined"
                size="sm"
                onClick={handleJoinClick}
                className="!h-9 !px-5 !text-xs font-medium"
              >
                <span>Join Us Now</span>
                <span className="ml-1.5 text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </Button>
            </div>
          </div>

          {/* Right link list */}
          <div className="flex flex-wrap md:flex-col items-start md:items-end gap-3 md:gap-2 shrink-0 md:pt-1">
            {SITE_CONFIG.footerCategories.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleCategoryClick(item.filterKey)}
                className="font-body text-sm md:text-[15px] font-normal text-[#5E615C] hover:text-[#1B1F1C] transition-colors py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#14543B] rounded-xs cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
