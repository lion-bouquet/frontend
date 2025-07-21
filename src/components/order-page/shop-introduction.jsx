import Image from "next/image";

export default function ShopIntroduction({ shop }) {
  return (
    <section>
      <h3 className="text-xl font-extrabold text-[#403e3e] mb-4">꽃집 소개</h3>
      <div className="bg-white border border-[#EBEBEAFF] rounded-xl p-6 space-y-4">
        <p className="text-[#6B6B6B] text-sm leading-relaxed text-center md:text-left">
          {shop.introduction || "꽃집 소개 내용이 아직 등록되지 않았습니다."}
        </p>

        {shop.images?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {shop.images.map((img, i) => (
              <div key={i} className="w-full">
                <Image
                  src={img}
                  alt={`shop-img-${i}`}
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-36"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
