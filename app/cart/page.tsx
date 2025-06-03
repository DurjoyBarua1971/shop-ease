"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import CartItemComponent from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

function page() {
  const cartContext = useCart();
  if (!cartContext) {
    throw new Error("CartContext is not available");
  }
  const { state } = cartContext;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {state.cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="space-y-2">
            {state.cartItems.map((item) => (
              <CartItemComponent key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      {state.cartItems.length !== 0 && <OrderSummary />}
    </div>
  );
}

export default page;
