import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="  bg-cyan-300">
        <div className="p-4 max-w-screen-xl mx-auto">
          <h1>This is logo</h1>
        </div>
      </header>

      {/* hero section */}
      <main className=" text-white p-4 min-h-[80vh] h-[80vh] flex flex-col relative">
        <img
          src="/images/children-2.png"
          alt="orphan children picture"
          width={"100%"}
          height={"80%"}
          className="absolute h-full w-full inset-0 object-cover top-0 -z-10"
          style={{
            filter: "brightness(55%)",
          }}
        />

        <div className="my-auto max-w-screen-xl mx-auto text-balance sm:text-center">
          <h1 className="text-6xl font-black mb-3">
            Empower Orphans, Build Futures
          </h1>
          <p className="text-xl font-medium opacity-90">
            Join us in making a difference in the lives of orphaned children
            around the world.
          </p>

          <Button
            className="my-4 md:py-6 font-bold"
            variant={"brand"}
            size={"lg"}
          >
            DONATE NOW
          </Button>
        </div>
      </main>
    </>
  );
}
