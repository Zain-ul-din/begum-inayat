import { Button } from "@/components/ui/button";
import { MdOutlineSchool } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="">
        <div className="p-4 max-w-screen-xl mx-auto">
          <h1>This is logo</h1>
        </div>
      </header>

      {/* hero section */}
      <main className=" text-white p-4 min-h-[80vh] h-[80vh] flex flex-col relative">
        <img
          src="/images/children.png"
          alt="orphan children picture"
          width={"100%"}
          height={"80%"}
          className="absolute h-full w-full inset-0 object-cover top-0 -z-10"
          style={{
            filter: "brightness(55%)"
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

        <div className="h-6"></div>
      </main>

      <div
        className="max-w-screen-xl grid  mx-auto p-2 gap-2  -translate-y-10  overflow-x-auto"
        style={{
          gridTemplateColumns: "repeat(3, minmax(250px, 1fr))"
        }}
      >
        {[
          "/images/children.svg",
          "/images/graduation-cap.svg",
          "/images/love.svg"
        ].map((imgSrc, i) => {
          return (
            <div
              key={i}
              className="w-full bg-blue-900 text-white p-4 md:p-8 rounded-md "
            >
              <img src={imgSrc} alt="kids icon" width={"60"} height={"60"} />
              <h1 className="font-bold text-2xl my-4">SCHOOL</h1>
              <p className="text-sm mb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium mollitia asperiores culpa voluptate aspernatur
                facere iste corporis ipsa, voluptatibus sit illum officiis
                perferendis ducimus quod expedita, magnam minima architecto
                eaque!
              </p>
            </div>
          );
        })}
      </div>

      {/* non responsive issue */}
      <section className="max-w-screen-xl mx-auto p-4 mt-24">
        <div className="bg-gray-100 relative p-12 grid grid-cols-2 gap-4">
          <div className="absolute w-16 h-16 bg-white left-0 rotate-45 -translate-y-1/2 -translate-x-1/2 top-0"></div>
          <div>
            <h2 className="font-bold text-cyan-600 text-sm my-1">
              EL TUNCO REMAR
            </h2>
            <h1 className="to-blue-950 text-4xl font-black mb-6">
              Our Mission
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              similique aspernatur iure consequatur dolore omnis distinctio
              ullam, quos consequuntur aliquid alias repellat? Eveniet
              doloremque ratione, perferendis odio quisquam libero repellendus.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0">
              <img
                src="/images/kids-playing.webp"
                width={"450"}
                height={"350"}
                className="rounded-md -translate-y-[30%]"
                alt="kids playing picture"
                style={{
                  width: "clamp(350px, 450px, 450px)",
                  height: "clamp(200px, 350px, 350px)"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 bg-light-green p-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-2 p-12">
          <div></div>
          <div>
            <h2 className="font-bold text-white text-sm my-1">BAKERY</h2>
            <h1 className="text-white text-4xl font-black mb-6">
              Cake & Amigos
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              similique aspernatur iure consequatur dolore omnis distinctio
              ullam, quos consequuntur aliquid alias repellat? Eveniet
              doloremque ratione, perferendis odio quisquam libero repellendus.
            </p>

            <Button className="mt-8" variant={"outline"} size={"lg"}>
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
