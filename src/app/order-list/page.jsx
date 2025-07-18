"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import OrderList from "@/components/order-list/order-list";

export default function OrderListPage() {
  const router = useRouter();
  const hasRedirected = useRef(false); // ✅ 중복 방지

  useEffect(() => {
    if (hasRedirected.current) return;
    hasRedirected.current = true;

    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인 후 이용해주세요.");
      router.replace("/home");
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">주문 리스트</h1>
      <div className="text-md text-[#5b5967] flex gap-4 mb-12">
        <span>
          주문 | <span className="text-[#403e3e] font-medium">12건</span>
        </span>
        <span>
          총 결제 금액 |{" "}
          <span className="text-[#403e3e] font-medium">12건</span>
        </span>
      </div>

      <OrderList />
    </div>
  );
}
