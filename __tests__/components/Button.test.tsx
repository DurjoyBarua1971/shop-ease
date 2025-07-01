import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom/vitest";
import Button from "@/app/components/Button";


describe("Button Component", () => {
  it("renders button with default props", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it("renders children correctly", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Buy</Button>);
    const button = screen.getByRole("button", { name: /buy/i });
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalledTimes(2);
    expect(handleClick).toHaveBeenCalledOnce();
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it("applies disabled styles and prevents click when disabled", async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Buy Me
      </Button>
    );
    const button = screen.getByRole("button", { name: /buy me/i });
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("sets correct type attribute", () => {
    render(<Button type="button">Submit</Button>);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveAttribute("type", "button");
  });
});
