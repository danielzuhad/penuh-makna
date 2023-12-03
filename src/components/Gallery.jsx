import React from "react";

import coffeeOne from "../../public/images/coffee-1.jpg";
import coffeeTwo from "../../public/images/coffee-2.jpg";
import coffeeThree from "../../public/images/coffee-3.jpg";
import coffeeFour from "../../public/images/coffee-4.jpg";
import coffeeFive from "../../public/images/coffee-5.jpg";
import coffeeSix from "../../public/images/coffee-6.jpg";
import ImageComp from "./Image";

const Gallery = ({ theme }) => {
  const images = [
    coffeeOne,
    coffeeTwo,
    coffeeThree,
    coffeeFour,
    coffeeFive,
    coffeeSix,
  ];

  return (
    <>
      <section
        id="Gallery"
        className="w-[90vw] sm:w-[80vw] flex flex-col justify-center items-center gap-[40px] py-[3em] pb-[5em] lg:mt-[5em] "
      >
        {/* Quote */}
        <h1
          className={`font-bold text-[32px] sm:max-lg:text-[3em] lg:text-[3em] text-center   ${
            theme === "light" ? "text-[#201A18]" : "text-[#EDE0DC]"
          }`}
        >
          Gallery
        </h1>

        {/* Images */}
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
          {images.map((image, index) => (
            <ImageComp
              theme={theme}
              key={index}
              src={image}
              className="w-[200px] md:w-[15em] md:h-[15em]  "
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
