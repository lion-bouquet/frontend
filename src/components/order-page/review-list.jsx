"use client";

import ReviewCard from "./review-card";

export default function ReviewList({ reviews }) {
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
