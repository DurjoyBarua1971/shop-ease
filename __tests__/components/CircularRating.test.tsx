import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
import CircularRating from "@/app/components/CircularRating";

describe("CircularRating Component", () => {
  beforeEach(() => {});

  afterEach(() => {
    cleanup();
  });

  // <--- Test - 01 --->
  it("renders circular rating component", () => {
    const { container } = render(<CircularRating rating={4.5} />);

    const circularRating = container.querySelector("svg");
    expect(circularRating).toBeInTheDocument();
  });
});
