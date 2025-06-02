import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Kaye Mackenzie delivered our project on time with outstanding quality. Highly recommend!",
      name: "Sarah L.",
      location: "New York, USA",
      image: "/sarah.jpg"
    },
    {
      text: "Exceptional service and communication throughout. A reliable tech partner.",
      name: "James Adam",
      location: "London, UK",
      image: "/adam.jpg"
    },
    {
      text: "Their expertise turned our idea into a fully functional product. Impressive work!",
      name: "Ahmed Raza",
      location: "Dubai, UAE",
      image: "/ahmed.jpg"
    }
  ];

  return (
    <div className="flex flex-col items-center gap-10 py-25">
      <p className="text-[45px] font-bold text-white">
        What our customers <br /> say about us
      </p>
      <div className="flex gap-5">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            testimonialText={testimonial.text}
            name={testimonial.name}
            location={testimonial.location}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
