import React from "react";
import { twMerge } from "tailwind-merge";

const SquareProp = ({ theme, className }) => {
  return (
    <>
      <div
        data-theme={theme}
        className={twMerge(
          " z-1 border-[3px] rotate-[20deg]  border-primary absolute p-[22vw] lg:p-[17vw] lg:top-[17vw] lg:left-[8em] xl:left-[150px] 2xl:left-[12em]",
          className
        )}
      />
    </>
  );
};

export default SquareProp;
