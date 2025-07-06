import { Truck, Headphones, CreditCard } from "lucide-react";

export default function WhySection() {
  const features = [
    {
      icon: <Truck className="h-10 w-10 mx-auto mb-4 text-gray-300" />,
      title: "Local Delivery",
      description:
        "Fresh flowers delivered directly from your nearest shop, ensuring peak freshness.",
    },
    {
      icon: <Headphones className="h-10 w-10 mx-auto mb-4 text-gray-300" />,
      title: "24/7 Support",
      description:
        "Our dedicated team is always here to assist you with any floral needs.",
    },
    {
      icon: <CreditCard className="h-10 w-10 mx-auto mb-4 text-gray-300" />,
      title: "Secure Payments",
      description:
        "Shop with confidence using our encrypted and secure payment gateways.",
    },
  ];

  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-none px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Bloom Buddy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {features.map((item) => (
            <div
              key={item.title}
              className="border rounded-xl p-6 text-center hover:shadow transition"
            >
              {item.icon}
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
