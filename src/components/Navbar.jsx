"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import Button from "./Button";

const Navbar = ({ theme, setTheme }) => {
  const navItems = [
    { title: "Home", href: "#Home" },
    { title: "About Us", href: "#About" },
    { title: "Gallery", href: "#Gallery" },
    { title: "Blog", href: "#Blog" },
  ];

  const [burgerActive, setBurgerActive] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <div
        className={`w-screen h-[90.05px] fixed backdrop-blur-sm  z-20 flex justify-center ${
          theme === "light" ? "bg-[#FFFBFF/30]" : "bg-[#201A18]/30"
        }`}
      >
        <div
          className={`relative w-[90vw] sm:w-[80vw] max-md:px-0   h-[90.05px] flex justify-between items-center  ${
            theme === "light" ? "text-[#201A18]" : "text-[#EDE0DC]"
          }`}
        >
          {/* Title */}
          <div className="w-full flex items-center gap-5">
            <h3 className="max-lg:text-xl text-2xl font-bold">Penuh Makna</h3>

            <label
              onClick={() =>
                setTheme((theme) => (theme === "light" ? "dark" : "light"))
              }
              className="flex items-center cursor-pointer gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          {/* NavItem */}

          {/* Desktop */}
          <div className="w-full  flex justify-between items-center max-lg:hidden">
            <div className="flex items-center gap-5 xl:gap-16 mr-[5em] font-semibold text-md xl:text-lg">
              {navItems.map((nav, index) => (
                <Link
                  className="w-max"
                  to={nav.href}
                  spy={true}
                  smooth={true}
                  key={index}
                  href={nav.href}
                >
                  {nav.title}
                </Link>
              ))}
            </div>

            <Button
              className="btn-sm text-xs w-[9em] "
              theme={theme}
              variant="secondary"
            >
              Sign Up
            </Button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setBurgerActive(!burgerActive)}
            className="lg:hidden text-3xl"
          >
            {!burgerActive && <RxHamburgerMenu />}
          </button>
        </div>

        {/* Hamburger navbar */}
        <>
          <div
            className={`border-b-2 border-black lg:hidden absolute w-screen h-[80vh sm:w-[40vw] sm:h-screen sm:right-0 sm:border-l-2 duration-300 transition-all ${
              burgerActive ? "top-0" : "top-[-100em]"
            }
             ${theme === "light" ? `bg-[#FFFBFF]` : `bg-[#201A18]`}`}
          >
            <button
              onClick={() => setBurgerActive(!burgerActive)}
              className="w-full h-[15%] flex items-center text-3xl justify-end pr-5 sm:pr-10"
            >
              <IoMdClose />
            </button>

            <div className="p-5">
              <div
                className={`flex flex-col gap-10 mr-[5em] font-semibold text-xl ${
                  theme === "light" ? "text-[#201A18]" : "text-[#EDE0DC]"
                }`}
              >
                {navItems.map((nav, index) => (
                  <Link
                    onClick={() => setBurgerActive(!burgerActive)}
                    to={nav.href}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    key={index}
                    href={nav.href}
                  >
                    {nav.title}
                  </Link>
                ))}
              </div>

              <Button
                className="mt-[10em] btn-sm text-xs w-[9em] "
                theme={theme}
                variant="secondary"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Navbar;
