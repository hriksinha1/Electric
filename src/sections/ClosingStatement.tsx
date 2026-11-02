import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { CATEGORIES, CategoryKey } from '../data/categories';
import { SITE_CONFIG } from '../data/site';

interface ClosingStatementProps {
  onSelectCategory: (key: CategoryKey) => void;
}

export const ClosingStatement: React.FC<ClosingStatementProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (key: CategoryKey) => {
    onSelectCategory(key);
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="closing-heading" className="w-full pt-10 md:pt-14 pb-8 md:pb-12">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-navy-900/10">
          <div className="max-w-xl">
            <h2
              id="closing-heading"
              className="font-display text-[clamp(1.25rem,2.4vw,2rem)] font-normal text-slate-600 leading-snug tracking-tight text-balance"
            >
              <span className="text-navy-900 font-medium">{SITE_CONFIG.brandName}</span> brings you electronics
              and everyday essentials for a connected, productive home.
            </h2>
            <div className="mt-6 sm:mt-8">
              <Button variant="outlined" size="md" href="#shop">
                Explore Products →
              </Button>
            </div>
          </div>

          <nav aria-label="Categories" className="flex flex-wrap md:flex-col items-start md:items-end gap-x-5 gap-y-1 shrink-0">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => handleCategoryClick(c.key)}
                className="font-body text-sm md:text-[15px] text-slate-600 hover:text-navy-900 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm cursor-pointer"
              >
                {c.name}
              </button>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
};
