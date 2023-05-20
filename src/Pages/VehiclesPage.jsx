import React from "react";
import Hero from "../components/Hero";
import audi from "../assets/audi-box.png";
import golf from "../assets/golf6-box.png";
import bmw from "../assets/bmw-box.png";
import toyota from "../assets/toyota-box.png";
import passat from "../assets/passat-box.png";
import benz from "../assets/benz-box.png";
import { AiFillStar } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function VehiclesPage() {
  return (
    <div className="h-full pb-20">
      <Hero name="Vehicles Models" />
      <div className="pt-32 lg:pt-10 flex flex-col lg:grid lg:grid-cols-3 justify-center items-center px-1 lg:px-28 ">
        <div className="shadow-3xl rounded-md m-10 max-w-[20rem] ">
          <div>
            <img src={audi} alt="" />
          </div>
          <div className="p-6">
            <div className="flex justify-between mb-2">
              <h2 className="text-2xl font-poppins font-medium">Audi A1</h2>
              <p className="text-2xl font-poppins font-medium">$45</p>
            </div>
            <div className="flex justify-between">
              <div className="flex text-yellow-300">
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
              </div>
              <div className="text-gray">per day</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">Audi</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">4/5</span> <FaCarSide size={30} />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">Manual</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">Diesel</span> <FaCarSide size={30} />
              </div>
            </div>
            <hr className=" mt-6" />
            <div className="flex justify-center items-center mt-6 bg-orange text-white text-xl font-semibold font-poppins rounded-md shadow-3xl cursor-pointer py-6">
              Book now
            </div>
          </div>
        </div>
        <div className="shadow-3xl rounded-md m-10  max-w-[20rem]">
          <div>
            <img src={golf} alt="" />
          </div>
          <div className="p-6">
            <div className="flex justify-between mb-2">
              <h2 className="text-2xl font-poppins font-medium">Golf 6</h2>
              <p className="text-2xl font-poppins font-medium">$37</p>
            </div>
            <div className="flex justify-between">
              <div className="flex text-yellow-300">
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
              </div>
              <div className="text-gray">per day</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">VW</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">4/5</span> <FaCarSide size={30} />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">Manual</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">Diesel</span> <FaCarSide size={30} />
              </div>
            </div>
            <hr className=" mt-6" />
            <div className="flex justify-center items-center mt-6 bg-orange text-white text-xl font-semibold font-poppins rounded-md shadow-3xl cursor-pointer py-6">
              Book now
            </div>
          </div>
        </div>
        <div className="shadow-3xl rounded-md m-10  max-w-[20rem]">
          <div>
            <img src={toyota} alt="" />
          </div>
          <div className="p-6">
            <div className="flex justify-between mb-2">
              <h2 className="text-2xl font-poppins font-medium">Toyota</h2>
              <p className="text-2xl font-poppins font-medium">$30</p>
            </div>
            <div className="flex justify-between">
              <div className="flex text-yellow-300">
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
              </div>
              <div className="text-gray">per day</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">Camry</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">4/5</span> <FaCarSide size={30} />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">Manual</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">Diesel</span> <FaCarSide size={30} />
              </div>
            </div>
            <hr className=" mt-6" />
            <div className="flex justify-center items-center mt-6 bg-orange text-white text-xl font-semibold font-poppins rounded-md shadow-3xl cursor-pointer py-6">
              Book now
            </div>
          </div>
        </div>
        <div className="shadow-3xl rounded-md m-10  max-w-[20rem]">
          <div>
            <img src={bmw} alt="" />
          </div>
          <div className="p-6">
            <div className="flex justify-between mb-2">
              <h2 className="text-2xl font-poppins font-medium">BMW 320</h2>
              <p className="text-2xl font-poppins font-medium">$35</p>
            </div>
            <div className="flex justify-between">
              <div className="flex text-yellow-300">
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
              </div>
              <div className="text-gray">per day</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">BMW</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">4/5</span> <FaCarSide size={30} />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">Manual</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">Diesel</span> <FaCarSide size={30} />
              </div>
            </div>
            <hr className=" mt-6" />
            <div className="flex justify-center items-center mt-6 bg-orange text-white text-xl font-semibold font-poppins rounded-md shadow-3xl cursor-pointer py-6">
              Book now
            </div>
          </div>
        </div>
        <div className="shadow-3xl rounded-md m-10  max-w-[20rem]">
          <div>
            <img src={benz} alt="" />
          </div>
          <div className="p-6">
            <div className="flex justify-between mb-2">
              <h2 className="text-2xl font-poppins font-medium">Mercedes</h2>
              <p className="text-2xl font-poppins font-medium">$50</p>
            </div>
            <div className="flex justify-between">
              <div className="flex text-yellow-300">
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
              </div>
              <div className="text-gray">per day</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">Benz GLK</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">4/5</span> <FaCarSide size={30} />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">Manual</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">Diesel</span> <FaCarSide size={30} />
              </div>
            </div>
            <hr className=" mt-6" />
            <div className="flex justify-center items-center mt-6 bg-orange text-white text-xl font-semibold font-poppins rounded-md shadow-3xl cursor-pointer py-6">
              Book now
            </div>
          </div>
        </div>
        <div className="shadow-3xl rounded-md m-10  max-w-[20rem]">
          <div>
            <img src={passat} alt="" />
          </div>
          <div className="p-6">
            <div className="flex justify-between mb-2">
              <h2 className="text-2xl font-poppins font-medium">Passat CC</h2>
              <p className="text-2xl font-poppins font-medium">$30</p>
            </div>
            <div className="flex justify-between">
              <div className="flex text-yellow-300">
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
                <span>
                  <AiFillStar size={25} />
                </span>
              </div>
              <div className="text-gray">per day</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">VW</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">4/5</span> <FaCarSide size={30} />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex  items-center gap-x-2">
                <FaCarSide size={30} /> <span className="text-xl text-gray">Manual</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="text-xl text-gray">Diesel</span> <FaCarSide size={30} />
              </div>
            </div>
            <hr className=" mt-6" />
            <div className="flex justify-center items-center mt-6 bg-orange text-white text-xl font-semibold font-poppins rounded-md shadow-3xl cursor-pointer py-6">
              Book now
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default VehiclesPage;
