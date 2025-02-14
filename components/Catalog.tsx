import React from "react";

// Datos de ejemplo (luego podemos conectarlo con una API)
const products = [
  {
    id: 1,
    name: "Guitarra Acústica Yamaha",
    price: "Q1,500.00",
    image: "/images/guitarra.jpg",
  },
  {
    id: 2,
    name: "Teclado Casio CT-X700",
    price: "Q2,200.00",
    image: "/images/teclado.jpg",
  },
  {
    id: 3,
    name: "Micrófono Shure SM58",
    price: "Q750.00",
    image: "/images/microfono.jpg",
  },
];

export default function Catalog() {
  return (
    <section id="catalog" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Catálogo de Productos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {product.price}
                </p>
                <a
                  href="https://www.instagram.com/amsound.gt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Comprar en Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
