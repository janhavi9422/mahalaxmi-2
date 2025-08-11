import { Building, Phone, Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-luxury text-luxury-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building className="w-6 h-6 text-premium" />
              <h3 className="font-heading text-xl font-bold">Mahalaxmi Developers</h3>
            </div>
            <p className="text-luxury-foreground/80 text-sm leading-relaxed">
              Building dreams and creating legacies in Nagpur for over 15 years. 
              We specialize in premium residential and commercial properties that 
              offer the perfect blend of luxury, comfort, and investment value.
            </p>
            <div className="text-premium font-semibold">
              "Your Trusted Property Partner"
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-premium" />
                <div>
                  <p className="text-sm">Sales: +91 98765 43210</p>
                  <p className="text-sm">Office: +91 712 2345678</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-premium" />
                <div>
                  <p className="text-sm">info@mahalaxmidevelopers.com</p>
                  <p className="text-sm">sales@mahalaxmidevelopers.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-premium mt-1" />
                <div className="text-sm">
                  <p>123 Business Centre</p>
                  <p>Civil Lines, Nagpur - 440001</p>
                  <p>Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm text-luxury-foreground/80">
              <li>• Residential Apartments</li>
              <li>• Luxury Villas</li>
              <li>• Commercial Spaces</li>
              <li>• Plot Development</li>
              <li>• Property Consultation</li>
              <li>• Investment Advisory</li>
              <li>• Home Loans Assistance</li>
              <li>• Legal Documentation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-luxury-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-luxury-foreground/70">
              © 2024 Mahalaxmi Developers. All rights reserved. | RERA Reg. No: P52100000000
            </div>
            <div className="flex items-center gap-2 text-sm text-luxury-foreground/70">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>in Nagpur</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-luxury-foreground/60">
              Disclaimer: All images are for representational purposes only. 
              Actual properties may vary. Please visit our office for detailed information.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}