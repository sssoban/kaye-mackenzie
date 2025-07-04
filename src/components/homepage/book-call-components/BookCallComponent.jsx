import React from "react";
import { useNavigate } from "react-router-dom";

const BookCallComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact-us");
  };

  return (
    <div className="flex flex-col items-center gap-8 text-white py-10">
      <div className="px-5 sm:px-0 flex flex-col gap-4 sm:gap-0">
        <p className="text-3xl sm:text-5xl font-bold">Let's work together!</p>
        <p className="text-lg sm:text-2xl italic">
          Looking for expert real estate guidance or cutting-edge IT solutions?
          Let's talk!
        </p>
      </div>
      <div>
        <button
          onClick={handleButtonClick}
          className="bg-white text-[#5C2F88] font-bold py-3 px-20 rounded-4xl hover:bg-gray-100 cursor-pointer"
        >
          BOOK A CALL
        </button>
      </div>
    </div>
  );
};

export default BookCallComponent;
