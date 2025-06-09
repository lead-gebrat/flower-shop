"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { useCart } from "@/lib/cart-context";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  inStock: number;
  category: string;
  details: string[];
}

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
          inStock: product.inStock,
        },
      });
    }
    onClose();
  };

  const incrementQuantity = () => {
    if (quantity < product.inStock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.category}
                </p>
                <h2 className={`${playfair.className} text-3xl font-bold mt-1`}>
                  {product.name}
                </h2>
                <p className="text-2xl font-bold text-purple-700 mt-2">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Details</h3>
                <ul className="space-y-1">
                  {product.details.map((detail, index) => (
                    <li
                      key={index}
                      className="text-gray-600 text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-purple-300 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">Availability:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      product.inStock > 0
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.inStock > 0
                      ? `${product.inStock} in stock`
                      : "Out of stock"}
                  </span>
                </div>

                {product.inStock > 0 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-semibold mb-2">
                        Quantity:
                      </label>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={decrementQuantity}
                          disabled={quantity <= 1}
                          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 border border-gray-300 rounded-lg min-w-[60px] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={incrementQuantity}
                          disabled={quantity >= product.inStock}
                          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>
                        Add to Cart - ${(product.price * quantity).toFixed(2)}
                      </span>
                    </button>
                  </div>
                )}

                {product.inStock === 0 && (
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg cursor-not-allowed"
                  >
                    Out of Stock
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
