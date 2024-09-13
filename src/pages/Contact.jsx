import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p data-aos="flip-up"
              data-aos-duration="1000">
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p data-aos="fade-right"
              data-aos-duration="1000" className="font-semibold text-gray-600 text-lg">OUR OFFICE</p>
          <p data-aos="fade-left"
              data-aos-duration="1000" className="text-gray-500">764, Sarat Chatterjee Road, Howrah - 711104</p>
          <p data-aos="fade-right"
              data-aos-duration="1000" className="text-gray-500">Tel: 8617231776 <br/> Email: soumikmondal61116@gmail.com</p>
          <p data-aos="fade-left"
              data-aos-duration="1000" className="font-semibold text-gray-600 text-lg">CAREERS AT PRESCRIPTO</p>
          <p data-aos="fade-right"
              data-aos-duration="1000" className="text-gray-500">Learn more about our teams and job openings.</p>

          <button data-aos="fade-up-left"
     data-aos-easing="linear"
     data-aos-duration="1000" class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
