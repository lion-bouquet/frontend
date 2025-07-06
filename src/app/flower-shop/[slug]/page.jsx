import { recommendedShops } from "@/app/db/flower-shop-data";

export default async function ShopDetailsPage({ params }) {
  const { slug } = await params;
  const shop = recommendedShops.find((shop) => shop.slug === slug);

  if (!shop) {
    return <div className="p-6 text-red-600">존재하지 않는 가게입니다.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-2">{shop.name}</h1>
      <img
        src={shop.image}
        alt={shop.name}
        className="rounded-lg w-full h-60 object-cover mb-4"
      />
      <div className="text-gray-700 mb-1">평점: {shop.rating}점</div>
      <div className="text-gray-700 mb-4">리뷰 수: {shop.reviewCount}개</div>
    </div>
  );
}
