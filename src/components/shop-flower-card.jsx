"use client";

import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useAtomValue, useSetAtom } from "jotai";
import { cartItemCountAtom, cartItemsAtom } from "@/app/atoms/cartAtom";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ShopFlowerCard({
  image,
  name,
  symbolism,
  slug,
  price,
  stockId,
}) {
  const [count, setCount] = useState(1);
  const setCartItemCount = useSetAtom(cartItemCountAtom);
  const cartItems = useAtomValue(cartItemsAtom);
  const setCartItems = useSetAtom(cartItemsAtom);

  const pathname = usePathname();
  const segments = pathname.split("/");
  const shop = segments[segments.length - 1];

  function handleCountChange(change) {
    if (count === 1 && change === -1) return;
    setCount((prevCount) => prevCount + change);
  }

  function handleAddToCart() {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.slug === slug && item.shop === shop
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          count,
          price: price * count,
        };
        return updated;
      }

      return [
        ...prev,
        {
          slug,
          name,
          image,
          count,
          shop,
          price: price * count,
          stockId: stockId,
        },
      ];
    });

    setCartItemCount((prev) => {
      const others = cartItems.filter(
        (item) => !(item.slug === slug && item.shop === shop)
      );
      const newTotal =
        others.reduce((sum, item) => sum + item.count, 0) + count;
      return newTotal;
    });

    setCount(1);
  }

  return (
    <div className="w-[360px] border border-[#EBEBEAFF] rounded-xl bg-white overflow-hidden p-4 space-y-2">
      {/* 이미지 */}
      <Image
        src={image}
        alt={name}
        width={360}
        height={160}
        className="w-full h-[160px] object-cover rounded-md"
      />

      {/* 꽃 이름 + 상세보기 */}
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-base text-black truncate">{name}</h4>
        <Link href={`/flower-detail/${name}`}>
          <span className="text-xs text-gray-400 cursor-pointer hover:text-gray-600 transition">
            상세 정보 보기 &gt;
          </span>
        </Link>
      </div>

      {/* 심볼 */}
      <p className="text-gray-500 text-xs truncate">{symbolism}</p>

      {/* 가격 */}
      <div className="text-sm text-[#7A75E3] font-semibold">{price}원</div>

      {/* 수량 조절 + 장바구니 */}
      <div className="flex items-center justify-between mt-1">
        {/* 수량 */}
        <div className="flex items-center gap-1">
          <button
            className="rounded border border-[#EBEBEAFF] w-7 h-7 flex items-center justify-center text-sm"
            onClick={() => handleCountChange(-1)}
          >
            −
          </button>
          <span className="font-medium text-sm">{count}</span>
          <button
            className="rounded border border-[#EBEBEAFF] w-7 h-7 flex items-center justify-center text-sm"
            onClick={() => handleCountChange(1)}
          >
            +
          </button>
        </div>

        {/* 장바구니 버튼 */}
        <button
          onClick={handleAddToCart}
          className="px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#D3D6F3] via-[#E8DAF1] to-[#F5D5E2] text-white shadow-sm hover:opacity-90 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
