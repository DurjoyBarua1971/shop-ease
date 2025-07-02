import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
import ReviewSummary from "@/app/components/ReviewSummary";
import { ReviewsSummary } from "@/app/types";

const mockReviewsSummary: ReviewsSummary = {
  average_star: 4.2,
  number_of_reviewers: 150,
  star_distribution: {
    "5": 75,
    "4": 45,
    "3": 20,
    "2": 7,
    "1": 3,
  },
};

describe("ReviewSummary Component", () => {
  beforeEach(() => {});

  afterEach(() => {
    cleanup();
  });

  it("renders with review summary data", () => {
    render(<ReviewSummary reviewsSummary={mockReviewsSummary} />);

    expect(screen.getByText("from 150 reviews")).toBeInTheDocument();
  });

  it("renders all star rating distribution rows", () => {
    render(
      <ReviewSummary reviewsSummary={mockReviewsSummary} />
    );

    // Check for all star rating labels (5.0, 4.0, 3.0, 2.0, 1.0)
    expect(screen.getByText("5.0")).toBeInTheDocument();
    expect(screen.getByText("4.0")).toBeInTheDocument();
    expect(screen.getByText("3.0")).toBeInTheDocument();
    expect(screen.getByText("2.0")).toBeInTheDocument();
    expect(screen.getByText("1.0")).toBeInTheDocument();

    // Check for star distribution counts
    expect(screen.getByText("75")).toBeInTheDocument();
    expect(screen.getByText("45")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("renders progress bars for star distribution", () => {
    const { container } = render(
      <ReviewSummary reviewsSummary={mockReviewsSummary} />
    );

    const progressBars = container.querySelectorAll(".bg-yellow-500");
    expect(progressBars).toHaveLength(5);
  });

  it("displays star icons in distribution", () => {
    const { container } = render(
      <ReviewSummary reviewsSummary={mockReviewsSummary} />
    );

    const starIcons = container.querySelectorAll("svg");
    expect(starIcons.length).toBeGreaterThan(0);
  });

  it("handles zero reviews correctly", () => {
    const emptyReviewsSummary: ReviewsSummary = {
      average_star: 0,
      number_of_reviewers: 0,
      star_distribution: {
        "5": 0,
        "4": 0,
        "3": 0,
        "2": 0,
        "1": 0,
      },
    };

    render(<ReviewSummary reviewsSummary={emptyReviewsSummary} />);

    expect(screen.getByText("from 0 reviews")).toBeInTheDocument();
  });

  it("calculates progress bar widths correctly", () => {
    const { container } = render(
      <ReviewSummary reviewsSummary={mockReviewsSummary} />
    );

    const progressBars = container.querySelectorAll(".bg-yellow-500");

    // 5-star: 75/150 = 50%
    expect(progressBars[0]).toHaveStyle({ width: "50%" });

    // 4-star: 45/150 = 30%
    expect(progressBars[1]).toHaveStyle({ width: "30%" });

    // 3-star: 20/150 = 13.333...%
    expect(progressBars[2]).toHaveStyle({ width: "13.333333333333334%" });
  });
});
