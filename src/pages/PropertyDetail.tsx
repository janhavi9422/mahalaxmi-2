import img42 from "@/assets/42.webp";
import img422 from "@/assets/422.webp";
import img41 from "@/assets/41.png";
import img412 from "@/assets/412.png";
import img413 from "@/assets/413.webp";
import img414 from "@/assets/414.webp";
import img415 from "@/assets/415.webp";
import img416 from "@/assets/416.webp";
import img40 from "@/assets/40.webp";
import img31 from "@/assets/31.webp";
import img312 from "@/assets/312.jpg";
import img313 from "@/assets/313.jpg";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Bed, Bath, Square, Phone, MessageCircle, Navigation, Calculator, Heart, Share, CheckCircle } from "lucide-react";
import { getPropertyById } from "@/data/properties";
import img25 from "@/assets/25.webp";
import img252 from "@/assets/252.webp";
import img253 from "@/assets/253.webp";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const property = getPropertyById(parseInt(id || ""));

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
  window.open("tel:+918552815725", "_self");
  };

  const handleWhatsApp = () => {
    const message = `Hi, I am interested in this property: ${property.title}. Please share more details.`;
    window.open(`https://wa.me/918552815725?text=${encodeURIComponent(message)}`, "_blank");
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
            <div className="relative animate-fade-in">
              {property.id === 1 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src={img25} alt="Mahalaxmi Nagar 25 - 1" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                  <img src={img252} alt="Mahalaxmi Nagar 25 - 2" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                  <img src={img253} alt="Mahalaxmi Nagar 25 - 3" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                </div>
              ) : property.id === 2 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src={img31} alt="Mahalaxmi Nagar 31 - 1" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                  <img src={img312} alt="Mahalaxmi Nagar 31 - 2" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                  <img src={img313} alt="Mahalaxmi Nagar 31 - 3" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                </div>
              ) : property.id === 3 ? (
                <img
                  src={img40}
                  alt="Mahalaxmi Nagar 40"
                  className="w-full h-96 object-cover rounded-xl shadow-luxury"
                />
              ) : property.id === 4 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img src={img41} alt="Mahalaxmi Nagar 41 - 1" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                  <img src={img412} alt="Mahalaxmi Nagar 41 - 2" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                  <img src={img413} alt="Mahalaxmi Nagar 41 - 3" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                  <img src={img414} alt="Mahalaxmi Nagar 41 - 4" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                  <img src={img415} alt="Mahalaxmi Nagar 41 - 5" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                  <img src={img416} alt="Mahalaxmi Nagar 41 - 6" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                </div>
              ) : property.id === 5 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img src={img42} alt="Mahalaxmi Nagar 42 - 1" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                  <img src={img422} alt="Mahalaxmi Nagar 42 - 2" className="w-full h-96 object-cover rounded-xl shadow-luxury" />
                </div>
              ) : (
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-xl shadow-luxury"
                />
              )}
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
              <Card className="animate-slide-up">
                <CardContent className="p-6">
                 <h2 className="font-heading text-2xl font-bold text-luxury mb-4">Property Details</h2>
                 
                 <div className="space-y-6">
                   <div>
                     <h3 className="font-semibold text-lg mb-2">Overview</h3>
                     <p className="text-muted-foreground leading-relaxed">{property.longDescription}</p>
                   </div>

                   <div>
                     <h3 className="font-semibold text-lg mb-3">Key Features</h3>
                     <div className="flex flex-wrap gap-2">
                       {property.features.map((feature, index) => (
                         <Badge key={index} variant="secondary" className="bg-secondary/50">
                           {feature}
                         </Badge>
                       ))}
                     </div>
                   </div>

                   <div>
                     <h3 className="font-semibold text-lg mb-3">Amenities</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                       {property.amenities.map((amenity, index) => (
                         <div key={index} className="bg-secondary/20 p-4 rounded-lg text-center">
                           <div className="w-12 h-12 bg-premium/20 rounded-full flex items-center justify-center mx-auto mb-2">
                             <CheckCircle className="w-6 h-6 text-premium" />
                           </div>
                           <h4 className="font-semibold text-sm mb-1">{amenity}</h4>
                                                       <p className="text-xs text-muted-foreground">
                              {amenity === "Internal Cement Concrete Road" && "A paved road within the premises connecting all major parts."}
                              {amenity === "Sewage Line" && "Underground waste disposal system in layout."}
                              {amenity === "Electric Network With Transformer" && "Electricity distribution infrastructure for plots and amenities."}
                              {amenity === "Kids Park" && "A playground for children in layout."}
                              {amenity === "Garden" && "Landscaped green space with plantation for better experience."}
                              {amenity === "Storm Water Drainage" && "Proper drainage system for rainwater management."}
                              {amenity === "Open Space Public Utility" && "An open-use area available to all the residents in the layout."}
                              {amenity === "BasketBall" && "Basketball court for outdoor sports."}
                              {amenity === "Sewage Treatment Plant" && "Modern waste treatment facility for the layout."}
                              {amenity === "Cricket Pitch" && "A dedicated pitch area for cricket sport."}
                              {amenity === "Open Space Compound Wall" && "Fenced open area boundary to the space provided."}
                            </p>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               </CardContent>
             </Card>

                         {/* Project Highlights */}
             {property.projectHighlights && (
               <Card className="animate-slide-up-delayed">
                 <CardContent className="p-6">
                  <h2 className="font-heading text-2xl font-bold text-luxury mb-4">Project Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {property.projectHighlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {property.plotDetails && (
                      <div className="bg-secondary/30 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3 text-luxury">Plot Details</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Total Area:</span>
                            <span className="font-medium">{property.plotDetails.totalArea}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Number of Plots:</span>
                            <span className="font-medium">{property.plotDetails.numberOfPlots}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Plot Sizes:</span>
                            <span className="font-medium">{property.plotDetails.plotSizes}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Development Status:</span>
                            <span className="font-medium">{property.plotDetails.developmentStatus}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            

                                                   {/* Location Map */}
              <Card className="animate-fade-in-delayed">
                <CardContent className="p-6">
                 <h2 className="font-heading text-2xl font-bold text-luxury mb-4">Location</h2>
                 
                 <div className="space-y-4">
                   <div>
                     <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                       <MapPin className="w-5 h-5 text-primary" />
                       Project Location
                     </h3>
                     <p className="text-muted-foreground mb-4">{property.address}</p>
                   </div>

                                       <div className="w-full">
                      <iframe 
                        src={property.id === 1 
                          ? "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d59559.608732902445!2d79.065334!3d21.093599!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA1JzM3LjAiTiA3OcKwMDMnNTUuMiJF!5e0!3m2!1sen!2sus!4v1755017153777!5m2!1sen!2sus"
                          : property.id === 2
                          ? "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59559.60392113395!2d79.06534!3d21.093611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfa3682c19c7%3A0x189b5f5ecdb1cf5c!2sDr.%20Babasaheb%20Ambedkar%20International%20Airport!5e0!3m2!1sen!2sus!4v1755019539253!5m2!1sen!2sus"
                          : property.id === 3
                          ? "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d59585.263516019695!2d79.004582!3d21.029526!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAxJzQ2LjMiTiA3OcKwMDAnMTYuNSJF!5e0!3m2!1sen!2sus!4v1755020236273!5m2!1sen!2sus"
                          : property.id === 4
                          ? "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d59590.08679684465!2d78.978238!3d21.017459!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAxJzAyLjkiTiA3OMKwNTgnNDEuNyJF!5e0!3m2!1sen!2sus!4v1755020460407!5m2!1sen!2sus"
                          : property.id === 5
                          ? "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d59559.608732902445!2d79.065333!3d21.093599!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA1JzM3LjAiTiA3OcKwMDMnNTUuMiJF!5e0!3m2!1sen!2sus!4v1755021193504!5m2!1sen!2sus"
                          : "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d59559.608732902445!2d79.065334!3d21.093599!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA1JzM3LjAiTiA3OcKwMDMnNTUuMiJF!5e0!3m2!1sen!2sus!4v1755017153777!5m2!1sen!2sus"
                        }
                        width="100%" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
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
                   <h3 className="text-xl font-bold text-luxury mb-2">Get in Touch</h3>
                   <p className="text-muted-foreground">Contact us for more details</p>
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
                     <p className="font-semibold text-primary">8552815725</p>
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
                   {property.plotDetails && (
                     <div className="flex justify-between">
                       <span className="text-muted-foreground">Number of Plots:</span>
                       <span className="font-medium">{property.plotDetails.numberOfPlots}</span>
                     </div>
                   )}
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">Possession:</span>
                     <span className="font-medium">{property.possessionDate}</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">RERA Number:</span>
                     <span className="font-medium text-green-600 text-xs">{property.reraNumber}</span>
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