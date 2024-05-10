import React from "react";
import Tabs from "../components/Search/Tabs";
import Benefits from "../components/Benefits/Benefits";
import heroImg from "../assets/images/hero-img.png";
import heroImg2 from "../assets/images/hero-img-2.png";

const Home = () => {
  return (
    <>
      <div className="container w-full">
        <div className="mx-auto mt-[120px] relative">
          <img
            className="size-[200px] lg:size-[600px] absolute top-0 right-0 bottom-0 left-0 z-[-1] lg:hidden"
            src={heroImg}
            alt=""
          />
          <div className="bg-[#ECF1F7] relative h-[900px] lg:max-h-[600px] rounded-[70px] flex flex-col justify-between mb-[40px] overflow-hidden">
            <div className="px-2 py-2 lg:pt-32 absolute lg:relative z-10 container lg:w-2/3">
              <div className="w-full lg:max-w-[900px] text-center mx-auto">
                <h1 className="heading mt-[240px] lg:mt-0 mb-[10px] lg:mb-[40px] text-black lg:text-black">
                  Assets Ally
                </h1>
                <p className="text__para mb-[10px] lg:mb-[40px]">
                  The marketplace that matches Landlords with Property Managers
                </p>
              </div>
              <div className="mt-[40px] lg:relative flex justify-center lg:block ml-12">
                <Tabs />
              </div>
            </div>
          </div>
          <div className="container flex flex-col my-[100px] mx-0 lg:mx-auto">
            <div className="w-full mx-auto lg:w-[600px] text-center mb-[40px]">
              <h1 className="heading text-[44px] leading-[55px]">
                Automate the discovery of your next deal
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="max-w-full pl-5 gap-20 mt-8 flex flex-col lg:flex-row">
                <Benefits />
              </div>
            </div>
          </div>

          <div className="bg-[#ECF1F7] container lg:max-h-[500px] rounded-[70px] flex flex-col md:flex-row justify-between overflow-hidden mb-[40px]">
            <div className="px-2 py-2 lg:pl-7 lg:pt-24 z-10 container w-full lg:max-w-[600px] mt-[60px] lg:mt-0 text-center lg:text-left lg:w-1/2">
              <div className="">
                <h1 className="heading lg:mt-0 mb-[40px] leading-[65px]">
                  Find your best Real Estate
                </h1>
                <p className="text__para mb-[40px]">
                  We provide a complete service for the sale, purchase, or
                  rental of real estate
                </p>
                <button className="w-[200px] h-[50px] bg-blue-500 rounded-[20px] text-white">
                  CONTACT US
                </button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 lg:w-1/2">
              <img className="size-[600px]" src={heroImg2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
