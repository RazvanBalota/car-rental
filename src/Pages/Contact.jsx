import React from "react";
import Hero from "../components/Hero";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Hero name="Contact us" />
      <div className="flex pt-24 lg:pt-10 items-center flex-col lg:flex-row ">
        <div className="pt-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-x-4 mb-2 w-full lg:w-[35%] mx-6 lg:mx-32">
          <h2 className="text-6xl font-bold mb-4">Need aditional information?</h2>
          <p className="text-[#706f7b] text-center lg:text-left px-6 lg:px-0">
            A multifaceted professional skilled in multiple fields of research, development as well as a learning
            specialist.
            <br /> Over 15 years of experience.
          </p>
          <p className="flex gap-x-4 mb-2 mt-4  cursor-pointer hover:text-[#ff4d30] transition-all duration-100">
            <span>
              <BsTelephoneFill />
            </span>
            (123) -456-789
          </p>
          <p className="flex gap-x-4  cursor-pointer hover:text-[#ff4d30] transition-all duration-100">
            <span>
              <GrMail />
            </span>
            carrental@gmail.com
          </p>
          <p></p>
        </div>
        <form className="mt-20">
          <label className="">
            <p className="font-medium text-xl text-center lg:text-left mb-4">
              Full Name <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              placeholder="E.g: Joe Shmoe"
              className="bg-[#f1f1f1] outline-none w-[400px] h-[60px] px-6"
            />
          </label>
          <label className="mt-6">
            <p className="font-medium text-xl text-center lg:text-left mb-4 mt-6">
              Your Email <span className="text-red-500">*</span>
            </p>
            <input
              type="email"
              placeholder="youremail@example.com"
              className="bg-[#f1f1f1] outline-none w-[400px] h-[60px] px-6"
            />
          </label>
          <label className="mt-6">
            <p className="font-medium text-xl text-center lg:text-left mb-4 mt-6">
              Tell us about it <span className="text-red-500">*</span>
            </p>
            <textarea
              placeholder="Your message here..."
              className="bg-[#f1f1f1] outline-none w-[400px] resize-none px-6 pt-2"
            />
          </label>
          <div className="flex justify-center items-center mt-6 mb-10">
            <button className="w-[400px] bg-orange text-white font-semibold h-[60px] flex justify-center items-center gap-x-4">
              <span>
                <GrMail />
              </span>
              Send message
            </button>
          </div>
        </form>
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default Contact;
