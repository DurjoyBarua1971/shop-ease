"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { products as productList } from "../../lib/products";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

const Product = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params); // Unwrap params

  const product = productList.find((p) => p.id === id);

  const cartContext = useCart();
  const router = useRouter();

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  if (!cartContext) {
    throw new Error("CartContext is not available");
  }

  const { state, dispatch } = cartContext;
  const stock = state.productStock[product.id] ?? 0;
  const { name, price, rating, description, attributes } = product;

  const handleAddToCart = () => {
    if (stock > 0) {
      dispatch({ type: "ADD_TO_CART", product });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-2 py-6 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={240}
                height={240}
                priority={true}
                className="w-full max-w-xs object-contain rounded"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-white">{name}</h2>
              <div className="text-blue-300 flex flex-col xs:flex-row xs:justify-between max-w-md mt-2 gap-2">
                <p>৳ {price}</p>
                <p>⭐ {rating}</p>
              </div>
              <div className="mt-2">
                <h1 className="font-bold">Description:</h1>
                <p className="text-gray-300">{description}</p>
              </div>
              <div className="mt-6 max-w-md mx-auto">
                {attributes.length > 0 && (
                  <div>
                    {attributes.map((attribute, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold text-white">
                          {attribute.name}
                        </h3>
                        <div className="p-3 rounded bg-blue-500">
                          <select className="w-full bg-gray-800 text-white p-2 rounded">
                            {attribute.values.map((option, optIndex) => (
                              <option key={optIndex} className="text-white">
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-col xs:flex-row xs:justify-between xs:items-center gap-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={stock === 0}
                    aria-disabled={stock === 0}
                    className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition disabled:bg-gray-600 disabled:cursor-not-allowed`}
                  >
                    {stock > 0 ? "Add to Cart" : "Out of Stock"}
                  </button>
                  <span className="text-gray-400 text-sm xs:text-base">
                    Remaining Stock: {stock}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Product;