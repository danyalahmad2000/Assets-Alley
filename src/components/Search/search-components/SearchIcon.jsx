import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchIcon = () => {
  return (
    <>
      <div className="w-[100px] h-[90px] bg-white rounded-br-[20px] rounded-tr-[20px] flex justify-center items-center">
        <div className="bg-blue-500 size-[60px] rounded-[20px] flex justify-center items-center">
          <FaSearch className="size-[30px] text-white" />
        </div>
      </div>
    </>
  );
};

export default SearchIcon;
