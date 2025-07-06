import { recommendedShops } from "@/app/db/flower-shop-data";
import FlowerShopCard from "./flower-shop-card";

export default function FlowerShopList() {
  return (
    <div className="flex overflow-x-auto gap-5 px-2">
      {recommendedShops.map((item) => (
        <div key={item.id} className="flex-shrink-0">
          <FlowerShopCard
            name={item.name}
            image={item.image}
            rating={item.rating}
            reviewCount={item.reviewCount}
          />
        </div>
      ))}
    </div>
  );
}
