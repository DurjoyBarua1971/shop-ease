export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  rating: number;
  created: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type CartState = {
  cartItems: CartItem[];
  productStock: Record<string, number>;
}
