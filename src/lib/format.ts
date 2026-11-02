import { SITE_CONFIG } from '../data/site';

export function formatPrice(amount: number): string {
  try {
    return new Intl.NumberFormat(SITE_CONFIG.currency.locale, {
      style: 'currency',
      currency: SITE_CONFIG.currency.code,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
}
