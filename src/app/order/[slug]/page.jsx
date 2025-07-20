"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  cartItemsAtom,
  cartTotalAtom,
  cartItemCountAtom,
} from "@/app/atoms/cartAtom";

import OrderItemCard from "@/components/order-page/order-item-card";
import CustomerInformation from "@/components/order-page/customer-imformation";
import OrderSummary from "@/components/order-page/order-summary";
import RequestNote from "@/components/order-page/request-note";
import { usePathname, useRouter } from "next/navigation";

export default function OrderPage() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const slug = segments[segments.length - 1];
  const router = useRouter();

  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);
  const [cartItemCount, setCartItemCount] = useAtom(cartItemCountAtom);

  const [localItems, setLocalItems] = useState([]);
  const [localTotal, setLocalTotal] = useState(0);
  const [localCartItemCount, setLocalCartItemCount] = useState(0);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [requestNote, setRequestNote] = useState("");

  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [phoneErrorMsg, setPhoneErrorMsg] = useState("");
  const [agree, setAgree] = useState(false);
  const [agreeErrorMsg, setAgreeErrorMsg] = useState("");
  const [shakeName, setShakeName] = useState(false);
  const [shakePhone, setShakePhone] = useState(false);
  const [shakeAgree, setShakeAgree] = useState(false);

  useEffect(() => {
    setLocalItems(cartItems);
    setLocalTotal(cartTotal);
    setLocalCartItemCount(cartItemCount);

    setCartItems([]);
    setCartTotal(0);
    setCartItemCount(0);
  }, []);

  useEffect(() => {
    const totalCount = localItems.reduce((sum, item) => sum + item.count, 0);
    setLocalCartItemCount(totalCount);
  }, [localItems]);

  async function handleReserve() {
    const token = localStorage.getItem("accessToken");
    const phoneRegex = /^010\d{8}$/;
    let hasError = false;

    if (!customerName.trim()) {
      setNameErrorMsg("이름을 입력해주세요.");
      setShakeName(true);
      hasError = true;
    } else {
      setNameErrorMsg("");
    }

    if (!phoneRegex.test(customerPhone)) {
      setPhoneErrorMsg("전화번호는 010으로 시작하는 11자리 숫자여야 합니다.");
      setShakePhone(true);
      hasError = true;
    } else {
      setPhoneErrorMsg("");
    }

    if (!agree) {
      setAgreeErrorMsg("개인정보 제공에 동의해주세요.");
      setShakeAgree(true);
      hasError = true;
    } else {
      setAgreeErrorMsg("");
    }

    if (localCartItemCount === 0) {
      alert("장바구니에 아이템이 없습니다.");
      hasError = true;
    }

    if (hasError) {
      setTimeout(() => {
        setShakeName(false);
        setShakePhone(false);
        setShakeAgree(false);
      }, 400);
      return;
    }

    const payload = {
      shopId: Number(slug),
      items: localItems.map((item) => ({
        stockId: Number(item.stockId),
        quantity: item.count,
      })),
      phone: customerPhone,
      request: requestNote,
    };

    console.log("📦 최종 보낼 payload:", payload);
    console.log("🪪 Authorization token", token);
    console.log("📦 예약 최종 payload 전송 데이터:");
    console.log("  shopId:", slug, typeof slug);
    console.log("  phone:", customerPhone, typeof customerPhone);
    console.log("  request:", requestNote, typeof requestNote);
    console.log("  items 배열 전체:", localItems);

    localItems.forEach((item, idx) => {
      console.log("    stockId:", item.stockId, typeof item.stockId);
      console.log("    quantity:", item.count, typeof item.count);
    });

    try {
      const response = await fetch("https://likelion.patulus.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ 포함
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        console.warn("❌ 주문 요청 실패:", data);
        throw new Error(data.message || "주문 요청 실패");
      }

      console.log("✅ 주문 성공:", data);
      router.push("/order-list");
    } catch (error) {
      console.error("🚨 주문 실패:", error);
      alert("주문에 실패했습니다. 다시 시도해주세요.");
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold ml-4">
        주문 세부정보 ({localCartItemCount})
      </h2>

      {localCartItemCount === 0 && (
        <div className="text-gray-500 text-center py-4">
          장바구니가 비어있습니다.
        </div>
      )}

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

      <OrderSummary mode="detailed" totalCartPrice={localTotal} />

      <CustomerInformation
        name={customerName}
        setName={setCustomerName}
        phone={customerPhone}
        setPhone={setCustomerPhone}
        nameErrorMsg={nameErrorMsg}
        phoneErrorMsg={phoneErrorMsg}
        shakeName={shakeName}
        shakePhone={shakePhone}
        agree={agree}
        setAgree={setAgree}
        agreeErrorMsg={agreeErrorMsg}
        setAgreeErrorMsg={setAgreeErrorMsg}
        shakeAgree={shakeAgree}
      />

      <RequestNote requestNote={requestNote} setRequestNote={setRequestNote} />

      <button
        onClick={handleReserve}
        className="w-[250px] ml-auto block px-6 py-3 rounded-full text-white font-semibold"
        style={{
          background:
            "linear-gradient(135deg, #BEDEF2 0%, #D1DCF6 30%, #D8CDEE 70%, #F5D5E2 100%)",
          marginTop: "1.7rem",
        }}
      >
        주문하기
      </button>
    </div>
  );
}
