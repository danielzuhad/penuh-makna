import Button from "@/components/Button";

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
          {/* Coba theme boleh dihapus */}
          <Button variant="primary" theme={theme}>
            primary
          </Button>

          <Button variant="secondary" className="py-10" theme={theme}>
            secondary
          </Button>
        </main>
      </container>
    </>
  );
}
