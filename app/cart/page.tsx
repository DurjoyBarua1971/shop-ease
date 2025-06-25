"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import CartItemComponent from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import Link from "next/link";
import { CartItem } from "../types";

function page() {
  const cartContext = useCart();
  if (!cartContext) {
    throw new Error("CartContext is not available");
  }

  const { state } = cartContext;

  const getCartItemKey = (item: CartItem, index: number) => {
    if (item.variant) {
      return `${item.product.id}-${item.variant.sku}-${index}`;
    }
    return `${item.product.id}-${index}`;
  };

  return (
    <>
      {state.cartItems.length === 0 ? (
        <div className="flex justify-center items-center mx-auto gap-3 flex-col mt-20">
          <h1 className="text-2xl sm:text-3xl font-bold">Your Cart is Empty</h1>
          <p className="text-gray-400 text-base sm:text-xl">
            {" "}
            Add some products to get started!
          </p>
          <Link
            href="/products"
            className="bg-blue-800 text-base sm:text-xl text-white px-6 font-semibold py-3 rounded-md hover:bg-blue-900 transition-colors mt-6"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold my-6">Shopping Cart</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-lg shadow-md border border-gray-700">
                {state.cartItems.map((item, index) => (
                  <div
                    key={getCartItemKey(item, index)}
                    className={` ${
                      index !== state.cartItems.length - 1
                        ? "border-b border-gray-700"
                        : ""
                    }`}
                  >
                    <CartItemComponent key={item.product.id} item={item} />
                  </div>
                ))}
              </div>
            </div>
            <OrderSummary />
          </div>
        </>
      )}
    </>
  );
}

export default page;
