"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { reviews } from "@/constant/Constant";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Cambiar testimonio automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Opiniones de Clientes
        </h2>

        {/* Contenedor del carrusel */}
        <div className="relative flex justify-center items-center">
          <button
            onClick={prevReview}
            className="absolute left-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            <FaArrowLeft />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full mx-2"
            >
              {/* Imagen del usuario */}
              <div className="flex justify-center mb-4">
                <img
                  src={reviews[current].image}
                  alt={reviews[current].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
                />
              </div>

              {/* Testimonio */}
              <p className="text-gray-700 dark:text-gray-300 text-lg italic">
                "{reviews[current].text}"
              </p>

              {/* Estrellas */}
              <div className="flex justify-center mt-3 text-yellow-400">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Nombre del usuario */}
              <p className="mt-3 font-semibold text-gray-900 dark:text-white">
                - {reviews[current].name}
              </p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={nextReview}
            className="absolute right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
