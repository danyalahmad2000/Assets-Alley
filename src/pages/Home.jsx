import React from "react";
import Tabs from "../components/Search/Tabs";
import heroImg from "../assets/images/hero-img.png";
import heroImg2 from "../assets/images/hero-img-2.png"
import CountryCards from "../components/CountryCards/CountryCards";

const Home = () => {
  return (
    <>
      <div className="bg-[#ECF1F7] w-[1440px] h-[600px] mx-auto rounded-[70px] flex flex-row justify-between overflow-hidden mb-[40px] ">
        <div className=" ml-[120px] mt-[120px] ">
          <div className="h-[300px] w-[500px]">
            <h1 className="heading mb-[40px]">
              Easy way to find a perfect property
            </h1>
            <p className="text__para mb-[40px]">
              We provide a complete service for the sale, purchase or rental of
              real estate
            </p>
          </div>
          <div className="relative">
            <Tabs />
          </div>
        </div>
        <div className="">
          <img className="size-[600px] mt-[100px]" src={heroImg} alt="" />
        </div>
      </div>

      <div className="w-[1440px] h-[700px] mx-auto flex flex-col mt-[100px]">
        <div className="w-[600px] mx-auto">
          <h1 className="heading text-[44px] text-center leading-[55px]">
            We are available in many well known countries
          </h1>
        </div>
        <div className="w-[1440px] flex flex-row my-auto">
          <CountryCards />
        </div>
      </div>

      <div className="bg-[#ECF1F7] w-[1440px] h-[500px] mx-auto rounded-[70px] flex flex-row justify-between overflow-hidden mb-[40px] ">
        <div className=" ml-[120px] mt-[90px] ">
          <div className="h-[300px] w-[500px]">
            <h1 className="heading mb-[40px] leading-[65px]">
              Find your best Real Estate
            </h1>
            <p className="text__para mb-[40px]">
              We provide a complete service for the sale, purchase or rental of
              real estate
            </p>
            <button className="w-[200px] h-[50px] bg-blue-500 rounded-[20px] text-white">CONTACT US</button>
          </div>
        </div>
        <div className="">
          <img className="size-[600px]" src={heroImg2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
