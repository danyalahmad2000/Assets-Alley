import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Property = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-full lg:w-[250px] h-[90px] flex flex-row justify-between px-4 sm:px-auto bg-white relative">
          <div className="flex flex-col w-[70%] sm:w-full h-[90px] justify-center items-start px-2 sm:px-4 py-auto">
            <p className="font-[700]">Property</p>
            <p className="text-textColor">Choose Property Type</p>
          </div>
          <div className="w-[30%] sm:w-auto flex justify-center items-center">
            <FaChevronDown className="size-[16px] mt-[22px]" />
          </div>
          <div className="absolute h-[45px] bg-gray-300 w-[1px] right-0 top-[22.5px]"></div>
        </div>
      </div>
    </>
  );
};

export default Property;
