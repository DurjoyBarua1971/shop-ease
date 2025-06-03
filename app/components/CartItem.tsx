import React from "react";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types";

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
    <div className="flex justify-between items-center border-b py-2">
      <span>{item.name}</span>
      <div className="flex items-center gap-2">
        <button
          disabled={item.quantity <= 1}
          onClick={handleDecrement}
          className="bg-red-500 text-white px-2 py-1 rounded disabled:bg-gray-400 cursor-pointer"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          disabled={stock === 0}
          onClick={handleIncrement}
          className="bg-green-500 text-white px-2 py-1 rounded cursor-pointer disabled:bg-gray-400"
        >
          +
        </button>
      </div>
      <span>৳ {item.price * item.quantity}</span>
      <button
        onClick={handleRemoveFromCart}
        className="bg-gray-300 text-black px-2 py-1 rounded"
      >
        x
      </button>
    </div>
  );
}

export default CartItemComponent;
