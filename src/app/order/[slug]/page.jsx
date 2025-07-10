"use client";
import { useAtomValue } from "jotai";
import { cartItemsAtom } from "@/app/atoms/cartAtom";

export default function OrderPage() {
  const cartItems = useAtomValue(cartItemsAtom);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Details</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="mb-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover"
          />
          <h4>{item.name}</h4>
          <p>Quantity: {item.count}</p>
        </div>
      ))}
    </div>
  );
}
