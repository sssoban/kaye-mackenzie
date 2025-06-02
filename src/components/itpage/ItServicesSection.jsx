import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoCodeSlashSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { LiaRocketSolid } from "react-icons/lia";

const services = [
  {
    icon: <HiOutlineDevicePhoneMobile className="size-[60px] text-[#6E00FA]" />,
    bg: "bg-[#F1E8FF]",
    title: "Mobile Applications",
    desc: "The simplest but robust technology to accompany with you",
    descClass: "text-lg text-[#797979]",
  },
  {
    icon: <IoCodeSlashSharp className="size-[60px] text-[#FF4E4E]" />,
    bg: "bg-[#FFF2F2]",
    title: "Web Application",
    desc: "Platform independant business solutions for maximum availability",
    descClass: "",
  },
  {
    icon: <MdOutlineDesignServices className="size-[60px] text-[#0073C6]" />,
    bg: "bg-[#E2F3FF]",
    title: "UI/UX Design",
    desc: "Intuitive and engaging designs that put your users first",
    descClass: "",
  },
  {
    icon: <LiaRocketSolid className="size-[60px] text-[#B50097]" />,
    bg: "bg-[#FFE7FB]",
    title: "SEO",
    desc: "Let the world find you on top of others",
    descClass: "",
  },
];

const ItServicesSection = () => {
  return (
    <div className="w-[78%] h-[450px] rounded-4xl bg-white flex flex-wrap gap-13 items-center justify-center py-10 shadow-lg">
      {services.map((service, idx) => (
        <div key={service.title} className="flex w-[600px] gap-7 items-center">
          <div className={`size-[125px] rounded-3xl flex items-center justify-center ${service.bg}`}>
            {service.icon}
          </div>
          <div className="flex flex-col gap-3 text-left">
            <p className="text-3xl font-semibold text-[#464646]">{service.title}</p>
            <p className={service.descClass}>{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItServicesSection;
