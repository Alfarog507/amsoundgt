import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/contact.svg')",
        backgroundSize: "35%", // Ajusta el tamaño del SVG
        backgroundRepeat: "no-repeat", // Evita que el SVG se repita
        backgroundPosition: "right", // Posiciona el SVG a la izquierda
      }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Contáctanos
          </h2>
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <FaMapMarkerAlt className="inline-block text-gray-700 dark:text-gray-300 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">
                Ubicación: Ciudad Guatemala
              </span>
              <hr className="border-t-2 border-gray-300 dark:border-gray-600 w-1/2 mx-auto mt-2" />
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-gray-700 dark:text-gray-300 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">
                Teléfono: (+502) 5126-3380
              </span>
              <hr className="border-t-2 border-gray-300 dark:border-gray-600 w-1/2 mx-auto mt-2" />
            </div>
            <div className="mb-4">
              <FaInstagram className="inline-block text-gray-700 dark:text-gray-300 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/amsound.gt/"
                  className="text-blue-600 dark:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @amsound.gt
                </a>
              </span>
              <hr className="border-t-2 border-gray-300 dark:border-gray-600 w-1/2 mx-auto mt-2" />
            </div>
            <div className="mb-4">
              <FaFacebook className="inline-block text-gray-700 dark:text-gray-300 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61563611660787"
                  className="text-blue-600 dark:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AM Sound Gt
                </a>
              </span>
              <hr className="border-t-2 border-gray-300 dark:border-gray-600 w-1/2 mx-auto mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
