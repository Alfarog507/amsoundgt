"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constant/Constant";
import ThemeToggleButton from "../ThemeButton/ThemeToggleButton";
import { useTheme } from "@/src/hooks/useTheme";

type NavProps = {
  openNav: () => void;
};

export default function Nav({ openNav }: NavProps) {
  const [navBg, setNavBg] = useState(false);
  const { theme, mounted } = useTheme();
  const [computedClass, setComputedClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mounted || !theme) return; // Evita errores de hidratación

    setComputedClass(() => {
      if (navBg) {
        return theme === "dark"
          ? "bg-background text-foreground"
          : "bg-background text-foreground";
      } else {
        return theme === "dark"
          ? "bg-transparent text-foreground"
          : "bg-transparent text-foreground";
      }
    });
  }, [theme, navBg, mounted]);

  if (!mounted) return null; // Evita renderizar hasta que el tema esté cargado

  return (
    <div
      className={`w-full transition-all duration-200 h-[12vh] z-[1000] fixed ${computedClass}`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <h1 className="text-xl md:text-2xl font-bold">
          <span className="text-2xl pr-2 md:text-3xl text-blue-800">AM</span>
          Sound GT
        </h1>
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-10"
        >
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="nav__link">{link.title}</p>
            </Link>
          ))}
        </nav>
        <ThemeToggleButton />
        {/* Mobile Nav Button */}
        <div onClick={openNav} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
