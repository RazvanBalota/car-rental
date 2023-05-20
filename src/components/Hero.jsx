import React from "react";
import heroesbg from "../assets/heroes-bg.png";

function Hero({ name }) {
  return (
    <div>
      <img src={heroesbg} alt="" className="opacity-30" />
      <div className="absolute top-[25%] left-[10%]">
        <h2 className="text-4xl font-poppins font-bold tracking-wide block">{name}</h2>
      </div>
    </div>
  );
}

export default Hero;
