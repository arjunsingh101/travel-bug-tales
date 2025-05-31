/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      s: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      l: "1260px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        luxury: {
          navy: "#1e3a8a",
          "navy-light": "#3b82f6",
          "navy-dark": "#1e40af",
          emerald: "#059669",
          "emerald-light": "#10b981",
          "emerald-dark": "#047857",
          charcoal: "#374151",
          "charcoal-light": "#4b5563",
          "charcoal-dark": "#1f2937",
          gold: "#d4af37",
          "gold-light": "#f59e0b",
          "gold-dark": "#b45309",
          champagne: "#f7e7b4",
          "champagne-light": "#fef3c7",
          "champagne-dark": "#f59e0b",
        },
      },
      backgroundImage: {
        hero_baaner_bg: "url('/images/hero-banner-bg.jpg')",
        hero_baaner_bg_video: "url('/images/home-hero-banner-video.mp4')",
        get_in_touch_bg: "url('/images/get-in-touch-bg.webp')",
        git_1: "url('/images/git-1.png')",
        git_2: "url('/images/git-2.png')",
        git_3: "url('/images/git-3.png')",
        tenstimonial_bg: "url('/images/testimonial-bg.webp')",
        book_tour_bg: "url('/images/book-tour.webp')",
        packages_hero_bg_1: "url('/images/packages-hero-bg.webp')",
        "packages-gradient":
          "linear-gradient(90deg, #ffffff, #fffffff 35%, #ffffff 100%)",
        "luxury-gradient":
          "linear-gradient(135deg, #1e3a8a 0%, #059669 50%, #d4af37 100%)",
        "luxury-gradient-dark":
          "linear-gradient(135deg, #1e40af 0%, #047857 50%, #b45309 100%)",
        "hero-overlay":
          "linear-gradient(rgba(30, 58, 138, 0.8), rgba(5, 150, 105, 0.6))",
      },
      fontFamily: {
        arsenal: ["var(--font-arsenal)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        dmserifDisplay: ["var(--font-dmserifDisplay)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        playListScript: ["var(--font-playListScript)", "sans-serif"],
        serif: [
          "Playfair Display",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
