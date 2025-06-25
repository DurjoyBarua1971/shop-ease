"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { products as productList } from "../../lib/products";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

const Product = () => {
  const { id } = useParams();
  const router = useRouter();
  const product = productList.find((p) => p.id === id);
  const cartContext = useCart();
  const [selectedAttributes, setSelectedAttributes] = useState<{
    [key: string]: string;
  }>({});
  const [currentVariation, setCurrentVariation] = useState<any>(null);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
        <button
          onClick={() => router.back()}
          className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  if (!cartContext) {
    throw new Error("CartContext is not available");
  }

  const { state, dispatch } = cartContext;
  const { name, price, rating, description, attributes, variations } = product;

  useEffect(() => {
    if (attributes.length > 0) {
      const initialAttributes: { [key: string]: string } = {};
      attributes.forEach((attr) => {
        initialAttributes[attr.name] = attr.values[0];
      });
      setSelectedAttributes(initialAttributes);
    }
  }, [attributes]);

  useEffect(() => {
    if (Object.keys(selectedAttributes).length > 0) {
      const variation = variations.find((v) => {
        return Object.entries(selectedAttributes).every(
          ([key, value]) =>
            v.attributes[key as keyof typeof v.attributes] === value
        );
      });
      setCurrentVariation(variation);
    }
  }, [selectedAttributes, variations]);

  const currentPrice = currentVariation?.price || price;
  const currentStock =
    currentVariation?.stock || state.productStock[product.id] || 0;

  const handleAttributeChange = (attributeName: string, value: string) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeName]: value,
    }));
  };

  const handleAddToCart = () => {
    if (currentStock > 0) {
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
            <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={260}
                height={260}
                priority={true}
                className="w-full max-w-xs object-contain rounded"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-white">{name}</h2>
              <div className="text-blue-300 flex py-2 justify-between">
                <p>৳ {currentPrice}</p>
                <p>⭐ {rating}</p>
              </div>
              <div className="mt-2">
                <h3 className="font-bold">Description:</h3>
                <p className="text-gray-300">{description}</p>
              </div>

              {attributes.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-bold text-white mb-4">Attributes:</h3>
                  {attributes.map((attribute) => (
                    <div key={attribute.name} className="mb-4">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {attribute.name}:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {attribute.values.map((value) => (
                          <button
                            key={value}
                            onClick={() =>
                              handleAttributeChange(attribute.name, value)
                            }
                            className={`px-3 py-2 rounded border text-sm font-medium transition-colors ${
                              selectedAttributes[attribute.name] === value
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                            }`}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex w-full items-center justify-between">
                    <p className="text-lg font-bold text-white">
                      ৳ {currentPrice.toLocaleString()}
                    </p>
                    <p
                      className={`text-sm ${
                        currentStock > 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {currentStock > 0
                        ? `${currentStock} in stock`
                        : "Out of stock"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={currentStock === 0}
                  className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-colors ${
                    currentStock > 0
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-600 cursor-not-allowed"
                  }`}
                >
                  {currentStock > 0 ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
