import { combos } from "@/app/db/color-combinations-data";

const picked = combos.find(c => c.id === "pick");

export default function ColorCombinationsPickCard() {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow p-6">
      {/* 왼쪽 이미지 */}
      <img
        src={picked.image}
        alt={picked.title}
        className="w-full md:w-1/2 h-auto object-cover rounded-lg"
      />

      {/* 오른쪽 텍스트 + 팔레트 */}
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="text-xl font-bold mb-2">{picked.title}</h2>
          <p className="text-sm text-gray-600 mb-4">{picked.description}</p>
        </div>

        {/* 팔레트: 좌측 정렬 + 크기 살짝 증가 */}
        <div className="flex gap-3">
          {picked.colors.map((color, idx) => (
            <span
              key={idx}
              className="w-10 h-10 rounded-full border"
              style={{
                backgroundColor: color,
                borderColor: "#EBEBEAFF",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
