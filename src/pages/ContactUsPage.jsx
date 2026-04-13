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
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full px-4 sm:px-8 py-20 sm:py-24 flex justify-center bg-[#f5f7fb]">
      <div className="w-full max-w-6xl flex flex-col gap-8">
        <div className="text-center flex flex-col gap-3">
          <h1 className="font-bold text-4xl sm:text-5xl text-[#1f2937]">
            Let&apos;s Talk About Your Property Needs
          </h1>
          <p className="text-base sm:text-lg text-[#6b7280] max-w-2xl mx-auto">
            Looking to rent an apartment or discuss real estate opportunities?
            Send us a message and our team will get back to you quickly.
          </p>
        </div>

        <div className="w-full bg-white rounded-3xl shadow-xl p-2 sm:p-3 grid grid-cols-1 lg:grid-cols-[38%_62%] gap-2">
          <div className="bg-[#204396] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-3 text-left">
              <p className="font-semibold text-2xl sm:text-3xl">
                Contact Information
              </p>
              <p className="text-sm sm:text-base text-[#dbeafe]">
                Reach out directly for apartment availability, viewings, or
                general property enquiries.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-white/10 rounded-xl px-4 py-3">
                <div className="size-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <IoIosCall className="text-white text-xl" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <p className="font-semibold text-sm uppercase tracking-wide text-white/80">
                    Call us
                  </p>
                  <p className="text-base sm:text-lg font-medium text-white">
                    +44 161 224 7435
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 rounded-xl px-4 py-3">
                <div className="size-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <IoIosMail className="text-white text-xl" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <p className="font-semibold text-sm uppercase tracking-wide text-white/80">
                    Email
                  </p>
                  <p className="text-base sm:text-lg font-medium text-white break-all">
                    admin@kaye-mackenzie.co.uk
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 rounded-xl px-4 py-3">
                <div className="size-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <FaLocationDot className="text-white text-xl" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <p className="font-semibold text-sm uppercase tracking-wide text-white/80">
                    Office
                  </p>
                  <p className="text-base sm:text-lg font-medium text-white">
                    813 Stockport Road, Manchester M19 3BS, UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 flex flex-col min-h-[560px]">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="first_name" className="block text-left text-sm font-medium text-[#374151]">
                  First Name
                </label>
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="John"
                  className="border border-[#d1d5db] bg-[#f9fafb] p-3 w-full rounded-xl text-left outline-none focus:border-[#204396] focus:ring-2 focus:ring-[#204396]/20"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="last_name" className="block text-left text-sm font-medium text-[#374151]">
                  Last Name
                </label>
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="border border-[#d1d5db] bg-[#f9fafb] p-3 w-full rounded-xl text-left outline-none focus:border-[#204396] focus:ring-2 focus:ring-[#204396]/20"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="block text-left text-sm font-medium text-[#374151]">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="border border-[#d1d5db] bg-[#f9fafb] p-3 w-full rounded-xl text-left outline-none focus:border-[#204396] focus:ring-2 focus:ring-[#204396]/20"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone_no" className="block text-left text-sm font-medium text-[#374151]">
                  Phone Number
                </label>
                <input
                  id="phone_no"
                  type="tel"
                  name="phone_no"
                  value={formData.phone_no}
                  onChange={handleChange}
                  placeholder="+44 ..."
                  className="border border-[#d1d5db] bg-[#f9fafb] p-3 w-full rounded-xl text-left outline-none focus:border-[#204396] focus:ring-2 focus:ring-[#204396]/20"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="block text-left text-sm font-medium text-[#374151]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what kind of apartment or property help you need..."
                  className="border border-[#d1d5db] bg-[#f9fafb] p-3 w-full min-h-36 rounded-xl text-left outline-none resize-none focus:border-[#204396] focus:ring-2 focus:ring-[#204396]/20"
                  required
                />
              </div>
            </form>

            {message && (
              <div className="mt-4 text-sm sm:text-base font-medium text-center text-[#374151]">
                {message}
              </div>
            )}

            <button
              type="submit"
              form="contact-form"
              disabled={isSubmitting}
              className="mt-6 sm:mt-auto bg-[#204396] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#173171] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
