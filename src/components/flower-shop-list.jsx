import { recommendedShops } from "@/app/db/flower-shop-data";
import FlowerShopCard from "./flower-shop-card";

export default function FlowerShopList({ layout = "grid" }) {
  const containerClass =
    layout === "scroll"
      ? "flex overflow-x-auto gap-5 px-2"
      : "flex flex-wrap gap-5";

  const itemClass = layout === "scroll" ? "flex-shrink-0" : "";

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
          />
        </div>
      ))}
    </div>
  );
}
