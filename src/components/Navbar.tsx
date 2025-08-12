import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi, I'm interested in your premium properties. Please provide more information.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-center gap-2" aria-label="Mahalaxmi Developers Home">
          <span className="font-heading text-xl font-bold text-primary">Mahalaxmi</span>
          <span className="font-heading text-xl font-bold text-premium">Developers</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#properties" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Properties</a>
          <a href="#contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Contact</a>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button onClick={handleCall} size="sm" className="bg-premium text-premium-foreground hover:bg-premium/90">
            <Phone className="w-4 h-4 mr-2" /> Call
          </Button>
          <Button onClick={handleWhatsApp} size="sm" variant="outline" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
            <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-8 flex flex-col gap-4">
                <a href="#properties" className="text-foreground/90 hover:text-foreground" aria-label="Go to properties">Properties</a>
                <a href="#contact" className="text-foreground/90 hover:text-foreground" aria-label="Go to contact">Contact</a>
                <div className="h-px bg-border my-2" />
                <Button onClick={handleCall} className="w-full bg-premium text-premium-foreground hover:bg-premium/90">
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </Button>
                <Button onClick={handleWhatsApp} variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
