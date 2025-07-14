import React, { useState } from "react";
import { reviews } from "../lib/reviews";
import ReviewSummary from "./ReviewSummary";
import ReviewItem from "./ReviewItem";
import { formatDate } from "../lib/utils";
import Button from "./Button";

function Review({ id }: { id: string }) {
  const product_review = reviews.find((r) => r.id === id);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 2;

  if (!product_review) {
    return <div className="p-4 text-center text-gray-400">No reviews found</div>;
  }

  const { reviews_summary, reviews: reviewsList } = product_review;
  const totalPages = Math.ceil(reviewsList.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const displayedReviews = reviewsList.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
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
          <ReviewItem key={startIndex + index} review={review} formatDate={formatDate} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2">
          <Button
            variant="primary"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            Previous
          </Button>
          
          <div className="flex gap-1 w-full sm:w-auto justify-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                variant={currentPage === index + 1 ? "primary" : "secondary"}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-2 rounded-lg w-full sm:w-auto ${
                  currentPage === index + 1 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-600 text-gray-300 hover:bg-gray-500"
                }`}
              >
                {index + 1}
              </Button>
            ))}
          </div>

          <Button
            variant="primary"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            Next
          </Button>
        </div>
      )}

      {totalPages <= 1 && reviewsList.length > 0 && (
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">All reviews displayed</p>
        </div>
      )}
    </div>
  );
}

export default Review;