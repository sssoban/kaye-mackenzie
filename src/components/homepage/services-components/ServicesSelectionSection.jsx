import RealEstateService from "./RealEstateService";
import ItSolutionService from "./ItSolutionsService";

const ServicesSelectionSection = () => {
  return (
    <div className="w-[370px] sm:w-[950px] sm:h-[380px] rounded-4xl bg-white flex justify-center items-center  flex-col sm:flex-row">
      <RealEstateService />
      <div className="hidden sm:flex sm: h-[80%] w-[1px] bg-gray-300"/>
      <ItSolutionService />
    </div>
  );
};

export default ServicesSelectionSection;
