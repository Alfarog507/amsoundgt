import React from "react";

const reviews = [
  { name: "Carlos M.", text: "Excelente calidad y servicio. Recomendado!" },
  { name: "Ana P.", text: "Compré una guitarra y llegó súper rápido." },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Opiniones de Clientes
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-sm"
            >
              <p className="text-gray-700 dark:text-gray-300">
                "{review.text}"
              </p>
              <p className="mt-2 font-semibold text-gray-900 dark:text-white">
                - {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
