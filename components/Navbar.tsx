import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background text-foreground shadow-md z-10">
      <nav className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-lg font-bold">AM Sound GT</div>

        {/* Enlaces de navegación */}
        <div className="flex space-x-6">
          <a href="#home" className="text-foreground hover:text-blue-500">
            Inicio
          </a>
          <a href="#about" className="text-foreground hover:text-blue-500">
            Acerca de
          </a>
          <a href="#contact" className="text-foreground hover:text-blue-500">
            Contactos
          </a>
        </div>

        {/* Botón de cambio de tema */}
        <ThemeToggleButton />
      </nav>
    </header>
  );
}
