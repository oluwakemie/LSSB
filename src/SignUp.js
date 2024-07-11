import React, { useState } from "react";
import lagoslogo from "./assets/lagos-logo.png";
import Group from "./assets/Group.png";
import comma from "./assets/comma.png";

const SignUp = () => {
const [isOpen, setIsOpen] = useState(false)
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

        <div className="flex flex-col :flex-row w-full h-screen  items-center">
          <div className="mx-auto w-full max-w-[65%] p-6 md:p-20 ">
            <form>
              <h2 className="text-[32px] text-[#202430] flex items-center justify-center">
                Sign Up
              </h2>
              <div>
                <label className="text-[16px] text-[#515B6F] font-semibold">
                  Enter ID TYPE
                </label>
                <div className="py-2">
                  {" "}
                  <button onClick={() => setIsOpen}
                    type="button"
                    className="border w-full text-center outline-[#CCCCF5] py-2 px-3 mt-4 text-[16px] font-semibold flex justify-between items-center"
                  >
                    Select ID Type
                    <svg
                      width="18"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.4977 0.988801L9.00072 8.2968L1.50372 0.988801C1.36978 0.857957 1.18997 0.784703 1.00272 0.784703C0.81548 0.784703 0.635666 0.857957 0.501725 0.988801C0.436868 1.05235 0.385343 1.1282 0.350168 1.21191C0.314993 1.29561 0.296875 1.3855 0.296875 1.4763C0.296875 1.5671 0.314993 1.65699 0.350168 1.7407C0.385343 1.82441 0.436868 1.90025 0.501725 1.9638L8.47722 9.7398C8.61729 9.87632 8.80514 9.95273 9.00072 9.95273C9.19631 9.95273 9.38416 9.87632 9.52423 9.7398L17.4997 1.9653C17.565 1.90171 17.617 1.82567 17.6524 1.74169C17.6878 1.6577 17.7061 1.56746 17.7061 1.4763C17.7061 1.38514 17.6878 1.2949 17.6524 1.21092C17.617 1.12693 17.565 1.05089 17.4997 0.987301C17.3658 0.856456 17.186 0.783203 16.9987 0.783203C16.8115 0.783203 16.6317 0.856456 16.4977 0.987301V0.988801Z"
                        fill="#A8ADB7"
                      />
                    </svg>
                  </button>
                </div>

                {/* <input
                  type="text"
                  name="name"
                  placeholder=""
                  className="appearance-none relative block w-full px-3 py-2 mt-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md"
                /> */}
              </div>
              <div className="my-3">
                <label className="text-[16px]   text-[#515B6F] font-semibold">
                  Enter LASSRA/NIN
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Email Address"
                  className="appearance-none relative mt-2 block w-full px-3 py-2 border border-gray-300 placeholder-[#A8ADB7]  text-gray-900 rounded-md"
                />
              </div>
              <button
                type="button"
                className="border w-full text-center bg-[#AF8544] outline-none text-[#fff] font-semibold text-[16px] py-2"
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
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
