import { combos } from "@/app/db/color-combinations-data";

const picked = combos.find(c => c.id === "pick");

export default function PickedCombinationCard() {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow p-6">
      <img
        src={picked.image}
        alt={picked.title}
        className="w-full md:w-1/2 h-auto object-cover rounded-lg"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{picked.title}</h2>
          <p className="text-sm text-gray-600 mb-3">{picked.description}</p>
          <div className="flex gap-2 mb-4">
            {picked.colors.map((color, idx) => (
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
        <button 
            className="text-white text-xs px-6 py-2.5 rounded-lg w-fit"
            style={{backgroundColor: "#ff5833"}}
            >
             Explore Details
        </button>
      </div>
    </div>
  );
}
