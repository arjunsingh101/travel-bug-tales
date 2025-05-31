import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Mail, Menu, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TourNavigationProps {
  className?: string;
}

export function TourNavigation({ className }: TourNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Tours", href: "#tours" },
    { label: "Experiences", href: "#experiences" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log(isScrolled, "isScrolled");
  

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent",
        className
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span
              className={cn(
                "font-serif text-xl lg:text-2xl font-bold",
                isScrolled ? "text-luxury-navy" : "text-white"
              )}
            >
              <Image
                src={
                  isScrolled
                    ? "/images/tbt-logo-black.png"
                    : "/images/tbt-logo-white.png"
                }
                width={200}
                height={100}
                alt="logo"
                className=""
              />
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-luxury-gold",
                  isScrolled ? "text-luxury-charcoal" : "text-white"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone
                className={cn(
                  "w-4 h-4",
                  isScrolled ? "text-luxury-charcoal" : "text-white"
                )}
              />
              <span
                className={cn(
                  isScrolled ? "text-luxury-charcoal" : "text-white"
                )}
              >
                +1 (555) 123-4567
              </span>
            </div>
            <Button
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-navy font-semibold px-6"
              onClick={() => handleNavClick("#contact")}
            >
              Plan Your Journey
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  isScrolled ? "text-luxury-charcoal" : "text-white"
                )}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-luxury-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">L</span>
                  </div>
                  <span className="font-serif text-xl font-bold text-luxury-navy">
                    LuxeTravel
                  </span>
                </div>

                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-lg font-medium text-luxury-charcoal hover:text-luxury-gold transition-colors"
                  >
                    {item.label}
                  </button>
                ))}

                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-luxury-charcoal" />
                    <span className="text-luxury-charcoal">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-luxury-charcoal" />
                    <span className="text-luxury-charcoal">
                      info@luxetravel.com
                    </span>
                  </div>
                  <Button
                    className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-navy font-semibold"
                    onClick={() => handleNavClick("#contact")}
                  >
                    Plan Your Journey
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
