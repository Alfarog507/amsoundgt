import dynamic from "next/dynamic";

const ResponsiveNav = dynamic(
  () => import("@/components/Navbar/ResponsiveNav")
);
const Hero = dynamic(() => import("@/components/Hero/Hero"));
const Catalog = dynamic(() => import("@/components/Catalog/Catalog"));
const Testimonials = dynamic(
  () => import("@/components/Testimonials/Testimonials")
);
const Contact = dynamic(() => import("@/components/Contact/Contact"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));

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
