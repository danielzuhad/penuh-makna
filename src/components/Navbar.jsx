"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import Button from "./Button";

const Navbar = ({ theme }) => {
  const navItems = [
    { title: "Home", href: "#Home" },
    { title: "About Us", href: "#About" },
    { title: "Gallery", href: "#Gallery" },
    { title: "Blog", href: "#Blog" },
  ];

  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <>
      <div className="w-screen h-[90.05px] fixed backdrop-blur-sm bg-white/30 z-20 flex justify-center">
        <div
          className={`   w-[90vw] sm:w-[80vw] max-lg:px-10  h-[90.05px] fixed flex justify-between items-center backdrop-blur-sm bg-white/30 ${
            theme === "light" ? "text-[#201A18]" : "text-[#EDE0DC]"
          }`}
        >
          {/* Title */}
          <div className="w">
            <h3 className="max-lg:text-xl text-2xl font-bold">Penuh Makna</h3>
          </div>

          {/* NavItem */}

          {/* Desktop */}
          <div className="  flex justify-between items-center max-lg:hidden">
            <div className="flex gap-16 mr-[5em] font-semibold text-lg">
              {navItems.map((nav, index) => (
                <Link key={index} href={nav.href}>
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
          <div
            onClick={() => setBurgerActive(!burgerActive)}
            className="lg:hidden text-3xl"
          >
            {burgerActive ? <IoMdClose /> : <RxHamburgerMenu />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
