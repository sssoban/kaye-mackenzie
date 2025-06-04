import React from "react";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact-us");
  };

  return (
    <div className="w-full items-center justify-center flex px-10 sm:px-30">
      <div className="text-left flex flex-col gap-10">
        <p className="text-4xl sm:w-[130%] font-bold text-[#252525]">
          Building Future-Ready <span className="text-[#1090CB]">Mobile and Web Experiences</span>  That Help Your
          Business Thrive
        </p>
        <p className="text-xl text-[#545454]">
          At Kaye Mackenzie, we are a passionate team of developers and
          designers committed to building exceptional mobile and web
          applications. With a proven track record and dozens of successful
          projects, we craft intuitive, high-performance solutions for leading
          platforms like Android and iOS. <br /> <br /> Whether you're launching a
          startup or scaling your enterprise, our mission is to bring your ideas
          to life with precision, creativity, and innovation.
        </p>
        <button 
          onClick={handleButtonClick}
          className="border w-50 h-15 rounded-2xl border-[#1090CB] text-[#1090CB] font-bold hover:bg-gray-100 cursor-pointer"
        >
          Get in touch
        </button>
      </div>
      <img src="3DIllustration.png" alt="it-main-img" className="w-[65%] hidden sm:flex" />
    </div>
  );
};

export default MainSection;
