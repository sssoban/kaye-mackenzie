import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoCodeSlashSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const services = [
  {
    icon: <HiOutlineDevicePhoneMobile className="size-[35px] sm:size-[60px] text-[#6E00FA]" />,
    bg: "bg-[#F1E8FF]",
    title: "Mobile Applications",
    desc: "The simplest but robust technology to accompany with you",
    descClass: "text-sm sm:text-lg text-[#797979]",
  },
  {
    icon: <IoCodeSlashSharp className="size-[35px] sm:size-[60px] text-[#FF4E4E]" />,
    bg: "bg-[#FFF2F2]",
    title: "Web Application",
    desc: "Platform independant business solutions for maximum availability",
    descClass: "text-sm sm:text-lg text-[#797979]",
  },
  {
    icon: <MdOutlineDesignServices className="size-[35px] sm:size-[60px] text-[#0073C6]" />,
    bg: "bg-[#E2F3FF]",
    title: "UI/UX Design",
    desc: "Intuitive and engaging designs that put your users first",
    descClass: "text-sm sm:text-lg text-[#797979]",
  },
  {
    icon: <CiSearch className="size-[35px] sm:size-[60px] text-[#B50097]" />,
    bg: "bg-[#FFE7FB]",
    title: "SEO",
    desc: "Let the world find you on top of others",
    descClass: "text-sm sm:text-lg text-[#797979]",
  },
];

const ItServicesSection = () => {
  return (
    <div className="w-[90%] sm:w-[78%] rounded-4xl bg-white flex flex-wrap gap-13 items-center justify-center p-7 sm:py-10 shadow-lg">
      {services.map((service, idx) => (
        <div key={service.title} className="flex sm:w-[600px] gap-3 sm:gap-7 items-center">
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
