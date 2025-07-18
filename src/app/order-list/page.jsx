import OrderList from "@/components/order-list/order-list";

export default function OrderListPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">주문 리스트</h1>
      <div className="text-md text-[#5b5967] flex gap-4 mb-12">
        <span>
          주문 | <span className="text-[#403e3e] font-medium">12건</span>
        </span>
        <span>
          총 결제 금액 | <span className="text-[#403e3e] font-medium">12건</span>
        </span>
      </div>

      <OrderList />
    </div>
  );
}
