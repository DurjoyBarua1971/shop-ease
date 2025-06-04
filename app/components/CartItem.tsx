import React from "react";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types";
import Image from "next/image";

function CartItemComponent({ item }: { item: CartItem }) {
  const cartContext = useCart();
  if (!cartContext) {
    throw new Error("CartContext is not available");
  }

  const { state, dispatch } = cartContext;
  const stock = state.productStock[item.id];

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: item.id });
  };
  const handleIncrement = () => {
    dispatch({ type: "ADJUST_QUANTITY", id: item.id, delta: 1 });
  };
  const handleDecrement = () => {
    dispatch({ type: "ADJUST_QUANTITY", id: item.id, delta: -1 });
  };
  return (
    <div className="flex flex-col p-4 sm:p-6 sm:flex-row sm:items-center space-y-10 sm:space-y-0 sm:space-x-4 sm:justify-between">
      <div className="flex items-center space-x-4 justify-center sm:justify-start">
        <Image
          src={item.image}
          alt={item.name}
          width={80}
          height={80}
          className="object-cover rounded-lg"
        />
        <div className="sm:flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white truncate">
            {item.name}
          </h3>
          <p className="text-blue-400 font-semibold text-lg">৳ {item.price}</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <button
          disabled={item.quantity <= 1}
          onClick={handleDecrement}
          className=" text-white px-2 py-1 rounded disabled:bg-gray-600 cursor-pointer "
        >
          ▬
        </button>
        <span>{item.quantity}</span>
        <button
          disabled={stock === 0}
          onClick={handleIncrement}
          className=" text-white px-2 py-1 rounded cursor-pointer disabled:bg-gray-600"
        >
          ✚
        </button>
        <div className="relative">
          <span>৳ {item.price * item.quantity}</span>
          <button
            onClick={handleRemoveFromCart}
            className="px-2 rounded absolute top-0 right-0 transform translate-x-5 -translate-y-8 hover:cursor-pointer transition-colors"
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItemComponent;
