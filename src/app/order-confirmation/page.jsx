import OrderThankYouHeader from "@/components/order-confirmation/order-thank-you-header";
import OrderSummary from "@/components/order-confirmation/order-summary";
import OrderItemList from "@/components/order-confirmation/order-item-list";

export default function OrderConfirmationPage() {
  return (
    <div className="px-6 py-10 bg-[#f9f9fc] min-h-screen font-sans">
      <OrderThankYouHeader />
      <OrderSummary />
      <OrderItemList />
    </div>
  );
}
