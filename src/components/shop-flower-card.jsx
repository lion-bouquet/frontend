"use client";

import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useSetAtom } from "jotai";
import { cartItemCountAtom, cartItemsAtom } from "@/app/atoms/cartAtom";

export default function ShopFlowerCard({ image, name, symbolism, slug }) {
  const [count, setCount] = useState(1);
  const setCartItemCount = useSetAtom(cartItemCountAtom);
  const dummyPrice = 77;

  const setCartItems = useSetAtom(cartItemsAtom);

  function handleCountChange(change) {
    if (count === 1 && change === -1) return;
    setCount((prevCount) => prevCount + change);
  }

  function handleAddToCart() {
    setCartItemCount((prev) => prev + count);
    setCartItems((prev) => [
      ...prev,
      { slug, name, image, count }, // 필요한 정보만 넘기기
    ]);
  }

  return (
    <div className="w-[284px] border border-[#EBEBEAFF] rounded-xl overflow-hidden bg-white p-4 space-y-4">
      <Image
        src={image}
        alt={name}
        width={200}
        height={150}
        className="rounded-md object-cover w-full h-[140px]"
      />

      <div className="text-center">
        <h4 className="font-semibold text-base">{name}</h4>
        <p className="text-sm text-gray-600">{symbolism}</p>
        <p className="mt-4 text-gray-400 font-semibold">${dummyPrice}</p>

        <div className="mt-4 flex justify-center items-center gap-4">
          <button
            className="rounded-full border border-[#EBEBEAFF] px-3 py-1"
            onClick={() => handleCountChange(-1)}
          >
            −
          </button>
          <span className="font-medium">{count}</span>
          <button
            className="rounded-full border border-[#EBEBEAFF] px-3 py-1"
            onClick={() => handleCountChange(1)}
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[#D3D6F3] via-[#E8DAF1] to-[#F5D5E2] text-white text-sm py-2 rounded-full shadow-sm hover:opacity-90 transition"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
