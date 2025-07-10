"use client";

import Image from "next/image";

export default function OrderItemCard({
  item,
  index,
  localItems,
  setLocalItems,
  setLocalTotal,
}) {
  const dummyPrice = 77;

  const updateCount = (delta) => {
    const updated = [...localItems];
    const newCount = updated[index].count + delta;
    if (newCount < 1) return;

    updated[index].count = newCount;
    setLocalItems(updated);
    updateTotal(updated);
  };

  const updateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.count * dummyPrice, 0);
    setLocalTotal(total);
  };

  const handleDelete = () => {
    const updated = localItems.filter((_, i) => i !== index);
    setLocalItems(updated);
    updateTotal(updated);
  };

  return (
    <div className="flex gap-4 items-center border-b pb-4">
      <Image
        src={item.image}
        alt={item.name}
        width={96}
        height={96}
        className="rounded object-cover"
      />
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-600">수량: {item.count}</p>
        <p className="text-sm text-gray-600">
          총 가격: ${(item.count * dummyPrice).toFixed(2)}
        </p>

        <div className="flex gap-2 mt-2">
          <button
            className="border px-2 rounded"
            onClick={() => updateCount(-1)}
          >
            −
          </button>
          <span>{item.count}</span>
          <button
            className="border px-2 rounded"
            onClick={() => updateCount(1)}
          >
            +
          </button>
          <button className="text-red-500 ml-4 text-sm" onClick={handleDelete}>
            🗑 삭제
          </button>
        </div>
      </div>
    </div>
  );
}
