"use client";

import { CartProvider } from "@/context/CartContext";

import CartHeader from "../CartHeader/CartHeader";
import CartList from "../CartList/CartList";
import Checkout from "@/components/Molecules/Checkout/Checkout";

const CartContainer = () => {
  return (
    <CartProvider>
      <CartHeader />
      <div className="flex flex-row justify-between max-sm:flex-col max-sm:justify-normal">
        <div className="w-[678px] max-sm:w-full">
          <CartList></CartList>
        </div>
        <div className="w-[522px] max-sm:w-full">
          <Checkout />
        </div>
      </div>
    </CartProvider>
  );
};

export default CartContainer;
