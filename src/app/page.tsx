import dynamic from "next/dynamic";

const ResponsiveNav = dynamic(
  () => import("@/components/Navbar/ResponsiveNav")
);
const Hero = dynamic(() => import("@/components/Hero"));
const Catalog = dynamic(() => import("@/components/Catalog"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div>
      <ResponsiveNav />
      <Hero />
      <Catalog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
