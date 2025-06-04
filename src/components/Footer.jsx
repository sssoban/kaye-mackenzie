import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="hidden sm:flex justify-center gap-30 bg-[#204396] py-10 text-white">
      <div className="flex flex-col gap-10 text-left justify-center">
        <p className="text-2xl w-[400px]">
          813 Stockport Road, Levenshulme Manchester M19 3BS
        </p>
        <p>+44 741 562 7789</p>
        <p>admin@kaye-mackenzie.co.uk</p>
      </div>
      <img src="\KayeMackenzieLogoWithBG.png" className="size-[25%] mr-30" />
      <div className="flex flex-col gap-3 justify-center text-left">
        <Link to="/">Home</Link>
        <Link to="/real-estate">Real Estate</Link>
        <Link to="/it-solutions">IT Solutions</Link>
        <Link to="/contact-us">Contact Us</Link>
        <p>© 2025 Kaye MacKenzie. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
