"use client";

import { Store, MessageSquareText, Star, ShoppingCart } from "lucide-react";
import clsx from "clsx";

const sortButtons = [
  { id: "all", label: "All Shops", icon: Store },
  { id: "review", label: "리뷰 많은 순", icon: MessageSquareText },
  { id: "rating", label: "평점 높은 순", icon: Star },
  { id: "order", label: "주문 많은 순", icon: ShoppingCart },
];

export default function SortButtons({
  selectedSort,
  selectedCity,
  onChangeSort,
  onChangeCity,
}) {
  return (
    <div className="flex justify-between items-center flex-wrap gap-4">
      {/* 왼쪽: 정렬 버튼 */}
      <div className="flex gap-2 flex-wrap">
        {sortButtons.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onChangeSort(id)}
            className={clsx(
              "flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-sm transition shadow-sm cursor-pointer hover:opacity-90 active:scale-95",
              selectedSort === id
                ? "border-violet-400 text-[#333] font-semibold"
                : "border-transparent text-gray-500 hover:bg-gray-100"
            )}
            style={
              selectedSort === id
                ? {
                    background:
                      "linear-gradient(135deg, #BEDEF2 0%, #D1DCF6 30%, #D8CDEE 70%, #F5D5E2 100%)",
                  }
                : {}
            }
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
