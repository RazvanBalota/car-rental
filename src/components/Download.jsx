import React from "react";
import googleplay from "../assets/googleplay.svg";
import appstore from "../assets/appstore.svg";

function Download() {
  return (
    <section className=" h-[560px] bg-[#f8f8f8] bg-download bg-no-repeat bg-bottom mt-20 flex items-center mb-10">
      <div className="container mx-auto flex flex-col px-10">
        <div className="max-w-[520px]">
          <h2 className="text-4xl text-center lg:text-left font-semibold mb-6">
            Download our app to get most out of it
          </h2>
          <p className="text-[#706f7b] mb-8 text-center lg:text-left">
            Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so
            intention defective at convinced. Led income months itself and houses you.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-10 items-center gap-x-10">
          <img src={googleplay} alt="" />
          <img src={appstore} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Download;
