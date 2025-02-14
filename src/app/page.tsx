import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Catalog />
    </div>
  );
}
