import { ShoppingCart, Flower, Store } from "lucide-react";

export default function WhySection() {
  const features = [
    {
      icon: <ShoppingCart className="h-10 w-10 mx-auto mb-4 text-gray-300" />,
      title: "1. 온라인으로 간편하게 주문해요",
      description:
        "원하는 꽃을 고르고,\n내 마음에 쏙 드는 조합으로 주문하세요.",
    },
    {
      icon: <Flower className="h-10 w-10 mx-auto mb-4 text-gray-300" />,
      title: "2. 플로리스트의 정성이 담겨있어요",
      description:
        "동네 꽃집 사장님들이\n직접 고르고, 포장하고, 예쁘게 만들어드려요.\n예약 시간에 맞춰 준비 완료!",
    },
    {
      icon: <Store className="h-10 w-10 mx-auto mb-4 text-gray-300" />,
      title: "3. 매장에서 바로 픽업해요",
      description:
        "원하는 시간에 매장 방문해서\n기다림 없이 꽃다발을 받아가세요.\n선물도, 기념일도, 딱 맞춰서 준비 가능!",
    },
  ];

  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-none px-4">
        <h2 className="text-3xl font-bold text-left mb-12">
          '꽃길'은 이렇게 사용할 수 있어요!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {features.map((item) => (
            <div
              key={item.title}
              className="border border-[#EBEBEAFF] rounded-xl p-6 text-center hover:shadow transition"
            >
              {item.icon}
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
