import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom/vitest";
import { AttributeSelector } from "./AttributeSelector";

describe("AttributeSelector Component", () => {
  const mockOnAttributeChange = vi.fn();

  const mockAttributes = [
    { name: "Size", values: ["Small", "Medium", "Large"] },
    { name: "Color", values: ["Red", "Blue", "Green"] },
  ];

  beforeEach(() => {
    mockOnAttributeChange.mockClear();
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  // <--- Test - 01 --->
  it("renders correctly with empty attributes array", () => {
    render(
      <AttributeSelector
        attributes={[]}
        selectedAttributes={{}}
        onAttributeChange={mockOnAttributeChange}
      />
    );

    expect(screen.getByText("Attributes:")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  // <--- Test - 02 --->
  it("renders all attributes and their values", () => {
    render(
      <AttributeSelector
        attributes={mockAttributes}
        selectedAttributes={{}}
        onAttributeChange={mockOnAttributeChange}
      />
    );

    // Check if attribute names are rendered
    expect(screen.getByText("Size:")).toBeInTheDocument();
    expect(screen.getByText("Color:")).toBeInTheDocument();

    // Check if all values are rendered as buttons
    expect(screen.getByRole("button", { name: "Small" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Medium" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Large" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Red" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Blue" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Green" })).toBeInTheDocument();
  });

  // <--- Test - 03 --->
  it("calls onAttributeChange when a value button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <AttributeSelector
        attributes={mockAttributes}
        selectedAttributes={{}}
        onAttributeChange={mockOnAttributeChange}
      />
    );

    const mediumButton = screen.getByRole("button", { name: "Medium" });
    await user.click(mediumButton);

    expect(mockOnAttributeChange).toHaveBeenCalledWith("Size", "Medium");
    expect(mockOnAttributeChange).toHaveBeenCalledTimes(1);
  });

  // <--- Test - 04 --->
  it("handles clicks on different attributes correctly", async () => {
    const user = userEvent.setup();

    render(
      <AttributeSelector
        attributes={mockAttributes}
        selectedAttributes={{}}
        onAttributeChange={mockOnAttributeChange}
      />
    );

    await user.click(screen.getByRole("button", { name: "Large" }));
    await user.click(screen.getByRole("button", { name: "Blue" }));

    expect(mockOnAttributeChange).toHaveBeenNthCalledWith(1, "Size", "Large");
    expect(mockOnAttributeChange).toHaveBeenNthCalledWith(2, "Color", "Blue");
    expect(mockOnAttributeChange).toHaveBeenCalledTimes(2);
  });

  // <--- Test - 05 --->
  it("applies correct CSS classes for selected attributes", () => {
    const selectedAttributes = { Size: "Medium", Color: "Red" };

    render(
      <AttributeSelector
        attributes={mockAttributes}
        selectedAttributes={selectedAttributes}
        onAttributeChange={mockOnAttributeChange}
      />
    );

    const mediumButton = screen.getByRole("button", { name: "Medium" });
    const redButton = screen.getByRole("button", { name: "Red" });
    const smallButton = screen.getByRole("button", { name: "Small" });

    // Selected buttons should have blue background
    expect(mediumButton).toHaveClass(
      "bg-blue-600",
      "border-blue-600",
      "text-white"
    );
    expect(redButton).toHaveClass(
      "bg-blue-600",
      "border-blue-600",
      "text-white"
    );

    // Unselected buttons should have gray background
    expect(smallButton).toHaveClass(
      "bg-gray-700",
      "border-gray-600",
      "text-gray-300"
    );
  });

  // <--- Test - 06 --->
  it("applies correct CSS classes for unselected attributes", () => {
    render(
      <AttributeSelector
        attributes={mockAttributes}
        selectedAttributes={{}}
        onAttributeChange={mockOnAttributeChange}
      />
    );

    const buttons = screen.getAllByRole("button");

    buttons.forEach((button) => {
      expect(button).toHaveClass(
        "bg-gray-700",
        "border-gray-600",
        "text-gray-300"
      );
      expect(button).not.toHaveClass(
        "bg-blue-600",
        "border-blue-600",
        "text-white"
      );
    });
  });

  // <--- Test - 07 --->
  it("renders correctly with single attribute", () => {
    const singleAttribute = [
      { name: "Material", values: ["Cotton", "Polyester"] },
    ];

    render(
      <AttributeSelector
        attributes={singleAttribute}
        selectedAttributes={{}}
        onAttributeChange={mockOnAttributeChange}
      />
    );

    expect(screen.getByText("Material:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cotton" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Polyester" })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  // <--- Test - 08 --->
  it("renders correctly with attribute having single value", () => {
    const singleValueAttribute = [{ name: "Brand", values: ["Nike"] }];

    render(
      <AttributeSelector
        attributes={singleValueAttribute}
        selectedAttributes={{}}
        onAttributeChange={mockOnAttributeChange}
      />
    );

    expect(screen.getByText("Brand:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Nike" })).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });
});
