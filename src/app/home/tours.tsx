"use client";

import { BookingForm } from "@/components/tours/BookingForm";
import { HeroSection } from "@/components/tours/HeroSection";
import { TestimonialsSection } from "@/components/tours/TestimonialsSection";
import { TourCard } from "@/components/tours/TourCard";
import { TourFilters } from "@/components/tours/TourFilters";
import { TourNavigation } from "@/components/tours/TourNavigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tour, tours } from "@/lib/tours-data";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

interface FilterState {
  search: string;
  category: string;
  region: string;
  level: string;
  priceRange: [number, number];
}

export default function Tours() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    region: "all",
    level: "all",
    priceRange: [0, 20000],
  });

  const [sortBy, setSortBy] = useState<
    "price-low" | "price-high" | "rating" | "duration"
  >("rating");

  const filteredAndSortedTours = useMemo(() => {
    const filtered = tours.filter((tour: Tour) => {
      // Search filter
      if (
        filters.search &&
        !tour.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !tour.destination.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (filters.category !== "all" && tour.category !== filters.category) {
        return false;
      }

      // Region filter
      if (filters.region !== "all" && tour.region !== filters.region) {
        return false;
      }

      // Level filter
      if (filters.level !== "all" && tour.level !== filters.level) {
        return false;
      }

      // Price range filter
      if (
        tour.price < filters.priceRange[0] ||
        tour.price > filters.priceRange[1]
      ) {
        return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "duration":
          return parseInt(a.duration) - parseInt(b.duration);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <TourNavigation />
      <HeroSection />

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-navy mb-4">
              Curated
              <span className="block bg-gradient-to-r from-luxury-gold to-luxury-champagne bg-clip-text text-transparent">
                Luxury Experiences
              </span>
            </h2>
            <p className="text-lg text-luxury-charcoal max-w-3xl mx-auto">
              Discover our handpicked collection of extraordinary journeys, each
              designed to create unforgettable memories.
            </p>
          </motion.div>

          {/* Filters */}
          <TourFilters
            filters={filters}
            onFiltersChange={setFilters}
            className="mb-8"
          />

          {/* Sort and Results Count */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-luxury-charcoal">
              <span className="font-semibold">
                {filteredAndSortedTours.length}
              </span>{" "}
              luxury experiences found
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-luxury-charcoal">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as never)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-luxury-emerald focus:ring-luxury-emerald focus:outline-none"
              >
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </motion.div>

          {/* Tours Grid */}
          {filteredAndSortedTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedTours.map((tour, index) => (
                <TourCard key={tour.id} tour={tour} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="font-serif text-2xl font-bold text-luxury-navy mb-2">
                No tours match your criteria
              </h3>
              <p className="text-luxury-charcoal mb-6">
                Try adjusting your filters to discover more luxury experiences.
              </p>
              <Button
                onClick={() =>
                  setFilters({
                    search: "",
                    category: "all",
                    region: "all",
                    level: "all",
                    priceRange: [0, 20000],
                  })
                }
                className="bg-luxury-emerald hover:bg-luxury-emerald-dark text-white"
              >
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Experiences Section */}
      <section
        id="experiences"
        className="py-20 bg-gradient-to-br from-luxury-navy to-luxury-emerald text-white"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Beyond Ordinary Travel
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              What sets our luxury experiences apart from conventional travel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Private Access",
                description:
                  "Exclusive entry to private venues, closed museums, and behind-the-scenes experiences not available to the public.",
                icon: "🗝️",
              },
              {
                title: "Personal Concierge",
                description:
                  "Dedicated 24/7 concierge service ensuring every detail of your journey is perfectly orchestrated.",
                icon: "👤",
              },
              {
                title: "Local Expertise",
                description:
                  "Expert local guides with deep cultural knowledge and connections to provide authentic insider experiences.",
                icon: "🎯",
              },
              {
                title: "Luxury Transportation",
                description:
                  "Private jets, luxury vehicles, and first-class accommodations throughout your entire journey.",
                icon: "✈️",
              },
              {
                title: "Culinary Excellence",
                description:
                  "Michelin-starred dining, private chef experiences, and exclusive access to renowned restaurants.",
                icon: "🍽️",
              },
              {
                title: "Unique Accommodations",
                description:
                  "Stay in castle suites, overwater villas, and other extraordinary properties not available to regular bookings.",
                icon: "🏰",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-3 text-luxury-gold">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <BookingForm />

      {/* Footer */}
      <footer className="bg-luxury-charcoal text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src={"/images/tbt-logo-white.png"}
                  width={200}
                  height={100}
                  alt="logo"
                  className=""
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating extraordinary luxury travel experiences for discerning
                travelers worldwide.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-luxury-gold">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#tours"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tours
                  </a>
                </li>
                <li>
                  <a
                    href="#experiences"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Experiences
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="font-semibold mb-4 text-luxury-gold">
                Popular Destinations
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Santorini, Greece
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Kyoto, Japan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Maldives
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Swiss Alps
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-luxury-gold">
                Contact Us
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-luxury-gold" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-luxury-gold" />
                  <span className="text-gray-400">
                    concierge@luxetravel.com
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-luxury-gold mt-0.5" />
                  <span className="text-gray-400">
                    Fifth Avenue, New York
                    <br />
                    NY 10001, United States
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-600" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 LuxeTravel. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
