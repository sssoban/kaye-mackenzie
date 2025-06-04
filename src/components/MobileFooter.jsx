import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <div className="sm:hidden w-full bg-[#204396] text-white flex flex-col items-center justify-center py-15 gap-10">
      <img src="\KayeMackenzieLogoWithBG.png" className="size-[70%]" />
      <div className="flex gap-5 justify-center sm:text-lg">
        <Link to="/">Home</Link>
        <Link to="/real-estate">Real Estate</Link>
        <Link to="/it-solutions">IT Solutions</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
        <p>© 2025 Kaye MacKenzie. All rights reserved.</p>
    </div>
  );
};

export default MobileFooter;
