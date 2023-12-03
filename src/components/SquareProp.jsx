import { cva } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const squareVariants = cva(
  " z-1 border-[3px] absolute aspect-square border-primary rotate-[20deg] w-[47vw] md:w-[40vw] lg:w-[30vw] 2xl:w-[27vw] lg:top-[15vw] bg-transparent",
  {
    variants: {
      variant: {
        left: "lg:right-[12em] xl:right-[15em] 2xl:right-[22em] min-[2200px]:right-[40em]",
        right:
          "lg:left-[12em] xl:left-[15em] 2xl:left-[22em] min-[2200px]:left-[40em]",
      },
    },

    defaultVariants: {
      variant: "right",
    },
  }
);

const SquareProp = ({ theme, className, variant }) => {
  return (
    <>
      <div
        data-theme={theme}
        className={twMerge(squareVariants({ className, variant }))}
      />
    </>
  );
};

export default SquareProp;
