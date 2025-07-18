export default function OrderSummary() {
  const items = [
    {
      label: "주문날짜",
      icon: "📅",
      value: "2025-07-18 (금)",
      sub: "15:08:54",
      bold: true,
    },
    {
      label: "주문자명",
      icon: "👤",
      value: "김일이",
      bold: true,
    },
    {
      label: "주문번호",
      icon: "#️⃣",
      value: "BB-20241124-7890",
      bold: true,
    },
    {
      label: "총 결제 금액",
      icon: "💰",
      value: "25000원",
      isTotal: true,
    },
  ];

  return (
    <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#EBEBEA" }}>
      <div className="text-sm">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex justify-between items-center py-2 ${idx !== items.length - 1 ? "border-b" : ""}`}
            style={idx !== items.length - 1 ? { borderColor: "#EBEBEA" } : {}}
          >
            <span className="text-[#5b5967] flex items-center pl-1">
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </span>

            <span
              className={`pr-1 ${
                item.isTotal
                  ? "text-[#7A75E3] text-xl font-semibold text-base"
                  : "text-[#403E3E]"
              } ${item.bold ? "font-semibold" : ""}`}
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
    </div>
  );
}
