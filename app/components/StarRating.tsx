import React from "react";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "lg";
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  size = "sm" 
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

export default StarRating;