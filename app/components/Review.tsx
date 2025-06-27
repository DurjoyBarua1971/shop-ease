import React from "react";
import { reviews } from "../lib/reviews";
import ReviewSummary from "./ReviewSummary";
import ReviewItem from "./ReviewItem";
import { formatDate } from "../lib/utils";

function Review({ id }: { id: string }) {
  const product_review = reviews.find((r) => r.id === id);

  if (!product_review) {
    return <div>No reviews found</div>;
  }

  const { reviews_summary, reviews: reviewsList } = product_review;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-gray-800">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Product Reviews
      </h2>

      <ReviewSummary reviewsSummary={reviews_summary} />

      <div className="mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
          Review Lists
        </h3>
      </div>

      <div className="space-y-4 md:space-y-6">
        {reviewsList.map((review, index) => (
          <ReviewItem 
            key={index} 
            review={review} 
            formatDate={formatDate} 
          />
        ))}
      </div>
    </div>
  );
}

export default Review;