import React from "react";
import { Review } from "../types";
import Image from "next/image";
import StarRating from "./StarRating";

interface ReviewItemProps {
  review: Review;
  formatDate: (dateString: string) => string;
}

export default function ReviewItem({ review, formatDate }: ReviewItemProps) {
  return (
    <div className="border-b border-gray-200 pb-4 md:pb-6">
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
                  {review.user_name.length * 20 + 10}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}