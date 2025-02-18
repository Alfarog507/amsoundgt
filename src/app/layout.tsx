import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Head from "next/head";

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Artículos y accesorios musicales de las mejores marcas al mejor precio"
        />
        <meta property="og:title" content="AM Sound GT" />
        <meta
          property="og:description"
          content="Artículos y accesorios musicales de las mejores marcas al mejor precio"
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://amsoundgt.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AM Sound GT" />
        <meta
          name="twitter:description"
          content="Artículos y accesorios musicales de las mejores marcas al mejor precio"
        />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <title>AM Sound GT</title>
      </Head>
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
