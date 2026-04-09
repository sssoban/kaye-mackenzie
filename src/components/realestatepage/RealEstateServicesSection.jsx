import { BsBuildingFillAdd } from "react-icons/bs";
import { FaBuildingCircleCheck } from "react-icons/fa6";


const services = [
  {
    icon: <BsBuildingFillAdd className="size-[35px] sm:size-[60px] text-[#6E00FA]" />,
    bg: "bg-[#F1E8FF]",
    title: "Property Acquisition",
    desc: "We purchase high-potential residential properties with strong investment value",
    descClass: "text-sm sm:text-lg text-[#797979]",
  },
  {
    icon: <FaBuildingCircleCheck className="size-[35px] sm:size-[60px] text-[#FF4E4E]" />,
    bg: "bg-[#FFF2F2]",
    title: "Property Sales",
    desc: "We strategically resell properties to achieve strong market value",
    descClass: "text-sm sm:text-lg text-[#797979]",
  },
];

const ItServicesSection = () => {
  return (
    <div className="w-[90%] sm:w-[78%] rounded-4xl bg-white flex flex-col lg:flex-row gap-8 lg:gap-13 items-stretch justify-center p-7 sm:py-10 shadow-lg">
      {services.map((service) => (
        <div key={service.title} className="flex w-full lg:w-[48%] gap-3 sm:gap-7 items-center">
          <div className={`w-[50%] h-[70px] sm:size-[125px] rounded-full sm:rounded-3xl flex items-center justify-center ${service.bg}`}>
            {service.icon}
          </div>
          <div className="flex flex-col sm:gap-3 text-left">
            <p className="text-xl sm:text-3xl font-semibold text-[#464646]">{service.title}</p>
            <p className={service.descClass}>{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItServicesSection;
