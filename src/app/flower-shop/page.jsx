// ❌ "use client" 제거
import FlowerShopList from "@/components/flower-shop-list";
import SortButtons from "@/components/sort-buttons";

export default async function FlowerShopPage() {
  let shops = [];

  try {
    const res = await fetch("https://likelion.patulus.com/shops", {
      cache: "no-store",
    });
    const json = await res.json();
    // console.log("🌸 API 꽃집 응답:", json);
    if (Array.isArray(json)) shops = json;
    else if (json.success === "true" && Array.isArray(json.data))
      shops = json.data;
  } catch {
    shops = [];
  }

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-extrabold text-gray-800 mb-6">
        꽃집을 선택하세요
      </h1>
      <div className="mb-6">
        <SortButtons selectedSort="all" selectedCity="" />
      </div>
      <FlowerShopList layout="grid" shops={shops} />
    </div>
  );
}
