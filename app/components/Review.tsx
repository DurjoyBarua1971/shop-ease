import React from "react";
import { reviews } from "../lib/reviews";
import ReviewSummary from "./ReviewSummary";
import ReviewItem from "./ReviewItem";
import { formatDate } from "../lib/utils";
import { FixedSizeList as List } from 'react-window';


function Review({ id }: { id: string }) {
  const product_review = reviews.find((r) => r.id === id);

  if (!product_review) {
    return (
      <div className="p-4 text-center text-gray-400">No reviews found</div>
    );
  }

  const { reviews_summary, reviews: reviewsList } = product_review;
  const itemCount = reviewsList.length;
  const itemHeight = 295;

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <div style={style} className="px-0 md:px-2">
      <ReviewItem
        key={index}
        review={reviewsList[index]}
        formatDate={formatDate}
      />
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
        Product Reviews
      </h2>
      <div className="sm:w-xl md:w-2xl lg:w-4xl">
        <ReviewSummary reviewsSummary={reviews_summary} />
      </div>

      <div className="mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
          Review Lists
        </h3>
      </div>

      <div className="space-y-4 md:space-y-6">
        <List
          height={itemHeight * 2 - 20}
          itemCount={itemCount}
          itemSize={itemHeight}
          overscanCount={4}
          width={"100%"}
        >
          {Row}
        </List>
      </div>

      {itemCount === 0 && (
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">All reviews displayed</p>
        </div>
      )}
    </div>
  );
}

export default Review;
