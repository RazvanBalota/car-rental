import React from "react";
import cars from "../assets/cars.png";
import crossicon from "../assets/crossicon.png";
import chargesicon from "../assets/chargesicon.png";
import allicon from "../assets/allicon.png";
import { AiOutlineCheck } from "react-icons/ai";

function Valued() {
  return (
    <section className="bg-white pb-20">
      <div className="container mx-auto">
        <div className="flex justify-center pt-10">
          <img src={cars} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row text-center lg:text-left justify-between px-8 lg:px-20 gap-x-16">
          <div className="flex flex-col max-w-[540px] items-center lg:items-start">
            <p className="text-2xl font-semibold mb-4 mt-6">Why Choose Us</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-wide mb-4">Best valued deals you will ever find</h2>
            <p className="text-[#706f7b] tracking-wide mb-6">
              Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with
              the best value for your money, so you can enjoy top-quality services and products without breaking the
              bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance
              to save big.
            </p>
            <button className="bg-[#ff4d30] px-6 py-4 rounded-sm shadow-3xl text-white font-semibold hover:bg-[#f74a2f] transition-all duration-100 flex items-center gap-x-4">
              Find Details
              <span className="border-2 rounded-full w-6 h-6 flex items-center justify-center bg-white">
                <AiOutlineCheck size={15} className="flex items-center rounded-full text-black" />
              </span>
            </button>
          </div>
          <div className="flex items-center lg:items-start flex-col max-w-[460px] pt-0 lg:pt-10 ">
            <div className="flex flex-col lg:flex-row mt-6 lg:mt-0">
              <div className="mb-4 flex justify-center lg:justify-normal lg:w-2/3">
                <img src={crossicon} alt="" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold tracking-wide mb-2">Cross Country Drive</h2>
                <p className="text-[#706f7b] tracking-wide">
                  Take your driving experience to the next level with our top-notch vehicles for your cross-country
                  adventures.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-6">
              <div className="mb-4 flex justify-center lg:justify-normal lg:w-2/3">
                <img src={allicon} alt="" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold tracking-wide mb-2">All Inclusive Pricing</h2>
                <p className="text-[#706f7b] tracking-wide">
                  Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-6">
              <div className="mb-4 flex justify-center lg:justify-normal lg:w-2/3">
                <img src={chargesicon} alt="" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold tracking-wide mb-2">No Hidden Charges</h2>
                <p className="text-[#706f7b] tracking-wide">
                  Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Valued;
