export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  rating: number;
  created: string;
  attributes: Attribute[];
  variations: Variation[];
};

export type Attribute = {
  name: string;
  values: string[];
};

export type Variation = {
  sku: string;
  attributes: {
    [key: string]: string;
  };
  stock: number;
  price: number;
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

export interface Review {
  star: number;
  product_review: string;
  time: string;
  user_name: string;
  user_image: string;
}

export interface StarDistribution {
  "5": number;
  "4": number;
  "3": number;
  "2": number;
  "1": number;
}

export interface ReviewsSummary {
  number_of_reviewers: number;
  average_star: number;
  star_distribution: StarDistribution;
}

export interface ProductReview {
  id: string;
  name: string;
  reviews_summary: ReviewsSummary;
  reviews: Review[];
}

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "outline" | "optional";
  className?: string;
  type?: "button" | "submit";
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
