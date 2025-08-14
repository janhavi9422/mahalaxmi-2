import property1 from "@/assets/25project.webp";
import property2 from "@/assets/31project.webp";
import property3 from "@/assets/40project.webp";
import property4 from "@/assets/41project.webp";
import property5 from "@/assets/42project.webp";
import property6 from "@/assets/property6.jpg";

export interface Property {
  id: number;
  title: string;
  location: string;
  address: string;
  price: string;
  priceRange: string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  type: string;
  features: string[];
  description: string;
  longDescription: string;
  directions: string;
  nearbyPlaces: string[];
  possessionDate: string;
  reraNumber: string;
  amenities: string[];
  specifications: {
    construction: string;
    flooring: string;
    kitchen: string;
    bathroom: string;
    security: string;
    parking: string;
  };
  projectHighlights?: string[];
  plotDetails?: {
    totalArea: string;
    numberOfPlots: string;
    plotSizes: string;
    developmentStatus: string;
  };
  gallery?: string[];
}

export const properties: Property[] = [
  {
    id: 4,
    title: "Mahalaxmi Nagar 41",
    location: "GUMGAO NEAR, SAMRUDDHI MAHAMARG",
    address: "GUMGAO NEAR, SAMRUDDHI MAHAMARG",
    price: "₹70 Lakh onwards",
    priceRange: "₹70 Lakh - ₹1.1 Crore",
    image: property4,
    area: "82 ACRE",
    type: "",
    features: ["NIT/NMRDA Sanctioned", "RERA Approved", "Investment Location", "Layout Fencing", "Plantation"],
    description: "NIT/NMRDA sanctioned layout with RL - A premium project offering excellent investment opportunities with all basic facilities included.",
    longDescription: "Mahalaxmi Nagar 41 is a prestigious NIT/NMRDA sanctioned project spanning 82 acres with 900 plots. This RERA-approved project offers excellent investment opportunities in a prime location near Samruddhi Mahamarg. The layout features comprehensive fencing with entrance gates, extensive plantation throughout the area, and all essential amenities for modern living. With its strategic location and professional development, this project ensures both comfort and excellent returns on investment.",
    directions: "From Nagpur: Take Samruddhi Mahamarg towards Gumgao. The project is located near Gumgao, Samruddhi Mahamarg.",
    nearbyPlaces: ["Gumgao - 0.5 km", "Samruddhi Mahamarg - 1 km", "Nagpur Airport - 15 km", "Nagpur City Center - 20 km"],
    possessionDate: "Ready to Move",
    reraNumber: "P50500077213",
    amenities: [
      "Internal Cement Concrete Road",
      "Sewage Line",
      "Electric Network With Transformer",
      "Kids Park",
      "Garden",
      "Storm Water Drainage",
      "Open Space Public Utility",
      "BasketBall",
      "Sewage Treatment Plant",
      "Cricket Pitch",
      "Club House"
    ],
    specifications: {
      construction: "NIT/NMRDA Sanctioned Layout",
      flooring: "Cement Concrete Roads",
      kitchen: "Plot Development Ready",
      bathroom: "Sewage Treatment Plant",
      security: "Layout Fencing with Entrance Gate",
      parking: "Open Space for Parking"
    },
    projectHighlights: [
      "NIT / NMRDA sanctioned layout with RL",
      "Good location for investment",
      "Layout Fencing with Entrance Gate",
      "Plantation to Entire Layout",
      "All the basic facilities included"
    ],
    plotDetails: {
      totalArea: "82 ACRE",
      numberOfPlots: "900",
      plotSizes: "Various sizes available",
      developmentStatus: "Infrastructure Complete"
    }
  },
  {
    id: 1,
    title: "Mahalaxmi Nagar 25",
    location: "Jamtha, Maharashtra",
    address: "MAHALAXMI NAGAR-25, 225P+89, Jamtha, Maharashtra 441108",
    price: "₹75 Lakh onwards",
    priceRange: "₹75 Lakh - ₹1.2 Crore",
    image: property1,
    bedrooms: 2,
    bathrooms: 2,
    area: "30.58 ACRE",
    type: "",
    features: ["NIT/NMRDA Sanctioned", "RERA Approved", "Investment Location", "Layout Fencing", "Plantation"],
    description: "NIT/NMRDA sanctioned layout with RL - A premium project offering excellent investment opportunities with all basic facilities included.",
    longDescription: "Mahalaxmi Nagar 25 is a prestigious NIT/NMRDA sanctioned project spanning 30.58 acres with 330 plots. This RERA-approved project offers excellent investment opportunities in a prime location. The layout features comprehensive fencing with entrance gates, extensive plantation throughout the area, and all essential amenities for modern living. With its strategic location and professional development, this project ensures both comfort and excellent returns on investment.",
    directions: "From Nagpur: Take Jamtha Road towards MAHALAXMI NAGAR-25. The project is located at 225P+89, Jamtha, Maharashtra 441108.",
    nearbyPlaces: ["Jamtha - 0.5 km", "Nagpur Airport - 8 km", "Nagpur City Center - 12 km", "Highway Access - 2 km"],
    possessionDate: "Ready to Move",
    reraNumber: "S-1 P50500046589 / S-2 P50500046511",
    amenities: [
      "Internal Cement Concrete Road",
      "Sewage Line",
      "Electric Network With Transformer", 
      "Kids Park",
      "Garden",
      "Storm Water Drainage",
      "Open Space Public Utility",
      "Sewage Treatment Plant",
      "Open Space Compound Wall"
    ],
    specifications: {
      construction: "NIT/NMRDA Sanctioned Layout",
      flooring: "Cement Concrete Roads",
      kitchen: "Plot Development Ready",
      bathroom: "Sewage Treatment Plant",
      security: "Layout Fencing with Entrance Gate",
      parking: "Open Space for Parking"
    },
    projectHighlights: [
      "NIT / NMRDA sanctioned layout with RL",
      "Good location for investment",
      "Layout Fencing with Entrance Gate", 
      "Plantation to Entire Layout",
      "All the basic facilities included"
    ],
    plotDetails: {
      totalArea: "30.58 ACRE",
      numberOfPlots: "330",
      plotSizes: "Various sizes available",
      developmentStatus: "Infrastructure Complete"
    }
  },
  {
    id: 2,
    title: "Mahalaxmi Nagar 31",
    location: "Shyam Nagari, Nagpur",
    address: "Shyam Nagari, Kh. No. 128 & 129, 133/2, 133/3, Mouza-Pipala, Tah.-Nagpur(Rural)- Dist. Nagpur",
    price: "₹85 Lakh onwards",
    priceRange: "₹85 Lakh - ₹1.5 Crore",
    image: property2,
    area: "10.5 ACRE",
    type: "",
    features: ["NIT/NMRDA Sanctioned", "RERA Approved", "Investment Location", "Layout Fencing", "Plantation"],
    description: "NIT/NMRDA sanctioned layout with RL - A premium project offering excellent investment opportunities with all basic facilities included.",
    longDescription: "Mahalaxmi Nagar 31 is a prestigious NIT/NMRDA sanctioned project spanning 10.5 acres with 154 plots. This RERA-approved project offers excellent investment opportunities in a prime location. The layout features comprehensive fencing with entrance gates, extensive plantation throughout the area, and all essential amenities for modern living. With its strategic location and professional development, this project ensures both comfort and excellent returns on investment.",
    directions: "From Nagpur: Take the road towards Shyam Nagari. The project is located at Kh. No. 128 & 129, 133/2, 133/3, Mouza-Pipala, Tah.-Nagpur(Rural)- Dist. Nagpur.",
    nearbyPlaces: ["Shyam Nagari - 0.5 km", "Nagpur Airport - 8 km", "Nagpur City Center - 12 km", "Highway Access - 2 km"],
    possessionDate: "Ready to Move",
    reraNumber: "S-1 P50500053128 / S-2 P50500053169 / S-3 P50500053049",
    amenities: [
      "Internal Cement Concrete Road",
      "Sewage Line",
      "Electric Network With Transformer",
      "Kids Park",
      "Garden",
      "Storm Water Drainage",
      "Open Space Public Utility",
      "Sewage Treatment Plant",
      "Open Space Compound Wall"
    ],
    specifications: {
      construction: "NIT/NMRDA Sanctioned Layout",
      flooring: "Cement Concrete Roads",
      kitchen: "Plot Development Ready",
      bathroom: "Sewage Treatment Plant",
      security: "Layout Fencing with Entrance Gate",
      parking: "Open Space for Parking"
    },
    projectHighlights: [
      "NIT / NMRDA sanctioned layout with RL",
      "Good location for investment",
      "Layout Fencing with Entrance Gate",
      "Plantation to Entire Layout",
      "All the basic facilities included"
    ],
    plotDetails: {
      totalArea: "10.5 ACRE",
      numberOfPlots: "154",
      plotSizes: "Various sizes available",
      developmentStatus: "Infrastructure Complete"
    }
  },
  {
    id: 3,
    title: "Mahalaxmi Nagar 40",
    location: "Kotewada, Nagpur, Maharashtra 441108",
    address: "Kotewada, Nagpur, Maharashtra 441108",
    price: "₹65 Lakh onwards",
    priceRange: "₹65 Lakh - ₹95 Lakh",
    image: property3,
    area: "8.35 ACRE",
    type: "",
    features: ["NIT/NMRDA Sanctioned", "RERA Approved", "Investment Location", "Layout Fencing", "Plantation"],
    description: "NIT/NMRDA sanctioned layout with RL - A premium project offering excellent investment opportunities with all basic facilities included.",
    longDescription: "Mahalaxmi Nagar 40 is a prestigious NIT/NMRDA sanctioned project spanning 8.35 acres with 99 plots. This RERA-approved project offers excellent investment opportunities in a prime location. The layout features comprehensive fencing with entrance gates, extensive plantation throughout the area, and all essential amenities for modern living. With its strategic location and professional development, this project ensures both comfort and excellent returns on investment.",
    directions: "From Nagpur: Take the road towards Kotewada. The project is located at Kotewada, Nagpur, Maharashtra 441108.",
    nearbyPlaces: ["Kotewada - 0.5 km", "Nagpur Airport - 8 km", "Nagpur City Center - 12 km", "Highway Access - 2 km"],
    possessionDate: "Ready to Move",
    reraNumber: "P50500076800",
    amenities: [
      "Internal Cement Concrete Road",
      "Sewage Line",
      "Electric Network With Transformer",
      "Kids Park",
      "Garden",
      "Storm Water Drainage",
      "Open Space Public Utility",
      "Sewage Treatment Plant",
      "Open Space Compound Wall"
    ],
    specifications: {
      construction: "NIT/NMRDA Sanctioned Layout",
      flooring: "Cement Concrete Roads",
      kitchen: "Plot Development Ready",
      bathroom: "Sewage Treatment Plant",
      security: "Layout Fencing with Entrance Gate",
      parking: "Open Space for Parking"
    },
    projectHighlights: [
      "NIT / NMRDA sanctioned layout with RL",
      "Good location for investment",
      "Layout Fencing with Entrance Gate",
      "Plantation to Entire Layout",
      "All the basic facilities included"
    ],
    plotDetails: {
      totalArea: "8.35 ACRE",
      numberOfPlots: "99",
      plotSizes: "Various sizes available",
      developmentStatus: "Infrastructure Complete"
    }
  },
  {
    id: 5,
    title: "Mahalaxmi Nagar 42",
    location: "Jamtha, Nagpur",
    address: "Mahalaxmi Nagar-42, Kh. No.238/2, P.H.No.42, Mouza-Jamtha, Tah.-Nagpur®, Distt. Nagpur",
    price: "₹80 Lakh onwards",
    priceRange: "₹80 Lakh - ₹1.3 Crore",
    image: property5,
    area: "8 ACRE",
    type: "",
    features: ["NIT/NMRDA Sanctioned", "RERA Approved", "Investment Location", "Layout Fencing", "Plantation"],
    description: "NIT/NMRDA sanctioned layout with RL - A premium project offering excellent investment opportunities with all basic facilities included.",
    longDescription: "Mahalaxmi Nagar 42 is a prestigious NIT/NMRDA sanctioned project spanning 8 acres with 139 plots. This RERA-approved project offers excellent investment opportunities in a prime location at Jamtha. The layout features comprehensive fencing with entrance gates, extensive plantation throughout the area, and all essential amenities for modern living. With its strategic location and professional development, this project ensures both comfort and excellent returns on investment.",
    directions: "From Nagpur: Take the road towards Jamtha. The project is located at Kh. No.238/2, P.H.No.42, Mouza-Jamtha, Tah.-Nagpur®, Distt. Nagpur.",
    nearbyPlaces: ["Jamtha - 0.5 km", "Nagpur Airport - 8 km", "Nagpur City Center - 12 km", "Highway Access - 2 km"],
    possessionDate: "Ready to Move",
    reraNumber: "P50500079059",
    amenities: [
      "Internal Cement Concrete Road",
      "Sewage Line",
      "Electric Network With Transformer",
      "Kids Park",
      "Garden",
      "Storm Water Drainage",
      "Open Space Public Utility",
      "Sewage Treatment Plant",
      "Open Space Compound Wall"
    ],
    specifications: {
      construction: "NIT/NMRDA Sanctioned Layout",
      flooring: "Cement Concrete Roads",
      kitchen: "Plot Development Ready",
      bathroom: "Sewage Treatment Plant",
      security: "Layout Fencing with Entrance Gate",
      parking: "Open Space for Parking"
    },
    projectHighlights: [
      "NIT / NMRDA sanctioned layout with RL",
      "Good location for investment",
      "Layout Fencing with Entrance Gate",
      "Plantation to Entire Layout",
      "All the basic facilities included"
    ],
    plotDetails: {
      totalArea: "8 ACRE",
      numberOfPlots: "139",
      plotSizes: "Various sizes available",
      developmentStatus: "Infrastructure Complete"
    }
  }
];

export const getPropertyById = (id: number): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getPropertiesByType = (type: string): Property[] => {
  return properties.filter(property => property.type.toLowerCase().includes(type.toLowerCase()));
};
