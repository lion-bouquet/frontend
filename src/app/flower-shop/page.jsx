import FlowerShopList from "@/components/flower-shop-list";
import SortButtons from "@/components/sort-buttons";

export default function FlowerShopPage() {
  return (
    <>
      <div className="mb-4">
        <SortButtons />
      </div>
      <FlowerShopList layout="grid" />
    </>
  );
}
