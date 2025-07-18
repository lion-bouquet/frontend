import Image from "next/image";
import OrderSummary from "@/components/order-page/order-summary";
import ShopFlowerList from "@/components/shop-flower-list";

export default async function ShopDetailsPage({ params }) {
  const { slug } = await params;

  let shop = null;
  let flowers = [];

  try {
    // 1. 가게 정보 & 꽃 리스트 동시 요청
    const [shopRes, flowerRes] = await Promise.all([
      fetch(`https://likelion.patulus.com/shops/${slug}`, {
        cache: "no-store",
      }),
      fetch(`https://likelion.patulus.com/shops/${slug}/stocks`, {
        cache: "no-store",
      }),
    ]);

    // 2. 가게 정보 처리
    if (!shopRes.ok)
      throw new Error("❌ 가게 정보를 불러오는 데 실패했습니다.");
    const shopJson = await shopRes.json();
    shop = shopJson;
    if (!shop || !shop.id)
      throw new Error("❌ 유효하지 않은 가게 데이터입니다.");

    // 3. 꽃 리스트 처리
    if (flowerRes.ok) {
      const flowerJson = await flowerRes.json();
      flowers = flowerJson?.data || [];
    } else {
      console.warn("⚠️ 꽃 리스트 불러오기 실패");
    }
  } catch (error) {
    console.error("에러:", error);
    return <div className="p-6 text-red-600">존재하지 않는 가게입니다.</div>;
  }

  if (!shop) {
    return <div className="p-6 text-red-600">존재하지 않는 가게입니다.</div>;
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
        <ShopFlowerList shopFlowerList={flowers} />
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
