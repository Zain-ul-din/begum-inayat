import Link from "next/link";
import { Button } from "./ui/button";
import routes from "../lib/constants/routes";

export default function Hero() {
  return (
    <>
      <section className="text-white p-4 min-h-[80vh] h-[80vh] flex flex-col relative">
        <img
          // data-scroll
          // data-scroll-speed="0.1"
          src="/images/temp/pic_2.jpeg"
          alt="orphan children picture"
          width={"100%"}
          height={"80%"}
          className="absolute h-full w-full inset-0 object-cover top-0 -z-10"
          style={{
            filter: "brightness(70%)"
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
          <Link href={routes.donate}>
            <Button
              className="my-4 md:py-6 font-bold"
              variant={"brand"}
              size={"lg"}
            >
              DONATE NOW
            </Button>
          </Link>
        </div>

        <div className="h-6"></div>
      </section>
    </>
  );
}
