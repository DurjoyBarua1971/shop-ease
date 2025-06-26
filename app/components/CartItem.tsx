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

  const { variant, product, quantity } = item;
  const { id, image, name, price } = product;
  const stock = variant
    ? state.productStock[id]?.variations?.[variant.sku]?.stock
    : state.productStock[id].stock ?? 0;

  

  const handleRemoveFromCart = () => {
    if (item.variant) {
      dispatch({
        type: "REMOVE_FROM_CART",
        productIdentity: {
          id: id,
          variant: item.variant,
        },
      });
    } else dispatch({ type: "REMOVE_FROM_CART", productIdentity: { id: id } });
  };

  const handleIncrement = () => {
    if (item.variant) {
      dispatch({
        type: "ADJUST_QUANTITY",
        productIdentity: {
          id: id,
          variant: item.variant,
        },
        delta: 1,
      });
    } else
      dispatch({
        type: "ADJUST_QUANTITY",
        productIdentity: { id: id },
        delta: 1,
      });
  };

  const handleDecrement = () => {
    if (item.variant) {
      dispatch({
        type: "ADJUST_QUANTITY",
        productIdentity: {
          id: id,
          variant: item.variant,
        },
        delta: -1,
      });
    } else
      dispatch({
        type: "ADJUST_QUANTITY",
        productIdentity: { id: id },
        delta: -1,
      });
  };

  return (
    <div className="flex flex-col p-4 sm:p-6 sm:flex-row sm:items-center space-y-10 sm:space-y-0 sm:space-x-4 sm:justify-between">
      <div className="flex items-center space-x-4 justify-center sm:justify-start">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="object-cover rounded-lg"
        />
        <div className="sm:flex-1 sm:min-w-0">
          <div>
            <h3 className="text-lg font-semibold text-white truncate">
              {name}
            </h3>
            {variant && (
              <p className="text-sm text-gray-300">
                {Object.entries(variant.attributes).map(([key, value]) => (
                  <span key={key} className="inline-block mr-1">
                    <span className="text-gray-400">{key}</span>: {value}
                  </span>
                ))}
              </p>
            )}
          </div>
          <p className="text-blue-400 font-semibold text-lg">৳ {price}</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <button
          disabled={item.quantity <= 1}
          onClick={handleDecrement}
          className="text-white px-2 py-1 rounded disabled:bg-gray-600 cursor-pointer disabled:cursor-not-allowed"
        >
          ▬
        </button>
        <span>{item.quantity}</span>
        <button
          disabled={stock === 0}
          onClick={handleIncrement}
          className=" text-white px-2 py-1 rounded cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          ✚
        </button>
        <div className="relative">
          <span>৳ {price * quantity}</span>
          <button
            onClick={handleRemoveFromCart}
            className="px-4 sm:top-0 sm:right-0 sm:transform sm:translate-x-5 sm:-translate-y-8 rounded absolute  hover:cursor-pointer transition-colors"
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItemComponent;
