import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches 0
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center space-y-4">
      <h3 className="font-heading text-xl md:text-2xl font-bold text-luxury-foreground">
        🎉 Limited Time Offer - Call Before Timer Ends!
      </h3>
      <p className="text-luxury-foreground/80 text-lg">
        Get <span className="text-premium font-bold text-xl">10% OFF</span> on all properties
      </p>
      
      <Card className="bg-luxury-foreground/10 backdrop-blur-sm border-premium/30 max-w-md mx-auto">
        <CardContent className="p-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-premium" />
            <span className="text-luxury-foreground font-semibold">Offer Expires In:</span>
          </div>
          
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="bg-premium text-premium-foreground w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-luxury-foreground/70 text-sm mt-1">Hours</div>
            </div>
            <div className="text-center">
              <div className="bg-premium text-premium-foreground w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-luxury-foreground/70 text-sm mt-1">Minutes</div>
            </div>
            <div className="text-center">
              <div className="bg-premium text-premium-foreground w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold animate-pulse">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-luxury-foreground/70 text-sm mt-1">Seconds</div>
            </div>
          </div>
          
          <p className="text-luxury-foreground/70 text-sm mt-4">
            *Valid on all residential and commercial properties
          </p>
        </CardContent>
      </Card>
    </div>
  );
}