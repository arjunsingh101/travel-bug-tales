import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
        background: "var(--background)",
        foreground: "var(--foreground)",
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
      },
      fontFamily: {
        arsenal: ["var(--font-arsenal)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        dmserifDisplay: ["var(--font-dmserifDisplay)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        playListScript: ["var(--font-playListScript)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
