"use client";

import OrderItemCard from "./order-item-card";

export default function OrderItemList() {
  const items = [
    {
      id: "blushing-pink-peony",
      src: "/image/sunflower.jpg",
      name: "Enchanting Peony Bouquet",
      quantity: 1,
      description: "Symbolizes prosperity and good fortune",
    },
    {
      id: "classic-red-rose",
      src: "/image/rose.jpg",
      name: "Timeless Red Roses",
      quantity: 1,
      description: "Classic symbol of love and beauty",
    },
    {
      id: "elegant-white-lily",
      src: "/image/lily.jpg",
      name: "Serene White Lilies",
      quantity: 2,
      description: "Represents purity and renewal",
    },
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        주문한 꽃 목록
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <OrderItemCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}
