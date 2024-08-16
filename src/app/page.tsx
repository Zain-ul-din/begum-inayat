import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* <header className="">
        <div className="p-4 max-w-screen-xl mx-auto">
          <h1 className=""></h1>
        </div>
      </header> */}

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

      {/* cards */}
      <div
        className="max-w-[1200px] grid  mx-auto p-2 gap-2  -translate-y-10  overflow-x-auto"
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
              className={cn(
                "w-full bg-blue-900 text-white p-4 md:p-8 rounded-md ",
                i === 0 && "bg-gradient-to-b from-pink-500 to-pink-600",
                i === 1 && "bg-gradient-to-b from-blue-800 to-blue-900",
                i === 2 && "bg-gradient-to-b from-cyan-500 to-cyan-600"
              )}
            >
              <img src={imgSrc} alt="kids icon" width={"60"} height={"60"} />
              <h1 className="font-bold text-2xl my-4">
                {i === 0
                  ? "Empowering Education"
                  : i === 1
                  ? "Health and Well-being"
                  : "Emotional Support"}
              </h1>
              <p className="text-sm mb-2">
                {i === 0
                  ? "Your generosity ensures that every child under our care has access to quality education. By unlocking the doors to learning, we break the cycle of poverty and open up a world of opportunities for these children."
                  : i === 1
                  ? "With your help, we provide essential healthcare services and nutritious meals, creating a safe and nurturing environment where children can thrive both physically and mentally."
                  : "Your donation enables us to offer counseling services and emotional support, helping children heal from trauma and build resilience."}
              </p>
            </div>
          );
        })}
      </div>

      <section className="max-w-screen-xl mx-auto p-4 mt-12 md:mt-24">
        <div className="bg-gray-100 relative p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Decorative square */}
          <div className="absolute w-16 h-16 bg-white left-0 rotate-45 -translate-y-1/2 -translate-x-1/2 top-0"></div>

          {/* Content Section */}
          <div>
            <h2 className="font-bold text-cyan-600 text-sm my-1">
              Begum Inayat
            </h2>
            <h1 className="text-4xl font-black mb-6 text-blue-950">
              Our Mission
            </h1>
            <p>
              At Begum Inayat Welfare Society, we believe that every child
              deserves a bright future filled with love, education, and
              opportunity. Our mission is to provide orphaned children with a
              nurturing environment where they can grow, learn, and develop the
              essential skills necessary for success in life.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative flex">
            <div className="md:absolute mx-auto top-0 right-0 md:static md:flex md:justify-end">
              <img
                src="/images/kids-playing.webp"
                width={"450"}
                height={"350"}
                className="rounded-md md:-translate-y-[30%] w-[100%] sm:w-[75%] md:w-[450px] h-auto"
                alt="kids playing picture"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 md:mt-32 bg-light-green p-6 md:p-12">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-6 md:p-12">
          <div>
            <img
              src="/images/sample-house.jpeg"
              alt="sample house picture"
              className="rounded-md sm:w-[100%] md:w-[450px] md:h-[120%] md:translate-y-[-25%]"
            />
          </div>
          <div>
            <h2 className="font-bold text-white text-sm my-1">HOUSE</h2>
            <h1 className="text-white text-4xl font-black mb-6">
              Building Dreams
            </h1>
            <p className="text-white">
              Your support enables us to expand our facilities and reach even
              more orphaned children in need. Together, we ensure that no child
              is left behind, and every dream has the chance to flourish.
            </p>

            <Button className="mt-8" variant={"outline"} size={"lg"}>
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto mt-24">
        <div className="p-6 md:p-12 bg-gray-100 rounded-md grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="to-blue-950 text-4xl font-black mb-6">
              Ready to help?
            </h1>
            <p>
              Your contribution, no matter how small, makes a meaningful
              difference in the lives of orphaned children. By joining us, you
              become a beacon of hope, guiding these children toward brighter
              tomorrows.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button
                className="text-white font-bold"
                variant={"brand"}
                size={"lg"}
              >
                DONATE NOW
              </Button>
              <Button
                className="font-bold"
                variant={"brand-outline"}
                size={"lg"}
              >
                BE VOLUNTEER
              </Button>
            </div>
          </div>
          <div className="flex">
            <img
              src="/images/sample-kids-drawing.jpg"
              className="rounded-md sm:w-[100%] md:w-[450px] ml-auto object-cover"
              alt="kids drawing"
            />
          </div>
        </div>
      </section>

      <footer className="mt-24">
        <div className="max-w-screen-xl gap-4 p-6 md:p-12 mx-auto grid grid-cols-2 md:grid-cols-3">
          <div className="max-md:col-span-2">
            <h1 className="text-cyan-700 font-bold text-2xl mb-2">
              Begum Inayat
            </h1>
            <p>
              A charitable organization dedicated to orphan care and adoption.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="max-md:mr-auto">
              <h1 className="text-xl font-bold text-blue-950 mb-2">Call Us</h1>
              <p className="mb-1 text-gray-500">+923116287**7</p>
              <p className="mb-1 text-gray-500">+923116287**7</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="max-md:mr-auto">
              <h1 className="text-xl font-bold text-blue-950 mb-2">
                Contact Us
              </h1>
              <p className="mb-1 text-gray-500">org.info@gmail.com</p>
              <p className="mb-1 text-gray-500">see location on map</p>
            </div>
          </div>
        </div>

        <div className="mt-4 max-w-screen-xl mx-auto border-t border-gray-200 py-4 px-2 flex">
          <p className="ml-auto text-gray-500">&copy; copyright 2024</p>
        </div>
      </footer>
    </>
  );
}
