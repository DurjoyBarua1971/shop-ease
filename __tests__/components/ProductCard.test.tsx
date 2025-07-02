import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom/vitest";
import ProductCard from "@/app/components/ProductCard";
import { Product } from "@/app/types";

const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

const mockDispatch = vi.fn();
const mockCartState = {
  items: [],
  productStock: {} as Record<string, { stock: number }>,
};

vi.mock("@/app/context/CartContext", () => ({
  useCart: () => ({
    state: mockCartState,
    dispatch: mockDispatch,
  }),
}));

const mockProduct: Product = {
  id: "1",
  name: "Laptop",
  description:
    "Experience seamless productivity with this high-performance laptop, featuring a sleek design, powerful processor, and vibrant display. Perfect for work, gaming, or creative projects, it offers customizable storage and color options to suit your style.",
  price: 75000,
  stock: 10,
  image:
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
  rating: 4.5,
  created: "2024-05-01",
  attributes: [
    { name: "Color", values: ["Silver", "Black"] },
    { name: "Storage", values: ["256GB", "512GB"] },
  ],
  variations: [
    {
      sku: "LAP-SIL-256",
      attributes: { Color: "Silver", Storage: "256GB" },
      stock: 3,
      price: 75000,
    },
    {
      sku: "LAP-SIL-512",
      attributes: { Color: "Silver", Storage: "512GB" },
      stock: 2,
      price: 80000,
    },
    {
      sku: "LAP-BLK-256",
      attributes: { Color: "Black", Storage: "256GB" },
      stock: 4,
      price: 75000,
    },
    {
      sku: "LAP-BLK-512",
      attributes: { Color: "Black", Storage: "512GB" },
      stock: 1,
      price: 80000,
    },
  ],
};

describe("ProductCard Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockCartState.productStock = {
      "1": { stock: 10 },
    };
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("renders product card with product information", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText("৳75000")).toBeInTheDocument();
    expect(screen.getByText("⭐ 4.5")).toBeInTheDocument();
    expect(screen.getByText("👉 10")).toBeInTheDocument();
  });

  it("displays product image with correct attributes", () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByRole("img", { name: /laptop/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop"
    );
    expect(image).toHaveAttribute("alt", "Laptop");
  });

  it("renders Buy Now button when product is in stock", () => {
    render(<ProductCard product={mockProduct} />);

    const buyButton = screen.getByRole("button", { name: /buy now/i });
    expect(buyButton).toBeInTheDocument();
    expect(buyButton).not.toBeDisabled();
  });

  it("navigates to product detail page when Buy Now is clicked", async () => {
    render(<ProductCard product={mockProduct} />);

    const buyButton = screen.getByRole("button", { name: /buy now/i });
    await userEvent.click(buyButton);

    expect(mockPush).toHaveBeenCalledWith("/products/1");
    expect(mockPush).toHaveBeenCalledTimes(1);
  });

  it("does not show stock count when product is out of stock", () => {
    mockCartState.productStock["1"].stock = 0;

    render(<ProductCard product={mockProduct} />);

    expect(screen.queryByText("👉")).not.toBeInTheDocument();
  });

  it("does not navigate when out of stock button is clicked", async () => {
    mockCartState.productStock["1"].stock = 0;

    render(<ProductCard product={mockProduct} />);

    const outOfStockButton = screen.getByRole("button", {
      name: /out of stock/i,
    });
    await userEvent.click(outOfStockButton);

    expect(mockPush).not.toHaveBeenCalled();
  });

  it("displays correct price formatting for high-value products", () => {
    const expensiveProduct: Product = {
      ...mockProduct,
      price: 125000,
    };

    render(<ProductCard product={expensiveProduct} />);

    expect(screen.getByText("৳125000")).toBeInTheDocument();
  });

  it("handles products with variations correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText("৳75000")).toBeInTheDocument();
    expect(screen.getByText("⭐ 4.5")).toBeInTheDocument();
  });

  it("truncates long product names", () => {
    const longNameProduct: Product = {
      ...mockProduct,
      name: "High-Performance Gaming and Professional Laptop with Advanced Features",
    };

    render(<ProductCard product={longNameProduct} />);

    const productName = screen.getByText(
      /High-Performance Gaming and Professional Laptop/
    );
    expect(productName).toBeInTheDocument();
    expect(productName).toHaveClass("truncate");
  });

  it("displays rating with star emoji", () => {
    const highRatedProduct: Product = {
      ...mockProduct,
      rating: 4.8,
    };

    render(<ProductCard product={highRatedProduct} />);

    expect(screen.getByText("⭐ 4.8")).toBeInTheDocument();
  });

  it("handles low stock correctly", () => {
    mockCartState.productStock["1"].stock = 2;

    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("👉 2")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /buy now/i })).not.toBeDisabled();
  });

  it("displays correct stock count from context over product stock", () => {
    mockCartState.productStock["1"].stock = 5;

    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("👉 5")).toBeInTheDocument();
    expect(screen.queryByText("👉 10")).not.toBeInTheDocument();
  });
});
