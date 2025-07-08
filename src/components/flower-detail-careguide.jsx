"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FlowerDetailCareGuide({ careGuide }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Care Guide</h2>
      <div className="divide-y divide-gray-200">
        {careGuide.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-4">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left"
              >
                {/* 아이콘 + 타이틀 영역 */}
                <div className="flex items-center gap-2 text-black font-medium">
                  <span className="text-lg leading-none">{item.icon}</span>
                  <span>{item.title}</span>
                </div>

                {/* 토글 아이콘 */}
                <span className="text-gray-400">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>

              {/* 내용 */}
              {isOpen && (
                <p className="mt-2 text-sm text-gray-600">{item.content}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
