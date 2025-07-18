"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import clsx from "clsx";

export default function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = () => {
    if (!rating || !content.trim()) {
      setError("평점과 리뷰를 모두 작성해주세요.");
      setShake(true);
      setTimeout(() => setShake(false), 500); // 진동 애니메이션 초기화
      return;
    }
    setError("");
    onSubmit?.({ rating, content });
    setRating(0);
    setContent("");
  };

  return (
    <div className="space-y-4">
      {/* 평점 */}
      <div className="flex items-center gap-3 text-[#403e3e] font-semibold">
        평점작성:
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={22}
              className="cursor-pointer"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              fill={(hover || rating) >= star ? "#facc15" : "none"}
              stroke={(hover || rating) >= star ? "#facc15" : "#d1d5db"}
            />
          ))}
        </div>
      </div>

      {/* 리뷰 작성 */}
      <div>
        <label className="text-[#403e3e] font-semibold mr-4">리뷰작성:</label>
        <textarea
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full bg-[#f9faff] rounded-xl p-4 text-sm resize-none outline-none border border-transparent focus:border-[#d3d6f3] transition"
          placeholder="리뷰 내용을 입력해주세요"
        />
      </div>

      {/* 에러 메시지 */}
      {error && (
        <p
          className={clsx(
            "text-red-500 text-sm font-medium",
            shake && "animate-shake"
          )}
        >
          {error}
        </p>
      )}

      {/* 작성 버튼 */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-[#C9E3F5] via-[#E6D4F2] to-[#F7D3DF] px-6 py-2 rounded-full shadow-sm text-sm font-semibold text-gray-700 hover:opacity-90 transition"
        >
          작성하기
        </button>
      </div>

      {/* 진동 애니메이션 정의 */}
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-4px);
          }
          50% {
            transform: translateX(4px);
          }
          75% {
            transform: translateX(-4px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}
