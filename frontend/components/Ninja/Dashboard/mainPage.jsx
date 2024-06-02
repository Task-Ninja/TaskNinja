import React from "react";

import SecondSectionNinjaDashboard from "@/components/Ninja/Dashboard/secondSection";
import ThirdSectionNinjaDashboard from "@/components/Ninja/Dashboard/thirdSection";
import FourthSectionNinjaDashboard from "@/components/Ninja/Dashboard/fourthSection";
const MainPageNinjaDashboard = () => {
  return (
    <>
      <section
        id="welcomeSection"
        className="flex items-center justify-between gap-2 w-full"
      >
        <h1 className="text-4xl text-[#000]">Hi there, Joeylene 👋</h1>
        <div className="flex items-center gap-4 font-semibold">
          <div className="flex items-center gap-2">
            <div className="h-[15px] w-[15px] bg-[#008000] rounded-full"></div>{" "}
            Online
          </div>
          <div>
            <div className="relative">
              <select className="block w-full py-2 pr-8 pl-3 text-base bg-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="option1">Available</option>
                <option value="option2">Sleep</option>
                <option value="option3">Working</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SecondSectionNinjaDashboard />
      <ThirdSectionNinjaDashboard />
      <FourthSectionNinjaDashboard />
    </>
  );
};

export default MainPageNinjaDashboard;
