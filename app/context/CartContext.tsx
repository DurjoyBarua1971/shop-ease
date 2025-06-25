"use client";

import React, { createContext, useContext, useMemo } from "react";
import { CartItem, CartState, CurrentProduct, Variation } from "../types";
import { products } from "../lib/products";

type CartAction = AddToCartAction | RemoveFromCartAction | AdjustQuantityAction;

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | null>(null);

interface AddToCartAction {
  type: "ADD_TO_CART";
  currentProduct: CurrentProduct;
}

interface RemoveFromCartAction {
  type: "REMOVE_FROM_CART";
  productIdentity: {
    id: string;
    variant?: Variation;
  };
}

interface AdjustQuantityAction {
  type: "ADJUST_QUANTITY";
  productIdentity: {
    id: string;
    variant?: Variation;
  };
  delta: number;
}

function findCartItem(
  cartItems: CartItem[],
  id: string,
  variant: Variation | undefined
) {
  return cartItems.find(
    (item) =>
      item.product.id === id && (!variant || item.variant?.sku === variant.sku)
  );
}

function updateCartQuantity(
  cartItems: CartItem[],
  currentProduct: CurrentProduct,
  delta: number
) {
  const { product, variant } = currentProduct;

  const updatedItems = cartItems.map((item) =>
    item.product.id === product.id &&
    (!variant || item.variant?.sku === variant?.sku)
      ? { ...item, quantity: item.quantity + delta }
      : item
  );

  const existingItem = findCartItem(cartItems, product.id, variant);
  if (!existingItem && delta > 0) {
    return [...cartItems, { ...currentProduct, quantity: 1 }];
  }

  return updatedItems;
}

type StockData = Record<
  string,
  {
    stock: number;
    price: number;
    variations: Record<
      string,
      {
        stock: number;
        price: number;
      }
    >;
  }
>;

function updateStock(
  productStock: StockData,
  id: string,
  variant: Variation | undefined,
  delta: number
) {
  const stockData = productStock[id];
  if (!stockData) return productStock;

  const newStockData = { ...stockData, stock: stockData.stock - delta };

  if (variant) {
    newStockData.variations = {
      ...stockData.variations,
      [variant.sku]: {
        ...stockData.variations[variant.sku],
        stock: stockData.variations[variant.sku].stock - delta,
        price: variant.price,
      },
    };
  }

  return {
    ...productStock,
    [id]: newStockData,
  };
}

const initialState: CartState = {
  cartItems: [],
  productStock: Object.fromEntries(
    products.map((product) => [
      product.id,
      {
        stock: product.stock,
        price: product.price,
        variations: product.variations.reduce((acc, variation) => {
          acc[variation.sku] = {
            stock: variation.stock,
            price: variation.price,
          };
          return acc;
        }, {} as Record<string, { stock: number; price: number }>),
      },
    ])
  ),
};

function cartReducer(state: CartState, action: CartAction): CartState {
  const { cartItems, productStock } = state;
  switch (action.type) {
    case "ADD_TO_CART": {
      const { currentProduct } = action;
      const { product, variant } = currentProduct;

      const stockToCheck = variant
        ? productStock[product.id]?.variations?.[variant.sku]?.stock
        : productStock[product.id]?.stock;

      if (!stockToCheck || stockToCheck <= 0) {
        console.warn("Product out of stock:", product.id);
        return state;
      }

      return {
        cartItems: updateCartQuantity(cartItems, currentProduct, 1),
        productStock: updateStock(productStock, product.id, variant, 1),
      };
    }

    case "REMOVE_FROM_CART": {
      const { id, variant } = action.productIdentity;
      const item = findCartItem(cartItems, id, variant);

      if (!item) {
        console.warn("Item not found in cart:", id, variant?.sku);
        return state;
      }

      const updatedItems = cartItems.filter(
        (i) =>
          !(
            i.product.id === id &&
            (!variant || i.variant?.sku === variant?.sku)
          )
      );

      return {
        cartItems: updatedItems,
        productStock: updateStock(productStock, id, variant, -item.quantity),
      };
    }

    case "ADJUST_QUANTITY": {
      const { productIdentity, delta } = action;
      const { id, variant } = productIdentity;

      const item = findCartItem(cartItems, id, variant);
      if (!item) {
        console.warn("Item not found in cart:", id, variant?.sku);
        return state;
      }

      const stockAvailable = variant
        ? productStock[id]?.variations?.[variant.sku]?.stock
        : productStock[id]?.stock;

      if (delta === 1 && stockAvailable <= 0) {
        console.warn("Product out of stock:", id, variant?.sku);
        return state;
      }

      if (delta === -1 && item.quantity <= 1) {
        console.warn("Cannot reduce quantity below 1:", id, variant?.sku);
        return state;
      }

      return {
        cartItems: updateCartQuantity(cartItems, item, delta),
        productStock: updateStock(productStock, id, variant, delta),
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
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
