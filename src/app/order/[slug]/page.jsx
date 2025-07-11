"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  cartItemsAtom,
  cartTotalAtom,
  cartItemCountAtom,
} from "@/app/atoms/cartAtom";

import OrderItemCard from "@/components/order-page/order-item-card";
import DeliveryPickupOptions from "@/components/order-page/delivery-pickup-options";
import CoustomerInformation from "@/components/order-page/customer-imformation";
import OrderSummary from "@/components/order-page/order-summary";

export default function OrderPage() {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);
  const [cartItemCount, setCartItemCount] = useAtom(cartItemCountAtom);

  const [localItems, setLocalItems] = useState([]);
  const [localTotal, setLocalTotal] = useState(0);
  const [localCartItemCount, setLocalCartItemCount] = useState(0);

  useEffect(() => {
    setLocalItems(cartItems);
    setLocalTotal(cartTotal);
    setLocalCartItemCount(cartItemCount);

    // 전역 초기화
    setCartItems([]);
    setCartTotal(0);
    setCartItemCount(0);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold ml-4">
        주문 세부정보 ({localCartItemCount} Items)
      </h2>

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

      <DeliveryPickupOptions />

      <CoustomerInformation />

      <OrderSummary mode={"detailed"} totalCartPrice={localTotal} />

      <div className="text-right text-xl font-bold">
        총 합계: ${localTotal.toFixed(2)}
      </div>
    </div>
  );
}
