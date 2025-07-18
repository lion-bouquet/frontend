import OrderCard from "./order-card";

const dummyOrders = [
  {
    orderTime: "2025-07-18 (금) 15:08:54",
    pickupTime: "2025-07-18 (금) 16:00:03",
    shopName: "Petal & Path",
    image: "/image/dummy-flower.jpg",
    items: [
      { name: "플라워 레드 로즈", count: 3 },
      { name: "튤립 연보라 믹스", count: 1 },
      { name: "파스텔 화사한시즌", count: 4 },
      { name: "고객의 프라이드", count: 1 },
    ],
    total: 25000,
  },
  {
    orderTime: "2025-06-21 (토) 10:42:18",
    pickupTime: "2025-06-21 (토) 13:00:27",
    shopName: "피어나자",
    image: "/image/dummy-flower.jpg",
    items: [
      { name: "스프링 핑크 데이지", count: 2 },
      { name: "선샤인 옐로우 튤립부케", count: 3 },
      { name: "보라빛 몽환다발", count: 2 },
      { name: "고객의 프라이드", count: 1 },
    ],
    total: 21500,
  },
];

export default function OrderList() {
  return (
    <div className="mt-20">
      {dummyOrders.map((order, idx) => (
        <OrderCard key={idx} order={order} />
      ))}
    </div>
  );
}
