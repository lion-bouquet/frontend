export default function ColorFilter() {
  const categories = ["All Combinations", "Warm Tones", "Cool Tones", "Pastels", "Vibrant"];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-6">Explore by Mood & Style</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`px-6 py-2.5 rounded-lg border text-sm transition ${
              idx === 0
                ? "text-white"
                : "text-gray-700 bg-white hover:bg-gray-100"
            }`}
            style={{
              backgroundColor: idx === 0 ? "#ff5833" : undefined,
              borderColor: "#EBEBEAFF"
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
