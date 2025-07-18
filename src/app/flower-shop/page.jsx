import FlowerShopList from "@/components/flower-shop-list";
import SortButtons from "@/components/sort-buttons";

export default function FlowerShopPage() {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-extrabold text-gray-800 mb-6">
        꽃집을 선택하세요
      </h1>

      <div className="mb-6">
        <SortButtons />
      </div>

      <FlowerShopList layout="grid" />
    </div>
  );
}
