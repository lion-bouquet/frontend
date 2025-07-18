import { cookies } from "next/headers";
import FlowerShopCard from "./flower-shop-card";

export default async function FlowerShopList() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch("https://likelion.patulus.com/api/v1/shops", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const json = await res.json();
  const shops = Array.isArray(json) ? json : [];

  return (
    <div className="flex flex-wrap gap-5">
      {shops.map((item) => (
        <FlowerShopCard
          key={item.id}
          name={item.shopName}
          image={item.image ?? "/image/dummy-img.png"}
          rating={item.rating}
          reviewCount={item.reviewCount ?? 0}
          slug={item.id.toString()}
        />
      ))}
    </div>
  );
}
