import React from "react";
import Link from "next/link";
import { navLinks } from "@/constant/Constant";

type MobileNavProps = {
  showMobileNav: boolean;
  closeNav: () => void;
};

export default function MobileNav({ showMobileNav, closeNav }: MobileNavProps) {
  const MobileNavOpen = showMobileNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Mobile Nav overlay */}
      <div
        className={`fixed inset-0 transform transition-all duration-500 z-[10000] bg-background opacity-70 w-full h-screen ${MobileNavOpen}`}
      ></div>
      {/* Nav Links */}
      <div
        className={`text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006] ${MobileNavOpen}`}
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="nav__link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.title}
            </p>
          </Link>
        ))}
        {/* Close Button */}
        <div onClick={closeNav} className="fixed top-4 right-4 z-[10007]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
