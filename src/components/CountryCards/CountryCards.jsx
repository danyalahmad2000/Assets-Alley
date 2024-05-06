import React from "react";
import america from "../../assets/images/america.jpg";
import france from "../../assets/images/france.jpg";
import italy from "../../assets/images/italy.jpg";
import london from "../../assets/images/london.jpg";

const CountryCards = () => {
  return (
    <>
      <div className="w-full max-h-[400px]  rounded-[20px] mb-[30px]">
        <img
          className="w-full h-[400px] rounded-[20px] object-cover object-center"
          src={america}
          alt=""
        />
      </div>

      <div className="w-full max-h-[400px]  rounded-[20px] mb-[30px]">
        <img
          className="w-full h-[400px] rounded-[20px] object-cover object-center"
          src={france}
          alt=""
        />
      </div>

      <div className="w-full max-h-[400px]  rounded-[20px] mb-[30px]">
        <img
          className="w-full h-[400px] rounded-[20px] object-cover object-center"
          src={italy}
          alt=""
        />
      </div>

      <div className="w-full max-h-[400px]  rounded-[20px] mb-[30px]">
        <img
          className="w-full h-[400px] rounded-[20px] object-cover object-center"
          src={london}
          alt=""
        />
      </div>
    </>
  );
};

export default CountryCards;
