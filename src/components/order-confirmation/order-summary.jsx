"use client";

import { Calendar, User, Hash, DollarSign } from "lucide-react";

export default function OrderSummary({ order }) {
  if (!order) return null;

  const date = new Date(order.orderDate);
  const formattedDate = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });
  const formattedTime = date.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const iconColor = "#7A75E3";

  const items = [
    {
      label: "주문날짜",
      icon: <Calendar size={18} color={iconColor} className="mr-2" />,
      value: formattedDate,
      sub: formattedTime,
      bold: true,
    },
    {
      label: "주문자 번호",
      icon: <User size={18} color={iconColor} className="mr-2" />,
      value: order.phone ?? "-",
      bold: true,
    },
    {
      label: "주문번호",
      icon: <Hash size={18} color={iconColor} className="mr-2" />,
      value: order.orderCode,
      bold: true,
    },
    {
      label: "총 결제 금액",
      icon: <DollarSign size={18} color={iconColor} className="mr-2" />,
      value: `${order.totalPrice.toLocaleString()}원`,
      isTotal: true,
    },
  ];

  return (
    <div
      className="rounded-xl border bg-white p-6"
      style={{ borderColor: "#EBEBEA" }}
    >
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
              {item.icon}
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
