"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import CartItemComponent from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import Link from "next/link";

function page() {
  const cartContext = useCart();
  if (!cartContext) {
    throw new Error("CartContext is not available");
  }
const { state } = cartContext;
return (
  <>
    {state.cartItems.length === 0 ? (
      <div className="flex justify-center items-center mx-auto gap-3 flex-col mt-16">
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
        <p className="text-gray-400"> Add some products to get started!</p>
        <Link
          href="/products"
          className="bg-blue-800 text-white px-6 font-semibold py-3 rounded-md hover:bg-blue-900 transition-colors mt-6"
        >
          Continue Shopping
        </Link>
      </div>
    ) : (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <>
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <div className="space-y-2">
              {state.cartItems.map((item) => (
                <CartItemComponent key={item.id} item={item} />
              ))}
            </div>
          </>
        </div>
        <OrderSummary />
      </div>
    )}
  </>
);
}

export default page;
