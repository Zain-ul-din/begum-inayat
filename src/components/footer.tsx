import { cn } from "@/lib/utils";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import { forwardRef, HtmlHTMLAttributes } from "react";
import { IoLocationOutline } from "react-icons/io5";

interface FooterProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const Footer = forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  return (
    <footer
      {...props}
      className={cn(
        "mt-24 bg-gray-100",
        "blur-[3px] pointer-events-none",
        props.className
      )}
      ref={ref}
    >
      <div className="max-w-screen-xl  gap-4 p-6 md:p-12 mx-auto grid grid-cols-2 md:grid-cols-3">
        <div className="max-md:col-span-2">
          <h1 className="text-brand-primary font-bold text-2xl mb-2">
            Begum Inayat Welfare Society
          </h1>
          <p>
            A charitable organization dedicated to orphan care and adoption.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="max-md:mr-auto">
            <h1 className="text-xl font-bold text-blue-950 mb-2">Call Us</h1>
            {[
              { name: "Dr Amina Amber", phone_no: "+92-300-843-3162" },
              { name: "Naeem Siddiqi", phone_no: "+92-300-463-6913" }
            ].map((data, i) => {
              return (
                <p
                  key={i}
                  className="mb-1 text-gray-500 max-md:text-sm flex gap-1 max-lg:flex-col"
                >
                  <span>{data.name}</span>
                  <Link
                    href={`tel:${data.phone_no}`}
                    className="underline underline-offset-1"
                  >
                    {data.phone_no}
                  </Link>
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="max-md:mr-auto">
            <h1 className="text-xl font-bold text-blue-950 mb-2">Contact Us</h1>
            <p className="mb-1 text-gray-500 max-md:text-sm">
              naeemsiddiqi55@gmail.com
            </p>
            <p className="mb-1 text-gray-500 max-md:text-sm">
              <Link
                href={`https://maps.app.goo.gl/Nrma9jfM9NMp6Qj38`}
                target="_blank"
              >
                Begum Inayat Welfare Society, Plot 74 H, Block H
                Model Town, Lahore{" "}
                <IconExternalLink className="w-3 md:w-4 inline" />
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 max-w-screen-xl mx-auto border-t border-gray-200 py-4 px-2 flex">
        <p className="ml-auto text-gray-500 max-md:text-sm">
          &copy; copyright 2024
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
