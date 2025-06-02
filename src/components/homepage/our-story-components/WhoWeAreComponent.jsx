import React from "react";

const WhoWeAreComponent = () => {
  return (
    <div className="text-left flex flex-col gap-10">
      <div>
        <p className="text-[#5C2F88] text-3xl tracking-[20px] font-inter font-medium">
          Who We Are
        </p>
        <p className="text-[#444444] text-[82px] tracking-[20px] font-bold">Who We Are</p>
      </div>
      <p className="text-[#6C6C6C] text-[16px] w-100">
        Founded in 2000, Kaye Mackenzie has built a legacy in real estate,
        delivering exceptional properties and investment solutions. Now, with
        our new IT Solutions Division, we're bringing the same excellence to the
        digital world.
      </p>
      <img
        src="/buildings.jpg"
        alt="Modern glass buildings"
        className="w-[470px] h-[580px] object-cover mt-10 rounded-xl"
      />
    </div>
  );
};

export default WhoWeAreComponent;
