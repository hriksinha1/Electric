import React from 'react';
import { Container } from '../components/ui/Container';
import { BRAND_VALUES } from '../data/values';
import { ValueTile } from '../components/cards/ValueTile';

export const ValuesStrip: React.FC = () => {
  return (
    <section aria-label="Brand Core Values" className="w-full py-4 md:py-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-center">
          {BRAND_VALUES.map((val) => (
            <ValueTile key={val.id} value={val} />
          ))}
        </div>
      </Container>
    </section>
  );
};
