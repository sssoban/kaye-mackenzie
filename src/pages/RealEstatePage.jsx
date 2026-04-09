import FrontSection from "../components/realestatepage/FrontSection";
import RealEstateServicesSection from "../components/realestatepage/RealEstateServicesSection";
import MainSection from "../components/realestatepage/MainSection";
import SuccessSection from "../components/realestatepage/SuccessSection";
import BookCallComponent from "../components/homepage/book-call-components/BookCallComponent.jsx";
import React, { useEffect } from "react";

const RealEstatePage = () => {
  useEffect(() => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, []);
  
  return (
    <div className="flex items-center justify-center flex-col bg-white gap-15 sm:gap-0">
      <FrontSection />
      <div className="-mt-20 sm:-mt-35 flex justify-center">
        <RealEstateServicesSection/>
      </div>
      <MainSection />
      <SuccessSection />
      <div className="w-full bg-[#5C2F88] rounded-t-4xl mt-20">
        <BookCallComponent />
      </div>
    </div>
  );
};

export default RealEstatePage;
