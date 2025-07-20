import StatusLabel from "./status-label";

export default function PickupProgress({ remainingMinutes, totalMinutes }) {
  const percent =
    remainingMinutes >= totalMinutes
      ? 0
      : remainingMinutes <= 0
      ? 100
      : Math.round(((totalMinutes - remainingMinutes) / totalMinutes) * 100);

  // 바의 내부 여백 설정 (라벨과 정렬 맞춤)
  const horizontalPadding = 40; // px (양 끝 여백)

  return (
    <div className="relative w-full px-3">
      <div
        className="h-2 bg-[#D3D6F3] rounded-full relative overflow-hidden"
        style={{
          marginLeft: horizontalPadding,
          marginRight: horizontalPadding,
        }}
      >
        <div
          className="absolute top-0 h-2 bg-[#7A75E3] rounded-full transition-all duration-500"
          style={{
            left: 0,
            width: `calc(${percent}% - ${horizontalPadding * 2}px)`,
          }}
        />
      </div>

      {/* 라벨 */}
      <div className="top-full left-0 w-full mt-4 flex justify-between">
        <StatusLabel text="주문 확인" />
        <StatusLabel text="제작 중" />
        <StatusLabel text="픽업 가능" />
      </div>
    </div>
  );
}
