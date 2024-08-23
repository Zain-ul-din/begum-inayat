import Link from "next/link";
import { Button } from "./ui/button";
import routes from "../lib/constants/routes";

export default function LearnMore() {
  return (
    <section className="mt-24  bg-light-green p-6 md:p-12">
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
            className="right-[30%] bottom-[20%] lg:w-[220px] mb-4"
            width={150}
            height={150}
          />
          <div>
            {/* <h2 className="font-bold text-white text-sm my-1">HOUSE</h2> */}
            <h1 className="text-white text-4xl font-black mb-6">
              Building Dreams
            </h1>
            <p className="text-white">
              Your support enables us to expand our facilities and reach even
              more orphaned children in need. Together, we ensure that no child
              is left behind, and every dream has the chance to flourish.
            </p>

            <Link href={routes.messages}>
              <Button className="mt-8" variant={"outline"} size={"lg"}>
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
