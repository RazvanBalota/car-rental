import React from "react";
import parry from "../assets/parry.jpg";
import ron from "../assets/ron.jpg";
import { RiDoubleQuotesR } from "react-icons/ri";

function Testimonials() {
  return (
    <section className="h-full lg:h-screen bg-[#f8f8f8] pb-0 lg:pb-0">
      <div className="container mx-auto  ">
        <div className="flex justify-center">
          <div className="flex flex-col text-center pt-10 max-w-[700px] px-10">
            <h3 className="text-[#010103] text-2xl font-medium">Reviewed by People</h3>
            <h2 className="text-[#010103] text-4xl font-semibold mb-8">Client's Testimonials</h2>
            <p className="text-[#706f7b]">
              Discover the positive impact we've made on the our clients by reading through their testimonials. Our
              clients have experienced our service and results, and they're eager to share their positive experiences
              with you.
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-20 px-10 flex flex-col lg:flex-row justify-between gap-y-10">
          <div className="max-w-[540px] bg-white p-6 rounded-md shadow-3xl">
            <div className=" font-poppins font-medium text-2xl">
              "We rented a car from this website and had an amazing experience! The booking was easy and the rental
              rates were very affordable. "
            </div>
            <div className="mt-6 flex items-center gap-x-6 relative">
              <img src={parry} alt="" className="rounded-full w-[100px]" />
              <div className="flex flex-col">
                <p className="font-semibold">Parry Hotter</p>
                <p>Hogwarts</p>
              </div>
              <RiDoubleQuotesR size={50} className="text-[#ff4d30] absolute bottom-5 right-5" />
            </div>
          </div>
          <div className="max-w-[540px] bg-white p-6 rounded-md shadow-3xl">
            <div className=" font-poppins font-medium text-2xl">
              "The car was in great condition and made our trip even better. Highly recommend for this car rental
              website!"
            </div>
            <div className="mt-6 lg:mt-16 flex items-center gap-x-6 relative">
              <img src={ron} alt="" className="rounded-full w-[100px]" />
              <div className="flex flex-col">
                <p className="font-semibold">Ron Rizzly</p>
                <p>Hogwarts</p>
              </div>
              <RiDoubleQuotesR size={50} className="text-[#ff4d30] absolute bottom-5 right-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
