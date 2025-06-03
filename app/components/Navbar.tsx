"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) =>
    pathname === path
      ? "text-blue-500 font-semibold hover:text-blue-700 border-b-2 border-blue-400 pb-1"
      : "text-gray-300 hover:text-white font-semibold";

  return (
    <nav className="fixed top-0 flex items-center justify-between w-full max-w-5xl mx-auto bg-[#111827]/80 backdrop-blur-md shadow-md px-4 py-6 z-10 left-0 right-0">
      <h1 className="text-2xl font-extrabold tracking-wide text-[#93C5FD]">
        ShopEase
      </h1>
      <div className="space-x-4">
        <Link href="/products" className={isActive("/products")}>
          Product
        </Link>
        <Link href="/cart" className={isActive("/cart")}>
          🛒 Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
