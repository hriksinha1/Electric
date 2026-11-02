import React from 'react';
import { Review, REVIEWS_MODE } from '../../data/reviews';

interface ReviewCardProps {
  review: Review;
  isActive?: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, isActive = false }) => {
  return (
    <article
      className={`relative flex flex-col justify-between p-6 md:p-7 rounded-lg transition-all duration-300 h-full select-none ${
        isActive
          ? 'bg-white text-navy-900 shadow-md border border-navy-900/5'
          : 'bg-white/70 text-navy-900 border border-transparent'
      }`}
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="font-display text-4xl leading-none font-bold text-blue-600" aria-hidden="true">
            “
          </div>
          {REVIEWS_MODE === 'placeholder' && (
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-blue-50 text-blue-700">
              Sample
            </span>
          )}
        </div>
        <p className="font-body text-sm md:text-[15px] leading-relaxed mt-2">{review.quote}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-navy-900/10">
        <p className="font-body text-sm font-medium">{review.author}</p>
        {review.role && <p className="font-body text-xs text-slate-600 mt-0.5">{review.role}</p>}
      </div>
    </article>
  );
};
