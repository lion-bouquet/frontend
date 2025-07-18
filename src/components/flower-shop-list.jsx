"use client";

import { useEffect, useState } from "react";
import FlowerShopCard from "./flower-shop-card";

export default function FlowerShopList() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("https://likelion.patulus.com/shops", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ 데이터:", data);
        setShops(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("❌ 오류:", err);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-5">
      {shops.map((item) => (
        <FlowerShopCard
          key={item.id}
          name={item.shopName}
          image={item.image ?? "/image/dummy-img.png"}
          rating={item.rating}
          reviewCount={item.reviewCount ?? 0}
          slug={item.id}
        />
      ))}
    </div>
  );
}
