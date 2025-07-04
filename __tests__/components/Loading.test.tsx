import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
import Loading from "@/app/components/Loading";

describe("Loading Component", () => {
  beforeEach(() => {});

  afterEach(() => {
    cleanup();
  });

  // <--- Test - 01 --->
  it("renders loading component", () => {
    render(<Loading />);
    
    const loadingContainer = () => 
      document.querySelector('.animate-pulse') as HTMLElement;
    
    expect(loadingContainer()).toBeInTheDocument();
  });

  // <--- Test - 02 --->
  it("applies correct CSS classes to main container", () => {
    const { container } = render(<Loading />);
    
    const mainContainer = container.firstChild as HTMLElement;
    expect(mainContainer).toHaveClass(
      "min-h-screen",
      "bg-gray-900",
      "text-white",
      "px-2",
      "py-6",
      "sm:px-4"
    );
  });

  // <--- Test - 03 --->
  it("applies correct CSS classes to max-width container", () => {
    const { container } = render(<Loading />);
    
    const maxWidthContainer = container.querySelector('.max-w-4xl');
    expect(maxWidthContainer).toHaveClass("max-w-4xl", "mx-auto");
  });

  // <--- Test - 04 --->
  it("applies correct CSS classes to card container", () => {
    const { container } = render(<Loading />);
    
    const cardContainer = container.querySelector('.bg-gray-800');
    expect(cardContainer).toHaveClass(
      "bg-gray-800",
      "p-4",
      "sm:p-6",
      "rounded-lg",
      "shadow-lg"
    );
  });

  // <--- Test - 05 --->
  it("applies animate-pulse class to skeleton container", () => {
    const { container } = render(<Loading />);
    
    const skeletonContainer = container.querySelector('.animate-pulse');
    expect(skeletonContainer).toHaveClass("animate-pulse");
  });

  // <--- Test - 06 --->
  it("renders skeleton elements with correct structure", () => {
    const { container } = render(<Loading />);
    
    const skeletonElements = container.querySelectorAll('.bg-gray-700');
    expect(skeletonElements).toHaveLength(4);
  });

  // <--- Test - 07 --->
  it("renders header skeleton with correct classes", () => {
    const { container } = render(<Loading />);
    
    const headerSkeleton = container.querySelector('.h-8');
    expect(headerSkeleton).toHaveClass("h-8", "bg-gray-700", "rounded", "mb-4");
  });

  // <--- Test - 08 --->
  it("renders main content skeleton with correct classes", () => {
    const { container } = render(<Loading />);
    
    const mainContentSkeleton = container.querySelector('.h-64');
    expect(mainContentSkeleton).toHaveClass("h-64", "bg-gray-700", "rounded", "mb-4");
  });

  // <--- Test - 09 --->
  it("renders text line skeletons with correct classes", () => {
    const { container } = render(<Loading />);
    
    const textSkeletons = container.querySelectorAll('.h-4');
    expect(textSkeletons).toHaveLength(2);
    
    textSkeletons.forEach((skeleton, index) => {
      expect(skeleton).toHaveClass("h-4", "bg-gray-700", "rounded", "mb-2");
    });
  });

  // <--- Test - 10 --->
  it("has proper responsive design classes", () => {
    const { container } = render(<Loading />);
    
    const mainContainer = container.firstChild as HTMLElement;
    expect(mainContainer).toHaveClass("px-2", "py-6", "sm:px-4");
    
    const cardContainer = container.querySelector('.bg-gray-800');
    expect(cardContainer).toHaveClass("p-4", "sm:p-6");
  });

  // <--- Test - 11 --->
  it("renders with proper dark theme colors", () => {
    const { container } = render(<Loading />);
    
    const mainContainer = container.firstChild as HTMLElement;
    expect(mainContainer).toHaveClass("bg-gray-900", "text-white");
    
    const cardContainer = container.querySelector('.bg-gray-800');
    expect(cardContainer).toHaveClass("bg-gray-800");
    
    const skeletonElements = container.querySelectorAll('.bg-gray-700');
    skeletonElements.forEach((element) => {
      expect(element).toHaveClass("bg-gray-700");
    });
  });

  // <--- Test - 12 --->
  it("renders with proper spacing and margins", () => {
    const { container } = render(<Loading />);
    
    const headerSkeleton = container.querySelector('.h-8');
    expect(headerSkeleton).toHaveClass("mb-4");
    
    const mainContentSkeleton = container.querySelector('.h-64');
    expect(mainContentSkeleton).toHaveClass("mb-4");
    
    const textSkeletons = container.querySelectorAll('.h-4');
    textSkeletons.forEach((skeleton) => {
      expect(skeleton).toHaveClass("mb-2");
    });
  });

  // <--- Test - 13 --->
  it("has correct border radius styling", () => {
    const { container } = render(<Loading />);
    
    const cardContainer = container.querySelector('.bg-gray-800');
    expect(cardContainer).toHaveClass("rounded-lg");
    
    const skeletonElements = container.querySelectorAll('.bg-gray-700');
    skeletonElements.forEach((element) => {
      expect(element).toHaveClass("rounded");
    });
  });

  // <--- Test - 14 --->
  it("has proper shadow styling", () => {
    const { container } = render(<Loading />);
    
    const cardContainer = container.querySelector('.bg-gray-800');
    expect(cardContainer).toHaveClass("shadow-lg");
  });

  // <--- Test - 15 --->
  it("renders all skeleton elements in correct order", () => {
    const { container } = render(<Loading />);
    
    const animateContainer = container.querySelector('.animate-pulse');
    const children = animateContainer?.children;
    
    expect(children).toHaveLength(4);
    
    // First element should be header (h-8)
    expect(children?.[0]).toHaveClass("h-8");
    
    // Second element should be main content (h-64)
    expect(children?.[1]).toHaveClass("h-64");
    
    // Third and fourth elements should be text lines (h-4)
    expect(children?.[2]).toHaveClass("h-4");
    expect(children?.[3]).toHaveClass("h-4");
  });

  // <--- Test - 16 --->
  it("maintains accessibility with proper semantic structure", () => {
    const { container } = render(<Loading />);
    
    // Should have proper div structure for screen readers
    const mainContainer = container.firstChild as HTMLElement;
    expect(mainContainer.tagName).toBe("DIV");
    
    const maxWidthContainer = container.querySelector('.max-w-4xl');
    expect(maxWidthContainer?.tagName).toBe("DIV");
    
    const cardContainer = container.querySelector('.bg-gray-800');
    expect(cardContainer?.tagName).toBe("DIV");
  });
});