const FrontSection = () => {
  return (
    <div className="w-full h-[500px] sm:h-[720px] bg-[#204396] text-white flex flex-col items-center justify-center gap-5 pt-10">
      <div className="border w-[135px] h-[135px] rounded-full bg-white flex items-center justify-center">
        <img
          src="/speaker.png"
          alt="Speaker"
        />
      </div>
      <p className="text-4xl font-bold">Our Services</p>
      <p className="text-xl px-3 sm:px-0 sm:w-[30%] text-center">Discover a complete range of digital solutions designed to elevate your brand, connect with your audience, and drive long-term success across mobile, web, search, and user experience.</p>
    </div>
  );
};

export default FrontSection;
