/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#9A4523",
          "primary-content": "#FFFFFF",
          secondary: "#FFB950",
          "secondary-content": "#FFFFFF",
        },
        dark: {
          primary: "#FFB59A",
          "primary-content": "#5B1B00",
          secondary: "#FFB950",
          "secondary-content": "#452B00",
        },
      },
    ],
  },
};
