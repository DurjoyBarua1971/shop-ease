import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
import ReviewItem from "@/app/components/ReviewItem";
import { Review } from "@/app/types";

const mockReview: Review = {
  star: 3,
  product_review: "Really solid laptop with a sleek design.",
  time: "2024-05-15T09:45:00Z",
  user_name: "Samantha Lee",
  user_image:
    "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?w=100&h=100&fit=crop",
};

const mockFormatDate = (dateString: string) => dateString;

describe("ReviewItem Component", () => {
  it("renders review with default props", () => {
    render(<ReviewItem review={mockReview} formatDate={mockFormatDate} />);
    expect(screen.getByText("Samantha Lee")).toBeInTheDocument();
    expect(
      screen.getByText("Really solid laptop with a sleek design.")
    ).toBeInTheDocument();
  });

  it("displays user name correctly", () => {
    render(<ReviewItem review={mockReview} formatDate={mockFormatDate} />);
    expect(screen.getByText("Samantha Lee")).toBeInTheDocument();
  });

  it("renders review text content", () => {
    render(<ReviewItem review={mockReview} formatDate={mockFormatDate} />);
    expect(
      screen.getByText("Really solid laptop with a sleek design.")
    ).toBeInTheDocument();
  });

  it("renders star rating", () => {
    const { container } = render(
      <ReviewItem review={mockReview} formatDate={mockFormatDate} />
    );
    const starIcons = container.querySelectorAll("svg");
    expect(starIcons.length).toBeGreaterThan(0);
    expect(starIcons.length).toBe(5);
  });

  it("displays user avatar when provided", () => {
    render(<ReviewItem review={mockReview} formatDate={mockFormatDate} />);
    const avatar = screen.getByRole("img", { name: /Samantha Lee/i });
    expect(avatar).toBeInTheDocument();
  });

  it("renders review images when provided", () => {
    render(<ReviewItem review={mockReview} formatDate={mockFormatDate} />);
    const reviewImages = screen.getAllByRole("img");
    expect(reviewImages.length).toBe(1);
  });

  it("displays formatted date", () => {
    render(<ReviewItem review={mockReview} formatDate={mockFormatDate} />);
    const dateElement = screen.getByText(/2024|May|15/);
    expect(dateElement).toBeInTheDocument();
  });
});
