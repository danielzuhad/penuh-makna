import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="container mt-16 items-center w-full mx-auto ">
      <div className="relative">
        <h1 className="text-6xl  font-bold ">
          Racik Kopimu, Ciptakan Pengalamanmu.
        </h1>
        <div className="mt-16 block ">
          <button className="bg-[#241813] py-3 mr-3 px-5 rounded-full drop-shadow-xl">
            <h3 className="text-white text-sm ">Mulai Pesan</h3>
          </button>
          <button className="bg-[#CE8E24] py-3 px-5 rounded-full drop-shadow-xl mr-5">
            <h3 className="text-white text-sm">Ciptakan Kopimu Sendiri</h3>
          </button>
        </div>
        <div className="rotate-img border-black w-[494px] h-[512px] border-4 absolute right-0 top-20 "></div>
        <div className="border-black w-[494px] h-[512px] border-4 absolute right-0 top-20 ">
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
