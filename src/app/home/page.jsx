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
        <div className="absolute inset-0 z-30 flex items-center px-8">
          <div className="max-w-screen-md px-[50px]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience Floral Grandeur
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover the freshest blooms and unique arrangements from local
              artisans, delivered to your door.
            </p>
            <Link href="/flower-shop">
              <button
                id="liquid-glass-button"
                className="bg-gradient-to-r from-violet-500 to-pink-400 text-white px-6 py-2 rounded-full shadow cursor-pointer"
              >
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <WhySection />
      <label className="block  text-black text-3xl font-bold mt-8 mb-4">
        Today's Recommended Flower Shops
      </label>
      <FlowerShopList layout="scroll" />

      <label className="block  text-black text-3xl font-bold mt-8 mb-4">
        Top Picks Just For You
      </label>
      <TopPicksFlowerList />

      {/* <label className="block  text-black text-center text-3xl font-bold mt-[60px] mb-4">
        Hear Form Our Happy Customers
      </label> */}
    </>
  );
}
