import React from "react";

export default function Contact() {
  return (
    <section id="contacto" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Contáctanos
        </h2>
        <form className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Nombre</span>
            <input
              type="text"
              className="w-full p-2 border rounded-md dark:bg-gray-700"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">
              Correo Electrónico
            </span>
            <input
              type="email"
              className="w-full p-2 border rounded-md dark:bg-gray-700"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Mensaje</span>
            <textarea className="w-full p-2 border rounded-md dark:bg-gray-700"></textarea>
          </label>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
