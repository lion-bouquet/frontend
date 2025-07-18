import Image from "next/image";
import OrderSummary from "@/components/order-page/order-summary";

export default async function ShopDetailsPage({ params }) {
  const { slug } = await params; // 최신 Next.js에서도 문제 없음
  console.log("slug:", slug);

  let shop = null;

  try {
    const res = await fetch(`https://likelion.patulus.com/shops/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Shop not found");
    }

    shop = await res.json(); // ✅ 여기선 선언 없이 대입만!
    console.log("shop:", shop);

    if (!shop || !shop.id) {
      return <div className="p-6 text-red-600">존재하지 않는 가게입니다1.</div>;
    }
  } catch (err) {
    console.error("❌ 꽃집 정보를 불러오지 못했습니다:", err);
    return <div className="p-6 text-red-600">존재하지 않는 가게입니다2.</div>;
  }

  if (!shop) {
    return <div className="p-6 text-red-600">존재하지 않는 가게입니다3.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* 왼쪽: 꽃집 소개 + 꽃 리스트 */}
      <div className="lg:col-span-3 space-y-6">
        {/* 대표 이미지 */}
        <div className="border border-[#EBEBEAFF] w-full rounded-xl overflow-hidden">
          <Image
            // src={shop.shopImage || "/image/dummy-img.png"}
            src="/image/dummy-img.png"
            alt={shop.shopName}
            width={800}
            height={400}
            className="w-full h-64 object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 75vw"
          />
        </div>

        {/* About Our Shop */}
        <div className="bg-white border border-[#EBEBEAFF] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">About Our Shop</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {shop.introduction || "꽃집 소개 내용이 아직 등록되지 않았습니다."}
          </p>

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
        </div>

        {/* 향후: 꽃 리스트 연결 자리 */}
        {/* <ShopFlowerList shopFlowerList={shop.flowers} /> */}
      </div>

      {/* 오른쪽: 주문 요약 + 연락처 */}
      <div className="space-y-6 lg:col-span-1">
        <OrderSummary mode="compact" />

        <div className="bg-white border border-[#EBEBEAFF] rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Contact & Hours</h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p>📞 {shop.phoneNumber || "전화번호 정보 없음"}</p>
            <p>📧 info@{slug}.com</p>

            {Array.isArray(shop.businessHours) && (
              <div className="mt-3">
                <p className="font-medium mb-1">Opening Hours:</p>
                {shop.businessHours.map((hour, i) => (
                  <p key={i}>
                    {hour.dayOfWeek}: {hour.openTime} – {hour.closeTime}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
