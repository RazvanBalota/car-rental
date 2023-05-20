import React from "react";
import Hero from "../components/Hero";
import person1 from "../assets/TeamProfilePicture/person1.png";
import person2 from "../assets/TeamProfilePicture/person2.png";
import person3 from "../assets/TeamProfilePicture/person3.png";
import person4 from "../assets/TeamProfilePicture/person4.png";
import person5 from "../assets/TeamProfilePicture/person5.png";
import person6 from "../assets/TeamProfilePicture/person6.png";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Team() {
  const ourTeam = [
    { img: person1, name: "Luke Miller", job: "Salesman" },
    { img: person2, name: "Michael Diaz", job: "Business Owner" },
    { img: person3, name: "Briana Ross", job: "Photographer" },
    { img: person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: person5, name: "Martin Rizz", job: "Mechanic" },
    { img: person6, name: "Caitlyn Hunt", job: "Manager" },
  ];
  return (
    <div>
      <Hero name="Our Team" />
      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-10 p-10  pt-36 lg:pt-10 ">
        {ourTeam.map((ppl, id) => (
          <div className="flex flex-col justify-center items-center shadow-3xl rounded-md">
            <img src={ppl.img} alt="" className="bg-[#f1f1f1] w-full h-full" />
            <h2 className="text-2xl font-semibold mt-4 mb-4">{ppl.name}</h2>
            <p className="text-gray tracking-wide mb-4">{ppl.job}</p>
          </div>
        ))}
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default Team;
