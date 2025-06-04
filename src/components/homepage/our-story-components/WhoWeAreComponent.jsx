import React from "react";

const WhoWeAreComponent = () => {
  return (
    <div className="text-left flex flex-col gap-5 sm:gap-10 sm:items-baseline">
      <div className="px-5">
        <p className="text-[#5C2F88] sm:text-3xl tracking-[20px] font-inter font-medium">
          Who We Are
        </p>
        <p className="text-[#444444] text-4xl sm:text-[82px] tracking-[15px] sm:tracking-[20px] font-bold">
          Who We Are
        </p>
      </div>
      <p className="text-[#6C6C6C] text-[16px] w-100 px-5">
        Founded in 2000, Kaye Mackenzie has built a legacy in real estate,
        delivering exceptional properties and investment solutions. Now, with
        our new IT Solutions Division, we're bringing the same excellence to the
        digital world.
      </p>
      <div className="flex items-center justify-center">
        <img
          src="/buildings.jpg"
          alt="Modern glass buildings"
          className="size-[90%] sm:w-[470px] sm:h-[580px] object-cover mt-10 rounded-xl"
        />
      </div>
    </div>
  );
};

export default WhoWeAreComponent;
