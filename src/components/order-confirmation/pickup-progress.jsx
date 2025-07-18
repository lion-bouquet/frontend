import StatusLabel from "./status-label";

export default function PickupProgress() {
  return (
    <div className="relative w-full">
      <div className="h-2 rounded-full bg-[#D3D6F3] relative">
        <div
          className="absolute left-0 top-0 h-2 rounded-full bg-[#7A75E3]"
          style={{ width: "50%" }}
        />
      </div>

      <div className="top-full left-0 w-full mt-4 flex justify-between">
        <StatusLabel text="주문 확인" />
        <StatusLabel text="제작 중" />
        <StatusLabel text="픽업 가능" />
      </div>
    </div>
  );
}
