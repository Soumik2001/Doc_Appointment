import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currSymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const daysofWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlot([]);

    // calculate time for all slots

    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currDate = new Date(today);
      currDate.setDate(today.getDate() + i);

      //   setting end time of the date with index

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(24, 0, 0, 0);

      //   setting hours

      if (today.getDate() === currDate.getDate()) {
        currDate.setHours(
          currDate.getHours() > 10 ? currDate.getHours() + 1 : 10
        );
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currDate.setHours(10);
        currDate.setMinutes(0);
      }

      let timeSlot = [];
      while (currDate < endTime) {
        let formattedTime = currDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

        // adding slot to array

        timeSlot.push({
          datetime: new Date(currDate),
          time: formattedTime,
        });
        // Increment current time by 30 minutes

        currDate.setMinutes(currDate.getMinutes() + 30);
      }
      setDocSlot((prev) => [...prev, timeSlot]);
    }
  };
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  useEffect(() => {
    console.log(docSlot);
  }, [docSlot]);

  return (
    docInfo && (
      <div>
        {/* ----------------Doctors details-------------------- */}
        <div className="flex flex-col sm:flex-row gap-5 ">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* ----------------Doctors Information-------------------- */}

            <p
              data-aos="flip-up"
              data-aos-duration="1000"
              className="flex items-center gap-2 text-2xl font-medium text-gray-900"
            >
              {docInfo.name}{" "}
              <img
                data-aos="flip-up"
                data-aos-duration="1000"
                className="w-5"
                src={assets.verified_icon}
                alt=""
              />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p data-aos="fade-right" data-aos-duration="1000">
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button
                data-aos="flip-up"
                data-aos-duration="1000"
                className="py-0 px-2 border text-sm rounded-full"
              >
                {docInfo.experience}
              </button>
            </div>
            {/* ----------------Doctors About-------------------- */}
            <div>
              <p
                data-aos="fade-up-right"
                data-aos-duration="1000"
                className="flex items-center gap-1 text-sm font-medium mt-3 text-gray-900"
              >
                About <img src={assets.info_icon} alt="" />
              </p>
              <p
                data-aos="fade-up-left"
                data-aos-duration="1000"
                className="text-sm text-gray-500 max-w-[700px] mt-1"
              >
                {docInfo.about}
              </p>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-gray-500 font-medium mt-4"
            >
              Apointment Fee:{" "}
              <span className="text-gray-600">
                {currSymbol} {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/* ----------------BOOKING Slots-------------------- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlot.length &&
              docSlot.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysofWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex w-full items-center gap-3 mt-4 overflow-x-scroll">
            {docSlot.length &&
              docSlot[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button
            onClick={() => {
              navigate("/doctors");
              scrollTo(0, 0);
            }}
            type="submit"
            className="flex justify-center gap-2 items-center mt-5 mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            Book an Appointment
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
        </div>

        {/* -------------Listing Related Doctors--------------- */}

        <RelatedDoctors docId = {docId} speciality = {docInfo.speciality}/>
      </div>
    )
  );
};

export default Appointment;
