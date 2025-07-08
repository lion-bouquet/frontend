import FlowerCard from "./flower-card";
import { topPicks } from "@/app/db/flower-shop-data";

export default function TopPicksFlowerList() {
  return (
    <div className="flex justify-between">
      {topPicks.map((item) => (
        <div key={item.id}>
          <FlowerCard
            image={item.image}
            name={item.name}
            description={item.description}
            slug={item.slug}
          />
        </div>
      ))}
    </div>
  );
}
