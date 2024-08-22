/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import Hero from "@/components/hero";
import OurMission from "@/components/our-mission";
import ServicesCards from "@/components/ServicesCards";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <main>
        <Hero />

        {/* cards */}
        <ServicesCards />
      </main>

      <OurMission />

      <section className="mt-24 md:mt-32 bg-light-green p-6 md:p-12">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-6 md:p-12 relative">
          <div>
            <img
              src="/images/children-group-photo.jpeg"
              alt="sample house picture"
              className="rounded-md sm:w-[100%] md:w-[450px] md:h-[100%] "
            />
          </div>
          <div className="flex flex-col justify-evenly">
            <img
              src="/images/art/cute-doodle.png"
              className="right-[30%] bottom-[20%] lg:w-[300px] mb-4"
              width={200}
              height={200}
            />
            <div>
              {/* <h2 className="font-bold text-white text-sm my-1">HOUSE</h2> */}
              <h1 className="text-white text-4xl font-black mb-6">
                Building Dreams
              </h1>
              <p className="text-white">
                Your support enables us to expand our facilities and reach even
                more orphaned children in need. Together, we ensure that no
                child is left behind, and every dream has the chance to
                flourish.
              </p>

              <Button className="mt-8" variant={"outline"} size={"lg"}>
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto mt-24 relative z-10">
        <img
          src="/images/art/heart.png"
          className=" absolute left-4 xl:-translate-x-[34%] top-0 -translate-y-[30%] -rotate-12"
          width={100}
          height={100}
        />
        <div className="p-6  md:p-12 bg-gray-100 rounded-md grid md:grid-cols-2 gap-6">
          <div className="z-10 mt-10">
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
