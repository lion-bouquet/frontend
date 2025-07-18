import Image from "next/image";

export default function ShopIntroduction({ shop }) {
  return (
    <section>
      <h3 className="text-xl font-extrabold text-[#403e3e] mb-4">꽃집 소개</h3>
      <div className="bg-white border border-[#EBEBEAFF] rounded-xl p-6 space-y-4">
        <p className="text-[#6B6B6B] text-sm leading-relaxed text-center md:text-left">
          {shop.introduction || "꽃집 소개 내용이 아직 등록되지 않았습니다."}
        </p>

        {/* 
        {shop.images?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {shop.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`shop-img-${i}`}
                width={300}
                height={200}
                className="rounded-lg object-cover h-32 w-full"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            ))}
          </div>
        )} 
        */}

        {/* 더미 이미지 3개 */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center mt-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl flex-shrink-0 w-full md:w-[200px] h-[130px]"
            >
              <Image
                src={`/image/dummy-img${i}.png`}
                alt={`dummy-shop-img-${i}`}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
