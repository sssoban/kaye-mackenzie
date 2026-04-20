import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const flatMedia = [
  { type: "image", src: "/Flat1/Flat1_Photo1.jpeg", alt: "Studio flat photo 1" },
  { type: "image", src: "/Flat1/Flat1_Photo2.jpeg", alt: "Studio flat photo 2" },
  { type: "image", src: "/Flat1/Flat1_Photo3.jpeg", alt: "Studio flat photo 3" },
  { type: "image", src: "/Flat1/Flat1_Photo4.jpeg", alt: "Studio flat photo 4" },
  { type: "image", src: "/Flat1/Flat1_Photo5.jpeg", alt: "Studio flat photo 5" },
  {
    type: "video",
    src: "/Flat1/Flat1_Video.mp4",
    alt: "Studio flat walk-through video",
    thumbnail: "/Flat1/Flat1_Photo1.jpeg",
  },
];

const StudioFlatSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = flatMedia[activeIndex];
  const backgroundSrc =
    activeMedia.type === "video" ? activeMedia.thumbnail : activeMedia.src;

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? flatMedia.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === flatMedia.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full px-5 sm:px-10 lg:px-20 py-14 sm:py-18">
      <div className="w-full max-w-7xl mx-auto rounded-4xl bg-[#F7F9FC] p-6 sm:p-10 lg:p-12 flex flex-col gap-8 sm:gap-10 shadow-sm">
        <div className="flex flex-col gap-4 text-left">
          <p className="text-sm sm:text-base font-semibold text-[#1090CB] uppercase tracking-widest">
            Flat Available
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] leading-tight">
            Studio Flat Ready to Move In
          </h2>
          <div className="flex flex-col gap-3 max-w-5xl">
            <p className="text-base sm:text-lg text-[#545454]">
              A well-presented studio flat located on the first floor in the
              M19 3AD area. The property is clean, bright, and well-maintained,
              offering a comfortable living space ideal for individuals or
              professionals.
            </p>
            <p className="text-base sm:text-lg text-[#545454]">
              Conveniently situated with easy access to local shops,
              supermarkets, and public transport, including nearby train
              stations, making commuting straightforward. The area is
              well-connected and offers all essential amenities within walking
              distance.
            </p>
            <p className="text-base sm:text-lg text-[#545454]">
              A great option for those looking for a practical and conveniently
              located place to live.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="text-sm sm:text-base bg-white border border-[#D9EAF6] text-[#35546B] px-4 py-2 rounded-full">
                Rent: £700 pcm
              </span>
              <span className="text-sm sm:text-base bg-white border border-[#D9EAF6] text-[#35546B] px-4 py-2 rounded-full">
                Postcode: M19 3AD
              </span>
              <span className="text-sm sm:text-base bg-white border border-[#D9EAF6] text-[#35546B] px-4 py-2 rounded-full">
                EPC Rating: C
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="relative rounded-none sm:rounded-3xl overflow-hidden bg-transparent sm:bg-black w-full max-w-6xl mx-auto">
            <div className="absolute inset-0 pointer-events-none hidden sm:block">
              <img
                src={backgroundSrc}
                alt=""
                className="w-full h-full object-cover scale-110 blur-2xl opacity-55"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>

            {activeMedia.type === "video" ? (
              <video
                src={activeMedia.src}
                className="relative z-10 w-full h-auto max-h-[75vh] sm:h-[580px] sm:max-h-none lg:h-[78vh] lg:max-h-[900px] object-contain"
                autoPlay
                muted
                controls
                playsInline
                loop
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={activeMedia.src}
                alt={activeMedia.alt}
                className="relative z-10 w-full h-auto max-h-[75vh] sm:h-[580px] sm:max-h-none lg:h-[78vh] lg:max-h-[900px] object-contain"
                loading="lazy"
              />
            )}

            <button
              type="button"
              onClick={goToPrevious}
              className="absolute z-20 left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-[#252525] text-xl font-bold shadow-md hover:bg-white cursor-pointer"
              aria-label="Previous flat media"
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute z-20 right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-[#252525] text-xl font-bold shadow-md hover:bg-white cursor-pointer"
              aria-label="Next flat media"
            >
              &#8250;
            </button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {flatMedia.map((mediaItem, index) => (
              <button
                key={mediaItem.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-none sm:rounded-xl overflow-hidden border-0 sm:border-2 cursor-pointer transition ${
                  activeIndex === index
                    ? "sm:border-[#1090CB] opacity-100"
                    : "sm:border-transparent opacity-75 hover:opacity-100"
                }`}
                aria-label={`Show studio flat media ${index + 1}`}
              >
                {mediaItem.type === "video" ? (
                  <div className="relative">
                    <video
                      src={mediaItem.src}
                      className="w-full h-16 sm:h-22 object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm font-semibold bg-black/35">
                      VIDEO
                    </span>
                  </div>
                ) : (
                  <img
                    src={mediaItem.src}
                    alt={`Studio flat thumbnail ${index + 1}`}
                    className="w-full h-16 sm:h-22 object-cover"
                    loading="lazy"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {flatMedia.map((mediaItem, index) => (
              <button
                key={`${mediaItem.src}-dot`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                  activeIndex === index ? "bg-[#1090CB]" : "bg-[#C2DDEB]"
                }`}
                aria-label={`Go to media ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-start">
          <button
            onClick={() => navigate("/contact-us")}
            className="border w-52 h-13 rounded-2xl border-[#1090CB] text-[#1090CB] font-bold hover:bg-[#EAF6FD] cursor-pointer"
          >
            Enquire About This Flat
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudioFlatSection;
