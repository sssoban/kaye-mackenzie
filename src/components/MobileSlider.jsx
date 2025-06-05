import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MobileSlider = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Top White Bar */}
      <div className="left-0 right-0 h-[60px] bg-white flex items-center justify-end px-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
        >
          <div className="w-6 h-0.5 bg-[#464646] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#464646] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#464646]"></div>
        </button>
      </div>

      {/* Slider Menu */}
      <div
        className={`fixed top-[60px] right-0 h-[calc(100%-60px)] w-64 bg-white transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center pt-10 gap-8">
          <img
            src="/KayeMackenzieLogo.png"
            className="max-h-[90px] w-auto object-contain mb-8"
          />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-2xl text-[#464646] italic ${isActive ? 'underline' : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/real-estate"
            className={({ isActive }) =>
              `text-2xl text-[#464646] italic ${isActive ? 'underline' : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            Real Estate
          </NavLink>
          <NavLink
            to="/it-solutions"
            className={({ isActive }) =>
              `text-2xl text-[#464646] italic ${isActive ? 'underline' : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            IT Solutions
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `text-2xl text-[#464646] italic ${isActive ? 'underline' : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default MobileSlider; 