import React from "react";
import { BsTelephoneFill } from "react-icons/bs";

function Banner() {
  return (
    <div className=" bg-bannerbg w-full h-[20rem] bg-no-repeat opacity-90">
      <div className=" h-[10rem] text-white text-4xl flex flex-col lg:flex-row text-center justify-center items-center gap-x-10 font-bold">
        <h2 className="mb-4 lg:mb-0">Book a car by getting in touch with us</h2>
        <h2 className="text-[#ff4d30] flex gap-x-6 items-center">
          <BsTelephoneFill />
          (123) 456-7869
        </h2>
      </div>
    </div>
  );
}

export default Banner;
