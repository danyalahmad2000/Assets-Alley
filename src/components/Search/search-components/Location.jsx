import React from "react";
import { SlLocationPin } from "react-icons/sl";

const Location = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-full lg:w-[250px] h-[90px] lg:rounded-bl-[20px] flex flex-row justify-between px-4 sm:px-auto bg-white relative">
          <div className="flex flex-col w-[70%] sm:w-full h-[90px] justify-center items-start px-2 sm:px-4 py-auto">
            <p className="font-[700]">Location</p>
            <p className="text-textColor">Select your City</p>
          </div>
          <div className="w-[30%] sm:w-auto flex justify-center items-center">
            <SlLocationPin className="size-[20px] mt-[15px]" />
          </div>
          <div className="absolute h-[45px] bg-gray-300 w-[1px] right-0 top-[22.5px]"></div>
        </div>
      </div>
    </>
  );
};

export default Location;
