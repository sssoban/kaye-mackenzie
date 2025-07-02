const FrontSection = () => {
  return (
    <div className="w-full px-4 h-[720px] bg-[#204396] text-white flex flex-col items-center justify-center gap-4 sm:gap-0">
      <img
        src="\KayeMackenzieLogoWithBG.png"
        alt="logo"
        className="sm:hidden w-[80%] "
      />
      <p className="sm:hidden font-bold italic sm:text-[70px] text-[30px]">
        • Real Estate Expertise <br className="sm:hidden"/> • IT Solutions Excellence
      </p>
      <p className="hidden sm:flex font-bold italic text-[70px]">
        Real Estate Expertise. IT Solutions Excellence.
      </p>
      <p className="italic text-2xl sm:text-[25px] font-lato">
        From property investments to cutting-edge digital solutions, we bring
        expertise and innovation under one roof.
      </p>
    </div>
  );
};

export default FrontSection;
