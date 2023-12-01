import Button from "@/components/Button";
import Hero from "@/components/Hero";

export default function Home() {
  let theme = "light";
  return (
    <>
      <container
        className={`min-h-screen flex justify-center ${
          theme === "light" ? `bg-[#FFFBFF]` : `bg-[#201A18]`
        }`}
      >
        <main className=" w-[90vw] sm:w-[80vw]">
          <Hero theme={theme} />
        </main>
      </container>
    </>
  );
}
