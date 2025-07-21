export default function ColorHowPick() {
  const insights = [
    {
      title: "단색  조화",
      description:
        "하나의 색상을 다양한 명도와 채도로 표현하여 깊이감 있고 세련된 아름다움을 탐구해보세요.",
      icon: "🎨",
    },
    {
      title: "보색 대비",
      description:
        "색상환에서 서로 반대편에 위치한 색들을 사용해 강렬하고 역동적인 시각적 효과를 연출하는 방법을 알아보세요.",
      icon: "🌀",
    },
    {
      title: "유사색 흐름",
      description:
        "색상환에서 이웃한 색들로 부드럽고 자연스러운 전환 효과를 만들어내는 차분한 조화의 매력을 발견해보세요.",
      icon: "🧩",
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-center mb-8">Color Theory Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-6 text-center shadow-sm bg-white"
            style={{ border: "1px solid #EBEBEAFF" }}
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
