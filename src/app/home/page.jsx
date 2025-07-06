import FlowerShopList from "@/components/flower-shop-list";
import HomeImg from "@/components/home-img";
import WhySection from "@/components/why-section";

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
            <button
              id="liquid-glass-button"
              className="bg-gradient-to-r from-violet-500 to-pink-400 text-white px-6 py-2 rounded-full shadow"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <WhySection />
      <FlowerShopList layout="scroll" />
    </>
  );
}
