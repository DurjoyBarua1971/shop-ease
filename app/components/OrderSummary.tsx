import React from "react";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types";
import Link from "next/link";

function OrderSummary() {
  const cartContext = useCart();
  if (!cartContext) {
    throw new Error("CartContext is not available");
  }
  const { state } = cartContext;
  const subtotal = state.cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <>
      <div className="lg:col-span-1">
        <div className="bg-gray-900 rounded-lg shadow-md p-6 sticky top-4 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">
            Order Summary
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Subtotal</span>
              <span className="font-medium text-white">
                ৳ {subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-green-400">
              <span>Discount (20%)</span>
              <span>-৳ {discount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Delivery Fee</span>
              <span className="font-medium text-white">
                ৳ {deliveryFee.toFixed(2)}
              </span>
            </div>

            <hr className="my-4 border-gray-700" />

            <div className="flex justify-between text-lg font-semibold">
              <span className="text-white">Total</span>
              <span className="text-white">৳ {total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">
            Proceed to Checkout
          </button>

          <Link
            href="/products"
            className="block w-full mt-3 text-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
}

export default OrderSummary;
