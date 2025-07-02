import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom/vitest";
import Review from "@/app/components/Review";
import * as reviewsModule from "@/app/lib/reviews";

const mockProductReview = {
  id: "1",
  name: "Laptop",
  reviews_summary: {
    number_of_reviewers: 5,
    average_star: 4.2,
    star_distribution: {
      "5": 1,
      "4": 2,
      "3": 1,
      "2": 1,
      "1": 0,
    },
  },
  reviews: [
    {
      star: 5,
      product_review: "This laptop is a game-changer! The performance is lightning-fast, and the display is stunning. I got the Silver 512GB version, and it handles multitasking like a dream. Highly recommend for professionals and gamers alike!",
      time: "2024-06-10T14:30:00Z",
      user_name: "Alex Johnson",
      user_image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=100&h=100&fit=crop",
    },
    {
      star: 4,
      product_review: "Really solid laptop with a sleek design. The Black 256GB model is perfect for my work needs, though the battery life could be a bit better for long sessions. Overall, very satisfied!",
      time: "2024-05-15T09:45:00Z",
      user_name: "Samantha Lee",
      user_image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?w=100&h=100&fit=crop",
    },
    {
      star: 4,
      product_review: "Great value for the price! The processor is powerful, and the display is vibrant. I wish the 512GB version had more stock, but the Silver model I got works flawlessly for editing.",
      time: "2024-06-01T11:20:00Z",
      user_name: "Michael Chen",
      user_image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=100&h=100&fit=crop",
    },
    {
      star: 3,
      product_review: "The laptop is decent for everyday tasks, but it gets quite warm during intensive work. The Black 256GB version serves my basic needs, though I expected better cooling for the price.",
      time: "2024-05-28T14:15:00Z",
      user_name: "Jessica Taylor",
      user_image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop",
    },
    {
      star: 2,
      product_review: "Had high expectations but the laptop came with a few dead pixels on the screen. Customer service was helpful in getting a replacement, but it was inconvenient. The Silver 512GB model works fine now.",
      time: "2024-05-22T10:30:00Z",
      user_name: "Robert Anderson",
      user_image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100&h=100&fit=crop",
    },
  ],
};

describe("Review Component", () => {
  beforeEach(() => {
    // A spy is a mock function that tracks calls to the original method without executing its actual implementation.
    vi.spyOn(reviewsModule, 'reviews', 'get').mockReturnValue([mockProductReview]);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("renders review component with product reviews", () => {
    render(<Review id="1" />);
    expect(screen.getByText("Product Reviews")).toBeInTheDocument();
    expect(screen.getByText("Review Lists")).toBeInTheDocument();
  });

  it("displays review summary correctly", () => {
    render(<Review id="1" />);
    expect(screen.getByText("from 5 reviews")).toBeInTheDocument();
  });

  it("shows initial 2 reviews by default", () => {
    render(<Review id="1" />);
    expect(screen.getByText("Alex Johnson")).toBeInTheDocument();
    expect(screen.getByText("Samantha Lee")).toBeInTheDocument();
    expect(screen.queryByText("Michael Chen")).not.toBeInTheDocument();
  });

  it("displays Load More button when there are more reviews", () => {
    render(<Review id="1" />);
    const loadMoreButton = screen.getByRole("button", { name: /load more/i });
    expect(loadMoreButton).toBeInTheDocument();
  });

  it("loads more reviews when Load More button is clicked", async () => {
    render(<Review id="1" />);
    const loadMoreButton = screen.getByRole("button", { name: /load more/i });
    
    // Initially only 2 reviews visible
    expect(screen.getByText("Alex Johnson")).toBeInTheDocument();
    expect(screen.getByText("Samantha Lee")).toBeInTheDocument();
    expect(screen.queryByText("Michael Chen")).not.toBeInTheDocument();
    
    // Click Load More
    await userEvent.click(loadMoreButton);
    
    // Now 4 reviews should be visible
    expect(screen.getByText("Alex Johnson")).toBeInTheDocument();
    expect(screen.getByText("Samantha Lee")).toBeInTheDocument();
    expect(screen.getByText("Michael Chen")).toBeInTheDocument();
    expect(screen.getByText("Jessica Taylor")).toBeInTheDocument();
  });

  it("loads all reviews after second Load More click", async () => {
    render(<Review id="1" />);
    const loadMoreButton = screen.getByRole("button", { name: /load more/i });
    
    // Click Load More twice to load all 5 reviews
    await userEvent.click(loadMoreButton);
    await userEvent.click(loadMoreButton);
    
    // All 5 reviews should be visible
    expect(screen.getByText("Alex Johnson")).toBeInTheDocument();
    expect(screen.getByText("Samantha Lee")).toBeInTheDocument();
    expect(screen.getByText("Michael Chen")).toBeInTheDocument();
    expect(screen.getByText("Jessica Taylor")).toBeInTheDocument();
    expect(screen.getByText("Robert Anderson")).toBeInTheDocument();
  });

  it("hides Load More button when all reviews are loaded", async () => {
    render(<Review id="1" />);
    const loadMoreButton = screen.getByRole("button", { name: /load more/i });
    
    // Click Load More twice to load all reviews
    await userEvent.click(loadMoreButton);
    await userEvent.click(loadMoreButton);
    
    // Load More button should be gone
    expect(screen.queryByRole("button", { name: /load more/i })).not.toBeInTheDocument();
  });

  it("shows 'All reviews loaded' message when all reviews are displayed", async () => {
    render(<Review id="1" />);
    const loadMoreButton = screen.getByRole("button", { name: /load more/i });
    
    await userEvent.click(loadMoreButton);
    await userEvent.click(loadMoreButton);
    
    expect(screen.getByText("All reviews loaded")).toBeInTheDocument();
  });

  it("handles non-existent product id", () => {
    render(<Review id="999" />);
    expect(screen.getByText("No reviews found")).toBeInTheDocument();
  });

  it("renders review items with correct content", () => {
    render(<Review id="1" />);
    
    // Check if review content is displayed
    expect(screen.getByText(/This laptop is a game-changer!/)).toBeInTheDocument();
    expect(screen.getByText(/Really solid laptop with a sleek design/)).toBeInTheDocument();
  });

  it("does not show 'All reviews loaded' message for products with 3 or fewer reviews", () => {
    const shortReviewProduct = {
      ...mockProductReview,
      reviews: mockProductReview.reviews.slice(0, 2),
      reviews_summary: {
        ...mockProductReview.reviews_summary,
        number_of_reviewers: 2,
      },
    };
    
    vi.spyOn(reviewsModule, 'reviews', 'get').mockReturnValue([shortReviewProduct]);
    
    render(<Review id="1" />);
    
    // Should not show Load More button or "All reviews loaded" message
    expect(screen.queryByRole("button", { name: /load more/i })).not.toBeInTheDocument();
    expect(screen.queryByText("All reviews loaded")).not.toBeInTheDocument();
  });

  it("maintains state correctly when loading more reviews progressively", async () => {
    render(<Review id="1" />);
    const loadMoreButton = screen.getByRole("button", { name: /load more/i });
    
    expect(screen.getAllByText(/Alex Johnson|Samantha Lee/)).toHaveLength(2);
    
    await userEvent.click(loadMoreButton);
    
    expect(screen.getAllByText(/Alex Johnson|Samantha Lee|Michael Chen|Jessica Taylor/)).toHaveLength(4);
    
    expect(screen.getByRole("button", { name: /load more/i })).toBeInTheDocument();
  });
});