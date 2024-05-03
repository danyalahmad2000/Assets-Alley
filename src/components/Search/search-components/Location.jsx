import React from "react";
import { SlLocationPin } from "react-icons/sl";

const Location = () => {
  return (
    <>
      <div className="w-[250px] h-[90px] rounded-bl-[20px] flex flex-row justify-between px-auto bg-white">
        <div className="flex flex-col w-[70%] h-[90px] justify-center items-start px-4 py-auto">
          <p className="font-[700]">Location</p>
          <p className="text-textColor">Select your City</p>
        </div>
        <div className="w-[30%] flex justify-center items-center">
          <SlLocationPin className="size-[20px] mt-[15px]"/>
        </div>
      </div>
    </>
  );
};

export default Location;
