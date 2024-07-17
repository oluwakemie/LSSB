import React from "react";
import lagoslogo from "./assets/lagos-logo.png";
import Group from "./assets/Group.png";
import comma from "./assets/comma.png";
const Login = () => {
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

      <div className="flex flex-col md:flex-row w-full h-screen items-center ">
        <div className="mx-auto w-full max-w-[85%] p-6 md:p-20 ">
          <form className="">
            {" "}
            <h3 className="text-[32px] text-center my-3 font-semibold">Welcome Back</h3>
            <label htmlFor="" className="font-bold text-[16px]">
              Enter Email/NIN/LASSRA
            </label>
            <input
              type="text"
              placeholder="Enter email address or LASSRA ID"
              className="w-full border px-3 py-3 my-3 rounded-md placeholder:text-[#A8ADB7] border-[#D6DDEB] border-b outline-none focus:outline-none"
            />
            <label htmlFor="" className="font-bold text-[16px]">
              Password
            </label>
            <input
              type="email"
              placeholder="Enter password"
              className="w-full border px-3 py-3 my-3 rounded-md placeholder:text-[#A8ADB7] border-[#D6DDEB] border-b outline-none focus:outline-none"
            />
            <div class="flex items-center ">
              <input
                type="radio"
                className="h-5 w-5 mr-3 border border-[#E2E8F0] "
              />
              <h3 class="text-[#1A202C] text-[16px] leading-[24px] tracking-[0.2px] font-semibold  ">
                Remember me
              </h3>
            </div>
            <button className="bg-[#AF8544] w-full h-[50px] rounded-md my-4 text-white font-bold">
              Login
            </button>
            <p className="text-[14px]">Don't have an account? <span className="text-[#AF8544]">Sign Up</span></p>
            <p>Forgot Password <span className="text-[#AF8544]">Reset Now</span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
