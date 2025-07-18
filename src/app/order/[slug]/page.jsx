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
import { usePathname } from "next/navigation";

export default function OrderPage() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const slug = segments[segments.length - 1];

  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);
  const [cartItemCount, setCartItemCount] = useAtom(cartItemCountAtom);

  const [localItems, setLocalItems] = useState([]);
  const [localTotal, setLocalTotal] = useState(0);
  const [localCartItemCount, setLocalCartItemCount] = useState(0);

  //CustomerInformation 상태 끌어올리기
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

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

    // 전역 초기화
    setCartItems([]);
    setCartTotal(0);
    setCartItemCount(0);
  }, []);

  useEffect(() => {
    const totalCount = localItems.reduce((sum, item) => sum + item.count, 0);
    setLocalCartItemCount(totalCount);
  }, [localItems]);

  function handleReserve() {
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
      // 애니메이션 한 번만 실행되게 타이머로 제거
      setTimeout(() => {
        setShakeName(false);
        setShakePhone(false);
        setShakeAgree(false);
      }, 400);
      return;
    }

    //POST
    const payload = {
      shop: slug,
      name: customerName,
      //userId: userId 로그인 기능 추가시
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
    <>
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-bold ml-4">
          주문 세부정보 ({localCartItemCount} Items)
        </h2>
        {localCartItemCount === 0 && (
          <div className="text-gray-500 text-center py-4">No items in cart</div>
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

        <DeliveryPickupOptions />

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

        <OrderSummary
          mode={"detailed"}
          totalCartPrice={localTotal}
          onReserve={handleReserve}
        />

        <div className="text-right text-xl font-bold">
          총 합계: ${localTotal.toFixed(2)}
        </div>
      </div>
    </>
  );
}
