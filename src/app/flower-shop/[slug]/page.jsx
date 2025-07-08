import { recommendedShops } from "@/app/db/flower-shop-data";
import Image from "next/image";

export default async function ShopDetailsPage({ params }) {
  const { slug } = await params;
  const shop = recommendedShops.find((shop) => shop.slug === slug);

  if (!shop) {
    return <div className="p-6 text-red-600">존재하지 않는 가게입니다.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[-25px]">
      {/* 왼쪽 본문 (2열) */}
      <div className="lg:col-span-2 space-y-6">
        {/* 이미지 + 가게 설명 */}
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

        {/* 가게 정보 (About Our Shop) */}
        <div className="bg-white border border-[#EBEBEAFF] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">About Our Shop</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {shop.description || "꽃집 소개 내용이 아직 등록되지 않았습니다."}
          </p>

          {/* 썸네일 4개 더미 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <Image
              src="/image/dummy-img.png"
              alt="shop"
              width={300}
              height={200}
              className="rounded-lg object-cover h-32 w-full"
            />
            <Image
              src="/image/shop2.jpg"
              alt="shop"
              width={300}
              height={200}
              className="rounded-lg object-cover h-32 w-full"
            />
            <Image
              src="/image/shop3.jpg"
              alt="shop"
              width={300}
              height={200}
              className="rounded-lg object-cover h-32 w-full"
            />
            <Image
              src="/image/shop4.jpg"
              alt="shop"
              width={300}
              height={200}
              className="rounded-lg object-cover h-32 w-full"
            />
          </div>
        </div>
      </div>

      {/* 오른쪽 사이드바 */}
      <div className="space-y-6">
        {/* Order Summary */}
        <div className="bg-white border border-[#EBEBEAFF] rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Items (5)</span>
              <span>$195.00</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$5.00</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>$200.00</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-gradient-to-r from-violet-500 to-pink-400 text-white py-2 rounded-full">
            Proceed to Checkout
          </button>
        </div>

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
  );
}
