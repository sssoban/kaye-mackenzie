import React from "react";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact-us");
  };

  return (
    <div className="w-full items-center justify-center flex px-10 sm:px-30">
      <div className="text-left flex flex-col gap-10 sm:w-[40%]">
        <p className="text-4xl sm:w-[130%] font-bold text-[#252525]">
          Building High-Value <span className="text-[#1090CB]">Property Investments</span><br/>That Deliver Long-Term Returns
        </p>
        <p className="text-xl text-[#545454]">
        At Kaye Mackenzie, we are a dedicated property investment team focused on acquiring, 
        refurbishing, and transforming residential properties into high-performing assets. 
        With a strategic approach and a strong understanding of the market, we create opportunities 
        that maximise both capital growth and rental income.
        </p>
        <button 
          onClick={handleButtonClick}
          className="border w-50 h-15 rounded-2xl border-[#1090CB] text-[#1090CB] font-bold hover:bg-gray-100 cursor-pointer"
        >
          Get in touch
        </button>
      </div>
      <img src="RealEstate.png" alt="real-estate-main-img" className="w-[50%] hidden sm:flex" />
    </div>
  );
};

export default MainSection;
