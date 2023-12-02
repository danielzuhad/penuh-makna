import About from "@/components/About";
import Button from "@/components/Button";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  let theme = "light";
  return (
    <>
      <container
        className={`min-h-screen w-screen flex justify-center ${
          theme === "light" ? `bg-[#FFFBFF]` : `bg-[#201A18]`
        }`}
      >
        <main className=" flex flex-col items-center">
          <Navbar />
          <Hero theme={theme} />
          <About theme={theme} />
          <Gallery theme={theme} />
        </main>
      </container>
    </>
  );
}
