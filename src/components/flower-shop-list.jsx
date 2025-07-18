import FlowerShopCard from "./flower-shop-card";

export default async function FlowerShopList({ layout = "grid" }) {
  const containerClass =
    layout === "scroll"
      ? "flex overflow-x-auto gap-5 px-2"
      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full";

  const itemClass = layout === "scroll" ? "flex-shrink-0 w-[300px]" : "";

  let shops = [];

  try {
    const res = await fetch("https://likelion.patulus.com/shops", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("❌ API 요청 실패:", res.status);
      return <div>가게 정보를 불러오는 데 실패했습니다.</div>;
    }

    const data = await res.json();

    if (Array.isArray(data)) {
      shops = data;
    } else {
      console.warn("❗ 예기치 못한 응답 구조:", data);
    }
  } catch (err) {
    console.error("❌ 서버 응답 파싱 실패:", err);
    return <div>서버 오류로 가게 정보를 가져올 수 없습니다.</div>;
  }

  return (
    <div className={containerClass}>
      {shops.map((item) => (
        <div key={item.id} className={itemClass}>
          <FlowerShopCard
            name={item.shopName}
            // image={item.shopImage ?? "/image/dummy-img.png"}
            image={"/image/dummy-img.png"}
            rating={item.rating}
            slug={item.id.toString()}
            address={`${item.province} ${item.city}`}
            isOpen={item.openStatus}
          />
        </div>
      ))}
    </div>
  );
}
