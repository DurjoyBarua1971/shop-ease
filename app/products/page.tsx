"use client";
import React, { useState } from "react";
import { products as productList } from "../lib/products";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return new Date(b.created).getTime() - new Date(a.created).getTime();
      case "low-high":
        return a.price - b.price;
      case "high-low":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div>
      <div className="flex gap-4 justify-between items-center mb-4 mt-8">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded bg-gray-800 w-1/2 xs:w-auto sm:w-auto"
        >
          <option value="default">Default</option>
          <option value="rating">Popularity</option>
          <option value="newest">Newest</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>
      {sortedProducts.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductsPage;
