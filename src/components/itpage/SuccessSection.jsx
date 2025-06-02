import React from "react";

const stats = [
  { value: "9", label: "Happy Clients" },
  { value: "14", label: "Completed Projects" },
  { value: "10K+", label: "Transactions" },
  { value: "6000+", label: "Customers" },
];

const SuccessSection = () => {
  return (
    <div className="h-[500px] bg-[#204396] w-full flex items-center justify-center text-white gap-20    ">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-5">
          <p className="text-8xl font-bold">{stat.value}</p>
          <p className="text-2xl">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SuccessSection;
