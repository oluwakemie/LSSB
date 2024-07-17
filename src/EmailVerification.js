import React from "react";
import lagoslogo from "./assets/lagos-logo.png";
import Group from "./assets/Group.png";
import comma from "./assets/comma.png";
const EmailVerification = () => {
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

      <div className="flex flex-col md:flex-row w-full h-screen items-center justify-center relative">
        
        <div className="mx-auto w-full max-w-[85%] p-6 md:p-20">
          {" "}
          <h3 className="text-[32px] w-full text-[#202430] m-5">
            Email Verification
          </h3>
          <p className="text-[16px] text-[#515B6F] ">
            Kindly input the OTP Code sent to your Email Address
          </p>
          <form action="" className="flex flex-col mt-[40px]">
            <p className="text-[#515B6F] my-2 font-semibold">Enter OTP Code</p>
            <div className="flex flex-row flex-wrap gap-[10px] w-full justify-center">
              <input
                type="number"
                className="border h-[56px] w-[60px] rounded-[6px] text-center  "
                placeholder="5"
              />
              <input
                type="number"
                disabled
                className="border h-[56px] w-[60px] rounded-[6px] text-center "
                placeholder="5"
              />

              <input
                type="number"
                disabled
                className="border h-[56px] w-[60px] rounded-[6px] text-center "
                placeholder="5"

              />
              <input
                type="number"
                disabled
                className="border h-[56px] w-[60px] rounded-[6px] text-center "
                placeholder="5"
              />
              <input
                type="number"
                disabled
                className="border h-[56px] w-[60px] rounded-[6px] text-center "
                placeholder="5"
              />
              <input
                type="number"
                disabled
                placeholder="5"
                className="border h-[56px] w-[60px] rounded-[6px] text-center "
              />
            </div>
          </form>
          <button className="bg-[#AF8544] w-full  h-[50px]  my-4 text-white font-bold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
