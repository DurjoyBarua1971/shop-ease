import React from "react";

interface CircularRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
}

export const CircularRating: React.FC<CircularRatingProps> = ({ 
  rating, 
  size = "md" 
}) => {
  const sizeClass = {
    sm: "w-12 h-12",
    md: "w-16 h-16 md:w-20 md:h-20",
    lg: "w-24 h-24"
  }[size];

  const textClass = {
    sm: "text-sm",
    md: "text-lg md:text-2xl",
    lg: "text-2xl md:text-3xl"
  }[size];

  return (
    <div className={`relative ${sizeClass} mx-auto md:mx-0 mb-2`}>
      <svg className="w-full h-full transform rotate-90" viewBox="0 0 36 36">
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
          strokeDasharray={`${(rating / 5) * 100}, 100`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`${textClass} font-bold text-white`}>
          {rating}
        </span>
      </div>
    </div>
  );
};

export default CircularRating;