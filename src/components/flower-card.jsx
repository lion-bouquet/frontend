import Image from "next/image";
import Link from "next/link";

export default function FlowerCard({ image, name, description, slug, price }) {
  return (
    <Link href={`/flower-detail/${slug}`}>
      <div className="rounded-xl border border-[#EBEBEA] bg-white overflow-hidden cursor-pointer w-full">

        <div className="relative w-full h-[160px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>


        <div className="p-4 pt-3 pb-3 flex flex-col">

          <div className="flex justify-between items-start">
            <div className="flex-1 pr-2">
              <h3 className="font-bold text-base leading-tight">{name}</h3>
              <p className="text-sm font-semibold text-[#7A75E3] leading-tight mt-1">{price}</p>
              <p className="text-sm text-gray-600 leading-snug mt-1">{description}</p>
            </div>

            <button
              className="text-sm font-semibold rounded-full px-6 py-2 text-[#333] shadow whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(135deg, #BEDEF2 0%, #D1DCF6 30%, #D8CDEE 70%, #F5D5E2 100%)",
                marginTop: "1.7rem"
              }}
            >
              상세보기
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
