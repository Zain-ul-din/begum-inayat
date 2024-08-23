"use client";
import { cn } from "@/lib/utils";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "usehooks-ts";

const services = [
  {
    imgSrc: "/images/children.svg",
    title: "Empowering Education",
    description:
      "Your generosity ensures that every child under our care has access to quality education. By unlocking the doors to learning, we break the cycle of poverty and open up a world of opportunities for these children.",
    gradient: "bg-gradient-to-b from-pink-500 to-pink-600"
  },
  {
    imgSrc: "/images/graduation-cap.svg",
    title: "Health and Well-being",
    description:
      "With your help, we provide essential healthcare services and nutritious meals, creating a safe and nurturing environment where children can thrive both physically and mentally.",
    gradient: "bg-gradient-to-b from-blue-800 to-blue-900"
  },
  {
    imgSrc: "/images/love.svg",
    title: "Emotional Support",
    description:
      "Your donation enables us to offer counseling services and emotional support, helping children heal from trauma and build resilience.",
    gradient: "bg-gradient-to-b from-cyan-500 to-cyan-600"
  }
];

export default function ServicesCards() {
  const servicesCardParentRef = useRef<HTMLDivElement>(null);

  const isMdDevice = useMediaQuery("(max-width: 800px");

  useLayoutEffect(() => {
    if (!isMdDevice) return;
    gsap.registerPlugin(ScrollTrigger);

    const sections = Array.from(
      document.querySelectorAll("[data-horizontal-scroll]")
    ) as HTMLDivElement[];

    const parentWidth = servicesCardParentRef.current?.clientWidth as number;
    const gapInPx = 8;
    const sectionsWidth = sections.reduce(
      (prev, curr) => prev + (curr.clientWidth + gapInPx),
      0
    );

    const overflowWidth = sectionsWidth - parentWidth;
    const overFlowPercentage =
      ((overflowWidth + gapInPx * sections.length) / sectionsWidth) * 100;

    // ✔ move cards to -x by overflowPercentage

    gsap.to(sections, {
      xPercent: -overFlowPercentage * sections.length,
      ease: "none",
      scrollTrigger: {
        trigger: "main",
        start: "top+=300px",
        pin: true,
        scrub: true,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector("main")?.offsetWidth
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMdDevice]);

  return (
    <>
      <div
        ref={servicesCardParentRef}
        className="max-w-[1200px] grid mx-auto p-2 gap-2 pointer-events-none -translate-y-10 overflow-hidden"
        style={{
          gridTemplateColumns: "repeat(3, minmax(250px, 1fr))"
        }}
      >
        {services.map((item, i) => (
          <div
            key={i}
            className={cn(
              "w-full bg-blue-900 text-white p-4 md:p-8 rounded-md",
              item.gradient
            )}
            data-horizontal-scroll
          >
            <img
              src={item.imgSrc}
              alt={`${item.title} icon`}
              width={"60"}
              height={"60"}
            />
            <h1 className="font-bold text-2xl my-4">{item.title}</h1>
            <p className="text-sm mb-2">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
