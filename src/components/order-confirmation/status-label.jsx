export default function StatusLabel({ text }) {
  return (
    <div className="relative inline-block text-center">
      {/* 삼각형 */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full"
        style={{
          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderBottom: "12px solid #7A75E3",
        }}
      />

      {/* 박스 */}
      <div className="bg-[#7A75E3] text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md">
        {text}
      </div>
    </div>
  );
}
