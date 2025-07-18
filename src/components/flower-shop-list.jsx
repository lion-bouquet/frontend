import { recommendedShops } from "@/app/db/flower-shop-data";
import FlowerShopCard from "./flower-shop-card";

export default function FlowerShopList({ layout = "grid" }) {
  const containerClass =
    layout === "scroll"
      ? "flex overflow-x-auto gap-5 px-2"
      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full";

  const itemClass = layout === "scroll" ? "flex-shrink-0 w-[300px]" : "";

  return (
    <div className={containerClass}>
      {recommendedShops.map((item) => (
        <div key={item.id} className={itemClass}>
          <FlowerShopCard
            name={item.name}
            image={item.image}
            rating={item.rating}
            reviewCount={item.reviewCount}
            slug={item.slug}
            address={item.address}
            distance={item.distance}
            isOpen={item.isOpen}
          />
        </div>
      ))}
    </div>
  );
}
