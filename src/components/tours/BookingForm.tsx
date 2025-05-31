import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  Star
} from "lucide-react";
import { useState } from "react";

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: Date | undefined;
  travelers: string;
  budget: string;
  interests: string;
  message: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    travelDates: undefined,
    travelers: "",
    budget: "",
    interests: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    key: keyof BookingFormData,
    value: string | Date | undefined,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-luxury-emerald/10 to-luxury-gold/10"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white shadow-2xl border-0">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-luxury-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-luxury-navy mb-4">
                  Thank You for Your Interest!
                </h3>
                <p className="text-luxury-charcoal mb-6">
                  Your luxury travel inquiry has been received. Our travel
                  concierge will contact you within 24 hours to begin crafting
                  your extraordinary journey.
                </p>
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      destination: "",
                      travelDates: undefined,
                      travelers: "",
                      budget: "",
                      interests: "",
                      message: "",
                    });
                  }}
                  className="bg-luxury-navy hover:bg-luxury-navy-dark text-white"
                >
                  Plan Another Journey
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-luxury-emerald/10 to-luxury-gold/10"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-navy mb-4">
            Begin Your
            <span className="block bg-gradient-to-r from-luxury-gold to-luxury-champagne bg-clip-text text-transparent">
              Extraordinary Journey
            </span>
          </h2>
          <p className="text-lg text-luxury-charcoal max-w-3xl mx-auto">
            Let our travel experts craft a personalized luxury experience
            tailored exclusively for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-luxury-navy text-white shadow-2xl border-0 h-full">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Get in Touch
                </CardTitle>
                <p className="text-gray-300">
                  Our luxury travel concierge is ready to assist you 24/7.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">
                      concierge@luxetravel.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-gray-300">
                      Fifth Avenue, New York
                      <br />
                      NY 10001, United States
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-600">
                  <div className="text-sm text-gray-300 mb-4">
                    Why choose LuxeTravel?
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                      <span>Personalized luxury experiences</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                      <span>24/7 concierge support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                      <span>Exclusive access to premium venues</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                      <span>Expert local guides</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-luxury-navy">
                  Plan Your Journey
                </CardTitle>
                <p className="text-luxury-charcoal">
                  Tell us about your dream destination and preferences.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald"
                      />
                    </div>
                  </div>

                  {/* Travel Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Preferred Destination</Label>
                      <Select
                        value={formData.destination}
                        onValueChange={(value) =>
                          handleInputChange("destination", value)
                        }
                      >
                        <SelectTrigger className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald">
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="africa">Africa</SelectItem>
                          <SelectItem value="americas">Americas</SelectItem>
                          <SelectItem value="oceania">Oceania</SelectItem>
                          <SelectItem value="custom">
                            Custom/Multiple
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Travel Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald",
                              !formData.travelDates && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.travelDates
                              ? format(formData.travelDates, "PPP")
                              : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.travelDates}
                            onSelect={(date) =>
                              handleInputChange("travelDates", date)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Select
                        value={formData.travelers}
                        onValueChange={(value) =>
                          handleInputChange("travelers", value)
                        }
                      >
                        <SelectTrigger className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald">
                          <SelectValue placeholder="Select travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Traveler</SelectItem>
                          <SelectItem value="2">2 Travelers</SelectItem>
                          <SelectItem value="3-4">3-4 Travelers</SelectItem>
                          <SelectItem value="5-8">5-8 Travelers</SelectItem>
                          <SelectItem value="9+">9+ Travelers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range (USD)</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                      >
                        <SelectTrigger className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5000-10000">
                            $5,000 - $10,000
                          </SelectItem>
                          <SelectItem value="10000-20000">
                            $10,000 - $20,000
                          </SelectItem>
                          <SelectItem value="20000-50000">
                            $20,000 - $50,000
                          </SelectItem>
                          <SelectItem value="50000+">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Travel Interests</Label>
                    <Select
                      value={formData.interests}
                      onValueChange={(value) =>
                        handleInputChange("interests", value)
                      }
                    >
                      <SelectTrigger className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald">
                        <SelectValue placeholder="Select your interests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="luxury">
                          Luxury & Relaxation
                        </SelectItem>
                        <SelectItem value="adventure">
                          Adventure & Exploration
                        </SelectItem>
                        <SelectItem value="cultural">
                          Cultural Immersion
                        </SelectItem>
                        <SelectItem value="culinary">
                          Culinary Experiences
                        </SelectItem>
                        <SelectItem value="wildlife">
                          Wildlife & Nature
                        </SelectItem>
                        <SelectItem value="wellness">Wellness & Spa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Special Requests or Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us about any special occasions, accessibility needs, dietary requirements, or specific experiences you'd like to include..."
                      className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-emerald hover:bg-luxury-emerald-dark text-white font-semibold py-3 text-lg group"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit My Travel Request
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to our privacy policy.
                    We&apos;ll contact you within 24 hours to discuss your luxury
                    travel plans.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
