import RealEstateService from "./RealEstateService";
import ItSolutionService from "./ItSolutionsService";

const ServicesSelectionSection = () => {
  return (
    <div className="w-[950px] h-[380px] rounded-4xl bg-white flex justify-center items-center">
      <RealEstateService />
      <div className="h-[80%] w-[1px] bg-gray-300"></div>
      <ItSolutionService />
    </div>
  );
};

export default ServicesSelectionSection;
