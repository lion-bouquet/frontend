import PickedCombinationCard from "@/components/color-combinations-pick-card";
import CombinationsCard from "@/components/color-combinations-card";
import ColorFilter from "@/components/color-combinations-filter";
import ColorHowPick from "@/components/color-how-pick";
import { combos } from "@/app/db/color-combinations-data";


export default function ColorCombinationsPage() {
  const filteredCombos = combos.filter((combo) => combo.id !== "pick");

  return (
    <div className="p-6">
      {/* 상단 추천*/}
      <h1 className="text-3xl font-bold text-center mb-8">
        Discover Inspiring Color Combinations
      </h1>
      <div className="mb-10">
        <PickedCombinationCard />
      </div>

      {/* Explore by Mood & Style */}
      <ColorFilter />

      {/* 추천 리스트 */}
      <h2 className="text-2xl font-bold mb-6">컬러 조합 추천</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCombos.map((combo) => (
          <CombinationsCard key={combo.id} combo={combo} />
        ))}
      </div>

      {/* Color Pick */}
      <ColorHowPick />
    </div>
  );
}

