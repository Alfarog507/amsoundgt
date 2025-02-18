import React from "react";
import { products } from "@/constant/Constant";
import Image from "next/image";

export default function Catalog() {
  return (
    <section
      id="catalog"
      className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900"
    >
      {/* Contenedor que abarca todo el ancho */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 px-12">
        {/* Sección izquierda: HOT SALE + Producto Destacado */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            HOT SALE
          </h2>
          <div className="relative">
            <Image
              src={products[0].image}
              alt={products[0].name}
              layout="responsive"
              width={700}
              height={475}
              className="w-full object-cover"
            />
            <div className="absolute bottom-4 left-2 right-2 bg-gray-900 text-white px-4 py-2">
              <p className="text-lg font-bold">{products[0].price}</p>
              <p className="text-base">{products[0].name}</p>
              <p className="leading-relaxed text-sm">
                {products[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Sección derecha: Lista de productos */}
        <div className="flex-1 flex flex-col justify-center gap-12">
          {products.slice(1).map((product) => (
            <div key={product.id} className="flex items-center gap-6">
              <Image
                src={product.image}
                alt={product.name}
                width={128}
                height={128}
                className="w-32 h-32 object-cover"
              />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {product.price}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {product.name}
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-8">
            <a
              href="https://www.instagram.com/amsound.gt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
            >
              Visita nuestra tienda en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
