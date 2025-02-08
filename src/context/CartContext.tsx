import {
  clearAllStorage,
  getFromLocalStorage,
  removeItemFromLocalStorage,
} from "@/utils/localStorageUtils";
import { createContext, useEffect, useState } from "react";

interface CartContextType {
  cart: string[];
  removeFromCart: (id: string) => void;
  removeAllFromCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  removeFromCart: (id: string) => {},
  removeAllFromCart: () => {},
});

import { ReactNode } from "react";

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = getFromLocalStorage("cart") || [];
      setCart(storedCart);
    }
  }, []);

  const removeFromCart = (id: string) => {
    removeItemFromLocalStorage("cart", id);
    setCart((prevCart: string[]) =>
      prevCart.filter((item: string) => JSON.parse(item).id !== id)
    );
  };

  const removeAllFromCart = () => {
    clearAllStorage();
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, removeFromCart, removeAllFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
