import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="sticky-header">
      <div className="max-w-full w-full h-[100px] flex md:pr-2 lg:pr-2">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div className="w-[150px] h-[50px] flex items-center justify-center my-5">
            <h1 className="font-[800] text-[20px] text-center">Asset Alley</h1>
          </div>
          <div className="hidden md:flex items-center">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="tracking-[3px] font-[800] text-[14px] px-4"
                activeClassName="font-bold"
                exact
              >
                {link.display}
              </NavLink>
            ))}
          </div>
          <button className="w-[130px] h-[50px] border-[1px] border-black border-solid rounded-[8px] tracking-[3px] font-[800] text-[14px] text-center hover:text-white hover:bg-black md:block hidden">
            LOG IN
          </button>
          <button className="md:hidden" onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-auto mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {showNav && (
        <div className="bg-white w-full py-2 px-4 md:hidden">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="block py-2 px-4 text-[14px] font-[800] text-center"
              activeClassName="font-bold"
              exact
              onClick={toggleNav}
            >
              {link.display}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
