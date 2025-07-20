import FlowerCard from "./flower-card";

export default async function TopPicksFlowerList() {
  let flowers = [];

  try {
    const res = await fetch("https://likelion.patulus.com/flowers/recommended", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("❌ API 요청 실패:", res.status);
      return (
        <div className="col-span-3 text-center text-red-400 py-6">
          추천 꽃 정보를 불러오는 데 실패했습니다.
        </div>
      );
    }

    const json = await res.json();

    // 정상 응답 구조 확인
    if (json.success === "true" && Array.isArray(json.data)) {
      flowers = json.data;
    } else if (Array.isArray(json)) {
      flowers = json;
    } else {
      console.warn("❗ 예기치 못한 응답 구조:", json);
    }
  } catch (err) {
    console.error("❌ 서버 응답 파싱 실패:", err);
    return (
      <div className="col-span-3 text-center text-red-400 py-6">
        서버 오류로 추천 꽃 정보를 가져올 수 없습니다.
      </div>
    );
  }

  if (!flowers.length) {
    return (
      <div className="col-span-3 text-center text-gray-400 py-6">
        추천 꽃이 없습니다.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {flowers.map((item) => (
        <FlowerCard
          key={item.id}
          image={item.imageUrl}
          name={item.name}
          description={item.floriography}
          slug={item.id?.toString()}
        />
      ))}
    </div>
  );
}
