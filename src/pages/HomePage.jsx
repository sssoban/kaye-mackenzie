import FrontSection from "../components/homepage/FrontSection";
import ServicesSelectionSection from "../components/homepage/services-components/ServicesSelectionSection";
import OurStorySection from "../components/homepage/our-story-components/OurStorySection";
import TestimonialSection from "../components/homepage/testimonial-components/TestimonialSection";
import BookCallComponent from "../components/homepage/book-call-components/BookCallComponent";

function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <FrontSection />
      <div className="-mt-15 sm:-mt-32">
        <ServicesSelectionSection />
      </div>
      <div className="my-20 w-full bg-white flex justify-center">
        <OurStorySection />
      </div>
      <div className="w-full bg-[#204396] items-center">
        <TestimonialSection />
      </div>
      <div className="w-full bg-[#5C2F88] rounded-t-4xl mt-20">
        <BookCallComponent/>
      </div>
    </div>
  );
}

export default HomePage;
