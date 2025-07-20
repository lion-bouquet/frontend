import FlowerShopClientSection from "@/components/flower-shop-client-section";

export default async function FlowerShopPage() {
  const res = await fetch("https://likelion.patulus.com/shops", {
    cache: "no-store",
  });
  const json = await res.json();
  const shops = Array.isArray(json)
    ? json
    : json.success === "true" && Array.isArray(json.data)
    ? json.data
    : [];

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-extrabold text-gray-800 mb-6">
        꽃집을 선택하세요
      </h1>
      <FlowerShopClientSection initialShops={shops} />
    </div>
  );
}
