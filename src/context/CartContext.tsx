import {
  clearAllStorage,
  getFromLocalStorage,
  removeItemFromLocalStorage,
} from "@/utils/localStorageUtils";
import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  removeFromCart: (id: string) => {},
  removeAllFromCart: () => {},
});

import { ReactNode } from "react";

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState(() => {
    return getFromLocalStorage("cart") || [];
  });

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
