// pages/dashboard.tsx

import { ArrowUpRight } from "lucide-react";

export default function StatsCard() {
  const cards = [
    {
      title: "Orders Received",
      subtitle: "Last 30 Days",
      value: 23,
      bg: "bg-orange-100",
    },
    {
      title: "Total Products",
      subtitle: "In Portfolio",
      value: 101,
      bg: "bg-blue-100",
    },
    {
      title: "Distributor Approved",
      subtitle: "by You",
      value: 39,
      bg: "bg-gray-100",
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center bg-white p-1 mr-10">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 max-2xl:gap-16 md:gap-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} relative rounded-xl p-3 md:p-6 xl:p-6 w-28 md:w-48 xl:w-48 2xl:w-64 max-2xl:h-36 shadow-md`} >
            <div className="text-xl md:text-sm xl:text-sm 2xl:text-xl font-medium text-gray-700">{card.title}</div>
            <div className="text-sm text-gray-500 mb-4">{card.subtitle}</div>
            <div className="text-3xl font-semibold">{card.value}</div>
            <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full">
              <div className=" bottom-3 right-3 bg-gray-800 text-white p-2 rounded-full">
                <ArrowUpRight size={40} className="w-2 h-2 md:w-6 md:h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}