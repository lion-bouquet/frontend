"use client";

import { useAtomValue } from "jotai";
import { cartItemCountAtom } from "@/app/atoms/cartAtom";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OrderSummary() {
  const itemCount = useAtomValue(cartItemCountAtom);
  const itemPrice = 77;
  const totalPrice = itemPrice * itemCount;
  const deliveryFee = 5;
  const finalPrice = totalPrice + deliveryFee;

  const pathname = usePathname();
  const segments = pathname.split("/");
  const slug = segments[segments.length - 1]; // 예: "kkotgagae"

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
