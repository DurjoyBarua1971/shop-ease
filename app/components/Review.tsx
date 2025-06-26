import React, { useState } from "react";
import { reviews } from "../lib/reviews";
import Image from "next/image";
import clsx from "clsx";

function Review({ id }: { id: string }) {
  const [selectedFilter, setSelectedFilter] = useState("All Reviews");
  const product_review = reviews.find((r) => r.id === id);

  if (!product_review) {
    return <div>No reviews found</div>;
  }

  const { reviews_summary, reviews: reviewsList } = product_review;

  const StarRating = ({
    rating,
    size = "sm",
  }: {
    rating: number;
    size?: "sm" | "lg";
  }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${size === "lg" ? "w-5 h-5" : "w-4 h-4"} ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            } fill-current`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-gray-800">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Product Reviews
      </h2>

      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 mb-6 md:mb-8 p-4">
        <div className="flex text-center justify-center items-center gap-5">
          <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0 mb-2">
            <svg
              className="w-full h-full transform rotate-90"
              viewBox="0 0 36 36"
            >
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#374151"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#fb923c"
                strokeWidth="2"
                strokeDasharray={`${
                  (reviews_summary.average_star / 5) * 100
                }, 100`}
                strokeLinecap="round"
              />
            </svg>
            {/* Rating text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg md:text-2xl font-bold text-white">
                {reviews_summary.average_star}
              </span>
            </div>
          </div>

          <div className="">
            <StarRating
              rating={Math.round(reviews_summary.average_star)}
              size="lg"
            />
            <p className="text-xs md:text-sm text-gray-400 mt-2">
              from {reviews_summary.number_of_reviewers} reviews
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
                      (reviews_summary.star_distribution[
                        star as keyof typeof reviews_summary.star_distribution
                      ] /
                        reviews_summary.number_of_reviewers) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <span className="w-6 md:w-8 text-xs md:text-sm text-white">
                {
                  reviews_summary.star_distribution[
                    star as keyof typeof reviews_summary.star_distribution
                  ]
                }
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Filters */}
      <div className="mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
          Review Lists
        </h3>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4 md:space-y-6">
        {reviewsList.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 md:pb-6">
            <div className="flex flex-col items-start gap-3 md:gap-4">
              <div className="flex-1 min-w-0 gap-3 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <StarRating rating={review.star} />
                    </div>
                    <p className="text-sm md:text-base text-gray-500 font-medium mb-2 leading-relaxed">
                      {review.product_review}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                      {formatDate(review.time)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex justify-center items-center gap-2 md:gap-3">
                    <Image
                      src={review.user_image}
                      alt={review.user_name}
                      width={40}
                      height={40}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0 object-center"
                    />
                    <span className="text-xs md:text-sm font-medium text-gray-300">
                      {review.user_name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 md:gap-2 mt-3 md:mt-0 md:ml-4">
                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800 touch-manipulation">
                      👍
                      <span className="text-xs md:text-sm text-white">
                        {Math.floor(Math.random() * 200) + 10}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
