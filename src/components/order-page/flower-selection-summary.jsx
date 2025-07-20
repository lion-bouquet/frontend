"use client";

import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { cartItemsAtom } from "@/app/atoms/cartAtom";
import { Flower, Trash2 } from "lucide-react";

export default function FlowerSelectionSummary({ onClickCart }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const shop = segments[segments.length - 1];

  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const filteredItems = cartItems.filter((item) => item.shop === shop);

  const totalCount = filteredItems.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = filteredItems.reduce(
    (sum, item) => sum + (item.price || 0),
    0
  );

  const handleRemove = (itemToRemove) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.name === itemToRemove.name && item.shop === itemToRemove.shop)
      )
    );
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">꽃 선택</h2>
      <div className="border border-[#EBEBEAFF] rounded-xl p-6 bg-white shadow-sm w-full">
        {filteredItems.length === 0 ? (
          <p className="text-gray-400 text-sm">
            장바구니에 담긴 꽃이 없습니다.
          </p>
        ) : (
          <ul className="space-y-3">
            {filteredItems.map((item, idx) => (
              <li
                key={idx}
                className={`flex justify-center items-center gap-80 py-2 text-sm ${
                  idx < filteredItems.length - 1
                    ? "border-b border-[#EBEBEAFF]"
                    : ""
                }`}
              >
                {/* 🌸 꽃 이름 */}
                <div className="flex items-center gap-2 min-w-[120px]">
                  <Flower className="w-4 h-4 text-purple-400" />
                  <span className="text-[#8c8d8b] font-medium truncate">
                    {item.name}
                  </span>
                </div>

                {/* 수량 */}
                <div className="text-gray-500 text-sm text-center min-w-[80px]">
                  수량 | {item.count}
                </div>

                {/* 가격 + 삭제 */}
                <div className="flex items-center gap-2 min-w-[100px] justify-end">
                  <span className="font-bold text-black text-right">
                    {item.price.toLocaleString()}원
                  </span>
                  <button
                    onClick={() => handleRemove(item)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 border-t border-[#EBEBEAFF] pt-4 flex justify-center gap-200 items-center">
          <span className="text-gray-600 font-semibold">총 결제 금액</span>
          <span className="text-[25px] font-bold text-[#7A75E3]">
            {totalPrice.toLocaleString()}원
          </span>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClickCart}
            className="bg-gradient-to-r from-purple-300 to-pink-300 text-white font-semibold px-6 py-2 rounded-full shadow hover:opacity-90 transition"
          >
            주문 계속하기
          </button>
        </div>
      </div>
    </>
  );
}
