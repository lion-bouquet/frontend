// app/page.jsx 또는 HomePage 컴포넌트

import FlowerList from "@/components/top-picks-flower-list";
import FlowerShopList from "@/components/flower-shop-list";
import HomeImg from "@/components/home-img";
import WhySection from "@/components/why-section";
import TopPicksFlowerList from "@/components/top-picks-flower-list";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <HomeImg />

        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-white/90 via-white/60 to-transparent pointer-events-none z-20" />

        <div className="absolute inset-0 z-30 flex items-end justify-between px-8 pb-10">
          <div className="max-w-screen-md px-[50px] pb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Experience Floral Grandeur
            </h1>
            <p className="text-lg text-gray-600">
              Discover the freshest blooms and unique arrangements from local
              artisans, delivered to your door.
            </p>
          </div>

          <div className="pr-[5px]">
            <Link href="/flower-shop">
              <button
                className="text-sm font-semibold rounded-full px-6 py-2 text-[#333] shadow"
                style={{
                  minWidth: "200px",
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

      <WhySection />

      <label className="block text-black text-3xl font-bold mt-8 mb-4">
        오늘의 추천 꽃집
      </label>
      <FlowerShopList layout="scroll" />

      <label className="block text-black text-3xl font-bold mt-8 mb-4">
        당신만을 위한 꽃 추천
      </label>
      <TopPicksFlowerList />
    </>
  );
}
