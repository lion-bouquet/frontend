"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";

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
    <div className="flex items-center gap-6 border border-[#ebebea] p-6 py-5 rounded-lg">
      <Image
        src={item.image}
        alt={item.name}
        width={96}
        height={96}
        className="w-32 h-32 object-cover rounded-lg border border-[#ebebea]"
      />

      <div className="flex flex-col">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-600">
          Pirce: ${(item.count * dummyPrice).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-2 ml-auto border border-[#ebebea] rounded-xl px-4 py-2">
        <button className="mx-2 cursor-pointer" onClick={() => updateCount(-1)}>
          −
        </button>
        <span>{item.count}</span>
        <button className="mx-2 cursor-pointer" onClick={() => updateCount(1)}>
          +
        </button>
      </div>

      <button
        className="text-[#8b8c8a] text-sm ml-4 cursor-pointer"
        onClick={handleDelete}
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
