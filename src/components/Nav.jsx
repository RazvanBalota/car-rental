import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function Nav() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="py-6 w-full flex items-center absolute z-10 ">
      <div className="container mx-auto flex items-center justify-between gap-x-10 pt-4 px-6">
        <div className="w-36 flex ">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden md:hidden lg:flex">
          <ul className="flex gap-x-6 font-rubik text-[#010103] font-medium tracking-wide">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">Home</li>
            </Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">About</li>
            </Link>
            <Link to="/vehicles" onClick={() => window.scrollTo(0, 0)}>
              <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">Vehicle Models</li>
            </Link>
            <Link to="/testimonials" onClick={() => window.scrollTo(0, 0)}>
              <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">Testimonials</li>
            </Link>
            <Link to="/team" onClick={() => window.scrollTo(0, 0)}>
              <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">Our Team</li>
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:hidden lg:flex  gap-x-4 font-rubik font-medium">
          <button className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">Sign In</button>
          <button className=" py-2 px-6 bg-[#ff4d30] text-white rounded-sm shadow-md hover:bg-orange transition-all delay-100 cursor-pointer">
            Register
          </button>
        </div>
      </div>

      <div onClick={() => setNav(!nav)} className="lg:hidden cursor-pointer z-10 pt-10 px-6 ">
        {nav ? (
          <MdClose size={30} className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75" />
        ) : (
          <RxHamburgerMenu size={30} className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75" />
        )}
      </div>
      {nav ? (
        <ul className="bg-white text-2xl font-medium gap-y-10 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen">
          <Link to="/" onClick={openNav}>
            <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">Home</li>
          </Link>
          <Link to="/about" onClick={openNav}>
            <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">About</li>
          </Link>
          <Link to="/vehicles" onClick={openNav}>
            <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">Vehicle Models</li>
          </Link>
          <Link to="/testimonials" onClick={openNav}>
            <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">Testimonials</li>
          </Link>
          <Link to="/team" onClick={openNav}>
            <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">Our Team</li>
          </Link>
          <Link to="/contact" onClick={openNav}>
            <li className="hover:text-[#ff4d30] cursor-pointer transition-all delay-75">Contact</li>
          </Link>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Nav;
