import React from "react";
import { ReviewsSummary } from "../types";
import StarRating from "./StarRating";
import CircularRating from "./CircularRating";

interface ReviewSummaryProps {
  reviewsSummary: ReviewsSummary;
}

export default function ReviewSummary({ reviewsSummary }: ReviewSummaryProps) {
  console.log("ReviewSummary", reviewsSummary);
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 mb-6 md:mb-8 p-4">
      <div className="flex text-center justify-center items-center gap-5">
        <CircularRating rating={reviewsSummary.average_star} />
        <div className="">
          <StarRating
            rating={Math.round(reviewsSummary.average_star)}
            size="lg"
          />
          <p className="text-xs md:text-sm text-gray-400 mt-2">
            from {reviewsSummary.number_of_reviewers} reviews
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-xl">
        {["5", "4", "3", "2", "1"].map((star: string) => (
          <div key={star} className="flex items-center gap-2 md:gap-3 mb-2">
            <span className="w-6 md:w-3 text-xs md:text-sm">{star}.0</span>
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <div className="flex-1 bg-gray-200 rounded-full h-1.5 md:h-2">
              <div
                className="bg-yellow-500 h-1.5 md:h-2 rounded-full"
                style={{
                  width: `${
                    (reviewsSummary.star_distribution[
                      star as keyof typeof reviewsSummary.star_distribution
                    ] /
                      reviewsSummary.number_of_reviewers) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <span className="w-6 md:w-8 text-xs md:text-sm text-white">
              {
                reviewsSummary.star_distribution[
                  star as keyof typeof reviewsSummary.star_distribution
                ]
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
