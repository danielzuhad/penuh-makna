import React from "react";

const Footer = ({ theme }) => {
  return (
    <>
      <div
        className={`z-10 w-[90vw] sm:w-[80vw] mt-[4em] py-[2em]  ${
          theme === "light" ? "text-[#201A18]" : "text-[#EDE0DC]"
        }`}
      >
        {/* Title */}
        <h1 className="font-bold text-4xl  pb-5">Penuh Makna</h1>

        <div className="flex flex-col gap-5">
          <p>kopipenuhmakna@gmail.com</p>
          <p className="w-[500px] max-sm:w-full">
            Jl. Puri Niaga B 2, Pondok Blimbing Indah,Pandanwangi, Blimbing,
            Kota Malang
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
