import FlowerShopList from "@/components/flower-shop-list";
import WhySection from "@/components/why-section";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
        <Image
          src="/image/dummy-img.png"
          alt="Dummy Image"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-white/90 via-white/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-10 flex items-center px-8">
          <div className="max-w-screen-md px-[50px]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience Floral Grandeur
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover the freshest blooms and unique arrangements from local
              artisans, delivered to your door.
            </p>
            <button className="bg-gradient-to-r from-violet-500 to-pink-400 text-white px-6 py-2 rounded-full shadow">
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
