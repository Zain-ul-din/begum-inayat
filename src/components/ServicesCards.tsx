"use client";
import { cn } from "@/lib/utils";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesCards() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const servicesCardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: servicesCardsRef.current,
        start: "top-=250px",
        end: "top-=100px",
        scrub: 1,
        markers: true
      },
      onUpdate: function () {
        setScrollProgress(this.totalProgress());
      }
    });

    timeline.to("#services-cards", { x: 0 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useLayoutEffect(() => {
    if (servicesCardsRef.current) {
      const maxScrollLeft =
        servicesCardsRef.current.scrollWidth -
        servicesCardsRef.current.clientWidth;
      servicesCardsRef.current.scrollLeft = maxScrollLeft * scrollProgress;
    }
  }, [scrollProgress]);

  return (
    <>
      <div
        ref={servicesCardsRef}
        className="max-w-[1200px] grid scroll-smooth mx-auto p-2 gap-2  -translate-y-10  snap-x snap-mandatory overflow-x-auto"
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
                "w-full bg-blue-900 text-white p-4 md:p-8 rounded-md snap-center",
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
    </>
  );
}
