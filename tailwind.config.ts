import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      },
      fontFamily: {
        arsenal: ["var(--font-arsenal)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        dmserifDisplay: ["var(--font-dmserifDisplay)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
