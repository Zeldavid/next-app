"use client";

import { Game } from "@/utils/endpoint";
import Image from "next/image";
import Button from "../../Atoms/Button/Button";
import {
  addToLocalStorageArray,
  removeItemFromLocalStorage,
  validateItemExistInLocalStorage,
} from "@/utils/localStorageUtils";
import { useEffect, useState } from "react";

interface GameProps {
  data: Game;
}

const Card = ({ data }: GameProps) => {
  const { name, image, genre, price } = data;
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(validateItemExistInLocalStorage("cart", data.id));
  }, []);

  const handleAdd = () => {
    addToLocalStorageArray("cart", JSON.stringify(data));
    setIsAdded(true);
    console.log("added!");
  };

  const handleRemove = () => {
    removeItemFromLocalStorage("cart", data.id);
    setIsAdded(false);
    console.log("removed!");
  };

  return (
    <div className="flex flex-col justify-between w-[380px] h-auto border-[0.5px] border-colorStroke rounded-2xl p-6 gap-y-5 font-archivo">
      <Image
        src={image}
        alt={name}
        width={332}
        height={240}
        style={{ maxHeight: "240px" }}
        className="rounded-t-2xl object-cover"
      />

      <p className="font-bold text-base text-tertiary">{genre}</p>
      <div className="flex flex-row justify-between text-lg font-bold text-primary">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      {!isAdded ? (
        <Button
          textContent="ADD TO CART"
          buttonType="primary"
          onClick={handleAdd}
        />
      ) : (
        <Button
          textContent="REMOVE"
          buttonType="secondary"
          onClick={handleRemove}
        />
      )}
    </div>
  );
};

export default Card;
