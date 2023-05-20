import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <div className="[40vh] px-20 mb-6">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="flex flex-1 flex-col lg:flex-row text-center lg:text-left px-10">
          <div className="pb-6">
            <h2 className="text-2xl mb-4">
              <span className="font-bold">CAR</span> Rental
            </h2>
            <p className="text-[#706f7b] mb-4">
              We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
            </p>
            <p className="flex justify-center lg:justify-start items-center gap-x-4 mb-2 font-bold cursor-pointer hover:text-[#ff4d30] transition-all duration-100">
              <span>
                <BsTelephoneFill />
              </span>
              (123) -456-789
            </p>
            <p className="flex justify-center lg:justify-start items-center gap-x-4  font-bold cursor-pointer hover:text-[#ff4d30] transition-all duration-100">
              <span>
                <GrMail />
              </span>
              carrental@gmail.com
            </p>
            <p></p>
          </div>
        </div>
        <div className="flex flex-1 flex-col text-center lg:text-left px-10 pb-6">
          <div className="mb-4">
            <p className="text-2xl font-bold">COMPANY</p>
          </div>
          <div className="flex flex-col">
            <ul>
              <li className="mb-2 cursor-pointer hover:text-[#ff4d30] transition-all duration-100">New York</li>
              <li className="mb-2 cursor-pointer hover:text-[#ff4d30] transition-all duration-100">Careers</li>
              <li className="mb-2 cursor-pointer hover:text-[#ff4d30] transition-all duration-100">Mobile</li>
              <li className="mb-2 cursor-pointer hover:text-[#ff4d30] transition-all duration-100">Blog</li>
              <li className="mb-2 cursor-pointer hover:text-[#ff4d30] transition-all duration-100">How we work</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 flex-col text-center lg:text-left px-10 pb-6 ">
          <h2 className="mb-4 text-2xl font-bold">WORKING HOURS</h2>
          <p className="mb-2">Mon - Fri: 9:00AM - 9:00PM</p>
          <p className="mb-2">Sat: 9:00AM - 19:00PM</p>
          <p>Sun: Closed</p>
        </div>
        <div className="flex flex-1 flex-col text-center lg:text-left px-10 ">
          <h2 className="mb-4 text-2xl font-bold">SUBSCRIPTION</h2>
          <p className="mb-2">Subscribe your Email address for latest news & updates.</p>
          <input
            type="text"
            placeholder="Enter your email addres"
            className=" outline-none px-6  shadow-3xl py-4 text-sm mb-2"
          />
          <p className="btn cursor-pointer text-center py-4 ">Submit</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
