import React from "react";
import lagoslogo from "./assets/lagos-logo.png";
import Group from "./assets/Group.png";
import comma from "./assets/comma.png";
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="w-full :w-1/2 md:block hidden relative">
        <img
          src={Group}
          alt=""
          className="w-full object-cover h-full"
        />
        <div className=" flex flex-row items-center gap-2 absolute top-10 left-10 text-white">
          <img src={lagoslogo} alt="" className="" />
          <p className="">
            Lagos State <br /> Scholarship Board
          </p>
        </div>
        
      </div>

      <div className="flex flex-col md:flex-row w-full h-screen items-center ">
        <div className="mx-auto w-full max-w-[85%] p-6 md:p-20">
          <form className="">
            {" "}
            <h3 className="text-[32px] text-center my-3 font-semibold">Get a Scholarship grant today</h3>
            <label htmlFor="" className="font-bold text-[16px]">
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border px-3 py-3 my-3 rounded-md placeholder:text-[#A8ADB7] border-[#D6DDEB] border-b outline-none focus:outline-none"
            />
            <label htmlFor="" className="font-bold text-[16px]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border px-3 py-3 my-3 rounded-md placeholder:text-[#A8ADB7] border-[#D6DDEB] border-b outline-none focus:outline-none"
            />
            <p className="text-[16px] my-4 font-semibold text-[#AF8544]">
              Forgot Password? Reset Now
            </p>
            <button className="bg-[#AF8544] w-full h-[50px] rounded-md my-4 text-white font-bold">
              Continue
            </button>
            <p className="text-[16px]">
              Already have an account?{" "}
              <span className="text-[#AF8544] font-bold ">Login</span>
            </p>
            <p className="my-6 text-[14px] font-thin">
              By clicking 'Continue', you acknowledge that you have read and
              accept the{" "}
              <span className="text-[#AF8544]">
                Terms of Service and Privacy Policy.
              </span>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
