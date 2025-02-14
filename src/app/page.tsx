import React from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <h1 className="text-4xl font-bold text-blue-600">
          ¡Hola, AM Sound GT! 🎵
        </h1>
      </div>
    </div>
  );
}
