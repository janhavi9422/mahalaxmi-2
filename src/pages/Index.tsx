import { Hero } from "@/components/Hero";
import { PropertiesSection } from "@/components/PropertiesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PropertiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
