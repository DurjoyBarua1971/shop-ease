import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
import OrderSummary from "@/app/components/OrderSummary";
import { CartItem, Product } from "@/app/types";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("@/app/components/Button", () => ({
  default: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
}));

const mockProduct: Product = {
  id: "1",
  name: "Laptop",
  description: "High-performance laptop",
  price: 1000,
  stock: 10,
  image: "laptop.jpg",
  rating: 4.5,
  created: "2024-05-01",
  attributes: [{ name: "Color", values: ["Silver", "Black"] }],
  variations: [
    {
      sku: "LAP-SIL",
      attributes: { Color: "Silver" },
      stock: 5,
      price: 1200,
    },
  ],
};

const mockCartItems: CartItem[] = [
  {
    product: mockProduct,
    quantity: 2,
    variant: undefined,
  },
  {
    product: mockProduct,
    quantity: 1,
    variant: {
      sku: "LAP-SIL",
      attributes: { Color: "Silver" },
      stock: 5,
      price: 1200,
    },
  },
];

const mockDispatch = vi.fn();
const mockCartState = {
  cartItems: mockCartItems,
  productStock: {} as Record<string, { stock: number }>,
};

vi.mock("@/app/context/CartContext", () => ({
  useCart: vi.fn(() => ({
    state: mockCartState,
    dispatch: mockDispatch,
  })),
}));

describe("OrderSummary Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockCartState.cartItems = mockCartItems;
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("renders order summary with correct title", () => {
    render(<OrderSummary />);

    expect(screen.getByText("Order Summary")).toBeInTheDocument();
  });

  it("calculates and displays correct subtotal", () => {
    render(<OrderSummary />);

    // Subtotal: (1000 * 2) + (1200 * 1) = 3200
    expect(screen.getByText("৳ 3200.00")).toBeInTheDocument();
    expect(screen.getByText("Subtotal")).toBeInTheDocument();
  });

  it("calculates and displays correct discount (20%)", () => {
    render(<OrderSummary />);

    // Discount: 3200 * 0.2 = 640
    expect(screen.getByText("-৳ 640.00")).toBeInTheDocument();
    expect(screen.getByText("Discount (20%)")).toBeInTheDocument();
  });

  it("displays correct delivery fee", () => {
    render(<OrderSummary />);

    expect(screen.getByText("৳ 15.00")).toBeInTheDocument();
    expect(screen.getByText("Delivery Fee")).toBeInTheDocument();
  });

  it("calculates and displays correct total", () => {
    render(<OrderSummary />);

    // Total: 3200 - 640 + 15 = 2575
    const totalElements = screen.getAllByText("৳ 2575.00");
    expect(totalElements).toHaveLength(1);
    expect(screen.getByText("Total")).toBeInTheDocument();
  });

  it("renders Proceed to Checkout button", () => {
    render(<OrderSummary />);

    const checkoutButton = screen.getByRole("button", {
      name: /proceed to checkout/i,
    });
    expect(checkoutButton).toBeInTheDocument();
  });

  it("renders Continue Shopping link", () => {
    render(<OrderSummary />);

    const continueShoppingLink = screen.getByRole("link", {
      name: /continue shopping/i,
    });
    expect(continueShoppingLink).toBeInTheDocument();
    expect(continueShoppingLink).toHaveAttribute("href", "/products");
  });

  it("calculates correctly with only products (no variants)", () => {
    const itemsWithoutVariants: CartItem[] = [
      {
        product: mockProduct,
        quantity: 3,
        variant: undefined,
      },
    ];

    mockCartState.cartItems = itemsWithoutVariants;

    render(<OrderSummary />);

    // Subtotal: 1000 * 3 = 3000
    expect(screen.getByText("৳ 3000.00")).toBeInTheDocument();
    // Discount: 3000 * 0.2 = 600
    expect(screen.getByText("-৳ 600.00")).toBeInTheDocument();
    // Total: 3000 - 600 + 15 = 2415
    const totalElements = screen.getAllByText("৳ 2415.00");
    expect(totalElements).toHaveLength(1);
  });

  it("calculates correctly with only variants", () => {
    const itemsWithVariants: CartItem[] = [
      {
        product: mockProduct,
        quantity: 2,
        variant: {
          sku: "LAP-SIL",
          attributes: { Color: "Silver" },
          stock: 5,
          price: 1500,
        },
      },
    ];

    mockCartState.cartItems = itemsWithVariants;

    render(<OrderSummary />);

    // Subtotal: 1500 * 2 = 3000
    expect(screen.getByText("৳ 3000.00")).toBeInTheDocument();
    // Discount: 3000 * 0.2 = 600
    expect(screen.getByText("-৳ 600.00")).toBeInTheDocument();
    // Total: 3000 - 600 + 15 = 2415
    const totalElements = screen.getAllByText("৳ 2415.00");
    expect(totalElements).toHaveLength(1);
  });

  it("applies correct CSS classes and styling", () => {
    render(<OrderSummary />);

    // Check for main container classes
    const container = screen.getByText("Order Summary").closest("div");
    expect(container).toHaveClass(
      "bg-gray-900",
      "rounded-lg",
      "shadow-md",
      "p-6",
      "sticky",
      "top-4",
      "border",
      "border-gray-700"
    );
  });

  it("displays discount in green color", () => {
    render(<OrderSummary />);

    const discountElement = screen.getByText("Discount (20%)").parentElement;
    expect(discountElement).toHaveClass("text-green-400");
  });

  it("formats prices with two decimal places", () => {
    const itemsWithDecimalPrices: CartItem[] = [
      {
        product: { ...mockProduct, price: 1000.5 },
        quantity: 1,
        variant: undefined,
      },
    ];

    mockCartState.cartItems = itemsWithDecimalPrices;

    render(<OrderSummary />);

    expect(screen.getByText("৳ 1000.50")).toBeInTheDocument();
  });

  it("handles large quantities correctly", () => {
    const itemsWithLargeQuantity: CartItem[] = [
      {
        product: mockProduct,
        quantity: 100,
        variant: undefined,
      },
    ];

    mockCartState.cartItems = itemsWithLargeQuantity;

    render(<OrderSummary />);

    // Subtotal: 1000 * 100 = 100000
    expect(screen.getByText("৳ 100000.00")).toBeInTheDocument();
    // Discount: 100000 * 0.2 = 20000
    expect(screen.getByText("-৳ 20000.00")).toBeInTheDocument();
    // Total: 100000 - 20000 + 15 = 80015
    const totalElements = screen.getAllByText("৳ 80015.00");
    expect(totalElements).toHaveLength(1);
  });
});
