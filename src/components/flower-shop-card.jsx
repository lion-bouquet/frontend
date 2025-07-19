import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function FlowerShopCard({
  rating,
  image,
  name,
  slug,
  address,
  isOpen,
}) {
  return (
    <div className="w-full max-w-full rounded-xl border border-[#EBEBEAFF] bg-white overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={1000}
        height={160}
        className="object-cover w-full"
        priority
      />

      <div className="pt-4 px-4 pb-4 flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-[16px]">{name}</h3>
          <div className="flex items-center text-sm text-gray-600">
            <Star
              className="w-4 h-4 text-yellow-400 mr-1"
              fill="currentColor"
            />
            <span className="text-[13px]">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600">{address}</p>
        <p
          className={clsx(
            "text-sm font-semibold",
            isOpen ? "text-[#7A75E3]" : "text-gray-500"
          )}
        >
          {isOpen ? "Open Now" : "Closed"}
        </p>

        <div className="flex justify-end mt-1">
          <Link href={`/flower-shop/${slug}`}>
            <button
              className="text-sm font-semibold rounded-full px-6 py-2 text-[#333] shadow cursor-pointer transition duration-200 hover:opacity-90 active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, #BEDEF2 0%, #D1DCF6 30%, #D8CDEE 70%, #F5D5E2 100%)",
              }}
            >
              상세보기
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
}
