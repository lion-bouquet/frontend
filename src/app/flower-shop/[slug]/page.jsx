import Image from "next/image";
import { recommendedShops } from "@/app/db/flower-shop-data";
import ShopFlowerList from "@/components/shop-flower-list";
import OrderSummary from "@/components/order-summary";
import BackReloadClient from "@/components/BackReloadClient";

export default async function ShopDetailsPage({ params }) {
  const { slug } = await params;
  const shop = recommendedShops.find((shop) => shop.slug === slug);

  if (!shop) {
    return <div className="p-6 text-red-600">존재하지 않는 가게입니다.</div>;
  }

  return (
    <>
      <BackReloadClient />
      <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 왼쪽: 꽃집 소개 + 꽃 리스트 (3칸 차지) */}
        <div className="lg:col-span-3 space-y-6">
          {/* 꽃집 대표 이미지 */}
          <div className="border border-[#EBEBEAFF] w-full rounded-xl overflow-hidden">
            <Image
              src={shop.image}
              alt={shop.name}
              width={800}
              height={400}
              className="w-full h-64 object-cover"
              priority
            />
          </div>

          {/* About Our Shop */}
          <div className="bg-white border border-[#EBEBEAFF] rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">About Our Shop</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {shop.description || "꽃집 소개 내용이 아직 등록되지 않았습니다."}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src="/image/dummy-img.png"
                  alt="shop"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover h-32 w-full"
                />
              ))}
            </div>
          </div>

          {/* 꽃 리스트 */}
          <ShopFlowerList shopFlowerList={shop.flowers} />
        </div>

        {/* 오른쪽: Order Summary + Contact */}
        <div className="space-y-6 lg:col-span-1">
          <OrderSummary />

          {/* Contact & Hours */}
          <div className="bg-white border border-[#EBEBEAFF] rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Contact & Hours</h3>
            <div className="text-sm text-gray-700 space-y-1">
              <p>📞 +1 (555) 123-4567</p>
              <p>📧 info@{shop.slug}.com</p>
              <div className="mt-3">
                <p className="font-medium mb-1">Opening Hours:</p>
                <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
                <p>Sat: 10:00 AM – 4:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
