import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { CounterAnimation } from "./CounterAnimation";
import heroBanner from "@/assets/mahalaxmi-banner.jpg";

export function Hero() {
  // Remove the call and WhatsApp handlers since they're already in the Navbar
  
  return (
  <section className="w-full flex flex-col items-center justify-center pt-20 pb-8 bg-[#f8f7f4]">
      <div className="banner-container mx-auto rounded-3xl shadow-xl bg-white p-4 md:p-8" style={{ maxWidth: '1100px' }}>
        <img
          src={heroBanner}
          alt="Mahalaxmi Developers Banner"
          className="w-full h-auto rounded-2xl object-cover"
          style={{ boxShadow: '0 10px 30px -10px rgba(45, 45, 45, 0.15)' }}
        />
      </div>
    </section>
  );
}
