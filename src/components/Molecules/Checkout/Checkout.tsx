"use client";

import { CartContext } from "@/context/CartContext";
import Button from "../../Atoms/Button/Button";
import { useContext, useEffect, useState } from "react";

const Checkout = () => {
  const { cart, removeAllFromCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (sum: number, item: string) => sum + JSON.parse(item).price,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  const handleCheckout = () => {
    removeAllFromCart();
    console.log("removed all!");
    console.log("checkout!");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col w-full h-auto border-[0.5px] border-colorStroke rounded-lg py-8 px-6 font-archivo">
        <div className="pb-8">
          <p className="font-bold text-2xl text-primary">Order Summary</p>
          <p className="font-normal text-lg text-primary">
            {cart?.length} items
          </p>
        </div>

        <div className="flex flex-col pb-8 gap-2">
          {cart?.length
            ? cart.map((item) => {
                const itemParsed = JSON.parse(item);
                return (
                  <div
                    key={itemParsed.id}
                    className="flex flex-row justify-between text-lg font-normal text-primary"
                  >
                    <p>{itemParsed.name}</p>
                    <p>{itemParsed.price}</p>
                  </div>
                );
              })
            : null}
        </div>

        <hr className="border-t-2 border-[colorTertiary]-500" />

        <div className="flex flex-row justify-between text-lg font-normal text-primary pt-8">
          <p className="font-bold text-2xl text-primary">Order Total</p>
          <p className="font-bold text-2xl text-primary">${total}</p>
        </div>
      </div>

      <Button
        textContent="Checkout"
        buttonType="secondary"
        onClick={handleCheckout}
      />
    </div>
  );
};

export default Checkout;
