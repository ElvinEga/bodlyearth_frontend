import NavbarLanding from "../../components/landing/navbar";
import AboutSection from "./about";
import ClientsSection from "./clients";
import ContactSection from "./contact";
import FeaturesSection from "./features";
import FooterSection from "./footer";
import Hero from "./hero";
import ProductsSection from "./products";

export default function LandingPage() {
  return (
    <>
      {/* Navbar */}
      <NavbarLanding />
      {/* Hero */}
      <Hero />
      {/* about */}
      <AboutSection />
      {/* features */}
      <FeaturesSection />
      {/* Products */}
      <ProductsSection />
      {/* Clients */}
      <ClientsSection />
      {/* Map Contactu */}
      <ContactSection />
      {/* Footer */}
      <FooterSection />
    </>
  );
}
