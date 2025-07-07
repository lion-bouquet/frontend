export default function CombinationsCard({ combo }) {
  return (
    <div className="p-4 rounded-xl border border-[#EBEBEAFF] bg-white">
      <img
        src={combo.image}
        alt={combo.title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold mb-1">{combo.title}</h2>
      <p className="text-sm text-gray-500 mb-3">{combo.description}</p>
      <div className="flex gap-2">
        {combo.colors.map((color, idx) => (
          <span
            key={idx}
            className="w-6 h-6 rounded-full border"
            style={{ 
                backgroundColor: color, 
                borderColor: "#EBEBEAFF"
            }}
          />
        ))}
      </div>
    </div>
  );
}
