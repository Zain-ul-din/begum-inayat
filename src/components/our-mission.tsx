export default function OurMission() {
  return (
    <section
      className="max-w-screen-xl relative mx-auto p-4 mt-12 md:mt-24"
      id="our-mission"
    >
      <div className="absolute top-0 z-10 md:left-0 right-0">
        <img
          src="/images/art/flower.png"
          alt="flower art"
          width={100}
          height={100}
        />
      </div>
      <div className="bg-gray-100 relative p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Decorative square */}
        <div className="absolute w-16 h-16 bg-white left-0 rotate-45 -translate-y-1/2 -translate-x-1/2 top-0"></div>

        {/* Content Section */}
        <div className="z-20 mt-8">
          <h2 className="font-bold text-cyan-600 text-sm my-1">Begum Inayat</h2>
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
          <div className="md:absolute mx-auto top-0 right-0 md:flex md:justify-end">
            <img
              src="/images/little-kid-pic.jpeg"
              width={"400"}
              height={"350"}
              className="rounded-md mx-auto min-[850px]:-translate-y-[30%] w-[100%] sm:w-[75%] md:w-[400px] h-auto"
              alt="kids playing picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
