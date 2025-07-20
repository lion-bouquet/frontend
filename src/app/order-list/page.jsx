"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import OrderList from "@/components/order-list/order-list";

export default function OrderListPage() {
  const router = useRouter();
  const hasRedirected = useRef(false);

  const [orderCount, setOrderCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (hasRedirected.current) return;
    hasRedirected.current = true;

    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인 후 이용해주세요.");
      router.replace("/home");
    }
  }, []);

  const handleFetched = (orders) => {
    setOrderCount(orders.length);
    setTotalPrice(orders.reduce((acc, cur) => acc + cur.total, 0));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">주문 리스트</h1>
      <div className="text-md text-[#5b5967] flex gap-4 mb-12">
        <span>
          주문 |{" "}
          <span className="text-[#403e3e] font-medium">{orderCount}건</span>
        </span>
        <span>
          총 결제 금액 |{" "}
          <span className="text-[#403e3e] font-medium">
            {totalPrice.toLocaleString()}원
          </span>
        </span>
      </div>

      <OrderList onFetched={handleFetched} />
    </div>
  );
}
