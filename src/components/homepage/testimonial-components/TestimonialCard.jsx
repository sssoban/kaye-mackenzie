import React from "react";

const TestimonialCard = ({ testimonialText, name, location, image }) => {
  return (
    <div className="bg-white w-[350px] sm:w-[550px] h-[300px] rounded-2xl flex flex-col p-10 gap-10">
      <div className="flex items-start justify-between">
        <div className="w-fit h-fit text-left flex gap-5">
          <img
            src={image}
            alt={`${name}'s profile picture`}
            className="size-23 object-cover rounded-full object-top"
          />
          <div className="flex flex-col justify-center">
            <p>{name}</p>
            <p>{location}</p>
          </div>
        </div>
        <img src="/commas.png" />
      </div>
      <p className="text-left">
        {testimonialText}
      </p>
    </div>
  );
};

export default TestimonialCard;
