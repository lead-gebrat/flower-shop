"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import CartSidebar from "./cart-sidebar";

export default function FloatingCart() {
  const [cartOpen, setCartOpen] = useState(false);
  const { state } = useCart();

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 right-6 border-2 border-black z-40 bg-purple-50 text-black  p-4 rounded-full shadow-lg  hover:scale-110 transition-all duration-300 group"
      >
        <ShoppingCart className="h-6 w-6" />
        {state.itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
            {state.itemCount}
          </span>
        )}

        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Cart ({state.itemCount})
        </div>
      </button>

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
