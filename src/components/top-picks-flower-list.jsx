import FlowerCard from "./flower-card";
import { topPicks } from "@/app/db/flower-shop-data";

export default function TopPicksFlowerList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {topPicks.map((item) => (
        <FlowerCard
          key={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          slug={item.slug}
        />
      ))}
    </div>
  );
}
