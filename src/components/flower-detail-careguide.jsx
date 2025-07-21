"use client";
import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// 한글 라벨 매핑 (필요에 따라 추가/수정 가능)
const CARE_LABELS = {
  sunlight: "햇빛 요구 조건",
  watering: "물주기",
  soil: "토양 선호도",
  temperature: "온도 및 기후",
  pruning: "손질하기",
  pestsDiseases: "해충&질병",
};

export default function FlowerDetailCareGuide({ careInfo }) {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  // 객체 → 배열로 변환
  const careList = Object.entries(careInfo || {});

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!careList.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Care Guide</h2>
      <div className="divide-y divide-gray-200">
        {careList.map(([key, value], idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={key} className="py-4">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left cursor-pointer transition duration-200 hover:opacity-90 active:scale-[0.98]"
              >
                {/* 라벨(한글)과 key를 같이 표시 */}
                <div className="flex items-center gap-2 text-black font-medium">
                  <span>{CARE_LABELS[key] ?? key}</span>
                </div>

                {/* 토글 아이콘 */}
                <span className="text-gray-400">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>

              {/* 내용 */}
              <div
                ref={(el) => (contentRefs.current[idx] = el)}
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[idx]?.scrollHeight + "px"
                    : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
                className="mt-2"
              >
                <p className="text-sm text-gray-600">{value ?? "-"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
