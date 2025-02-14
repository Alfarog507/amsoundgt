import React from "react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-800 px-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Bienvenido a <span className="text-blue-500">AM Sound GT</span>
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-3">
        Artículos y accesorios musicales de las mejores marcas al mejor precio
      </p>
      <a
        href="#catalog"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-md shadow-md hover:bg-blue-700 transition-all"
      >
        Ver Catálogo
      </a>
    </section>
  );
}
