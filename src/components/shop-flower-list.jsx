"use client";

import ShopFlowerCard from "./shop-flower-card";

export default function ShopFlowerList({ shopFlowerList }) {
  return (
    <div className="flex flex-wrap gap-5">
      {shopFlowerList.map((item) => (
        <div key={item.id}>
          <ShopFlowerCard
            image={item.image}
            name={item.name}
            symbolism={item.specifics.symbolism}
            slug={item.slug}
          />
        </div>
      ))}
    </div>
  );
}
