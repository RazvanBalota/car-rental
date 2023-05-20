import React from "react";
import mainCar from "../assets/mainCar.png";
import heroBg from "../assets/heroBg.png";
import { AiOutlineCheck } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

function HeroSection() {
  return (
    <section className="h-[90vh] w-full flex items-center herobg relative pt-10 lg:pt-20">
      <img src={heroBg} alt="" className="hidden md:flex lg:flex absolute z-[-1] top-0 right-0" />
      <div className="container mx-auto md:px-10 h-full w-full flex items-center ">
        <div className="flex flex-1 flex-col md:flex-col text-center md:text-left lg:text-left max-w-[480px] px-8 pt-10 lg:pt-0 lg:px-0 ">
          <p className="text-2xl lg:text-2xl font-semibold mb-6 ">Plan your trip now</p>
          <h1 className="text-6xl font-bold mb-8">
            Save <span className="text-[#ff4d30]">big</span> with our car rental
          </h1>
          <p className="text-md text-[#706f7b] leading-6 mb-10">
            Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
          </p>
          <div className="flex gap-x-8 justify-center lg:justify-normal">
            <button className="bg-[#ff4d30] px-6 py-4 rounded-sm shadow-3xl text-white font-semibold hover:bg-[#f74a2f] transition-all duration-100 flex items-center gap-x-4">
              Book Ride
              <span className="border-2 rounded-full w-6 h-6 flex items-center justify-center bg-white">
                <AiOutlineCheck size={15} className="flex items-center rounded-full text-black" />
              </span>
            </button>
            <button className="bg-black px-6 py-4 rounded-sm shadow-lg text-white font-semibold border-2 border-black hover:shadow-2xl transition-all duration-100 hover:bg-white hover:text-black flex">
              Learn More
              <span className=" w-6 h-6 flex items-center justify-center ">
                <MdKeyboardArrowRight size={20} className="flex items-center rounded-full" />
              </span>
            </button>
          </div>
        </div>
        <div className="hidden md:flex lg:flex flex-1">
          <img src={mainCar} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
