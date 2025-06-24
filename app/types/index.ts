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

export type CartItem = Product & {
  quantity: number;
};

export type CartState = {
  cartItems: CartItem[];
  productStock: Record<string, number>;
};
