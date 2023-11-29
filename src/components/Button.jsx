import { cva } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("btn ", {
  variants: {
    variant: {
      primary: " btn-primary text-primary-content",
      secondary: " btn-secondary text-secondary-content",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

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
