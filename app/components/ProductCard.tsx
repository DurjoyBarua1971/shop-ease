"use client";
import { Product } from "../types";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Button from "./Button";

export default function ProductCard({ product }: { product: Product }) {
  const cartContext = useCart();
  if (!cartContext) {
    throw new Error("CartContext is not available");
  }
  const { state, dispatch } = cartContext;
  const stock = state.productStock[product.id];

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div className="border rounded p-4 flex flex-col bg-gray-900">
      <div className="relative mt-2">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover rounded"
        />
        {stock == 0 && (
          <div className="absolute inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between mt-4">
        <h3 className="lg:text-2xl md:text-lg text-md font-bold truncate">
          {product.name}
        </h3>
        <p className="text-blue-400 font-semibold text-lg">৳{product.price}</p>
      </div>
      <div className="flex mt-2 justify-between px-2">
        <p>⭐ {product.rating}</p>
        {stock > 0 && <p>👉 {stock} </p>}
      </div>

      <Button
        disabled={stock === 0}
        onClick={handleAddToCart}
        variant="secondary"
        className="py-1 px-2 my-4"
      >
        {stock > 0 ? "Add to Cart" : "Out of Stock"}
      </Button>
    </div>
  );
}
