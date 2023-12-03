import React from "react";

import Button from "./Button";
import ImageComp from "./Image";
import SquareProp from "./SquareProp";
import coffeeHome from "../../public/images/coffee-home.png";

const Hero = ({ theme }) => {
  return (
    <>
      <section
        id="Home"
        className="w-[90vw] sm:w-[80vw] flex flex-col lg:flex-row lg:justify-between items-center gap-[88px] pb-[5em] lg:pt-[5em] lg:mt-[5em] "
      >
        {/* Quote */}

        <div className="flex flex-col items-center justify-center lg:items-start gap-[28px] w-full  max-lg:mt-[150px] ">
          <h1
            className={`font-bold text-[32px] sm:text-[50px] lg:text-[3.5vw] text-center lg:text-start ${
              theme === "light" ? "text-[#201A18]" : "text-[#EDE0DC]"
            }`}
          >
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
        <div className="w-full  flex justify-center relative items-center lg:justify-end sm:max-lg:mt-16">
          <SquareProp variant="right" theme={theme} />
          <ImageComp theme={theme} src={coffeeHome} />
        </div>
      </section>
    </>
  );
};

export default Hero;
