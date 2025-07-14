"use client";

import { Store, MessageSquareText, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";
import clsx from "clsx"; // ✅ 빠졌다면 꼭 추가!

const buttons = [
  { id: "all", label: "All Shops", icon: Store },
  { id: "review", label: "리뷰 많은 순", icon: MessageSquareText },
  { id: "rating", label: "평점 높은 순", icon: Star },
  { id: "order", label: "주문 많은 순", icon: ShoppingCart },
];

export default function SortButtons() {
  const [selected, setSelected] = useState("all");

  return (
    <div className="flex gap-4">
      {buttons.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setSelected(id)}
          className={clsx(
            "flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-sm transition",
            selected === id
              ? "bg-indigo-100 border-indigo-300 text-indigo-600"
              : "bg-white border-transparent text-gray-500 hover:bg-gray-100"
          )}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}
    </div>
  );
}
