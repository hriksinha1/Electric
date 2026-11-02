export type ReviewsMode = 'placeholder' | 'verified';

/** Switch to 'verified' once REVIEWS holds real, permissioned customer feedback. */
export const REVIEWS_MODE: ReviewsMode = 'placeholder';

export interface Review {
  id: string;
  quote: string;
  author: string;
  role?: string;
}

const SAMPLE_QUOTE = 'Sample review. Replace with verified customer feedback.';

const PLACEHOLDER_REVIEWS: Review[] = [1, 2, 3, 4].map((n) => ({
  id: `sample-${n}`,
  quote: SAMPLE_QUOTE,
  author: 'Customer name',
}));

/** Real reviews go here (id, quote, author, optional role) when REVIEWS_MODE is 'verified'. */
const VERIFIED_REVIEWS: Review[] = [];

export const REVIEWS: Review[] =
  REVIEWS_MODE === 'placeholder' ? PLACEHOLDER_REVIEWS : VERIFIED_REVIEWS;
