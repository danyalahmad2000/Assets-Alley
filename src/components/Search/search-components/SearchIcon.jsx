import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchIcon = () => {
  return (
    <>
      <div className="w-full lg:w-[100px] h-[90px] bg-white lg:rounded-br-[20px] lg:rounded-tr-[20px] flex justify-center items-center px-5">
        <div className="bg-blue-500 size-[60px] rounded-[20px] flex justify-center items-center">
          <FaSearch className="size-[30px] text-white" />
        </div>
      </div>
    </>
  );
};

export default SearchIcon;
