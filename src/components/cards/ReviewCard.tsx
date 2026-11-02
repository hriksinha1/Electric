import React from 'react';
import { Review } from '../../data/reviews';
import { Em } from '../ui/Em';

interface ReviewCardProps {
  review: Review;
  isActive?: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, isActive = false }) => {
  return (
    <article
      className={`relative flex flex-col justify-between p-6 md:p-7 rounded-xl transition-all duration-300 h-full select-none ${
        isActive
          ? 'bg-white text-[#1B1F1C] shadow-md my-2 border border-black/5'
          : 'bg-[#FAF8F1]/90 text-[#1B1F1C]/90 border border-transparent'
      }`}
    >
      <div>
        {/* Quote Glyph */}
        <div
          className={`font-serif text-3xl md:text-4xl leading-none mb-3 font-bold select-none ${
            isActive ? 'text-[#5A1A14]' : 'text-[#8A5A4A]'
          }`}
          aria-hidden="true"
        >
          “
        </div>

        {/* Review Quote Text */}
        <p className="font-body text-sm md:text-[15px] leading-relaxed text-[#1B1F1C]">
          {review.quote}
        </p>
      </div>

      {/* Author & Role */}
      <div className="mt-6 pt-4 border-t border-black/5">
        <p className="font-body text-sm font-medium text-[#1B1F1C]">
          {review.firstName} <Em>{review.lastName}</Em>
        </p>
        <p className="font-body text-xs text-[#5E615C] mt-0.5">{review.role}</p>
      </div>
    </article>
  );
};
