import React from 'react'
import { FaChevronDown } from 'react-icons/fa';

const Property = () => {
  return (
    <>
      <div className="w-[250px] h-[90px] flex flex-row justify-between px-auto bg-white">
        <div className="flex flex-col w-[70%] h-[90px] justify-center items-start px-4 py-auto">
          <p className="font-[700]">Property</p>
          <p className="text-textColor">Choose Property Type</p>
        </div>
        <div className="w-[30%] flex justify-center items-center">
          <FaChevronDown className="size-[16px] mt-[22px]"/>
        </div>
      </div>
    </>
  )
}

export default Property
