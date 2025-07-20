"use client";

import { useAtomValue, useSetAtom } from "jotai";
import {
  cartItemsAtom,
  cartItemCountAtom,
  cartTotalAtom,
} from "@/app/atoms/cartAtom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function OrderSummary({
  mode = "compact",
  totalCartPrice,
  onReserve,
}) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const shop = segments[segments.length - 1];

  const cartItems = useAtomValue(cartItemsAtom);
  const setCartTotal = useSetAtom(cartTotalAtom);
  const itemCount = useAtomValue(cartItemCountAtom);

  // ✅ 해당 shop의 장바구니 아이템만 필터링
  const filteredItems = cartItems.filter((item) => item.shop === shop);

  const totalPrice = filteredItems.reduce(
    (sum, item) => sum + (item.price || 0),
    0
  );
  const deliveryFee = 0;
  const discount = 0;
  const finalPrice = totalPrice + deliveryFee - discount;

  useEffect(() => {
    setCartTotal(finalPrice);
  }, [finalPrice]);

  if (mode === "detailed") {
    return (
      <div className="bg-white rounded-xl p-6 space-y-4">
        <div className="border-t pt-4 flex justify-between items-center">
          <span className="font-bold text-lg">총 결제 금액: </span>
          <span className="text-[#7a75e3] text-2xl font-bold">
            {totalCartPrice.toLocaleString()}원
          </span>
        </div>

        {/* <button
          onClick={onReserve}
          className="w-full cursor-pointer mt-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-sky-200 via-purple-200 to-pink-200"
        >
          예약하기
        </button> */}
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#EBEBEAFF] rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <div className="text-sm space-y-2">
        <div className="flex justify-between text-[#8c8d8b]">
          <span>Items ({itemCount})</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>
        <div className="flex justify-between text-[#8c8d8b]">
          <span>포장비</span>
          <span>{deliveryFee.toLocaleString()}원</span>
        </div>
        <div className="border-t border-[#8c8d8b] pt-2 flex justify-between font-bold">
          <span>총 결제 금액</span>
          <span>{finalPrice.toLocaleString()}원</span>
        </div>
      </div>

      <Link href={`/order/${shop}`}>
        <button
          className="w-full mt-4 text-white py-2 rounded-full cursor-pointer"
          style={{
            background:
              "linear-gradient(135deg, #BEDEF2 0%, #D1DCF6 30%, #D8CDEE 70%, #F5D5E2 100%)",
          }}
        >
          주문 계속하기
        </button>
      </Link>
    </div>
  );
}
