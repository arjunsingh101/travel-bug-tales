import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/tours-data";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-luxury-navy/5 to-luxury-emerald/5"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-navy mb-4">
            Stories from Our
            <span className="block bg-gradient-to-r from-luxury-gold to-luxury-champagne bg-clip-text text-transparent">
              Treasured Travelers
            </span>
          </h2>
          <p className="text-lg text-luxury-charcoal max-w-3xl mx-auto">
            Discover what makes our luxury travel experiences extraordinary
            through the words of those who have journeyed with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 group relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gradient opacity-5 rounded-full -translate-y-16 translate-x-16" />

                <CardContent className="p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-luxury-gold opacity-60" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="flex-1 mb-6">
                    <p className="text-luxury-charcoal leading-relaxed italic">
                      "{testimonial.comment}"
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-luxury-gold/30"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-luxury-emerald rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-luxury-navy">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.location}
                      </div>
                      <div className="text-xs text-luxury-emerald font-medium mt-1">
                        {testimonial.tour}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">
                4.9/5
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">
                500+
              </div>
              <div className="text-sm text-gray-600">5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">
                98%
              </div>
              <div className="text-sm text-gray-600">Return Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600">Concierge Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
