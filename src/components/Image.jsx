import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const ImageComp = ({ src, className }) => {
  return (
    <>
      <Image
        width={500}
        height={500}
        src={src}
        className={twMerge(
          " object-cover w-[50vw] h-[50vw] md:w-[45vw] md:h-[45vw]  lg:w-[90%] lg:h-auto rounded-[7vw] lg:rounded-[5vw]  z-0",
          className
        )}
        alt=""
      />
    </>
  );
};

export default ImageComp;
