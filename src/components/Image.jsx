import React from "react";
import Image from "next/image";

const ImageComp = ({ src }) => {
  return (
    <>
      <Image
        width={300}
        height={300}
        src={src}
        className="bg-black object-cover w-[50vw] sm:w-[40vw] lg:w-[30vw]   md:rounded-[90px] xl:rounded-[100px] rounded-[60px] 2xl:rounded-[150px]"
        alt=""
      />
    </>
  );
};

export default ImageComp;
