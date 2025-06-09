"use client";

import type React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
  inStock: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: Math.min(item.quantity + 1, action.payload.inStock),
              }
            : item
        );
        const newTotal = updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        const newItemCount = updatedItems.reduce(
          (sum, item) => sum + item.quantity,
          0
        );

        return {
          items: updatedItems,
          total: newTotal,
          itemCount: newItemCount,
        };
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        const updatedItems = [...state.items, newItem];
        const newTotal = updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        const newItemCount = updatedItems.reduce(
          (sum, item) => sum + item.quantity,
          0
        );

        return {
          items: updatedItems,
          total: newTotal,
          itemCount: newItemCount,
        };
      }
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const newItemCount = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case "UPDATE_QUANTITY": {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: Math.max(
                  0,
                  Math.min(action.payload.quantity, item.inStock)
                ),
              }
            : item
        )
        .filter((item) => item.quantity > 0);

      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const newItemCount = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case "CLEAR_CART":
      return { items: [], total: 0, itemCount: 0 };

    case "LOAD_CART":
      return action.payload;

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("violet-bloom-cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: parsedCart });
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("violet-bloom-cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
