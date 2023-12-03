import React from "react";

import SquareProp from "./SquareProp";
import ImageComp from "./Image";
import Coffee from "../../public/images/three-coffee.jpg";
import Button from "./Button";

const ThreeCofee = ({ theme }) => {
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
          <div className="flex flex-col items-center justify-center  lg:items-start gap-[28px] md:gap-[35px]  w-full max-lg:mt-[82px]">
            <h1
              className={`font-bold text-[32px] sm:max-lg:text-[3em] lg:text-[3em] text-center lg:text-start `}
            >
              Temukan postingan dan info terbaru lewat Instagram Penuh Makna
            </h1>

            <div className="w-full flex justify-center">
              <Button variant="secondary" theme={theme}>
                Mulai Pesan
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full relative flex justify-center lg:justify-start">
            <SquareProp theme={theme} variant="left" className="lg:top-[4em]" />
            <ImageComp theme={theme} src={Coffee} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreeCofee;
