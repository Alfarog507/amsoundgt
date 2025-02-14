"use client";
import { useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-20 transition-all duration-300 border-b border-gray-200 dark:border-gray-700">
      <nav className="flex justify-between items-center px-8 py-4 max-w-screen-xl mx-auto">
        {/* Logo estilizado */}
        <div className="text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white">
          AM Sound GT
        </div>

        {/* Enlaces de navegación */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Inicio
          </a>
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Acerca de
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Contacto
          </a>
        </div>

        {/* Botón de cambio de tema */}
        <ThemeToggleButton />

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Inicio
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Acerca de
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
