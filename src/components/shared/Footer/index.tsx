import { IoGiftOutline, IoWalletOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
const servicesData = [
  {
    id: 1,
    icon: LiaShippingFastSolid,
    title: "Free Shipping",
    description: "For all Orders Over $100",
  },
  {
    id: 2,
    icon: PiKeyReturn,
    title: "30 Days Returns",
    description: "For an Exchange Product",
  },
  {
    id: 3,
    icon: IoWalletOutline,
    title: "Secured Payment",
    description: "Payment Cards Accepted",
  },
  {
    id: 4,
    icon: IoGiftOutline,
    title: "Special Gifts",
    description: "Our First Product Order",
  },
  {
    id: 5,
    icon: RiCustomerService2Line,
    title: "Support 24/7",
    description: "Contact us Anytime",
  },
];

export default function Footer() {
  return (
    <section className="bg-white mt-20">
      <div className="container">
        {/* services block */}
        <div className="pb-24 pt-12 lg:py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-between">
          {/* Service */}
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center gap-3 text-center group"
            >
              <service.icon className="text-[45px] group-hover:text-primary group-hover:-translate-y-1.5 transition-all duration-300" />

              <div className="space-y-1">
                <h3 className="font-semibold text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
