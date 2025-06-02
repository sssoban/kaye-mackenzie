import React from "react";
import { Link } from 'react-router-dom'

const ItSolutionService = () => {
  return (
    <div className="flex flex-col gap-5 px-15">
      <p className="text-4xl text-[#444444] font-bold">For IT Services</p>
      <p className="text-2xl text-[#00000083]">
        Website development, Mobile app development, UI/UX designing
      </p>
      <Link
        to="/it-solutions"
        className="bg-[#204396] text-white py-2 rounded-lg hover:bg-[#1a3678] transition-colors text-center"
      >
        Explore IT Services
      </Link>
    </div>
  );
};

export default ItSolutionService;
