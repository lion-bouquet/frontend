"use client";

import ShopFlowerCard from "./shop-flower-card";

export default function ShopFlowerList({ shopFlowerList }) {
  return (
    <div className="flex flex-wrap gap-5">
      {shopFlowerList.map((item) => (
        <div key={item.stockId}>
          <ShopFlowerCard
            // image={item.flower.imageUrl}
            image={"/imgae/dummy-img.png"}
            name={item.flower.name}
            symbolism={item.flower.flowerLanguage}
            slug={item.stockId.toString()}
          />
        </div>
      ))}
    </div>
  );
}
