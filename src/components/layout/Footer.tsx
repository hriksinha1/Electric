import React from 'react';
import { Container } from '../ui/Container';
import { SITE_CONFIG } from '../../data/site';
import { ArrowUpRightIcon } from '../icons';

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  const handleSocialClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    onShowToast(`${label} link clicked (Demo link).`);
  };

  return (
    <footer className="w-full bg-white pt-16 pb-12 overflow-hidden border-t border-black/5" role="contentinfo">
      <Container>
        <div className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-8">
          {/* Giant decorative wordmark */}
          <div className="select-none leading-none overflow-hidden max-w-full">
            <span
              className="font-display font-light text-[#B3B8B3] tracking-[-0.06em] block text-[16vw] md:text-[13vw] lg:text-[11.5rem] leading-[0.82]"
              aria-label="Homedine"
            >
              {SITE_CONFIG.brandName}
            </span>
          </div>

          {/* Social Links on bottom right */}
          <div className="flex flex-row md:flex-col items-start md:items-end gap-5 md:gap-2 mb-2 md:mb-4 shrink-0">
            {SITE_CONFIG.socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSocialClick(e, item.label)}
                className="group flex items-center gap-1 text-xs md:text-sm font-body text-[#5E615C] hover:text-[#1B1F1C] transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#14543B] rounded-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{item.label}</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#5E615C] group-hover:text-[#1B1F1C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Small copyright disclaimer */}
        <div className="mt-8 pt-4 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5E615C] gap-2">
          <p>© {new Date().getFullYear()} Homedine Studio. All rights reserved.</p>
          <p>Mindful cooking · Renewable materials · Non-toxic dining</p>
        </div>
      </Container>
    </footer>
  );
};
