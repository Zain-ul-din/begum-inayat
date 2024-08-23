"use client";
import { ReactNode, useLayoutEffect } from "react";

export default function LocoMotiveProvider({
  children
}: {
  children: ReactNode;
}) {
  useLayoutEffect(() => {
    const importLocoMotive = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locoScroll = new LocomotiveScroll({});
    };

    // importLocoMotive();
  }, []);

  return <>{children}</>;
}
