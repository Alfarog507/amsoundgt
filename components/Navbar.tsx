import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-foreground shadow-md z-10 transition-colors duration-300">
      <nav className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-lg font-bold font-mono">AM Sound GT</div>

        {/* Enlaces de navegación */}
        <div className="flex space-x-6 font-mono">
          <a href="#home" className="hover:text-blue-500 transition-colors">
            Inicio
          </a>
          <a href="#about" className="hover:text-blue-500 transition-colors">
            Acerca de
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            Contactos
          </a>
        </div>

        {/* Botón de cambio de tema */}
        <ThemeToggleButton />
      </nav>
    </header>
  );
}
