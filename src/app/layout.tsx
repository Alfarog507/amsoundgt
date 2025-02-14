import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const font = Poppins({
  weight: ["100", "300", "400", "500", "600", "700", "200", "900", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AM Sound GT",
  description:
    "Artículos y accesorios musicales de las mejores marcas al mejor precio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
