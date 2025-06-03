"use client";

import React, { createContext, useContext, useMemo } from "react";
import { CartState } from "../types";
import { products } from "../lib/products";

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<any>;
}

const CartContext = createContext<CartContextType|null>(null);

const initialState: CartState = {
  cartItems: [],
  productStock: Object.fromEntries(
    products.map((product) => [product.id, product.stock])
  ),
};

function cartReducer(state: CartState, action: any): CartState {
  const { cartItems, productStock } = state;
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product } = action;
      console.log("Adding to cart:", product);
      if (productStock[product.id] <= 0) {
        console.warn("Product out of stock:", product);
        return state;
      }
      const item = cartItems.find((item) => item.id === product.id);
      const updatedItems = item
        ? cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...cartItems, { ...product, quantity: 1 }];

      return {
        cartItems: updatedItems,
        productStock: {
          ...productStock,
          [product.id]: productStock[product.id] - 1,
        },
      };
    }

    case "REMOVE_FROM_CART": {
      const id = action.id;
      console.log("Removing from cart:", id);
      const item = cartItems.find((item) => item.id === id);
      if (!item) {
        console.warn("Item not found in cart:", id);
        return state;
      }
      const updatedItems = cartItems.filter((item) => item.id !== id);
      return {
        cartItems: updatedItems,
        productStock: {
          ...productStock,
          [id]: productStock[id] + item.quantity,
        },
      };
    }

    case "ADJUST_QUANTITY": {
      const { id, delta } = action;
      const item = cartItems.find((item) => item.id === id);
      if (!item) {
        console.warn("Item not found in cart:", id);
        return state;
      }
      if (delta === 1 && productStock[id] <= 0) {
        console.warn("Product out of stock:", id);
        return state;
      }
      if (delta === -1 && item.quantity <= 1) {
        console.warn("Cannot reduce quantity below 1:", id);
        return state;
      }
      const updatedItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      );

      return {
        cartItems: updatedItems,
        productStock: {
          ...productStock,
          [id]: productStock[id] - delta,
        },
      };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);  
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
