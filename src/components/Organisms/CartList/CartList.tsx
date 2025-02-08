"use client";

import { useContext } from "react";
import CartItem from "@/components/Molecules/CartItem/CartItem";
import { CartContext } from "@/context/CartContext";

const CartList = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (id: string) => {
    removeFromCart(id);
    console.log("item removed!");
  };

  return (
    <>
      {cart?.map((item, index) => {
        const parsedItem = JSON.parse(item);
        return (
          <CartItem key={index} cartItem={parsedItem} onRemove={handleRemove} />
        );
      })}
    </>
  );
};

export default CartList;
