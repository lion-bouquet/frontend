import { flowerDetail } from "@/app/db/flower-detail-data";

import FlowerDetailPick from "@/components/flower-detail-pick";

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
    </div>
  );
}