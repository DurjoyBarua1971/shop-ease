import React, { useState } from "react";
import { reviews } from "../lib/reviews";
import ReviewSummary from "./ReviewSummary";
import ReviewItem from "./ReviewItem";
import { formatDate } from "../lib/utils";
import Button from "./Button";

function Review({ id }: { id: string }) {
  const product_review = reviews.find((r) => r.id === id);
  const [visibleReviews, setVisibleReviews] = useState(2);
  const reviewsPerPage = 2;

  if (!product_review) {
    return <div>No reviews found</div>;
  }

  const { reviews_summary, reviews: reviewsList } = product_review;
  const hasMoreReviews = visibleReviews < reviewsList.length;

  const handleLoadMore = () => {
    setVisibleReviews((prev) =>
      Math.min(prev + reviewsPerPage, reviewsList.length)
    );
  };

  const displayedReviews = reviewsList.slice(0, visibleReviews);

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
        {displayedReviews.map((review, index) => (
          <ReviewItem key={index} review={review} formatDate={formatDate} />
        ))}
      </div>

      {hasMoreReviews && (
        <div className="mt-6 text-center">
          <Button
            variant="primary"
            onClick={handleLoadMore}
            className="px-6 py-2"
          >
            Load More
          </Button>
        </div>
      )}

      {!hasMoreReviews && reviewsList.length > 3 && (
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">All reviews loaded</p>
        </div>
      )}
    </div>
  );
}

export default Review;
