import React, { useState } from "react";
import CarModels from "./CarModels";
import { CAR_DATA } from "./CarData";

function Models() {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn0");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  return (
    <section className="h-full pt-[10rem]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-medium mb-4">Vehicle Models</p>
          <h1 className="text-4xl font-bold tracking-wide mb-4">Our rental fleet</h1>
          <p className="text-[#706f7b] w-[80vw] lg:w-[35vw] text-center">
            Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
          </p>
        </div>
        <div className="flex justify-between lg:flex-row flex-col">
          <div className="flex flex-col max-w-full lg:max-w-[20vw] gap-y-6 mt-6 px-10 lg:px-0">
            <button
              className="bg-[#e9e9e9] py-4 px-4 hover:bg-[#ff4d30] hover:text-white transition-all delay-100 active:bg-[#ff4d30]  focus:bg-[#ff4d30] focus:text-white font-semibold text-lg"
              id="btn1"
              onClick={() => {
                setActive("SecondCar");
                btnID("btn0");
              }}>
              Audi A1 S-Line
            </button>
            <button
              className="bg-[#e9e9e9] py-4 px-4 hover:bg-[#ff4d30] hover:text-white transition-all delay-100 active:bg-[#ff4d30]  focus:bg-[#ff4d30] focus:text-white font-semibold text-lg"
              id="btn2"
              onClick={() => {
                setActive("FirstCar");
                btnID("btn1");
              }}>
              VW Golf 6
            </button>
            <button
              className="bg-[#e9e9e9] py-4 px-4 hover:bg-[#ff4d30] hover:text-white transition-all delay-100 active:bg-[#ff4d30]  focus:bg-[#ff4d30] focus:text-white font-semibold text-lg"
              id="btn4"
              onClick={() => {
                setActive("ThirdCar");
                btnID("btn2");
              }}>
              BMW 320 ModernLine
            </button>
            <button
              className="bg-[#e9e9e9] py-4 px-4 hover:bg-[#ff4d30] hover:text-white transition-all delay-100 active:bg-[#ff4d30]  focus:bg-[#ff4d30] focus:text-white font-semibold text-lg"
              id="btn5"
              onClick={() => {
                setActive("FourthCar");
                btnID("btn3");
              }}>
              Mercedes-Benz GLK
            </button>
            <button
              className="bg-[#e9e9e9] py-4 px-4 hover:bg-[#ff4d30] hover:text-white transition-all delay-100 active:bg-[#ff4d30]  focus:bg-[#ff4d30] focus:text-white font-semibold text-lg"
              id="btn6"
              onClick={() => {
                setActive("FifthCar");
                btnID("btn4");
              }}>
              VW Passat CC
            </button>
          </div>
          {active === "FirstCar" && <CarModels data={CAR_DATA} carID={0} />}
          {active === "SecondCar" && <CarModels data={CAR_DATA} carID={1} />}
          {active === "ThirdCar" && <CarModels data={CAR_DATA} carID={2} />}
          {active === "FourthCar" && <CarModels data={CAR_DATA} carID={3} />}
          {active === "FifthCar" && <CarModels data={CAR_DATA} carID={4} />}
        </div>
      </div>
    </section>
  );
}

export default Models;
