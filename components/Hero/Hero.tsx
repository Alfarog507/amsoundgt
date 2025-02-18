import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      {/* Imagen de fondo más grande */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50">
        <Image
          src="/images/Hero.webp"
          alt="Imagen de fondo de AM Sound GT"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.hero__image}
        />
      </div>

      {/* Contenido Principal más a la izquierda */}
      <div className={styles.hero__content}>
        <h1 id="hero-heading" className={styles.hero__heading}>
          AM <br /> Sound GT
        </h1>
        <p className={styles.hero__description}>
          🔊💥 Artículos y accesorios musicales de las mejores marcas al mejor
          precio 🚚 Envíos a toda GT
        </p>

        {/* Botón interactivo */}
        <div className="mt-6">
          <a
            href="#contacto"
            className={styles.hero__button}
            aria-label="Ir a la sección de contacto"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
