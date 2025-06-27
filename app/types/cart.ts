import { Variation } from "./product";

export type CurrentProduct = {
  variant?: Variation | undefined;
  product: {
    id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
  };
};

export type CartItem = CurrentProduct & {
  quantity: number;
};

export type CartState = {
  cartItems: CartItem[];
  productStock: Record<
    string,
    {
      stock: number;
      price: number;
      variations: Record<string, { stock: number; price: number }>;
    }
  >;
};

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | AdjustQuantityAction;

export interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

export interface AddToCartAction {
  type: "ADD_TO_CART";
  currentProduct: CurrentProduct;
}

export interface RemoveFromCartAction {
  type: "REMOVE_FROM_CART";
  productIdentity: {
    id: string;
    variant?: Variation;
  };
}

export interface AdjustQuantityAction {
  type: "ADJUST_QUANTITY";
  productIdentity: {
    id: string;
    variant?: Variation;
  };
  delta: number;
}

export type StockData = Record<
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
