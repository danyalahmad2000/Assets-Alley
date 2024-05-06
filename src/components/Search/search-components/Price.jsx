import React from 'react';

const Price = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-full lg:w-[250px]  h-[90px] flex flex-row justify-between px-4 sm:px-auto bg-white">
          <div className="flex flex-col h-[90px] justify-center items-start px-2 sm:px-4 py-auto">
            <p className="font-[700]">Price Range</p>
            <p className="text-textColor">Choose Price Range</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
