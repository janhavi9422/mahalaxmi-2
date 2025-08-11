import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Bed, Bath, Square, Phone, MessageCircle, Navigation, Calculator, Heart, Share } from "lucide-react";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";
import property4 from "@/assets/property4.jpg";
import property5 from "@/assets/property5.jpg";
import property6 from "@/assets/property6.jpg";

const properties = [
  {
    id: 1,
    title: "Mahalaxmi Heights",
    location: "Civil Lines, Nagpur",
    address: "123 Civil Lines Road, Near Variety Square, Nagpur - 440001",
    price: "₹85 Lakh onwards",
    priceRange: "₹85 Lakh - ₹1.2 Crore",
    image: property1,
    bedrooms: 3,
    bathrooms: 2,
    area: "1,200 sq ft",
    type: "Apartment",
    features: ["Modular Kitchen", "Gym & Pool", "24/7 Security", "Power Backup", "Elevators", "Parking"],
    description: "Experience luxury living at Mahalaxmi Heights, strategically located in the heart of Civil Lines. This premium residential complex offers modern amenities and world-class facilities.",
    directions: "From Sitabuldi: Take Metro Road towards Civil Lines, turn right at Variety Square. Property is 500m ahead on the right side.",
    nearbyPlaces: ["Variety Square - 0.5 km", "Civil Hospital - 1 km", "Nagpur University - 2 km", "Airport - 8 km"]
  },
  {
    id: 2,
    title: "Royal Villa Paradise",
    location: "Wardha Road, Nagpur",
    address: "456 Wardha Road, Near AIIMS, Nagpur - 440015",
    price: "₹1.5 Cr onwards",
    priceRange: "₹1.5 Crore - ₹2.8 Crore",
    image: property2,
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sq ft",
    type: "Villa",
    features: ["Private Garden", "Swimming Pool", "Car Parking", "Gated Community", "Kids Play Area", "Security"],
    description: "Discover the epitome of luxury living at Royal Villa Paradise. These spacious villas come with private gardens and premium amenities for a royal lifestyle.",
    directions: "From Sitabuldi: Take Wardha Road, drive 12 km towards AIIMS. Property is on the left side, opposite to AIIMS campus.",
    nearbyPlaces: ["AIIMS Nagpur - 0.3 km", "Wardha Road Metro - 1.5 km", "Empress Mall - 5 km", "Airport - 15 km"]
  },
  {
    id: 3,
    title: "Business Hub Complex",
    location: "Sitabuldi, Nagpur",
    address: "789 Central Avenue, Sitabuldi Main Road, Nagpur - 440012",
    price: "₹60 Lakh onwards",
    priceRange: "₹60 Lakh - ₹1.5 Crore",
    image: property3,
    area: "800 sq ft",
    type: "Commercial",
    features: ["Prime Location", "High-Speed Elevators", "24/7 Access", "Food Court", "Parking", "Security"],
    description: "Establish your business at the most prestigious commercial complex in Sitabuldi. Prime location with excellent connectivity and modern infrastructure.",
    directions: "Located on Sitabuldi Main Road, directly accessible from Central Avenue. 2 minutes walk from Sitabuldi Metro Station.",
    nearbyPlaces: ["Sitabuldi Metro - 0.2 km", "Central Mall - 0.5 km", "Railway Station - 1 km", "High Court - 1.5 km"]
  },
  {
    id: 4,
    title: "Skyline Penthouse",
    location: "Dharampeth, Nagpur",
    address: "321 Dharampeth Extension, Near Law College, Nagpur - 440010",
    price: "₹2.2 Cr onwards",
    priceRange: "₹2.2 Crore - ₹3.5 Crore",
    image: property4,
    bedrooms: 3,
    bathrooms: 3,
    area: "1,800 sq ft",
    type: "Penthouse",
    features: ["Terrace Garden", "City View", "Premium Interiors", "Smart Home", "Private Elevator", "Parking"],
    description: "Live above the clouds at Skyline Penthouse. Enjoy panoramic city views and luxury amenities in the prestigious Dharampeth area.",
    directions: "From Sitabuldi: Take Dharampeth Road, drive 4 km towards Law College. Property is adjacent to Law College campus.",
    nearbyPlaces: ["Law College - 0.1 km", "Dharampeth Market - 0.8 km", "Morris College - 1 km", "Futala Lake - 3 km"]
  },
  {
    id: 5,
    title: "Green Valley Homes",
    location: "Koradi Road, Nagpur",
    address: "654 Koradi Road, Near Wadi Metro, Nagpur - 440023",
    price: "₹65 Lakh onwards",
    priceRange: "₹65 Lakh - ₹95 Lakh",
    image: property5,
    bedrooms: 2,
    bathrooms: 2,
    area: "1,100 sq ft",
    type: "Townhouse",
    features: ["Eco-Friendly", "Kids Play Area", "Jogging Track", "Club House", "Garden", "Security"],
    description: "Embrace sustainable living at Green Valley Homes. Eco-friendly townhouses with modern amenities and lush green surroundings.",
    directions: "From Sitabuldi: Take Ring Road towards Koradi, exit at Wadi Metro. Property is 1 km from Wadi Metro Station.",
    nearbyPlaces: ["Wadi Metro - 1 km", "VNIT - 3 km", "Manish Nagar - 2 km", "Koradi Temple - 8 km"]
  },
  {
    id: 6,
    title: "Elite Shopping Plaza",
    location: "Sadar, Nagpur",
    address: "987 Sadar Bazaar Road, Near GPO, Nagpur - 440001",
    price: "₹45 Lakh onwards",
    priceRange: "₹45 Lakh - ₹80 Lakh",
    image: property6,
    area: "600 sq ft",
    type: "Retail",
    features: ["High Footfall", "Brand Outlets", "Parking Facility", "Food Zone", "ATM", "Security"],
    description: "Invest in the bustling Sadar market area. High footfall retail spaces perfect for businesses and brand outlets.",
    directions: "Located on main Sadar Bazaar Road, 100m from GPO (General Post Office). Easily accessible from all parts of the city.",
    nearbyPlaces: ["GPO - 0.1 km", "Sadar Metro - 0.5 km", "Medical Square - 1 km", "Zero Mile - 2 km"]
  }
];

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const property = properties.find(p => p.id === parseInt(id || ""));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${property.title} located at ${property.location}. Price: ${property.price}. Please provide more details and arrange a site visit.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleGetDirections = () => {
    const query = encodeURIComponent(property.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-luxury text-luxury-foreground py-6">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-luxury-foreground hover:bg-luxury-foreground/10 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Button>
          <h1 className="font-heading text-3xl md:text-4xl font-bold">{property.title}</h1>
          <p className="text-luxury-foreground/80 text-lg mt-2">{property.location}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-96 object-cover rounded-xl shadow-luxury"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-premium text-premium-foreground font-medium px-3 py-1">
                  {property.type}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                  <Share className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Property Details */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-heading text-2xl font-bold text-luxury mb-4">Property Details</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {property.bedrooms && (
                    <div className="text-center p-4 bg-secondary/50 rounded-lg">
                      <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">{property.bedrooms}</div>
                      <div className="text-sm text-muted-foreground">Bedrooms</div>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="text-center p-4 bg-secondary/50 rounded-lg">
                      <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="font-semibold">{property.bathrooms}</div>
                      <div className="text-sm text-muted-foreground">Bathrooms</div>
                    </div>
                  )}
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <Square className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.area}</div>
                    <div className="text-sm text-muted-foreground">Area</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <Calculator className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold text-premium">{property.price}</div>
                    <div className="text-sm text-muted-foreground">Starting</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Price Range</h3>
                    <p className="text-primary font-bold text-xl">{property.priceRange}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Features & Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="bg-secondary/50">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Directions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-heading text-2xl font-bold text-luxury mb-4">Location & Directions</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Full Address
                    </h3>
                    <p className="text-muted-foreground">{property.address}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Navigation className="w-5 h-5 text-primary" />
                      How to Reach
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{property.directions}</p>
                    <Button 
                      onClick={handleGetDirections}
                      className="mt-3 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions on Map
                    </Button>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Nearby Places</h3>
                    <ul className="space-y-1">
                      {property.nearbyPlaces.map((place, index) => (
                        <li key={index} className="text-muted-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-luxury mb-2">{property.price}</div>
                  <p className="text-muted-foreground">Starting Price</p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={handleCall}
                    className="w-full bg-gradient-hero text-luxury-foreground hover:shadow-luxury transition-all duration-300 font-semibold"
                    size="lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now for Site Visit
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp for Details
                  </Button>

                  <div className="text-center pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Contact our property expert</p>
                    <p className="font-semibold text-primary">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Quick Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property Type:</span>
                    <span className="font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Area:</span>
                    <span className="font-medium">{property.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price Range:</span>
                    <span className="font-medium text-primary">{property.priceRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Possession:</span>
                    <span className="font-medium">Ready to Move</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">RERA Approved:</span>
                    <span className="font-medium text-green-600">Yes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;