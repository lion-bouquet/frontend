export default function OrderSummary() {
  const items = [
    { label: "Date", value: "November 24, 2024" },
    { label: "Customer", value: "Eleanor Vance" },
    { label: "Payment Method", value: "💳 **** 4321" },
    { label: "Total", value: "$149.99", bold: true },
  ];

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm" style={{ borderColor: "#EBEBEA" }}>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

      <div className="border-t mb-4" style={{ borderColor: "#EBEBEA" }} />

      <div className="text-sm text-gray-600">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex justify-between py-2 ${idx !== items.length - 1 ? "border-b" : ""}`}
            style={idx !== items.length - 1 ? { borderColor: "#EBEBEA" } : {}}
          >
            <span className={item.bold ? "font-semibold" : ""}>{item.label}</span>
            <span className={`text-black ${item.bold ? "font-semibold" : ""}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
