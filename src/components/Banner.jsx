import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-primary rounded-lg px-6 sm:px-10 md:px-14 my-20 md:mx-10">
      {/* -------------------- Left Side -------------------- */}

      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p data-aos="fade-left" data-aos-duration="1000">
            Book Appointment
          </p>
          <p data-aos="fade-right" data-aos-duration="1000" className="mt-4">
            With 100+ Trusted Doctors
          </p>
        </div>

        <button onClick={()=>{navigate('/login')}} data-aos="fade-up" data-aos-duration="1000" className="group/button relative inline-flex items-center justify-center overflow-hidden mt-5 rounded-md bg-blue-900 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
          <span className="text-lg">Create Account</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/30"></div>
          </div>
        </button>
      </div>

      {/* -------------------- Right Side -------------------- */}

      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
