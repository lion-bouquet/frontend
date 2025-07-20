"use client"; // 꼭 추가해야 함!

import { useRouter } from "next/navigation";
import FlowerDetailPicture from "@/components/flower-detail-picture";
import FlowerDetailAbout from "@/components/flower-detail-about";
import FlowerDetailSpecifics from "@/components/flower-detail-specifics";
import FlowerDetailCareGuide from "@/components/flower-detail-careguide";

export default function FlowerDetailPick({ flower }) {
  const router = useRouter();

  return (
    <div className="-mt-10">
      {/* 상단 이미지 영역 */}
      <FlowerDetailPicture
        image={flower.image}
        name={flower.name}
        scientificName={flower.scientificName}
      />

      {/* 하단 설명 및 상세 정보 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* 왼쪽: 설명 */}
        <FlowerDetailAbout
          name={flower.name}
          description={flower.description}
        />

        {/* 오른쪽: 상세 정보 + 관리 가이드 + 버튼 */}
        <div className="flex flex-col gap-4">
          <FlowerDetailSpecifics specifics={flower.specifics} />
          {flower.careGuide && (
            <FlowerDetailCareGuide careGuide={flower.careGuide} />
          )}

          {/* 버튼: 우측 하단 정렬 */}
          <div className="flex justify-end mt-2">
            <button
              onClick={() => router.back()}
              className="text-sm font-semibold text-[#333] rounded-full px-8 py-2 shadow cursor-pointer transition duration-200 hover:opacity-90 active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, #BEDEF2 0%, #D1DCF6 30%, #D8CDEE 70%, #F5D5E2 100%)",
              }}
            >
              계속하기
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
