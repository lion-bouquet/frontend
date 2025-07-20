"use client";

import { useState } from "react";
import SortButtons from "@/components/sort-buttons";
import FlowerShopList from "@/components/flower-shop-list";

export default function FlowerShopClientSection({ initialShops }) {
  const [selectedSort, setSelectedSort] = useState("all");

  const sortedShops = (() => {
    if (selectedSort === "review") {
      return [...initialShops].sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
    }
    if (selectedSort === "rating") {
      return [...initialShops].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    if (selectedSort === "order") {
      return [...initialShops].sort((a, b) => (b.orderCount || 0) - (a.orderCount || 0));
    }
    return initialShops;
  })();

  return (
    <div>
      <SortButtons
        selectedSort={selectedSort}
        onChangeSort={setSelectedSort}
        selectedCity={null}
        onChangeCity={() => {}}
      />
      <div className="mt-6">
        <FlowerShopList shops={sortedShops} />
      </div>
    </div>
  );
}
