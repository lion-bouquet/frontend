export default function ColorHowPick() {
  const insights = [
    {
      title: "Monochromatic Harmony",
      description:
        "Explore the beauty of using various shades and tints of a single color for depth and sophistication.",
      icon: "🌀",
    },
    {
      title: "Complementary Contrasts",
      description:
        "Learn how opposing colors on the color wheel can create striking and dynamic visual impact.",
      icon: "🎨",
    },
    {
      title: "Analogous Flow",
      description:
        "Discover the calming effect of colors that are next to each other on the color wheel, creating smooth transitions.",
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
