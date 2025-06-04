import React, { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_no: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.email.includes("@")) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      await emailjs.send(
        "service_decxq3c",
        "template_uk0rttd",
        formData,
        "knfkMKnxQGXE4LaSa"
      );

      setMessage(
        "Thank you for your message! We will get back to you soon. 🎉"
      );
      setFormData({
        first_name: "",
        last_name: "",
        phone_no: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col items-center py-30 gap-10">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-5xl">Contact Us</p>
        <p className="text-xl text-[#717171] font-extralight">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className="sm:w-[80%] bg-white sm:h-[500px] rounded-2xl flex flex-col sm:flex-row">
        <div className="bg-[#204396] text-white text-left p-10 flex flex-col gap-20 sm:w-[40%] rounded-2xl m-2">
          <div>
            <p className="font-semibold text-3xl">Contact Information</p>
            <p className="text-xl font-extralight italic">
              Get in touch with us
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center text-xl">
              <IoIosCall className="text-white" />
              <p>+44 161 224 7435</p>
            </div>
            <div className="flex gap-5 items-center text-xl">
              <IoIosMail className="text-white" />
              <p>admin@kaye-mackenzie.co.uk</p>
            </div>
            <div className="flex gap-5 items-center text-xl">
              <FaLocationDot className="text-white" />
              <p>813 Stockport Road Manchester M19 3BS UK</p>
            </div>
          </div>
        </div>
        <div className="sm:w-[60%] p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                className="border p-2 w-full text-center placeholder:text-[#9CA3AF] focus:placeholder-transparent rounded-2xl"
                required
              />
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                className="border-1 p-2 w-full text-center placeholder:text-[#9CA3AF] focus:placeholder-transparent rounded-2xl"
                required
              />
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="border-1 p-2 w-full text-center placeholder:text-[#9CA3AF] focus:placeholder-transparent rounded-2xl"
                required
              />
              <input
                type="tel"
                name="phone_no"
                value={formData.phone_no}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border-1 p-2 w-full text-center placeholder:text-[#9CA3AF] focus:placeholder-transparent rounded-2xl"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="border-1 placeholder:text-center placeholder:text-[#9CA3AF] focus:placeholder-transparent h-32 rounded-2xl"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#405fad] text-white px-20 py-4 hover:bg-[#1E3C87] transition-colors rounded-2xl"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {message && (
            <div className="mt-2 font-poppins-regular text-center">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
