"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef, HTMLAttributes, useEffect, useState } from "react";
import routes from "../lib/constants/routes";
import { usePathname, useRouter } from "next/navigation";
import { IoClose, IoMenu } from "react-icons/io5";
import { Button } from "./ui/button";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const activePathName = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => setIsMenuOpen(false), [activePathName]);

  return (
    <header {...props} ref={ref} className={cn(props.className)}>
      <div className="p-4 py-6  max-w-screen-xl mx-auto flex gap-8">
        <Link href={routes.home}>
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="organization logo"
              width={50}
              height={50}
            />
            <h1 className="text-brand-primary font-bold text-xl whitespace-nowrap">
              Begum Inayat Welfare
            </h1>
          </div>
        </Link>

        <button
          className="md:hidden z-20 ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IoClose size={30} />
          ) : (
            <IoMenu size={30} className="text-brand-secondary" />
          )}
        </button>

        <div
          className={cn(
            "flex z-10 bg-white ml-auto gap-4 items-center max-md:fixed inset-0 max-md:w-full max-md:h-full max-md:flex-col",
            "max-md:justify-center max-md:items-center max-md:text-xl",
            isMenuOpen ? "translate-x-0" : "md:translate-x-0 translate-x-full",
            "transition-transform transform"
          )}
        >
          <ul className="flex gap-4 items-center max-md:flex-col">
            {[
              { label: "Home", link: routes.home },
              { label: "Messages", link: routes.messages },
              { label: "Our Work", link: routes.work }
            ].map((link, i) => {
              return (
                <li
                  key={i}
                  className="font-medium relative group whitespace-nowrap"
                >
                  <Link href={link.link}>{link.label}</Link>
                  <div
                    className={cn(
                      activePathName !== link.link && "scale-x-0",
                      "absolute w-full h-[0.15rem] transition-all origin-left duration-300 group-hover:scale-x-100 -bottom-[0.2rem] bg-cyan-600 delay-50 rounded-md"
                    )}
                  ></div>
                </li>
              );
            })}
          </ul>

          <Link href={routes.contact}>
            <Button variant={"brand"} className="font-bold" size={"lg"}>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
