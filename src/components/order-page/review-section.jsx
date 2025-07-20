"use client";

import { Star } from "lucide-react";
import ReviewList from "./review-list";
import ReviewForm from "./review-form";

export default function ReviewSection({ rating, reviewCount, shopId }) {
  return (
    <>
      <section className="border border-[#EBEBEAFF] rounded-xl p-6 space-y-10 bg-white">
        <div className="space-y-6">
          <ReviewForm />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#403e3e] font-semibold text-lg">
            평점 & 리뷰:
            <span className="flex items-center gap-1 text-yellow-500 font-medium">
              <Star size={18} fill="#facc15" stroke="#facc15" />
              {rating?.toFixed(1) ?? "-"}
            </span>
            <span className="text-gray-500 font-normal text-base">
              리뷰 ({reviewCount ?? 0})
            </span>
          </div>

          <ReviewList shopId={shopId} />
        </div>
      </section>
    </>
  );
}
