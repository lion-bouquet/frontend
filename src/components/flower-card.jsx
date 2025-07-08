import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FlowerCard({ image, name, description, slug }) {
  return (
    <Link href={`/flower-detail/${slug}`}>
      <div className="w-[220px] h-[320px] rounded-xl border border-[#EBEBEAFF] bg-white overflow-hidden cursor-pointer">
        <div className="relative w-full" style={{ height: "200px" }}>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-4 h-[120px] flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
          <div className="flex justify-end items-center gap-1 text-xs text-violet-500">
            <span>자세히 보기</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
