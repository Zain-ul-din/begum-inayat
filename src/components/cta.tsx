import { Button } from "./ui/button";

export default function CTA() {
  return (
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
            <Button className="font-bold" variant={"brand-outline"} size={"lg"}>
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
  );
}
