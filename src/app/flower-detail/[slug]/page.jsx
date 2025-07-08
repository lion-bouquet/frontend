import { flowerDetail } from "@/app/db/flower-detail-data";
import { flowerDetailVisual } from "@/app/db/flower-detail-visual-data";
import { flowerDetailFlower } from "@/app/db/flower-detail-flower-data";

import FlowerDetailPick from "@/components/flower-detail-pick";
import FlowerDetailVisualCard from "@/components/flower-detail-visual-card";
import FlowerDetailFlowerCard from "@/components/flower-detail-flower-card";

export default async function FlowerDetailPage({ params }) {
  const { slug } = await params;
  const flower = flowerDetail.find((f) => f.id === slug);

  if (!flower) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Flower not found 😢
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* 상단 꽃 정보 */}
      <FlowerDetailPick flower={flower} />

      {/* Visual Varieties */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-extrabold mb-2">Visual Varieties</h2>
        <p className="text-gray-500">
          Explore the subtle differences and exquisite details that make each{" "}
          {flower.name} unique.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {flowerDetailVisual.map((item, idx) => (
          <FlowerDetailVisualCard
            key={idx}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>

      {/* Explore More Flowers */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-2">Explore More Flowers</h2>
        <p className="text-gray-500">
          Dive deeper into the world of flora. Discover other captivating
          flowers and their unique characteristics.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
        {flowerDetailFlower.map((item, idx) => (
          <FlowerDetailFlowerCard
            key={idx}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}
