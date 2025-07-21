"use client";

import { useState, useMemo } from "react";
import SortButtons from "@/components/sort-buttons";
import FlowerShopList from "@/components/flower-shop-list";

export default function FlowerShopClientSection({ initialShops }) {
  const [selectedSort, setSelectedSort] = useState("all");
  const [selectedProvince, setSelectedProvince] = useState(""); // "" == 전체

  // 시/도 리스트 구하기
  const provinces = useMemo(
    () =>
      Array.from(new Set(initialShops.map((s) => s.province).filter(Boolean))),
    [initialShops]
  );

  // 필터+정렬 적용
  const filteredShops = useMemo(() => {
    let arr = initialShops;
    if (selectedProvince) {
      arr = arr.filter((s) => s.province === selectedProvince);
    }
    if (selectedSort === "review")
      return [...arr].sort(
        (a, b) => (b.reviewCount || 0) - (a.reviewCount || 0)
      );
    if (selectedSort === "rating")
      return [...arr].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (selectedSort === "order")
      return [...arr].sort((a, b) => (b.orderCount || 0) - (a.orderCount || 0));
    return arr;
  }, [initialShops, selectedSort, selectedProvince]);

  return (
    <div>
      <SortButtons
        selectedSort={selectedSort}
        onChangeSort={setSelectedSort}
        selectedCity={null}
        onChangeCity={() => {}}
      />
      {/* 시/도 리스트 + "전체" 버튼 */}
      <div className="flex gap-2 my-4 flex-wrap">
        {/* 전체 버튼 */}
        <button
          className={`px-2 py-1 rounded text-xs ${
            selectedProvince === "" ? "bg-violet-100 font-bold" : "bg-gray-100"
          }`}
          onClick={() => setSelectedProvince("")}
        >
          전체
        </button>
        {/* 각 시/도 버튼 */}
        {provinces.map((p) => (
          <button
            key={p}
            className={`px-2 py-1 rounded text-xs ${
              selectedProvince === p ? "bg-violet-100 font-bold" : "bg-gray-100"
            }`}
            onClick={() => setSelectedProvince(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <FlowerShopList shops={filteredShops} />
      </div>
    </div>
  );
}
