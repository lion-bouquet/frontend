"use client";

import FlowerShopCard from "./flower-shop-card";

export default function FlowerShopList({ shops = [], layout = "grid" }) {
  const containerClass =
    layout === "scroll"
      ? "flex overflow-x-auto gap-5 px-2"
      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full";
  const itemClass = layout === "scroll" ? "flex-shrink-0 w-[300px]" : "";

  if (!shops.length) {
    return (
      <div className="text-center text-gray-400 py-6">
        꽃집이 없습니다.
      </div>
    );
  }

  return (
    <div className={containerClass}>
      {shops.map((item) => (
        <div key={item.id} className={itemClass}>
          <FlowerShopCard
            name={item.shopName}
            image={item.shopImage ?? "/image/dummy-img.png"}
            rating={item.rating}
            slug={item.id.toString()}
            address={`${item.province} ${item.city}`}
            isOpen={item.openStatus}
          />
        </div>
      ))}
    </div>
  );
}
