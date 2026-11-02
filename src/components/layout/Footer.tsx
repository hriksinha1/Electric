import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SITE_CONFIG, PolicyKey } from '../../data/site';
import { CATEGORIES, CategoryKey } from '../../data/categories';

interface FooterProps {
  onSelectCategory: (key: CategoryKey) => void;
  onOpenPolicy: (title: string) => void;
}

const POLICIES: { key: PolicyKey; label: string }[] = [
  { key: 'privacy', label: 'Privacy' },
  { key: 'terms', label: 'Terms' },
  { key: 'shipping', label: 'Shipping' },
  { key: 'returns', label: 'Returns' },
];

const LINK =
  'font-body text-sm text-slate-600 hover:text-navy-900 transition-colors py-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm';

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenPolicy }) => {
  const { contact, social } = SITE_CONFIG;

  const selectCategory = (key: CategoryKey) => {
    onSelectCategory(key);
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white pt-16 pb-12 overflow-hidden border-t border-navy-900/10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-lg font-semibold text-navy-900">{SITE_CONFIG.brandName}</p>
            <p className="font-body text-sm text-slate-600 mt-2 max-w-[16rem]">{SITE_CONFIG.tagline}</p>
          </div>

          <nav aria-label="Shop categories">
            <h2 className="font-display text-sm font-semibold text-navy-900 mb-2">Shop</h2>
            <ul className="flex flex-col">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <button type="button" onClick={() => selectCategory(c.key)} className={LINK}>
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold text-navy-900 mb-2">Support</h2>
            {contact ? (
              <ul className="flex flex-col font-body text-sm text-slate-600 gap-1">
                {contact.email && (
                  <li>
                    <a className={LINK} href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </li>
                )}
                {contact.phone && <li>{contact.phone}</li>}
                {contact.address && <li>{contact.address}</li>}
              </ul>
            ) : (
              <p className="font-body text-sm text-slate-600">Contact: details coming soon</p>
            )}
            {social.length > 0 && (
              <ul className="flex flex-col mt-4">
                {social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className={`${LINK} inline-flex items-center gap-1`}>
                      {s.label}
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Legal">
            <h2 className="font-display text-sm font-semibold text-navy-900 mb-2">Legal</h2>
            <ul className="flex flex-col">
              {POLICIES.map((p) => (
                <li key={p.key}>
                  <button type="button" onClick={() => onOpenPolicy(p.label)} className={LINK}>
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="select-none leading-none overflow-hidden max-w-full" aria-hidden="true">
          <span className="font-display font-semibold uppercase text-cloud tracking-[-0.05em] block text-[clamp(2rem,9.5vw,9rem)] leading-[0.9] whitespace-nowrap">
            {SITE_CONFIG.brandName}
          </span>
        </div>
        <span className="sr-only">{SITE_CONFIG.brandName}</span>

        <div className="mt-8 pt-4 border-t border-navy-900/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-600 gap-2">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.
          </p>
          <p>Sample catalogue. Products and prices shown are for demonstration.</p>
        </div>
      </Container>
    </footer>
  );
};
