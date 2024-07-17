import React, { useState } from "react";
import lagoslogo from "./assets/lagos-logo.png";
import Group from "./assets/Group.png";
import comma from "./assets/comma.png";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="w-full :w-1/2 md:block hidden relative">
          <img src={Group} alt="" className="w-full  object-cover h-full" />
          <div className=" flex flex-row items-center gap-2 absolute top-10 left-10 text-white">
            <img src={lagoslogo} alt="" className="" />
            <p className="">
              Lagos State <br /> Scholarship Board
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full h-screen items-center ">
          <div className="mx-auto w-full max-w-[85%] p-6 md:p-20">
            <form>
              <h2 className="text-[32px] text-[#202430] flex items-center justify-center">
                Account Screening
              </h2>
              <div className="py-3 w-full  ">
                <label className="text-[16px]   text-[#515B6F] font-semibold">
                  Enter National Identity Number (NIN)/ LASSRA ID
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter NIN"
                  className="appearance-none relative mt-2 block w-full px-3 py-2 placeholder-[#A8ADB7]  leading-[21px] tracking-[0.2px] text-[16px] border border-[#E2E8F0] rounded-md  focus:border-gray-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 text-gray-900 rounded-md"
                />
              </div>

              <div className="mt-3">
                <label className="text-[16px] text-[#515B6F] font-semibold">
                  Enter State of Origin
                </label>

                <select
                  name=""
                  id=""
                  className="w-full py-2 pl-4 pr-4 text-[#A0AEC0] leading-[21px] tracking-[0.2px] text-[16px] border border-[#E2E8F0] rounded-md  focus:border-gray-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                >
                  <option value="">Enter state of Origin</option>
                  <option value={"Success"}>NIN</option>
                  <option value={"Failed"}>LASSRA</option>
                </select>
              </div>
              <div className="mt-3">
                <label className="text-[16px] text-[#515B6F] font-semibold">
                  Enter Local Government of Origin
                </label>

                <select
                  name=""
                  id=""
                  className="w-full py-2 pl-4 pr-4 text-[#A0AEC0] leading-[21px] tracking-[0.2px] text-[16px] border border-[#E2E8F0] rounded-md  focus:border-gray-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                >
                  <option value="">Enter LGA</option>
                  <option value={"Success"}>NIN</option>
                  <option value={"Failed"}>LASSRA</option>
                </select>
              </div>
              <div className="py-3 w-full  ">
                <label className="text-[16px]   text-[#515B6F] font-semibold">
                  Enter Phone Number
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Phone Number"
                  className="appearance-none relative mt-2 block w-full px-3 py-2 placeholder-[#A8ADB7]  leading-[21px] tracking-[0.2px] text-[16px] border border-[#E2E8F0] rounded-md  focus:border-gray-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 text-gray-900 rounded-md"
                />
              </div>
              <div className="mt-3">
                <label className="text-[16px] text-[#515B6F] font-semibold">
            Gender
                </label>

                <select
                  name=""
                  id=""
                  className="w-full py-2 pl-4 pr-4 text-[#A0AEC0] leading-[21px] tracking-[0.2px] text-[16px] border border-[#E2E8F0] rounded-md  focus:border-gray-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                >
                  <option value="">Enter Gender</option>
                  <option value={"Success"}>Female</option>
                  <option value={"Failed"}>Male</option>
                </select>
              </div>
            </form>
            <button className="bg-[#AF8544] w-full h-[50px] rounded-md my-4 text-white font-bold">
             Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
