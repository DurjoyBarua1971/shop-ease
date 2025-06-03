import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 flex items-center justify-between w-full max-w-5xl mx-auto bg-[#111827]/80 backdrop-blur-md shadow-md p-4 z-10 left-0 right-0">
      <h1 className="text-xl font-bold text-[#93C5FD]"> ShopEase</h1>
      <div className="space-x-4">
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
