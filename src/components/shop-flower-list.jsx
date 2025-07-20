"use client";

import ShopFlowerCard from "./shop-flower-card";
import { useAtomValue } from "jotai";
import { cartItemsAtom } from "@/app/atoms/cartAtom";

export default function ShopFlowerList({ shopFlowerList }) {
  const cartItems = useAtomValue(cartItemsAtom);

  return (
    <div className="flex flex-wrap gap-5 justify-between mt-3">
      {shopFlowerList.map((item) => {
        const cartItem = cartItems.find(
          (ci) => ci.slug === item.stockId.toString()
        );
        const cartKeySuffix = cartItem ? cartItem.count : 0;

        return (
          <ShopFlowerCard
            key={`${item.stockId}-${cartKeySuffix}`} // 👈 cartItem이 사라지면 리렌더링 발생 → count 초기화
            image={item.flower.imageUrl || "/image/dummy-img.png"}
            name={item.flower.name}
            symbolism={item.flower.floriography}
            slug={item.stockId.toString()}
            price={item.price}
            stockId={item.stockId}
          />
        );
      })}
    </div>
  );
}
