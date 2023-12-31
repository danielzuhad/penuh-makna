import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const ImageComp = ({ src, className, theme }) => {
  return (
    <>
      <Image
        data-theme={theme}
        width={500}
        height={500}
        src={src}
        className={twMerge(
          " object-cover aspect-square w-[50vw]  md:w-[40vw] md:h-[40vw] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] lg:h-auto rounded-[7vw] lg:rounded-[2vw] border-[3px] border-primary card card-bordered shadow-md  z-10",
          className
        )}
        alt=""
      />
    </>
  );
};

export default ImageComp;
