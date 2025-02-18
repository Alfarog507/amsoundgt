import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center h-screen bg-background text-foreground px-8"
      aria-labelledby="hero-heading"
    >
      {/* Imagen de fondo más grande */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/Hero.webp')" }}
        aria-label="Imagen de fondo de AM Sound GT"
      ></div>

      {/* Contenido Principal más a la izquierda */}
      <div className="relative z-10 max-w-2xl text-left ml-12">
        <h1 className="text-6xl font-extrabold uppercase leading-tight">
          AM <br /> Sound GT
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-md">
          🔊💥 Artículos y accesorios musicales de las mejores marcas al mejor
          precio 🚚 Envíos a toda GT
        </p>

        {/* Botón interactivo */}
        <div className="mt-6">
          <a
            href="#contacto"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            aria-label="Ir a la sección de contacto"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
