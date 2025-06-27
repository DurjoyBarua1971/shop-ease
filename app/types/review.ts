export interface Review {
  star: number;
  product_review: string;
  time: string;
  user_name: string;
  user_image: string;
}

export interface StarDistribution {
  "5": number;
  "4": number;
  "3": number;
  "2": number;
  "1": number;
}

export interface ReviewsSummary {
  number_of_reviewers: number;
  average_star: number;
  star_distribution: StarDistribution;
}

export interface ProductReview {
  id: string;
  name: string;
  reviews_summary: ReviewsSummary;
  reviews: Review[];
}