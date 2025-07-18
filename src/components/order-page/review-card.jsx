import { Star } from "lucide-react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

export default function ReviewCard({
  name,
  profileImageUrl,
  createdAt,
  stars,
  content,
}) {
  const dateAgo = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ko,
  });

  return (
    <div className="min-w-[300px] bg-white border border-[#EBEBEAFF] rounded-xl p-5 shadow-sm flex flex-col gap-3">
      {/* 상단: 프로필 이미지 + 유저명 + 작성일 */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src={profileImageUrl ?? "/image/default-profile.png"}
            alt={`${name} 프로필 이미지`}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="font-semibold text-base text-[#1c1c1e]">{name}</span>
        </div>
        <span className="text-sm text-gray-500">{dateAgo}</span>
      </div>

      {/* 별점 */}
      <div className="flex items-center gap-1 text-yellow-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < stars ? "#facc15" : "none"}
            stroke="#facc15"
          />
        ))}
      </div>

      {/* 리뷰 본문 */}
      <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}
