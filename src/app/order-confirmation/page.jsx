"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OrderThankYouHeader from "@/components/order-confirmation/order-thank-you-header";
import OrderSummary from "@/components/order-confirmation/order-summary";
import OrderItemList from "@/components/order-confirmation/order-item-list";
import OrderPickTime from "@/components/order-confirmation/order-pick-time";

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const orderCode = searchParams.get("orderCode");

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderCode) return;
      try {
        const token = localStorage.getItem("accessToken");
        const res = await fetch(
          `https://likelion.patulus.com/orders/${orderCode}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const json = await res.json();
        if (json.success) {
          setOrder(json.data);
        }
      } catch (err) {
        console.error("주문 상세 조회 에러:", err);
      }
    };

    fetchOrder();
  }, [orderCode]);

  if (!order) return <div className="p-8">주문 정보를 불러오는 중...</div>;

  return (
    <div className="px-6 py-10 min-h-screen font-sans">
      <div className="mb-12">
        <OrderThankYouHeader orderCode={order.orderCode} />
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">구매정보</h2>
        <OrderSummary order={order} />
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          픽업 시간 안내
        </h2>
        <OrderPickTime pickupTime={order.pickUpAvailableTime} order={order} />
      </div>
      {/* <div>
        <OrderItemList items={order.stocks} />
      </div> */}
    </div>
  );
}
