import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Phone, MessageCircle, Eye } from "lucide-react";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  type: string;
  features: string[];
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  image,
  bedrooms,
  bathrooms,
  area,
  type,
  features,
}: PropertyCardProps) {
  const navigate = useNavigate();
  
  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleViewDetails = () => {
    navigate(`/property/${id}`);
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${title} located at ${location}. Please provide more details.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 bg-gradient-card backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-premium text-premium-foreground font-medium px-3 py-1">
            {type}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-luxury/90 backdrop-blur-sm text-luxury-foreground px-3 py-2 rounded-lg font-bold">
            {price}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-heading text-xl font-semibold text-luxury group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {(bedrooms || bathrooms || area) && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-4">
            {bedrooms && (
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>{bedrooms} Beds</span>
              </div>
            )}
            {bathrooms && (
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>{bathrooms} Baths</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              <span>{area}</span>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {features.slice(0, 3).map((feature, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
            >
              {feature}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 pt-4">
          <Button
            onClick={handleViewDetails}
            variant="outline"
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
          <Button
            onClick={handleCall}
            className="flex-1 bg-gradient-hero text-luxury-foreground hover:shadow-premium transition-all duration-300 font-medium"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
        </div>
        
        <Button
          onClick={handleWhatsApp}
          variant="outline"
          className="w-full mt-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 font-medium"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp for Details
        </Button>
      </CardContent>
    </Card>
  );
}