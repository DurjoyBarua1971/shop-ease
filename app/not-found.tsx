"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./components/Button";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-16">
      <div className="w-full max-w-lg shadow-lg text-center bg-gray-900 rounded-lg p-8">
        <div className="mb-6">
          <div className="text-8xl sm:text-9xl font-bold text-blue-500">
            404
          </div>
          <h1 className="text-4xl font-bold text-white mt-4">Page Not Found</h1>
          <div className="text-gray-500 mt-4">
            The page you are looking for doesn't exist or has been moved.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="px-4 py-2 "
          >
            &#8592; Go Back
          </Button>
          <Link
            href="/products"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Go to Product
          </Link>
          <Link
            href="/cart"
            className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-800 transition"
          >
            Go to Cart
          </Link>
        </div>

        <div className="mt-8 text-center">
          <div className="text-gray-500 text-sm">
            If you think this is an error, please contact support.
          </div>
        </div>
      </div>
    </div>
  );
}
