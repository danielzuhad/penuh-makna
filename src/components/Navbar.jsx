import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-white  ">
      <div className="flex justify-between px-24 py-5 items-center">
        <div className="  ">
          <h1 className=" text-black font-bold text-2xl">Penuh Makna</h1>
        </div>
        <div className="flex gap-10 text-black font-semibold items-center">
          <Link href="/">Home</Link>
          <Link href="/">About us</Link>
          <Link href="/">Service</Link>
          <Link href="/">Blog</Link>
          <div className="ml-10">
            <button className="bg-[#CE8E24] py-3 px-5 rounded-full drop-shadow-xl">
              <h3 className="text-white text-sm">Sign in</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
