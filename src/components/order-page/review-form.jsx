"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import clsx from "clsx";

export default function ReviewForm({ shopId, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = async () => {
    if (!rating || !content.trim()) {
      setError("평점과 리뷰를 모두 작성해주세요.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const res = await fetch(
        `https://likelion.patulus.com/shops/${shopId}/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            stars: rating,
            content,
          }),
        }
      );

      const json = await res.json();

      if (json.success) {
        alert("리뷰가 성공적으로 등록되었습니다.");
        setRating(0);
        setContent("");

        onSubmit?.(json.data);
      } else {
        alert("리뷰 등록 실패: " + (json.message || "알 수 없는 오류"));
      }
    } catch (err) {
      console.error("리뷰 등록 에러:", err);
      alert("리뷰 등록 중 오류가 발생했습니다.");
    }

    setError("");
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
          className="bg-gradient-to-r from-[#C9E3F5] via-[#E6D4F2] to-[#F7D3DF] px-6 py-2 rounded-full shadow-sm text-sm font-semibold text-gray-700 hover:opacity-90 transition cursor-pointer active:scale-95"
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
