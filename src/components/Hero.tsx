import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Award, Users, Building } from "lucide-react";

export function Hero() {
  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi, I'm interested in your premium properties. Please provide more information.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Company Logo/Name */}
          <div className="space-y-4">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-luxury-foreground leading-tight">
              Mahalaxmi
              <span className="block text-premium">Developers</span>
            </h1>
            <p className="text-xl md:text-2xl text-luxury-foreground/80 font-light">
              Nagpur's Premier Real Estate Destination
            </p>
          </div>

          {/* Tagline */}
          <div className="bg-luxury-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-luxury-foreground/20">
            <p className="text-lg md:text-xl text-luxury-foreground font-medium">
              "Building Dreams, Creating Legacies"
            </p>
            <p className="text-luxury-foreground/70 mt-2">
              Experience luxury living with our premium residential and commercial properties
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Award className="w-8 h-8 text-premium" />
              </div>
              <div className="text-2xl font-bold text-luxury-foreground">15+</div>
              <div className="text-luxury-foreground/70">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Building className="w-8 h-8 text-premium" />
              </div>
              <div className="text-2xl font-bold text-luxury-foreground">50+</div>
              <div className="text-luxury-foreground/70">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Users className="w-8 h-8 text-premium" />
              </div>
              <div className="text-2xl font-bold text-luxury-foreground">2000+</div>
              <div className="text-luxury-foreground/70">Happy Families</div>
            </div>
          </div>

          {/* CTA Buttons */}
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
              className="border-luxury-foreground/30 text-luxury-foreground hover:bg-luxury-foreground hover:text-luxury transition-all duration-300 font-semibold backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Contact Info */}
          <div className="text-luxury-foreground/70 text-sm">
            <p>📞 +91 98765 43210 | 📧 info@mahalaxmidevelopers.com</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-premium rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}