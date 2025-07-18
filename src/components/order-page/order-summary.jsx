"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { cartTotalAtom } from "@/app/atoms/cartAtom";
import { cartItemCountAtom } from "@/app/atoms/cartAtom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function OrderSummary({
  mode = "compact",
  totalCartPrice,
  onReserve,
}) {
  const itemCount = useAtomValue(cartItemCountAtom);
  const setCartTotal = useSetAtom(cartTotalAtom);

  const itemPrice = 77;
  const totalPrice = itemPrice * itemCount;
  const deliveryFee = 0;
  const discount = 0;
  const finalPrice = totalPrice + deliveryFee - discount;

  const pathname = usePathname();
  const segments = pathname.split("/");
  const slug = segments[segments.length - 1];

  useEffect(() => {
    setCartTotal(finalPrice);
  }, [finalPrice]);

  if (mode === "detailed") {
    return (
      <>
        <div className="bg-white border border-[#ebebea] rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-bold">Order Summary</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${totalCartPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Discount</span>
              <span className="text-red-500">-${discount.toFixed(2)}</span>
            </div>
          </div>

          <div className="border-t pt-4 flex justify-between items-center">
            <span className="font-bold text-lg">Total</span>
            <span className="text-pink-500 text-2xl font-bold">
              ${totalCartPrice.toFixed(2)}
            </span>
          </div>

          <button
            onClick={onReserve}
            className="w-full cursor-pointer mt-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-sky-200 via-purple-200 to-pink-200"
          >
            예약하기
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="bg-white border border-[#EBEBEAFF] rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <div className="text-sm space-y-2">
        <div className="flex justify-between">
          <span>Items ({itemCount})</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-bold">
          <span>Total</span>
          <span>${finalPrice.toFixed(2)}</span>
        </div>
      </div>

      <Link href={`/order/${slug}`}>
        <button className="w-full mt-4 bg-gradient-to-r from-violet-500 to-pink-400 text-white py-2 rounded-full cursor-pointer">
          View Order Details
        </button>
      </Link>
    </div>
  );
}
