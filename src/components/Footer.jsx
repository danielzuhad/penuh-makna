import React from "react";
import Image from "next/image";
import Link from "next/link";

import socmedOne from "../../public/images/socmedOne.png";
import socmedTwo from "../../public/images/socmedTwo.png";
import socmedThree from "../../public/images/socmedThree.png";

const Footer = ({ theme }) => {
  const socmeds = [
    {
      icon: socmedOne,
      href: "https://gofood.co.id/malang/restaurant/kopi-penuh-makna-araya-18c2bdcd-7707-4e2a-9325-a420eb1be6ab",
    },
    {
      icon: socmedTwo,
      href: "https://shopee.co.id/now-food/shop/21334143?shareChannel=copy_info&stm_medium=referral&stm_source=https%3A%2F%2Flinktr.ee%2F-rw",
    },
    {
      icon: socmedThree,
      href: "https://www.grab.com/id/download/?pid=inappsharing&c=6-C3WVWCMUTPVCAA&is_retargeting=true&af_force_deeplink=true",
    },
  ];

  return (
    <>
      <div
        className={`z-10 w-[90vw]  py-[2em] flex flex-row items-center justify-between max-sm:flex-col max-sm:items-start ${
          theme === "light" ? "text-[#201A18]" : "text-[#EDE0DC]"
        }`}
      >
        {/* Title */}
        <div>
          <h1 className="font-bold text-4xl">Penuh Makna</h1>

          <div className="flex w-full items-center justify-start py-5 gap-5">
            {socmeds.map((socmed, index) => (
              <Link href={socmed.href} key={index}>
                <Image
                  className="aspect-square object-cover w-12"
                  src={socmed.icon}
                  alt="socmed"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p>kopipenuhmakna@gmail.com</p>
          <p className="w-[200px]">
            Jl. Puri Niaga B 2, Pondok Blimbing Indah, Pandanwangi, Blimbing,
            Kota Malang
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
