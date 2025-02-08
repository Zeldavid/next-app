"use-client";

import Image from "next/image";
import { Game } from "@/utils/endpoint";

interface CartItemProps {
  cartItem: Game;
  onRemove: (id: string) => void;
}

const CartItem = ({ cartItem, onRemove }: CartItemProps) => {
  const { id, image, name, genre, description, price } = cartItem;

  const handleRemove = (id: string) => {
    onRemove(id);
  };

  return (
    <div className="flex flex-row max-sm:flex-col gap-6 justify-between w-full h-auto border-b-[0.5px] border-colorStroke py-5 px-4 font-archivo">
      <div className="max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:items-start">
        <Image
          src={image}
          alt={name}
          width={256}
          height={156}
          style={{ maxHeight: "156px", minWidth: "256px" }}
          className="object-cover"
        />
        <Image
          src="/icons/at-icon.svg"
          alt="Remove icon"
          width={24}
          height={24}
          onClick={() => handleRemove(id)}
          className="cursor-pointer hidden max-sm:block"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <p className="font-bold text-base text-tertiary">{genre}</p>
            <Image
              src="/icons/at-icon.svg"
              alt="Remove icon"
              width={24}
              height={24}
              onClick={() => handleRemove(id)}
              className="cursor-pointer block max-sm:hidden"
            />
          </div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <div className="flex justify-end">
          <p>{price}</p>
        </div>
      </div>

      <div className="flex flex-row justify-between text-lg font-bold text-primary"></div>
    </div>
  );
};

export default CartItem;
