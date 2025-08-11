import { Hero } from "@/components/Hero";
import { PropertiesSection } from "@/components/PropertiesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PropertiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
