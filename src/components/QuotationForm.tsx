import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function QuotationForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    budget: "",
    location: "",
    bedrooms: "",
    amenities: [] as string[],
    additionalRequirements: ""
  });

  const amenitiesList = [
    "Swimming Pool",
    "Gym/Fitness Center",
    "Kids Play Area",
    "Garden/Landscaping",
    "Car Parking",
    "24/7 Security",
    "Power Backup",
    "Elevator",
    "Club House",
    "Shopping Complex"
  ];

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: checked 
        ? [...prev.amenities, amenity]
        : prev.amenities.filter(a => a !== amenity)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
🏠 Property Quotation Request

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

🏘️ Property Details:
- Type: ${formData.propertyType}
- Budget: ${formData.budget}
- Preferred Location: ${formData.location}
- Bedrooms: ${formData.bedrooms}

✨ Desired Amenities:
${formData.amenities.map(amenity => `- ${amenity}`).join('\n')}

📝 Additional Requirements:
${formData.additionalRequirements}

Please provide a detailed quotation for properties matching these requirements.
    `.trim();

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
    
    toast({
      title: "Quotation Request Sent!",
      description: "We'll get back to you with personalized property options soon.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      propertyType: "",
      budget: "",
      location: "",
      bedrooms: "",
      amenities: [],
      additionalRequirements: ""
    });
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-luxury-foreground/5 backdrop-blur-sm border-luxury-foreground/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-premium rounded-full p-3">
                <FileText className="w-8 h-8 text-premium-foreground" />
              </div>
            </div>
            <CardTitle className="font-heading text-3xl font-bold text-luxury-foreground">
              Get Your Dream Property Quotation
            </CardTitle>
            <p className="text-luxury-foreground/70 text-lg">
              Not sure which property suits you? Fill out this form and we'll send you personalized options!
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-luxury-foreground font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-luxury-foreground/10 border-luxury-foreground/20 text-luxury-foreground"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-luxury-foreground font-medium">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="bg-luxury-foreground/10 border-luxury-foreground/20 text-luxury-foreground"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-luxury-foreground font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-luxury-foreground/10 border-luxury-foreground/20 text-luxury-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-luxury-foreground font-medium">Property Type *</Label>
                  <Select required onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}>
                    <SelectTrigger className="bg-luxury-foreground/10 border-luxury-foreground/20 text-luxury-foreground">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="commercial">Commercial Space</SelectItem>
                      <SelectItem value="plot">Plot/Land</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-luxury-foreground font-medium">Budget Range *</Label>
                  <Select required onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                    <SelectTrigger className="bg-luxury-foreground/10 border-luxury-foreground/20 text-luxury-foreground">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30-50-lakh">₹30 - ₹50 Lakh</SelectItem>
                      <SelectItem value="50-75-lakh">₹50 - ₹75 Lakh</SelectItem>
                      <SelectItem value="75-1-crore">₹75 Lakh - ₹1 Crore</SelectItem>
                      <SelectItem value="1-2-crore">₹1 - ₹2 Crore</SelectItem>
                      <SelectItem value="2-crore-plus">₹2 Crore+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-luxury-foreground font-medium">Preferred Location</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}>
                    <SelectTrigger className="bg-luxury-foreground/10 border-luxury-foreground/20 text-luxury-foreground">
                      <SelectValue placeholder="Select preferred area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="civil-lines">Civil Lines</SelectItem>
                      <SelectItem value="dharampeth">Dharampeth</SelectItem>
                      <SelectItem value="sitabuldi">Sitabuldi</SelectItem>
                      <SelectItem value="wardha-road">Wardha Road</SelectItem>
                      <SelectItem value="koradi-road">Koradi Road</SelectItem>
                      <SelectItem value="sadar">Sadar</SelectItem>
                      <SelectItem value="any">Any Good Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-luxury-foreground font-medium">Number of Bedrooms</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, bedrooms: value }))}>
                    <SelectTrigger className="bg-luxury-foreground/10 border-luxury-foreground/20 text-luxury-foreground">
                      <SelectValue placeholder="Select bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 BHK</SelectItem>
                      <SelectItem value="2">2 BHK</SelectItem>
                      <SelectItem value="3">3 BHK</SelectItem>
                      <SelectItem value="4">4 BHK</SelectItem>
                      <SelectItem value="5plus">5+ BHK</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-luxury-foreground font-medium">Desired Amenities (Select all that apply)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {amenitiesList.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox
                        id={amenity}
                        checked={formData.amenities.includes(amenity)}
                        onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                        className="border-luxury-foreground/30 data-[state=checked]:bg-premium data-[state=checked]:border-premium"
                      />
                      <Label
                        htmlFor={amenity}
                        className="text-sm text-luxury-foreground/80 cursor-pointer"
                      >
                        {amenity}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements" className="text-luxury-foreground font-medium">Additional Requirements</Label>
                <Textarea
                  id="requirements"
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalRequirements: e.target.value }))}
                  className="bg-luxury-foreground/10 border-luxury-foreground/20 text-luxury-foreground min-h-[100px]"
                  placeholder="Any specific requirements, preferences, or questions you have..."
                />
              </div>

              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-luxury text-premium-foreground hover:shadow-premium transition-all duration-300 font-semibold px-8"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Quotation Request
                </Button>
                <p className="text-luxury-foreground/60 text-sm mt-3">
                  We'll send your quotation via WhatsApp within 2 hours
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}