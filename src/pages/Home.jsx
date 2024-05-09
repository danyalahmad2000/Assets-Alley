import React from "react";
import Tabs from "../components/Search/Tabs";
import heroImg from "../assets/images/hero-img.png";
import heroImg2 from "../assets/images/hero-img-2.png";
import CountryCards from "../components/CountryCards/CountryCards";

const Home = () => {
  return (
    <div className="container mx-auto mt-[120px]">
      <div className="bg-[#ECF1F7] relative h-screen lg:max-h-[600px] rounded-[70px] flex flex-row justify-between overflow-hidden mb-[40px]">
        <div className=" px-2 py-2 lg:pl-7 xl:pl-32 lg:pt-32 absolute lg:relative z-10 container">
          <div className="w-full lg:max-w-[500px]">
            <h1 className="heading mt-[120px] lg:mt-0 mb-[10px] lg:mb-[40px] text-black lg:text-black">
              Easy way to find a perfect property
            </h1>
            <p className="text__para mb-[10px] lg:mb-[40px]]">
              We provide a complete service for the sale, purchase or rental of
              real estate
            </p>
          </div>
          <div className="mt-[40px] lg:relative flex justify-center lg:block">
            <Tabs />
          </div>
        </div>
        <div className="">
          <img
            className="size-[600px] absolute bottom-[-15] right-0 lg:mt-[100px]"
            src={heroImg}
            alt=""
          />
        </div>
      </div>

      <div className="container flex flex-col my-[100px]">
        <div className="w-full mx-auto lg:w-[600px] text-center mb-[40px]">
          <h1 className="heading text-[44px] leading-[55px]">
            We are available in many well known countries
          </h1>
        </div>
        <div className="flex justify-center">
          <div className=" max-w-full pl-5 gap-10 mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <CountryCards />
          </div>
        </div>
      </div>

      <div className="bg-[#ECF1F7] container h-screen lg:max-h-[500px] rounded-[70px] flex flex-col md:flex-row justify-between overflow-hidden mb-[40px]">
        <div className=" px-2 py-2 lg:pl-7 lg:pt-24 z-10 px-auto container w-full lg:max-w-[600px] mt-[60px] lg:mt-0 text-center lg:text-left">
          <div className="">
            <h1 className="heading lg:mt-0 mb-[40px] leading-[65px]">
              Find your best Real Estate
            </h1>
            <p className="text__para mb-[40px]">
              We provide a complete service for the sale, purchase or rental of
              real estate
            </p>
            <button className="w-[200px] h-[50px] bg-blue-500 rounded-[20px] text-white">
              CONTACT US
            </button>
          </div>
        </div>
        <div className="mx-auto lg:mx-0">
          <img className="size-[600px]" src={heroImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
