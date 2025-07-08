import FlowerDetailPicture from "@/components/flower-detail-picture";
import FlowerDetailAbout from "@/components/flower-detail-about";
import FlowerDetailSpecifics from "@/components/flower-detail-specifics";
import FlowerDetailCareGuide from "@/components/flower-detail-careguide";

export default function FlowerDetailPick({ flower }) {
  return (
    <div>
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

        {/* 오른쪽: 상세 정보 + 관리 가이드 */}
        <div>
          <FlowerDetailSpecifics specifics={flower.specifics} />
          {flower.careGuide && (
            <FlowerDetailCareGuide careGuide={flower.careGuide} />
          )}
        </div>
      </div>
    </div>
  );
}
