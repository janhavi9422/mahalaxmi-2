import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Award, Users, Building } from "lucide-react";
import { CounterAnimation } from "./CounterAnimation";
import heroBanner from "@/assets/mahalaxmi-banner.jpg";

export function Hero() {
  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi, I'm interested in your premium properties. Please provide more information.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="relative pt-20 md:pt-24 pb-12 bg-background">
      <div className="container mx-auto px-6 space-y-10">
        {/* Banner image like the reference site */}
        <div className="rounded-3xl overflow-hidden shadow-card animate-fade-in">
          <img
            src={heroBanner}
            alt="Mahalaxmi Developers banner - premium properties in Nagpur"
            className="w-full h-[40vh] md:h-[60vh] object-cover"
            loading="eager"
          />
        </div>

        {/* Simple, clear stats (animated) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <Award className="w-8 h-8 text-premium" />
            </div>
            <div className="text-2xl font-bold text-luxury">
              <CounterAnimation end={15} suffix="+" />
            </div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <Building className="w-8 h-8 text-premium" />
            </div>
            <div className="text-2xl font-bold text-luxury">
              <CounterAnimation end={50} suffix="+" />
            </div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <Users className="w-8 h-8 text-premium" />
            </div>
            <div className="text-2xl font-bold text-luxury">
              <CounterAnimation end={2000} suffix="+" />
            </div>
            <div className="text-muted-foreground">Happy Families</div>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button
            onClick={handleCall}
            size="lg"
            className="bg-premium text-premium-foreground hover:bg-premium/90 hover:shadow-premium transition-all duration-300 font-semibold"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            variant="outline"
            className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </div>

        <div className="text-muted-foreground text-sm text-center">
          <p>📞 +91 98765 43210 | 📧 info@mahalaxmidevelopers.com</p>
        </div>
      </div>
    </section>
  );
}
