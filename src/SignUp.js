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

        <div className="flex flex-col md:flex-row w-full h-screen items-center">
          <div className="mx-auto w-full max-w-[85%] p-6 md:p-20">
            <form>
              <h2 className="text-[32px] text-[#202430] flex items-center justify-center">
                Sign Up
              </h2>
                <div className="py-3 w-full  ">
                <label className="text-[16px]   text-[#515B6F] font-semibold">
                Enter ID TYPE
                </label>
                  <select name="" id="" className="w-full py-2 pl-4 pr-4 text-[#A0AEC0] leading-[21px] tracking-[0.2px] text-[16px] border border-[#E2E8F0] rounded-md  focus:border-gray-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300">
                    <option value="">Select ID Type</option>
                    <option value={"Success"}>NIN</option>
                    <option value={"Failed"}>LASSRA</option>
                  </select>
                </div>
              
              <div className="mt-3">
                <label className="text-[16px] text-[#515B6F] font-semibold">
                  Enter LASSRA/NIN
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Email Address"
                  className="appearance-none relative mt-2 block w-full px-3 py-2 placeholder-[#A8ADB7]  leading-[21px] tracking-[0.2px] text-[16px] border border-[#E2E8F0] rounded-md  focus:border-gray-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 text-gray-900 rounded-md"
                />
              </div>
              <button
                type="button"
                className="border mt-3 w-full text-center bg-[#AF8544] outline-none text-[#fff] font-semibold text-[16px] py-2"
              >
                Continue{" "}
              </button>
              <button
                type="button"
                className="border w-full text-center outline-[#CCCCF5] py-2 mt-4 text-[16px] font-semibold text-[#AF8544] "
              >
                SignUp with LASSRA ID
              </button>
            </form>
            <div className="mt-10 ">
              {" "}
              <p className="text-[16px]">
                Already have an account?{" "}
                <span className="text-[#AF8544]">Login?</span>
              </p>
              <p className="text-[14px]">
                By clicking 'Continue', you acknowledge that you have read and
                accept the{" "}
                <span className="text-[#AF8544] ">
                  Terms of Service and Privacy Policy
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
