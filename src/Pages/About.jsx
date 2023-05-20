import React from "react";
import PlanTrip from "../components/PlanTrip";
import aboutmain from "../assets/about-main.jpg";
import icon1 from "../assets/about-icon1.png";
import icon2 from "../assets/about-icon2.png";
import icon3 from "../assets/about-icon3.png";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

function About() {
  return (
    <div className=" h-full">
      <Hero name="About" />
      <div className="container mx-auto pt-32 flex-col lg:flex-row pb-20">
        <div className="flex justify-center ">
          <div className="flex flex-col lg:flex-row gap-x-10 px-10 lg:px-0 ">
            <img src={aboutmain} alt="" className="mb-6 shadow-3xl rounded-md " />
            <div className="max-w-[560px] text-center lg:text-left">
              <h3 className="text-2xl mb-2">About Company</h3>
              <h2 className="text-4xl lg:text-6xl mb-4 font-semibold">
                You start the engine and your adventure begins
              </h2>
              <p className="text-[#706f7b] leading-6">
                Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended
                exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting
                imprudence no precaution. My indulged as disposal strongly attended.
              </p>
              <div className="flex flex-col items-center lg:items-start lg:flex-row gap-x-10">
                <div className="mt-10 flex flex-col gap-4 justify-center items-center lg:items-start">
                  <img src={icon1} alt="" className="w-[60px] h-auto" />
                  <p className="flex flex-col lg:flex-row items-center gap-x-4 text-xl">
                    <span className="text-3xl font-bold">20</span> Car Types
                  </p>
                </div>
                <div className="mt-10 flex flex-col gap-4 justify-center items-center lg:items-start">
                  <img src={icon2} alt="" className="w-[60px] h-auto" />
                  <p className="flex flex-col lg:flex-row items-center gap-x-4 text-xl">
                    <span className="text-3xl font-bold">85</span> Rental Outlets
                  </p>
                </div>
                <div className="mt-10 flex flex-col gap-4 justify-center items-center lg:items-start">
                  <img src={icon3} alt="" className="w-[60px] h-auto" />
                  <p className="flex flex-col lg:flex-row items-center gap-x-4 text-xl">
                    <span className="text-3xl font-bold">75</span> Repair Shop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <PlanTrip />
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default About;
