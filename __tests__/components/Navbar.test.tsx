import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
import Navbar from "@/app/components/Navbar";

// Mock Next.js navigation
const mockUsePathname = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

// Mock Next.js Link component
vi.mock("next/link", () => ({
  default: ({ href, children, className, ...props }: any) => (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ),
}));

// Mock CartContext
const mockCartContext = {
  state: {
    cartItems: [
      { quantity: 2 },
      { quantity: 1 },
    ],
  },
  dispatch: vi.fn(),
};

const mockUseCart = vi.fn();
vi.mock("@/app/context/CartContext", () => ({
  useCart: () => mockUseCart(),
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    mockUseCart.mockReturnValue(mockCartContext);
    mockUsePathname.mockReturnValue("/");
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  // <--- Test - 01 --->
  it("renders navbar with brand name", () => {
    render(<Navbar session={null} />);
    
    expect(screen.getByText("ShopEase")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "ShopEase" })).toHaveAttribute("href", "/");
  });

  // <--- Test - 02 --->
  it("renders navigation links", () => {
    render(<Navbar session={null} />);
    
    expect(screen.getByRole("link", { name: "Product" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Product" })).toHaveAttribute("href", "/products");
    expect(screen.getByRole("link", { name: /Cart/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Cart/ })).toHaveAttribute("href", "/cart");
  });

  // <--- Test - 03 --->
  it("displays cart item count when items exist", () => {
    render(<Navbar session={null} />);
    
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  // <--- Test - 04 --->
  it("does not display cart badge when cart is empty", () => {
    mockUseCart.mockReturnValue({
      state: {
        cartItems: [],
      },
      dispatch: vi.fn(),
    });

    render(<Navbar session={null} />);
    
    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });

  // <--- Test - 05 --->
  it("applies active styles to current page link", () => {
    mockUsePathname.mockReturnValue("/products");
    
    render(<Navbar session={null} />);
    
    const productLink = screen.getByRole("link", { name: "Product" });
    expect(productLink).toHaveClass("text-blue-500", "font-semibold", "hover:text-blue-700", "border-b-2", "border-blue-400", "pb-1");
  });

  // <--- Test - 06 --->
  it("applies inactive styles to non-current page links", () => {
    mockUsePathname.mockReturnValue("/");
    
    render(<Navbar session={null} />);
    
    const productLink = screen.getByRole("link", { name: "Product" });
    expect(productLink).toHaveClass("text-gray-300", "hover:text-white", "font-semibold");
    expect(productLink).not.toHaveClass("text-blue-500", "border-b-2");
  });

  // <--- Test - 07 --->
  it("applies active styles to cart link when on cart page", () => {
    mockUsePathname.mockReturnValue("/cart");
    
    render(<Navbar session={null} />);
    
    const cartLink = screen.getByRole("link", { name: /Cart/ });
    expect(cartLink).toHaveClass("text-blue-500", "font-semibold", "hover:text-blue-700", "border-b-2", "border-blue-400", "pb-1");
  });

  // <--- Test - 08 --->
  it("displays logout button when session exists", () => {
    const mockSession = { user: { id: "1" } };
    
    render(<Navbar session={mockSession} />);
    
    const logoutLink = screen.getByRole("link", { name: "⏻" });
    expect(logoutLink).toBeInTheDocument();
    expect(logoutLink).toHaveAttribute("href", "/auth/logout");
  });

  // <--- Test - 09 --->
  it("does not display logout button when no session", () => {
    render(<Navbar session={null} />);
    
    expect(screen.queryByRole("link", { name: "⏻" })).not.toBeInTheDocument();
  });

  // <--- Test - 10 --->
  it("throws error when CartContext is not available", () => {
    mockUseCart.mockReturnValue(null);
    
    expect(() => render(<Navbar session={null} />)).toThrow("CartContext is not available");
  });

  // <--- Test - 11 --->
  it("calculates cart item count correctly", () => {
    mockUseCart.mockReturnValue({
      state: {
        cartItems: [
          { quantity: 5 },
          { quantity: 3 },
          { quantity: 2 },
        ],
      },
      dispatch: vi.fn(),
    });

    render(<Navbar session={null} />);
    
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  // <--- Test - 12 --->
  it("applies correct CSS classes to brand logo", () => {
    render(<Navbar session={null} />);
    
    const brandLink = screen.getByRole("link", { name: "ShopEase" });
    expect(brandLink).toHaveClass("text-2xl", "sm:text-3xl", "font-extrabold", "tracking-wide", "text-[#93C5FD]");
  });

  // <--- Test - 13 --->
  it("applies correct CSS classes to cart badge", () => {
    render(<Navbar session={null} />);
    
    const cartBadge = screen.getByText("3");
    expect(cartBadge).toHaveClass("absolute", "bg-red-500", "text-white", "text-xs", "rounded-full", "h-5", "w-5", "flex", "items-center", "justify-center", "font-semibold", "translate-x-25", "-translate-y-9");
  });

  // <--- Test - 14 --->
  it("applies correct CSS classes to navigation container", () => {
    const { container } = render(<Navbar session={null} />);
    
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("fixed", "top-0", "flex", "items-center", "justify-between", "w-full", "max-w-5xl", "mx-auto", "bg-[#111827]/60", "backdrop-blur-md", "shadow-md", "px-4", "py-6", "z-10", "left-0", "right-0");
  });

  // <--- Test - 15 --->
  it("handles single cart item correctly", () => {
    mockUseCart.mockReturnValue({
      state: {
        cartItems: [
          { quantity: 1 },
        ],
      },
      dispatch: vi.fn(),
    });

    render(<Navbar session={null} />);
    
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  // <--- Test - 16 --->
  it("handles large cart item count", () => {
    mockUseCart.mockReturnValue({
      state: {
        cartItems: [
          { quantity: 99 },
          { quantity: 1 },
        ],
      },
      dispatch: vi.fn(),
    });

    render(<Navbar session={null} />);
    
    expect(screen.getByText("100")).toBeInTheDocument();
  });

  // <--- Test - 17 --->
  it("applies correct spacing classes to navigation links container", () => {
    const { container } = render(<Navbar session={null} />);
    
    const linksContainer = container.querySelector("div.space-x-4");
    expect(linksContainer).toHaveClass("space-x-4");
  });

  // <--- Test - 18 --->
  it("renders with session as empty object", () => {
    render(<Navbar session={{}} />);
    
    expect(screen.getByRole("link", { name: "⏻" })).toBeInTheDocument();
  });
});