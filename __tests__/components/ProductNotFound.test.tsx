import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom/vitest";
import { ProductNotFound } from "../../app/components/ProductNotFound";

describe("ProductNotFound Component", () => {
  const mockOnBack = vi.fn();

  beforeEach(() => {
    mockOnBack.mockClear();
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  // <--- Test - 01 --->
  it("renders not found message", () => {
    render(<ProductNotFound onBack={mockOnBack} />);

    expect(screen.getByText(/product not found/i)).toBeInTheDocument();
  });

  // // <--- Test - 02 --->
  it("renders with correct heading", () => {
    render(<ProductNotFound onBack={mockOnBack} />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  // // <--- Test - 03 --->
  it("renders back button", () => {
    render(<ProductNotFound onBack={mockOnBack} />);

    const backButton = screen.getByRole("button", { name: /back/i });
    expect(backButton).toBeInTheDocument();
  });

  // // <--- Test - 04 --->
  it("calls onBack when back button is clicked", async () => {
    const user = userEvent.setup();
    render(<ProductNotFound onBack={mockOnBack} />);

    const backButton = screen.getByRole("button", { name: /back/i });
    await user.click(backButton);

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  // // <--- Test - 05 --->
  it("applies correct CSS classes to back button", () => {
    render(<ProductNotFound onBack={mockOnBack} />);

    const backButton = screen.getByRole("button", { name: /back/i });
    expect(backButton).toHaveClass(
      "bg-blue-600",
      "hover:bg-blue-700",
      "text-white",
      "font-bold"
    );
  });

  // // <--- Test - 06 --->
  it("has proper container styling", () => {
    render(<ProductNotFound onBack={mockOnBack} />);

    const container = screen.getByRole("heading").closest("div");
    expect(container).toHaveClass(
      "min-h-screen",
      "bg-gray-800",
      "text-white",
      "flex",
      "flex-col",
      "items-center",
      "justify-center"
    );
  });
});
