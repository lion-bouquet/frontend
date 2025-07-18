"use client";

import { useRouter } from "next/navigation";

export default function OrderItemCard({ item }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/flower-detail/${item.id}`);
  };

  return (
    <div
      className="rounded-md p-4 flex flex-col justify-between"
      style={{ border: "1px solid #EBEBEA" }}
    >
      <img
        src={item.src}
        alt={item.name}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <p className="font-semibold text-gray-800 text-sm mb-2">{item.name}</p>
      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
      <p className="text-xs text-gray-400 mt-1 flex-1">{item.description}</p>
      <button
        onClick={handleClick}
        className="mt-3 px-3 py-1 text-sm font-semibold rounded-full"
        style={{
          background: "linear-gradient(to right, #E8D6F4, #D3DAF6)",
          color: "#555",
        }}
      >
        상품 정보
      </button>
    </div>
  );
}
