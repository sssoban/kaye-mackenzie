import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="hidden md:flex w-full h-[110px] items-center justify-between px-20 bg-white">
      <img
        src="/KayeMackenzieLogo.png"
        className="max-h-[90px] w-auto object-contain"
      />
      <ul className="flex gap-10 lowercase italic  text-2xl text-[#464646]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/real-estate"
          className={({ isActive }) =>
            isActive ? "underline" : ""
          }
        >
          Real Estate
        </NavLink>
        <NavLink
          to="/it-solutions"
          className={({ isActive }) =>
            isActive ? "underline" : ""
          }
        >
          IT Solutions
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? "underline" : ""
          }
        >
          Contact Us
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
