import { cn } from "@/lib/utils";
import { forwardRef, HtmlHTMLAttributes } from "react";

interface FooterProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const Footer = forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  return (
    <footer
      {...props}
      className={cn("mt-24 bg-gray-100", props.className)}
      ref={ref}
    >
      <div className="max-w-screen-xl  gap-4 p-6 md:p-12 mx-auto grid grid-cols-2 md:grid-cols-3">
        <div className="max-md:col-span-2">
          <h1 className="text-brand-primary font-bold text-2xl mb-2">
            Begum Inayat Welfare
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
            <h1 className="text-xl font-bold text-blue-950 mb-2">Contact Us</h1>
            <p className="mb-1 text-gray-500">org.info@gmail.com</p>
            <p className="mb-1 text-gray-500">see location on map</p>
          </div>
        </div>
      </div>

      <div className="mt-4 max-w-screen-xl mx-auto border-t border-gray-200 py-4 px-2 flex">
        <p className="ml-auto text-gray-500">&copy; copyright 2024</p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
