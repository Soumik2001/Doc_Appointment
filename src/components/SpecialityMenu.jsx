import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div 
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >
      <h1 data-aos="zoom-in-left" data-aos-duration="2000" className="text-3xl font-medium">Find by Speciality</h1>
      <p data-aos="zoom-in-right" data-aos-duration="2000" className="sm:w-1/3 text-center text-[18px]">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex items-center sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img data-aos="zoom-in" data-aos-duration="1000" className="w-16 sm:w-24 mb-2 mx-3" src={item.image} alt="" />
            <p data-aos="zoom-out" data-aos-duration="1000" className="text-base p-2">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
