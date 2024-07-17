import React from "react";
import lagoslogo from "./assets/lagos-logo.png";
import Group from "./assets/Group.png";
import comma from "./assets/comma.png";
const ResetPassword = () => {
  return (
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

      <div className="flex flex-col md:flex-row w-full h-screen items-center relative">
        <div className="flex items-center gap-2 absolute top-0 left-3 py-3 font-medium text-[#AF8544]">
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 7.27441L16.25 7.27441"
              stroke="#AF8544"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.29883 13.299L1.24883 7.275L7.29883 1.25"
              stroke="#AF8544"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Back</p>
        </div>
        <div className="mx-auto w-full max-w-[85%] p-6  md:p-20">
          <form className="">
            {" "}
            <h3 className="text-[32px] w-full text-[#202430] m-5">Reset your password</h3>
           
            <label htmlFor="" className="font-bold text-[16px] text-[#515B6F] ">
           Enter Your Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border px-3 py-3 my-3  placeholder:text-[#A8ADB7] border-[#D6DDEB] border-b outline-none focus:outline-none"
          />
           <button className="bg-[#AF8544] w-full h-[50px]  my-4 text-white font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
