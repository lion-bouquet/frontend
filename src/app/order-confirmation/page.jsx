import OrderThankYouHeader from "@/components/order-confirmation/order-thank-you-header";
import OrderSummary from "@/components/order-confirmation/order-summary";
import OrderItemList from "@/components/order-confirmation/order-item-list";
import OrderPickTime from "@/components/order-confirmation/order-pick-time";

export default function OrderConfirmationPage() {
  return (
    <div className="px-6 py-10 min-h-screen font-sans">
      <div className="mb-12">
        <OrderThankYouHeader />
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        구매정보
        </h2>
        <OrderSummary />
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        픽업 시간 안내
        </h2>
        <OrderPickTime />
      </div>
      <div>
        <OrderItemList />
      </div>
    </div>
  );
}
