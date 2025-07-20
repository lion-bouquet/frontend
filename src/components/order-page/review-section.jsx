"use client";

import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import ReviewList from "./review-list";
import ReviewForm from "./review-form";

export default function ReviewSection({ rating, reviewCount, shopId }) {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await fetch(
      `https://likelion.patulus.com/shops/${shopId}/reviews`
    );
    const json = await res.json();
    if (json.success === "true") {
      setReviews(json.data || []);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [shopId]);

  return (
    <section className="border border-[#EBEBEAFF] rounded-xl p-6 space-y-10 bg-white">
      <div className="space-y-6">
        <ReviewForm
          shopId={shopId}
          onSubmit={() => {
            // 리뷰 등록 후 목록 새로고침
            fetchReviews();
          }}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[#403e3e] font-semibold text-lg">
          평점 & 리뷰:
          <span className="flex items-center gap-1 text-yellow-500 font-medium">
            <Star size={18} fill="#facc15" stroke="#facc15" />
            {rating?.toFixed(1) ?? "-"}
          </span>
          <span className="text-gray-500 font-normal text-base">
            리뷰 ({reviews.length})
          </span>
        </div>

        <ReviewList reviews={reviews} />
      </div>
    </section>
  );
}
