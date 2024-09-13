import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setuserData] = useState({
    name: "Soumik Mondal",
    image: assets.profile_pic,
    email: "soumikmondal@gmail.com",
    phone: "+91 9932058312",
    address: {
      line1: "15/4 Nandalal Mukherjee Lane",
      line2: "Howrah-711104",
    },
    gender: "Male",
    dob: "2000-03-12",
    aadharNo: "863348226474",
  });
  const [isEdit, setIsEdit] = useState(1);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setuserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl mt-4 text-neutral-800">{userData.name}</p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none"/>
      <div>
        <p className="to-neutral-500 underline mt-3">CONTACT INFORMATION</p>
      </div>
      <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
        <p className="font-medium">Email id:</p>
        <p className="text-blue-600">{userData.email}</p>
        <p className="font-medium">Phone:</p>
        {isEdit ? (
          <input className="bg-gray-100 max-w-52"
            type="text"
            value={userData.phone}
            onChange={(e) =>
              setuserData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        ) : (
          <p className="text-blue-500">{userData.phone}</p>
        )}
        <p className="font-medium">Address:</p>
        {isEdit ? (
          <p>
            <input className="bg-gray-50 w-full"
              type="text"
              onChange={(e) =>
                setuserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
              value={userData.address.line1}
            />{" "}
            <br />
            <input className="bg-gray-50 w-full"
              type="text"
              onChange={(e) =>
                setuserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
              value={userData.address.line2}
            />
          </p>
        ) : (
          <p className="text-gray-500">
            {userData.address.line1} <br />
            {userData.address.line2}
          </p>
        )}
      </div>
      <div>
        <p className="to-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-500">{userData.gender}</p>
          )}
          <p>Birthday:</p>
          {isEdit ? (
            <input
              type="date"
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-500">{userData.dob}</p>
          )}
          <p>Aadhar No:</p>
          {isEdit ? (
            <input
              type="text"
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, aadharNo: e.target.value }))
              }
              value={userData.aadharNo}
            />
          ) : (
            <p className="text-gray-500">{userData.aadharNo}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button onClick={()=>setIsEdit(false)} class="cursor-pointer  font-semibold overflow-hidden relative z-100 border border-green-500  group px-8 py-2 ">
            <span class="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">
              Save Information
            </span>
            <span class="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span class="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </button>
        ) : (
          <button onClick={()=>setIsEdit(true)} class="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2">
            <span class="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">
              Edit
            </span>
            <span class="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span class="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
