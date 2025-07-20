"use client";
import { useEffect, useState } from "react";
import FlowerShopList from "@/components/flower-shop-list";
import SortButtons from "@/components/sort-buttons";

export default function FlowerShopPage() {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSort, setSelectedSort] = useState("all");
  const [selectedCity, setSelectedCity] = useState("");

  // 데이터 불러오기 (클라이언트에서!)
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch("https://likelion.patulus.com/shops", { cache: "no-store" });
        const json = await res.json();
        console.log("🌸 API 꽃집 응답:", json);
        if (Array.isArray(json)) setShops(json);
        else if (json.success === "true" && Array.isArray(json.data)) setShops(json.data);
        else setShops([]);
      } catch {
        setShops([]);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  // 필터+정렬 적용
  const filteredShops = shops
    .filter((shop) => {
      if (!selectedCity) return true;
      if (selectedCity === "do") return shop.province?.endsWith("도");
      if (selectedCity === "si") return shop.province?.endsWith("시") || shop.city?.endsWith("시");
      return true;
    })
    .sort((a, b) => {
      if (selectedSort === "rating") return (b.rating || 0) - (a.rating || 0);
      if (selectedSort === "order") return (b.orderCount || 0) - (a.orderCount || 0);
      if (selectedSort === "review") return (b.reviewCount || 0) - (a.reviewCount || 0);
      return 0;
    });

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-extrabold text-gray-800 mb-6">꽃집을 선택하세요</h1>
      <div className="mb-6">
        <SortButtons
          selectedSort={selectedSort}
          selectedCity={selectedCity}
          onChangeSort={setSelectedSort}
          onChangeCity={setSelectedCity}
        />
      </div>
      <FlowerShopList layout="grid" shops={filteredShops} loading={loading} />
    </div>
  );
}
