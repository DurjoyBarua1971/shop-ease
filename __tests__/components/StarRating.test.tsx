import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
import StarRating from "@/app/components/StarRating";

describe("StarRating Component", () => {
  beforeEach(() => {});

  afterEach(() => {
    cleanup();
  });

  // <--- Test - 01 --->
  it("renders all 5 stars", () => {
    const { container } = render(<StarRating rating={3} />);
    const stars = container.querySelectorAll("svg");
    expect(stars).toHaveLength(5);
  });

  // <--- Test - 02 --->
  it("applies correct CSS classes for filled stars", () => {
    const { container } = render(<StarRating rating={3} />);
    const stars = container.querySelectorAll("svg");

    // First 3 stars should be yellow (filled)
    expect(stars[0]).toHaveClass("text-yellow-400");
    expect(stars[1]).toHaveClass("text-yellow-400");
    expect(stars[2]).toHaveClass("text-yellow-400");
  });

  // <--- Test - 03 --->
  it("applies correct CSS classes for empty stars", () => {
    const { container } = render(<StarRating rating={3} />);
    const stars = container.querySelectorAll("svg");

    // Last 2 stars should be gray (empty)
    expect(stars[3]).toHaveClass("text-gray-300");
    expect(stars[4]).toHaveClass("text-gray-300");
  });

  // <--- Test - 04 --->
  it("renders with small size by default", () => {
    const { container } = render(<StarRating rating={5} />);
    const stars = container.querySelectorAll("svg");

    stars.forEach((star) => {
      expect(star).toHaveClass("w-4", "h-4");
    });
  });

  // <--- Test - 05 --->
  it("renders with large size when specified", () => {
    const { container } = render(<StarRating rating={5} size="lg" />);
    const stars = container.querySelectorAll("svg");

    stars.forEach((star) => {
      expect(star).toHaveClass("w-5", "h-5");
    });
  });

  // <--- Test - 06 --->
  it("renders correctly with zero rating", () => {
    const { container } = render(<StarRating rating={0} />);
    const stars = container.querySelectorAll("svg");

    stars.forEach((star) => {
      expect(star).toHaveClass("text-gray-300");
      expect(star).not.toHaveClass("text-yellow-400");
    });
  });

  // <--- Test - 07 --->
  it("renders correctly with full rating", () => {
    const { container } = render(<StarRating rating={5} />);
    const stars = container.querySelectorAll("svg");

    stars.forEach((star) => {
      expect(star).toHaveClass("text-yellow-400");
      expect(star).not.toHaveClass("text-gray-300");
    });
  });

  // <--- Test - 08 --->
  it("has proper container styling", () => {
    const { container } = render(<StarRating rating={3} />);
    expect(container.firstChild).toHaveClass("flex", "items-center", "gap-1");
  });
});
