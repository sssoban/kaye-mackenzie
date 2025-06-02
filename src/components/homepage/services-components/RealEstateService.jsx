import React from "react";
import { Link } from "react-router-dom";

const RealEstateService = () => {
  return (
    <div className="flex flex-col gap-5 px-15">
      <p className="text-4xl text-[#444444] font-bold">For Real Estate</p>
      <p className="text-2xl text-[#00000083]">
        Property buying, selling, renting, investment consulting
      </p>
      <Link
        // to="/real-estate"
        className="bg-[#204396] text-white py-2 rounded-lg hover:bg-[#1a3678] transition-colors text-center"
      >
        Explore Real Estate Services
      </Link>
    </div>
  );
};

export default RealEstateService;
