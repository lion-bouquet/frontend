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
import CustomerInformation from "@/components/order-page/customer-imformation";
import OrderSummary from "@/components/order-page/order-summary";

export default function OrderPage() {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);
  const [cartItemCount, setCartItemCount] = useAtom(cartItemCountAtom);

  const [localItems, setLocalItems] = useState([]);
  const [localTotal, setLocalTotal] = useState(0);
  const [localCartItemCount, setLocalCartItemCount] = useState(0);

  //CustomerInformation 상태 끌어올리기
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  useEffect(() => {
    setLocalItems(cartItems);
    setLocalTotal(cartTotal);
    setLocalCartItemCount(cartItemCount);

    // 전역 초기화
    setCartItems([]);
    setCartTotal(0);
    setCartItemCount(0);
  }, []);

  function handleReserve() {
    const payload = {
      name: customerName,
      phone: customerPhone,
      total: localTotal,
      items: localItems.map((item) => ({
        name: item.name,
        count: item.count,
      })),
    };
    console.log("예약 정보 전송:", payload);
  }

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

      <CustomerInformation
        name={customerName}
        setName={setCustomerName}
        phone={customerPhone}
        setPhone={setCustomerPhone}
      />

      <OrderSummary
        mode={"detailed"}
        totalCartPrice={localTotal}
        onReserve={handleReserve}
      />

      <div className="text-right text-xl font-bold">
        총 합계: ${localTotal.toFixed(2)}
      </div>
    </div>
  );
}
