import React from "react";

import coffeeAbout from "../../public/images/coffee-about.png";
import ImageComp from "./Image";
import SquareProp from "./SquareProp";

const About = ({ theme }) => {
  return (
    <>
      <section
        className={`${
          theme === "light" ? "bg-[#F8EBE7]" : "bg-[#3B3331]"
        } w-screen lg:h-[90vh] flex justify-center pb-[5em] lg:py-[5em]  `}
      >
        <div
          className={`w-[90vw] sm:w-[80vw] flex flex-col  justify-start lg:flex-row-reverse lg:justify-between lg:items-center gap-[88px] ${
            theme === "light" ? "text-[#201A18]" : "text-[#EDE0DC]"
          }`}
        >
          {/* About */}
          <div className="flex flex-col items-center justify-center  lg:items-start gap-[28px] md:gap-[35px]  w-full max-lg:mt-[102px]">
            <h1
              className={`font-bold text-[32px] sm:max-lg:text-[3em] lg:text-[3em] text-center lg:text-start `}
            >
              About us
            </h1>

            <div>
              <p className="max-lg:leading-[28.26px] min-lg:leading-[48.26px] text-[1em] sm:text-[1.2em] 2xl:text-[1.5em] max-lg:text-center">
                Selamat datang di Penuh Makna, tempat di mana setiap teguk kopi
                adalah perjalanan pribadi Anda. Kami mengundang Anda untuk
                menikmati kopi dengan kebebasan tanpa batas, menciptakan
                pengalaman unik yang sesuai dengan selera Anda. Penuh Makna,
                tempat di mana kopi bertemu dengan kreativitas Anda.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full relative flex justify-center lg:justify-start">
            <SquareProp theme={theme} variant="left" />
            <ImageComp src={coffeeAbout} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
