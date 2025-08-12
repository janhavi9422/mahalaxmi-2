import { PropertyCard } from "./PropertyCard";
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
    price: "₹85 Lakh onwards",
    image: property1,
    bedrooms: 3,
    bathrooms: 2,
    area: "1,200 sq ft",
    type: "Apartment",
    features: ["Modular Kitchen", "Gym & Pool", "24/7 Security", "Power Backup"]
  },
  {
    id: 2,
    title: "Royal Villa Paradise",
    location: "Wardha Road, Nagpur",
    price: "₹1.5 Cr onwards",
    image: property2,
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sq ft",
    type: "Villa",
    features: ["Private Garden", "Swimming Pool", "Car Parking", "Gated Community"]
  },
  {
    id: 3,
    title: "Business Hub Complex",
    location: "Sitabuldi, Nagpur",
    price: "₹60 Lakh onwards",
    image: property3,
    area: "800 sq ft",
    type: "Commercial",
    features: ["Prime Location", "High-Speed Elevators", "24/7 Access", "Food Court"]
  },
  {
    id: 4,
    title: "Skyline Penthouse",
    location: "Dharampeth, Nagpur",
    price: "₹2.2 Cr onwards",
    image: property4,
    bedrooms: 3,
    bathrooms: 3,
    area: "1,800 sq ft",
    type: "Penthouse",
    features: ["Terrace Garden", "City View", "Premium Interiors", "Smart Home"]
  },
  {
    id: 5,
    title: "Green Valley Homes",
    location: "Koradi Road, Nagpur",
    price: "₹65 Lakh onwards",
    image: property5,
    bedrooms: 2,
    bathrooms: 2,
    area: "1,100 sq ft",
    type: "Townhouse",
    features: ["Eco-Friendly", "Kids Play Area", "Jogging Track", "Club House"]
  },
  {
    id: 6,
    title: "Elite Shopping Plaza",
    location: "Sadar, Nagpur",
    price: "₹45 Lakh onwards",
    image: property6,
    area: "600 sq ft",
    type: "Retail",
    features: ["High Footfall", "Brand Outlets", "Parking Facility", "Food Zone"]
  }
];

export function PropertiesSection() {
  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-luxury mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties designed for modern living and business success
          </p>
          <div className="w-24 h-1 bg-gradient-luxury mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Don't see what you're looking for? We have more exclusive properties available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("tel:+919876543210", "_self")}
              className="bg-gradient-hero text-luxury-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-luxury transition-all duration-300"
            >
              Call for More Properties
            </button>
            <button
              onClick={() => {
                const message = "Hi, I would like to see more properties from Mahalaxmi Developers.";
                window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
              }}
              className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              WhatsApp for Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}