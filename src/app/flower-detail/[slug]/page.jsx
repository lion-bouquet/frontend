import FlowerDetailPick from "@/components/flower-detail-pick";

export default async function FlowerDetailPage({ params }) {
  const { id } = params;
  let flower = null;

  try {
    const res = await fetch(`https://likelion.patulus.com/flowers/${id}`, {
      cache: "no-store",
    });

    // 여기서 status와 json을 콘솔에 출력!
    console.log('상세 API status:', res.status);

    let json = null;
    try {
      json = await res.json();
    } catch (err) {
      console.log("상세 API json 파싱 에러:", err);
    }
    console.log('상세 API 응답:', json);

    // 실제 응답이 어떤 구조인지 보고 판단
    if (res.ok && json && json.success === "true" && json.data) {
      flower = json.data;
    } else if (res.ok && json && json.name) {
      flower = json;
    } else {
      flower = null;
    }
  } catch (err) {
    console.log("상세 API 네트워크/코드 에러:", err);
    flower = null;
  }

  if (!flower) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Flower not found 😢
      </div>
    );
  }

  return (
    <div className="p-8">
      <FlowerDetailPick flower={flower} />
    </div>
  );
}
