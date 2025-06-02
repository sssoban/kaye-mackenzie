import FrontSection from "../components/itpage/FrontSection";
import ItServicesSection from "../components/itpage/ItServicesSection";
import MainSection from "../components/itpage/MainSection";
import SuccessSection from "../components/itpage/SuccessSection";
import BookCallComponent from "../components/homepage/book-call-components/BookCallComponent.jsx";
import React, { useEffect } from "react";

const ItSolutionsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="flex items-center justify-center flex-col bg-white">
      <FrontSection />
      <div className="-mt-35 flex justify-center">
        <ItServicesSection />
      </div>
      <MainSection />
      <SuccessSection />
      <div className="w-full bg-[#5C2F88] rounded-t-4xl mt-20">
        <BookCallComponent />
      </div>
    </div>
  );
};

export default ItSolutionsPage;
