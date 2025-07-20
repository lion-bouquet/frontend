import FlowerDetailPick from "@/components/flower-detail-pick";

export default async function FlowerDetailPage(props) {
  // Next.js 14 경고 대응: await props, await params
  const awaitedProps = await props;
  const awaitedParams = await awaitedProps.params;
  const { id } = awaitedParams;

  // id 콘솔로 꼭 확인!
  console.log(" 상세 페이지 id:", id);

  let flower = null;
  let json = null;

  try {
    const res = await fetch(`https://likelion.patulus.com/flowers/${id}`, {
      cache: "no-store",
    });

    try {
      json = await res.json();
    } catch (err) {
      console.log("상세 API json 파싱 에러:", err);
    }

    // API 응답 콘솔 출력
    console.log(" 상세 API 응답:", json);

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

  // 콘솔에 최종 flower 결과도 출력
  console.log(" 최종 flower:", flower);

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
