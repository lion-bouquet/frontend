"use client";

import { useState } from "react";

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
                <div className="flex items-center gap-2 text-black-500 font-medium">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                <span
                  className={`transform transition-transform duration-200 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  } text-gray-400`}
                >
                  ▼
                </span>
              </button>
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
