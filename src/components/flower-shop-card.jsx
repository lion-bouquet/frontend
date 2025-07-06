import Image from "next/image";
import { Star } from "lucide-react";

export default function FlowerShopCard({ rating, reviewCount, image, name }) {
  return (
    <div className="w-[278px] rounded-xl border border-[#EBEBEAFF] bg-white overflow-hidden">
      {/* 이미지 영역 */}
      <Image
        src={image}
        alt={name}
        width={278}
        height={160}
        className="object-cover"
        priority
      />

      {/* 내용 영역 */}
      <div className="pt-4 p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-4 mt-1">
          <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
          <span>
            {rating} ({reviewCount} 리뷰)
          </span>
        </div>
        <button className="w-full bg-gradient-to-r from-violet-500 to-pink-400 text-white py-2 rounded-full">
          View Shop
        </button>
      </div>
    </div>
  );
}
