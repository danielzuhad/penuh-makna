"use client";

import { useState } from "react";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ThreeCofee from "@/components/ThreeCofee";

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <container
        className={`min-h-screen w-screen flex justify-center ${
          theme === "light" ? `bg-[#FFFBFF]` : `bg-[#201A18]`
        }`}
      >
        <main className=" flex flex-col items-center">
          <Navbar setTheme={setTheme} theme={theme} />
          <Hero theme={theme} />
          <About theme={theme} />
          <Gallery theme={theme} />
          <ThreeCofee theme={theme} />
          <Footer theme={theme} />
        </main>
      </container>
    </>
  );
}
