/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tour } from "@/lib/tours-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Clock, MapPin, Star, Users } from "lucide-react";

interface TourCardProps {
  tour: Tour;
  index: number;
}

export function TourCard({ tour, index }: TourCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "luxury":
        return "bg-luxury-gold text-luxury-navy";
      case "adventure":
        return "bg-luxury-emerald text-white";
      case "cultural":
        return "bg-luxury-navy text-white";
      case "beach":
        return "bg-blue-500 text-white";
      case "safari":
        return "bg-amber-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-0 group-hover:scale-[1.02]">
        <div className="relative overflow-hidden">
          <div className="aspect-[4/3] relative">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Category Badge */}
            <Badge
              className={cn(
                "absolute top-4 left-4 text-xs font-semibold px-3 py-1",
                getCategoryColor(tour.category)
              )}
            >
              {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
            </Badge>

            {/* Price Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
              <div className="text-lg font-bold text-luxury-navy">
                {formatPrice(tour.price)}
              </div>
              {tour.originalPrice && (
                <div className="text-sm text-gray-500 line-through">
                  {formatPrice(tour.originalPrice)}
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-luxury-navy">
                {tour.rating}
              </span>
              <span className="text-xs text-gray-600">({tour.reviews})</span>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              {tour.destination}
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl font-bold text-luxury-navy group-hover:text-luxury-emerald transition-colors">
              {tour.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
              {tour.description}
            </p>

            {/* Duration & Level */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                {tour.duration}
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-4 h-4 mr-1" />
                {tour.level.charAt(0).toUpperCase() + tour.level.slice(1)}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-luxury-navy">
                Highlights:
              </div>
              <div className="grid grid-cols-1 gap-1">
                {tour.highlights.slice(0, 2).map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-xs text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2" />
                    {highlight}
                  </div>
                ))}
                {tour.highlights.length > 2 && (
                  <div className="text-xs text-luxury-emerald font-medium">
                    +{tour.highlights.length - 2} more
                  </div>
                )}
              </div>
            </div>

            {/* Action Button */}
            <Button
              className="w-full bg-luxury-navy hover:bg-luxury-navy-dark text-white font-semibold py-2.5 group/btn"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book This Experience
              <motion.div
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
