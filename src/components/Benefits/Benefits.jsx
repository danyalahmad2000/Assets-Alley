import React from "react";
import america from "../../assets/images/america.jpg";
import france from "../../assets/images/france.jpg";
import italy from "../../assets/images/italy.jpg";
import london from "../../assets/images/london.jpg";

const Benefits = () => {
  return (
    <>
      <div className="w-full max-h-[600px] rounded-[20px] mb-[30px] ">
        <div className="bg-[#ECF1F7] size-[300px] rounded-full mx-auto flex justify-center items-center hover:bg-blue-400">
          <p className="text-[32px] font-[800] text-center">
            No Tenancy Agreements
          </p>
        </div>
        <p className="text-[24px] text-center font-[800] mt-10">
          No Hassle for Landlords
        </p>
        <p className="text-[16px] text-center font-[500] mt-2">
          Landlords don't have to enter tenancy agreements or burden the risks
        </p>
      </div>

      <div className="w-full max-h-[600px] rounded-[20px] mb-[30px] ">
        <div className="bg-[#ECF1F7] size-[350px] md:size-[400px] rounded-full mx-auto flex justify-center items-center hover:bg-blue-400">
          <p className="text-[32px] font-[800] text-center">
            Cut out expensive Agency and Management Fees
          </p>
        </div>
        <p className="text-[24px] text-center font-[800] mt-10">
          More Money on the Table
        </p>
        <p className="text-[16px] text-center font-[500] mt-2">
          Assets Ally takes a small 6% fee for Brokering the deal and allows you
          to bypass traditional 10-15% fees.
        </p>
      </div>

      <div className="w-full max-h-[600px] rounded-[20px] mb-[30px] ">
        <div className="bg-[#ECF1F7] size-[300px] rounded-full mx-auto flex justify-center items-center hover:bg-blue-400">
          <p className="text-[32px] font-[800] text-center">
            Tax & Legal Benefits
          </p>
        </div>
        <p className="text-[24px] text-center font-[800] mt-10">
          More Protection, Less Problems
        </p>
        <p className="text-[16px] text-center font-[500] mt-2">
          Business Deals instead of tenancy agreements means more protection and
          control for landlords. As well as more tax deductables
        </p>
      </div>
    </>
  );
};

export default Benefits;
