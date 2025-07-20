"use client";

import { useEffect, useState } from "react";
import ReviewCard from "./review-card";

export default function ReviewList({ shopId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://likelion.patulus.com/shops/${shopId}/reviews`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success === "true") setReviews(json.data || []);
      });
  }, [shopId]);

  return (
    <div className="relative overflow-x-auto">
      <div className="flex gap-6 min-w-full">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            profileImageUrl={review.profileImageUrl}
            createdAt={review.createdAt}
            stars={review.stars}
            content={review.content}
          />
        ))}
      </div>
    </div>
  );
}
