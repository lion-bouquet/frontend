"use client";
import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
                {/* key를 그대로 표시 */}
                <div className="flex items-center gap-2 text-black font-medium">
                  <span>{key}</span>
                </div>
                <span className="text-gray-400">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
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
