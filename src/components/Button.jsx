import { cva } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "  text-sm btn px-5 rounded-[10px] shadow-sm border border-black text-center font-normal ",
  {
    variants: {
      variant: {
        primary: " btn-primary text-primary-content",
        secondary: " btn-secondary text-secondary-content",
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button = ({ children, theme, className, variant }) => {
  return (
    <>
      <button
        data-theme={theme}
        className={twMerge(buttonVariants({ variant, className }))}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
