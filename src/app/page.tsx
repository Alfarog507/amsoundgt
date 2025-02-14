import React from "react";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";

export default function Home() {
  return (
    <div>
      <ResponsiveNav />
      <Hero />
      <Catalog />
      <Testimonials />
      <Contact />
    </div>
  );
}
