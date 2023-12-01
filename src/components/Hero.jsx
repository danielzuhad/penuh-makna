import React from "react";
import Button from "./Button";
import Image from "next/image";
import ImageComp from "./Image";

const Hero = ({ theme }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row xl:justify-between w-full max-h-screen mt-[85px] md:mt-[158px] gap-[88px]">
        {/* Quote */}
        <div className="flex flex-col items-center justify-center lg:items-start gap-[28px] md:gap-[35px]  w-full">
          <h1 className="font-bold text-[32px] sm:text-[50px] lg:text-[3.5vw] text-primary-content  text-center lg:text-start">
            Racik Kopimu, <br />
            Ciptakan Pengalamanmu.
          </h1>

          <div className="flex gap-[24px] ">
            <Button theme={theme} variant="primary">
              Mulai Pesan
            </Button>
            <Button theme={theme} variant="secondary">
              Mulai Pesan
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <ImageComp />
        </div>
      </div>
    </>
  );
};

export default Hero;
