"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  cartItemsAtom,
  cartTotalAtom,
  cartItemCountAtom,
} from "@/app/atoms/cartAtom";
import OrderItemCard from "@/components/order-item-card";

export default function OrderPage() {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);
  const [, setCartItemCount] = useAtom(cartItemCountAtom);

  const [localItems, setLocalItems] = useState([]);
  const [localTotal, setLocalTotal] = useState(0);

  useEffect(() => {
    setLocalItems(cartItems);
    setLocalTotal(cartTotal);

    // 전역 초기화
    setCartItems([]);
    setCartTotal(0);
    setCartItemCount(0);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">🛒 주문 세부정보</h2>

      {localItems.map((item, index) => (
        <OrderItemCard
          key={index}
          item={item}
          index={index}
          localItems={localItems}
          setLocalItems={setLocalItems}
          setLocalTotal={setLocalTotal}
        />
      ))}

      <div className="text-right text-xl font-bold">
        총 합계: ${localTotal.toFixed(2)}
      </div>
    </div>
  );
}
