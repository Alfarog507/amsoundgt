import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Catalog />
      <Testimonials />
      <Contact />
    </div>
  );
}
