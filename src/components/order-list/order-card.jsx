import Link from "next/link";

export default function OrderCard({ order }) {
  return (
    <div className="p-4 rounded-xl border border-[#EBEBEAFF] bg-white mb-20 relative">
      {/* 주문 시간 */}
      <div className="text-md font-bold text-[#5b5967] absolute -top-13 left-2 inline-block border-b border-[#CFCFCF] pt-2 pb-1">
        주문 시간 | {order.orderTime}
      </div>


      <div className="flex gap-4">
        {/* 이미지 */}
        <img
          src={order.image}
          alt={order.shopName}
          className="w-90 h-40 object-cover rounded-md"
        />

        {/* 주문 정보 */}
        <div className="flex-1 flex flex-col justify-between max-w-[400px]">
          <div>
            <h2 className="text-xl font-extrabold mb-4">{order.shopName}</h2>

            <ul className="text-sm text-[#5b5967] mb-3 space-y-1">
              {order.items.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.count}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#d6d6d6] my-2" />

            <div className="flex justify-between items-center text-base font-semibold">
              <span className="text-[#5b5967]">총 결제 금액</span>
              <span className="text-[#7A75E3] text-lg font-bold">
                {order.total.toLocaleString()}원
              </span>
            </div>
          </div>
        </div>

        {/* 픽업 시간 + 버튼 */}
        <div className="flex flex-col items-end justify-between text-sm text-[#5b5967] ml-auto min-w-[150px]">
          <div>
            <span className="font-semibold">픽업 시간</span> {order.pickupTime}
          </div>

          <Link href="/order-confirmation">
            <button
              className="mt-2 px-4 py-2 text-sm font-bold rounded-full text-[#5b5967] font-medium cursor-pointer transition duration-200 hover:opacity-90 active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, #BEDEF2 0%, #D1DCF6 30%, #D8CDEE 70%, #F5D5E2 100%)",
              }}
            >
              주문 상세 보기
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
