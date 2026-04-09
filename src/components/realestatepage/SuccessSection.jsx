import React from "react";

const stats = [
  { value: "Many", label: "Happy Customers" },
  { value: "Numerous", label: "Completed Projects" },
  { value: "10K+", label: "Transactions" },
  { value: "6000+", label: "Customers" },
];

const SuccessSection = () => {
  return (
    <div className="sm:h-[500px] bg-[#204396] w-full flex flex-col sm:flex-row items-center justify-center text-white gap-20 py-10 sm:py-0">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-5">
          <p className="text-5xl sm:text-7xl font-bold">{stat.value}</p>
          <p className="text-2xl">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SuccessSection;
