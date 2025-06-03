"use client";
import Link from "next/link";
import React, { use } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

function Navbar() {
  const pathname = usePathname();
  const cartContext = useCart();
  if (!cartContext) {
    throw new Error("CartContext is not available");
  }
  const { state } = cartContext;
  const itemCount = state.cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  const isActive = (path: string) =>
    pathname === path
      ? "text-blue-500 font-semibold hover:text-blue-700 border-b-2 border-blue-400 pb-1"
      : "text-gray-300 hover:text-white font-semibold";

  return (
    <nav className="fixed top-0 flex items-center justify-between w-full max-w-5xl mx-auto bg-[#111827]/80 backdrop-blur-md shadow-md px-4 py-6 z-10 left-0 right-0">
      <Link
        href="/"
        className="text-2xl font-extrabold tracking-wide text-[#93C5FD]"
      >
        ShopEase
      </Link>
      <div className="space-x-4">
        <Link href="/products" className={isActive("/products")}>
          Product
        </Link>
        <Link href="/cart" className={isActive("/cart")}>
          🛒 Cart
          {itemCount > 0 && (
            <span className="absolute bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold translate-x-33 -translate-y-8">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
