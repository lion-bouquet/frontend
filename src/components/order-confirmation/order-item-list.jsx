"use client";

import { useRouter } from "next/navigation";

export default function OrderItemList() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/flower-detail/${id}`); 
  };

  const items = [
    {
      id: "blushing-pink-peony",
      src: "/image/sunflower.jpg",
      name: "Enchanting Peony Bouquet",
      quantity: 1,
      description: "Symbolizes prosperity and good fortune",
    },
    {
      id: "classic-red-rose",
      src: "/image/rose.jpg",
      name: "Timeless Red Roses",
      quantity: 1,
      description: "Classic symbol of love and beauty",
    },
    {
      id: "elegant-white-lily",
      src: "/image/lily.jpg",
      name: "Serene White Lilies",
      quantity: 2,
      description: "Represents purity and renewal",
    },
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">
        많은 사람들이 선택하는 꽃
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-md p-4 flex flex-col justify-between"
            style={{ border: "1px solid #EBEBEA" }}
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            <p className="text-xs text-gray-400 mt-1 flex-1">
              {item.description}
            </p>
            <button
              onClick={() => handleClick(item.id)}
              className="mt-3 px-3 py-1 text-sm font-semibold rounded-full"
              style={{
                background: "linear-gradient(to right, #E8D6F4, #D3DAF6)",
                color: "#555",
              }}
            >
              상품 정보
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
