import React from "react";
import drive from "../assets/drive.png";
import contact from "../assets/contact.png";
import selectcar from "../assets/selectcar.png";

function PlanTrip() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="text-center flex flex-col items-center pt-10 lg:pt-0">
          <p className="text-2xl mb-8 font-medium">Plan your trip now</p>
          <h1 className="text-4xl font-bold tracking-wide px-8 lg:px-0">Quick & easy car rental</h1>
        </div>
        <div className="flex flex-col lg:flex-row px-14 mt-14">
          <div className="flex flex-1 flex-col justify-center items-center text-center px-10">
            <img src={selectcar} alt="" className="w-40" />
            <h1 className="text-3xl font-bold mb-4">Select car</h1>
            <p className="text-[#706f7b] tracking-wide">
              We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center text-center px-10">
            <img src={contact} alt="" className="w-40" />
            <h1 className="text-3xl font-bold mb-4">Contact Operator</h1>
            <p className="text-[#706f7b] tracking-wide">
              Our knowledgeable and friendly operators are always ready to help with any questions or concerns
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center text-center px-10">
            <img src={drive} alt="" className="w-40" />
            <h1 className="text-3xl font-bold mb-4">Let's drive</h1>
            <p className="text-[#706f7b] tracking-wide">
              Whether you're hitting the open road, we've got you covered with our wide range of cars
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanTrip;
