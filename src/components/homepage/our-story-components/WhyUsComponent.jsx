import React from "react";

const WhyUsComponent = () => {
  return (
    <div className="text-left flex flex-col gap-5 sm:gap-10 mt-40 px-2 sm:px-0">
      <div className="px-5">
        <p className="text-[#5C2F88] sm:text-3xl tracking-[20px] font-inter font-medium">
          Why Us
        </p>
        <p className="text-[#444444] text-4xl sm:text-[82px] tracking-[15px] sm:tracking-[20px] font-bold">
          Why Us
        </p>
      </div>
      <p className="text-[#6C6C6C] text-[16px] w-100 px-5">
        With decades of trusted expertise, we have consistently delivered
        outstanding results. Whether in real estate or IT solutions, our
        commitment to innovation, quality, and client success sets us apart.
      </p>
      <div className="flex items-center justify-center">
        <img
          src="/developer.jpg"
          alt="Modern glass buildings"
          className="size-[90%] sm:w-[470px] sm:h-[580px] object-cover mt-10 rounded-xl"
        />
      </div>
    </div>
  );
};

export default WhyUsComponent;
