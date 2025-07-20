"use client";

import { useEffect, useState } from "react";
import OrderCard from "./order-card";
import LoadingSpinner from "../loading-spinner";

export default function OrderList({ onFetched }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) return;

        const res = await fetch("https://likelion.patulus.com/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          const formatted = data.data.map((order) => ({
            orderCode: order.orderCode,
            orderTime: new Date(order.orderDate).toLocaleString(),
            pickupTime: new Date(order.pickUpAvailableTime).toLocaleString(),
            shopName: order.shop.shopName,
            image: order.shop.shopImage ?? "/image/dummy-flower.jpg",
            items: order.stocks.map((s) => ({
              name: s.flower.name,
              count: s.quantity,
            })),
            total: order.totalPrice,
          }));

          setOrders(formatted);
          onFetched?.(formatted); // 상위로 전달
        }
      } catch (err) {
        console.error("주문 목록 에러:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [onFetched]);

  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="mt-20">
      {orders.map((order, idx) => (
        <OrderCard key={idx} order={order} />
      ))}
    </div>
  );
}
