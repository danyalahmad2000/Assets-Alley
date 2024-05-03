import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from React Router

const navLinks = [
  {
    path: "/home",
    display: "HOME",
  },
  {
    path: "/properties",
    display: "PROPERTIES",
  },
  {
    path: "/agents",
    display: "AGENTS",
  },
  {
    path: "/blogs",
    display: "BLOGS",
  },
];

const Header = () => {
  return (
    <header>
      <div className="max-w-full w-full h-[100px] flex">
        <div className="max-w-full w-[1440px] mx-auto flex flex-row justify-between">
          <div className="w-[150px] h-[50px] flex items-center justify-center my-5">
            <h1 className="font-[800] text-[20px] text-center">Asset Alley</h1>
          </div>
          <div className="w-[800px] h-[50px] flex items-center justify-between my-5">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="tracking-[3px] font-[800] text-[14px]"
                activeClassName="font-bold"
                exact
              >
                {link.display}
              </NavLink>
            ))}

            <button className="w-[130px] h-[50px] border-[1px] border-black border-solid rounded-[8px] tracking-[3px] font-[800] text-[14px] text-center hover:text-white hover:bg-black">
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
