"use client";

import { useEffect, useState } from "react";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import PickupProgress from "@/components/order-confirmation/pickup-progress";

export default function OrderPickTime({ pickupTime, order }) {
  const date = new Date(pickupTime || "");
  const isValid = !isNaN(date.getTime());

  const formattedDate = isValid
    ? date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "short",
      })
    : "-";

  const formattedTime = isValid
    ? date.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "";

  const iconColor = "#7A75E3";

  const items = [
    {
      label: "픽업 장소",
      icon: <MapPin size={18} color={iconColor} className="mr-2" />,
      value: order?.shop?.shopName ?? "-",
      bold: true,
    },
    {
      label: "픽업 예정 시간",
      icon: <Clock size={18} color={iconColor} className="mr-2" />,
      value: formattedDate,
      sub: formattedTime,
      bold: true,
    },
    {
      label: "플로리스트에게 요청 사항",
      icon: <MessageCircle size={18} color={iconColor} className="mr-2" />,
      value: order?.request || "없음",
      bold: true,
    },
  ];

  // ✅ 남은 시간 계산 (초기값)
  const calculateRemainingMinutes = () => {
    const now = new Date();
    const diffMs = date.getTime() - now.getTime();
    return isValid ? Math.floor(diffMs / 60000) : null;
  };

  const [remainingMinutes, setRemainingMinutes] = useState(
    calculateRemainingMinutes
  );

  useEffect(() => {
    if (!isValid) return;

    const interval = setInterval(() => {
      setRemainingMinutes(calculateRemainingMinutes());
    }, 60 * 1000); // 1분마다

    return () => clearInterval(interval); // cleanup
  }, [pickupTime]);

  return (
    <div
      className="rounded-xl border bg-white p-6 overflow-hidden"
      style={{ borderColor: "#EBEBEA" }}
    >
      {/* 픽업 정보 */}
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

      {/* 픽업 진행 상태 */}
      <div className="mt-10 text-center">
        <p className="text-md font-bold text-[#5b5967] mb-5">
          현재 플로리스트가 꽃을 정성껏 포장중이에요!
        </p>

        <div className="relative w-full mx-auto px-4">
          <PickupProgress
            remainingMinutes={remainingMinutes}
            totalMinutes={60} // 원하는 기준 시간 (예: 60분)
          />
        </div>

        <div className="mt-25">
          <p className="text-xl font-bold text-[#403E3E]">
            {remainingMinutes === null ? (
              "예상 시간을 계산할 수 없습니다."
            ) : remainingMinutes <= 0 ? (
              <span className="text-[#7A75E3]">픽업이 가능합니다!</span>
            ) : (
              <>
                픽업까지 예상 시간은{" "}
                <span className="text-[#7A75E3]">{remainingMinutes}분</span>{" "}
                남았습니다!
              </>
            )}
          </p>
          <p className="text-sm font-bold text-[#5b5967] mt-1">
            지정된 시간에 매장 방문 후, 주문번호를 플로리스트에게 말씀해주세요!
          </p>
        </div>
      </div>
    </div>
  );
}
