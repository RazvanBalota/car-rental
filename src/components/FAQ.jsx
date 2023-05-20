import React, { useState } from "react";
import faqsection from "../assets/faqsection.png";
import data from "../data.jsx";
import { IoIosArrowDown } from "react-icons/io";

function FAQ() {
  const [showAnswer, setShowAnswer] = useState(0);

  const toggle = (i) => {
    if (showAnswer === i) {
      return setShowAnswer(null);
    }

    setShowAnswer(i);
  };

  return (
    <section className="h-full lg:h-screen relative">
      <img src={faqsection} alt="" className="absolute top-[50%] z-1" />
      <div className="container mx-auto pt-20 px-10 max-w-[800px]">
        <div className="flex flex-col justify-center text-center pb-10 ">
          <p className="text-2xl font-semibold pb-6">FAQ</p>
          <h2 className="text-4xl font-semibold pb-6">Frequently Asked Questions</h2>
          <p className="text-[#706f7b] ">
            Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns
            and Inquiries.
          </p>
        </div>
        <div className="relative shadow-3xl rounded-md opacity-90 mt-8 bg-white">
          {data.map((item, i, index) => (
            <div>
              <div key={index} onClick={() => toggle(i)}>
                {showAnswer === i ? (
                  <h2 className="transition-all ease-in-out duration-100 flex items-center justify-between text-xl font-poppins py-6 px-10 font-medium bg-[#ff4d30] w-full text-white shadow-lg">
                    {item.question} <IoIosArrowDown />
                  </h2>
                ) : (
                  <h2 className="transition-all ease-in-out duration-100 flex items-center justify-between  text-xl font-poppins py-6 px-10 font-medium w-full ">
                    {item.question} <IoIosArrowDown className="-rotate-90" />
                  </h2>
                )}
              </div>
              <p
                className={
                  showAnswer === i
                    ? "max-h-[20rem] transition-all duration-500 px-12 py-6 text-md text-[#706f7b]"
                    : "max-h-0 overflow-hidden transition-all  duration-500 px-12 text-md text-[#706f7b]"
                }>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
