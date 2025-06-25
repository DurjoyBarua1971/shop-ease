"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { products as productList } from "../../lib/products";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import { ProductNotFound } from "@/app/components/ProductNotFound";
import { AttributeSelector } from "@/app/components/AttributeSelector";
import Button from "@/app/components/Button";
import { Variation } from "@/app/types";
import Loading from "@/app/components/Loading";

const Product = () => {
  const { id } = useParams();
  const router = useRouter();
  const product = productList.find((p) => p.id === id);
  if (!product) {
    return <ProductNotFound onBack={() => router.back()} />;
  }

  const cartContext = useCart();
  if (!cartContext) {
    throw new Error("CartContext is not available");
  }

  const [selectedAttributes, setSelectedAttributes] = useState<{
    [key: string]: string;
  }>({});
  const [currentVariation, setCurrentVariation] = useState<Variation | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(true);
  const { state, dispatch } = cartContext;
  const { name, price, rating, description, attributes, variations } = product;

  const hasStockData = useMemo(() => {
    return state.productStock && state.productStock[product.id];
  }, [state.productStock, product.id]);

  useEffect(() => {
    if (attributes.length > 0) {
      const initialAttributes: { [key: string]: string } = {};
      attributes.forEach((attr) => {
        initialAttributes[attr.name] = attr.values[0];
      });
      setSelectedAttributes(initialAttributes);
    }
    setIsLoading(false);
  }, [attributes]);

  useEffect(() => {
    if (Object.keys(selectedAttributes).length > 0) {
      const variation = variations.find((v) => {
        return Object.entries(selectedAttributes).every(
          ([key, value]) =>
            v.attributes[key as keyof typeof v.attributes] === value
        );
      });
      setCurrentVariation(variation || null);
    }
  }, [selectedAttributes, variations]);

  const currentPrice = currentVariation?.price || price;

  const currentStock = useMemo(() => {
    if (!hasStockData) return 0;

    if (currentVariation?.sku) {
      return (
        state.productStock[product.id]?.variations?.[currentVariation.sku]
          ?.stock || 0
      );
    }
    return state.productStock[product.id]?.stock || 0;
  }, [hasStockData, currentVariation, state.productStock, product.id]);

  const handleAttributeChange = (attributeName: string, value: string) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeName]: value,
    }));
  };

  const handleAddToCart = () => {
    if (!hasStockData) {
      console.error("Stock data not available");
      return;
    }

    const currentProduct = {
      variant: currentVariation,
      product: {
        id: product.id,
        name: product.name,
        price: currentPrice,
        stock: currentStock,
        image: product.image,
      },
    };
    if (currentStock > 0) {
      dispatch({ type: "ADD_TO_CART", currentProduct });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

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
                width={100}
                height={100}
                priority={true}
                className="w-full object-fill rounded"
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
                <AttributeSelector
                  attributes={attributes}
                  selectedAttributes={selectedAttributes}
                  onAttributeChange={handleAttributeChange}
                />
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

                <Button
                  disabled={currentStock === 0 || !hasStockData}
                  aria-disabled={currentStock === 0 || !hasStockData}
                  variant="secondary"
                  className="w-full py-3 px-6 rounded-lg"
                  onClick={handleAddToCart}
                >
                  {currentStock > 0 ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
