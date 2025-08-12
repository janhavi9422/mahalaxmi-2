import { QuotationForm } from "./QuotationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Mail, Clock, Building } from "lucide-react";

export function ContactSection() {
  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi, I would like to schedule a site visit and get more information about your properties.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-luxury-foreground mb-4">
            Ready to Book Your Dream Property?
          </h2>
          <p className="text-xl text-luxury-foreground/80 max-w-2xl mx-auto">
            Contact us today for site visits, property details, and exclusive offers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-6">
            <Card className="bg-luxury-foreground/10 backdrop-blur-sm border-luxury-foreground/20 hover:bg-luxury-foreground/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-premium rounded-full p-3">
                    <Phone className="w-6 h-6 text-premium-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-luxury-foreground text-lg">Call Us Now</h3>
                    <p className="text-luxury-foreground/70">Get instant assistance from our property experts</p>
                    <p className="text-premium font-bold text-xl mt-1">+91 98765 43210</p>
                  </div>
                  <Button
                    onClick={handleCall}
                    className="bg-premium text-premium-foreground hover:bg-premium/90 hover:shadow-premium transition-all duration-300"
                  >
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-luxury-foreground/10 backdrop-blur-sm border-luxury-foreground/20 hover:bg-luxury-foreground/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 rounded-full p-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-luxury-foreground text-lg">WhatsApp Chat</h3>
                    <p className="text-luxury-foreground/70">Chat with us for quick responses and property updates</p>
                    <p className="text-green-400 font-bold text-xl mt-1">+91 98765 43210</p>
                  </div>
                  <Button
                    onClick={handleWhatsApp}
                    className="bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
                  >
                    Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-luxury-foreground/5 backdrop-blur-sm border-luxury-foreground/20">
                <CardContent className="p-4 text-center">
                  <MapPin className="w-6 h-6 text-premium mx-auto mb-2" />
                  <h4 className="font-semibold text-luxury-foreground">Office Address</h4>
                  <p className="text-sm text-luxury-foreground/70 mt-1">
                    123 Business Centre,<br />
                    Civil Lines, Nagpur - 440001
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-luxury-foreground/5 backdrop-blur-sm border-luxury-foreground/20">
                <CardContent className="p-4 text-center">
                  <Mail className="w-6 h-6 text-premium mx-auto mb-2" />
                  <h4 className="font-semibold text-luxury-foreground">Email Us</h4>
                  <p className="text-sm text-luxury-foreground/70 mt-1">
                    info@mahalaxmidevelopers.com<br />
                    sales@mahalaxmidevelopers.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-luxury-foreground mb-6">
              Why Choose Mahalaxmi Developers?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-premium rounded-full p-2 mt-1">
                  <Building className="w-4 h-4 text-premium-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-foreground">15+ Years of Excellence</h4>
                  <p className="text-luxury-foreground/70 text-sm">Trusted name in Nagpur's real estate market</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-premium rounded-full p-2 mt-1">
                  <Clock className="w-4 h-4 text-premium-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-foreground">On-Time Delivery</h4>
                  <p className="text-luxury-foreground/70 text-sm">100% track record of timely project completion</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-premium rounded-full p-2 mt-1">
                  <Phone className="w-4 h-4 text-premium-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-foreground">24/7 Customer Support</h4>
                  <p className="text-luxury-foreground/70 text-sm">Always available for your queries and assistance</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-premium rounded-full p-2 mt-1">
                  <MapPin className="w-4 h-4 text-premium-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-foreground">Prime Locations</h4>
                  <p className="text-luxury-foreground/70 text-sm">Strategic locations across Nagpur's best areas</p>
                </div>
              </div>
            </div>

            <Card className="bg-premium/10 backdrop-blur-sm border-premium/30 mt-6">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-luxury-foreground mb-2">🎉 Limited Time Offer</h4>
                <p className="text-luxury-foreground/80 text-sm mb-3">
                  Book now and get special discounts + free site visit
                </p>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-premium text-premium-foreground hover:bg-premium/90 font-semibold"
                >
                  Claim Offer Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Quotation Form */}
      <QuotationForm />
    </section>
  );
}