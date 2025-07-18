import PickupProgress from "@/components/order-confirmation/pickup-progress";

export default function OrderPickTime() {
  const items = [
    { label: "픽업 장소", icon: "📍", value: "Petal & Path", bold: true },
    {
      label: "픽업 예정 시간",
      icon: "⏰",
      value: "2025-07-18 (금)",
      sub: "15:08:54",
      bold: true,
    },
    {
      label: "플로리스트 연락처",
      icon: "📞",
      value: "010-xxxx-xxxx",
      bold: true,
    },
    {
      label: "플로리스트에게 요청 사항",
      icon: "📝",
      value: "없음",
      bold: true,
    },
  ];

  return (
    <div
      className="rounded-xl border bg-white p-6 overflow-hidden"
      style={{ borderColor: "#EBEBEA" }}
    >
      {/* 픽업 정보 영역 */}
      <div className="text-sm">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex justify-between items-center py-2 ${
              idx !== items.length - 1 ? "border-b" : ""
            }`}
            style={idx !== items.length - 1 ? { borderColor: "#EBEBEA" } : {}}
          >
            <span className="text-[#5b5967] flex items-center pl-1">
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </span>
            <span
              className={`pr-1 text-[#403E3E] ${
                item.bold ? "font-semibold" : ""
              }`}
            >
              {item.value}
              {item.sub && (
                <span className="text-md font-normal ml-1 text-[#5b5967]">
                  {item.sub}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>

      {/* 프로그레스 바 + 안내문 */}
      <div className="mt-10 text-center">
        <p className="text-md font-bold text-[#5b5967] mb-5">
          현재 플로리스트가 꽃을 정성껏 포장중이에요!
        </p>

        <div className="relative w-full mx-auto px-4">
          <PickupProgress />
        </div>

        <div className="mt-25">
          <p className="text-xl font-bold text-[#403E3E]">
            픽업까지 예상 시간은 <span className="text-[#7A75E3]">60분</span>{" "}
            남았습니다!
          </p>
          <p className="text-sm font-bold text-[#5b5967] mt-1">
            지정된 시간에 매장 방문 후, 주문번호를 플로리스트에게 말씀해주세요!
          </p>
        </div>
      </div>
    </div>
  );
}
