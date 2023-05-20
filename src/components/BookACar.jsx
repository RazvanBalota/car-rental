import React, { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { RiMapPinLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookACar() {
  const [startDate, setStartDate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-full lg:h-screen flex justify-center items-center px-6 lg:px-0">
      <div className="container mx-auto shadow-3xl rounded-md p-14 bg-white">
        <p className="text-2xl font-bold font-poppins mb-6 mt-2">Book a car now</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:grid-cols-3">
          <div className="flex flex-col gap-x-2 text-xl font-medium mb-6">
            <p className="flex items-center gap-x-2">
              <span className="text-[#ff4d30]">
                <AiFillCar />
              </span>
              Select Your Car Model <span className="text-[#ff4d30]">*</span>
            </p>
            <select className="border-2 text-[#ababab] font-light px-2  py-2 outline-none mt-4">
              <option>Select your car model</option>
              <option>Audi A1 S-Line</option>
              <option>VW Golf 6</option>
              <option>BMW 320</option>
              <option>Mercedes-Benz GLK</option>
              <option>VW Passat CC</option>
            </select>
          </div>
          <div className="flex flex-col gap-x-2 text-xl font-medium mb-6">
            <p className="flex items-center gap-x-2">
              <span className="text-[#ff4d30]">
                <RiMapPinLine />
              </span>
              Pick-up <span className="text-[#ff4d30]">*</span>
            </p>
            <select className="border-2 text-[#ababab] font-light px-2  py-2 outline-none mt-4">
              <option>Select pick-up location</option>
              <option>Alba Iulia</option>
              <option>Cluj-Napoca</option>
              <option>Timisoara</option>
              <option>Bucuresti</option>
              <option>Oradea</option>
            </select>
          </div>
          <div className="flex flex-col gap-x-2 text-xl font-medium mb-6">
            <p className="flex items-center gap-x-2">
              <span className="text-[#ff4d30]">
                <RiMapPinLine />
              </span>
              Drop-of <span className="text-[#ff4d30]">*</span>
            </p>
            <select className="border-2 text-[#ababab] font-light px-2  py-2 outline-none mt-4">
              <option>Select pick-up location</option>
              <option>Alba Iulia</option>
              <option>Cluj-Napoca</option>
              <option>Timisoara</option>
              <option>Bucuresti</option>
              <option>Oradea</option>
            </select>
          </div>
          <div className="flex flex-col gap-x-2 text-xl font-medium mb-6">
            <p className="flex items-center gap-x-2">
              <span className="text-[#ff4d30]">
                <FaRegCalendarAlt />
              </span>
              Pick-up <span className="text-[#ff4d30]">*</span>
            </p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="border-2 text-[#ababab] font-light w-[100%] px-2 py-2 outline-none mt-4"
            />
          </div>
          <div className="flex flex-col gap-x-2 text-xl font-medium mb-6">
            <p className="flex items-center gap-x-2">
              <span className="text-[#ff4d30]">
                <FaRegCalendarAlt />
              </span>
              Drop-of <span className="text-[#ff4d30]">*</span>
            </p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="border-2 text-[#ababab] font-light w-[100%] px-2 py-2 outline-none mt-4"
            />
          </div>
          <div className="flex flex-col gap-x-2 text-xl font-medium mb-6">
            <button
              type="submit"
              className="bg-[#ff4d30] text-white rounded-sm shadow-md hover:bg-[#f74a2f] transition-all delay-100 cursor-pointer w-[100%] px-2 py-2 outline-none mt-0 lg:mt-11">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookACar;
