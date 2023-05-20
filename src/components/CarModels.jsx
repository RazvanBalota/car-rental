import { useState } from "react";

function CarModels({ data, carID }) {
  const [carLoad, setCarLoad] = useState(false);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className=" flex flex-col lg:flex-row  px-10 lg:px-0 gap-x-0 lg:gap-x-40 mt-6">
          {/* car */}
          <div className="">
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="flex flex-col pt-10 lg:pt-0 ">
            <div className="text-2xl bg-[#ff4d30] text-white px-4 py-2">
              <span className="font-bold">${car.price}</span>/ rent per day
            </div>
            <div className="border-2 border-t-0 border-black flex flex-col items-center text-md">
              <div className="flex justify-between px-4 border-b-2 w-full border-black py-2 ">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="flex justify-between px-4 border-b-2 w-full border-black py-2 ">
                <span>Mark</span>
                <span>{car.mark}</span>
              </div>

              <div className="flex justify-between px-4 border-b-2 w-full border-black  py-2">
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className="flex justify-between px-4 border-b-2 w-full border-black py-2 ">
                <span>Doors</span>
                <span>{car.doors}</span>
              </div>

              <div className="flex justify-between px-4 border-b-2 w-full border-black py-2">
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className="flex justify-between px-4 border-b-2 w-full border-black py-2">
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className="flex justify-between px-4 w-full py-2">
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a
              className="flex justify-center bg-[#ff4d30] py-2 text-white rounded-sm mt-4 uppercase font-bold tracking-widest text-xl"
              href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarModels;
