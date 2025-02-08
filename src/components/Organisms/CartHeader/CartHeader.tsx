"use client";

import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

const CartHeader = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="flex flex-col gap-y-3 w-full h-auto pt-12 pb-8">
      <h1 className="font-archivo text-4xl font-bold text-primary">
        Your cart
      </h1>
      <p className="font-archivo text-2xl font-normal text-primary">
        {cart ? cart?.length : 0} items
      </p>
    </header>
  );
};

export default CartHeader;
