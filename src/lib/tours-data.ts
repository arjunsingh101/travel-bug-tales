export interface Tour {
  id: string;
  title: string;
  destination: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  image: string;
  category: "luxury" | "adventure" | "cultural" | "beach" | "safari";
  rating: number;
  reviews: number;
  highlights: string[];
  level: "beginner" | "intermediate" | "advanced";
  region: "europe" | "asia" | "africa" | "americas" | "oceania";
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  comment: string;
  tour: string;
}

export const tours: Tour[] = [
  {
    id: "1",
    title: "Santorini Luxury Villa Experience",
    destination: "Santorini, Greece",
    description:
      "Experience the epitome of luxury in a private villa overlooking the Aegean Sea with personalized concierge service.",
    price: 4500,
    originalPrice: 5200,
    duration: "7 days",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "luxury",
    rating: 4.9,
    reviews: 127,
    highlights: [
      "Private villa with infinity pool",
      "Personal chef service",
      "Sunset yacht cruise",
      "Wine tasting tour",
    ],
    level: "beginner",
    region: "europe",
  },
  {
    id: "2",
    title: "African Safari Private Reserve",
    destination: "Maasai Mara, Kenya",
    description:
      "Witness the Great Migration in ultimate luxury at an exclusive private conservancy with expert guides.",
    price: 8200,
    duration: "10 days",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "safari",
    rating: 4.8,
    reviews: 89,
    highlights: [
      "Private game drives",
      "Luxury tented camp",
      "Hot air balloon safari",
      "Cultural Maasai experience",
    ],
    level: "intermediate",
    region: "africa",
  },
  {
    id: "3",
    title: "Kyoto Imperial Palace & Ryokan",
    destination: "Kyoto, Japan",
    description:
      "Immerse yourself in Japanese culture with stays in historic ryokans and private temple tours.",
    price: 6800,
    duration: "8 days",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "cultural",
    rating: 4.7,
    reviews: 156,
    highlights: [
      "Traditional ryokan stays",
      "Private tea ceremony",
      "Geisha district tours",
      "Temple meditation sessions",
    ],
    level: "beginner",
    region: "asia",
  },
  {
    id: "4",
    title: "Maldives Overwater Villa Retreat",
    destination: "Maldives",
    description:
      "Ultimate tropical luxury in an overwater villa with crystal-clear waters and world-class spa treatments.",
    price: 7500,
    duration: "6 days",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "beach",
    rating: 4.9,
    reviews: 234,
    highlights: [
      "Overwater villa",
      "Private butler service",
      "Underwater restaurant dining",
      "Dolphin watching excursions",
    ],
    level: "beginner",
    region: "asia",
  },
  {
    id: "5",
    title: "Swiss Alps Helicopter Adventure",
    destination: "Zermatt, Switzerland",
    description:
      "Explore the majestic Swiss Alps with helicopter tours and luxury mountain lodges.",
    price: 9200,
    duration: "9 days",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "adventure",
    rating: 4.8,
    reviews: 78,
    highlights: [
      "Helicopter mountain tours",
      "Luxury alpine lodge",
      "Private skiing lessons",
      "Michelin-starred dining",
    ],
    level: "advanced",
    region: "europe",
  },
  {
    id: "6",
    title: "Patagonia Luxury Expedition",
    destination: "Torres del Paine, Chile",
    description:
      "Discover the raw beauty of Patagonia in ultimate comfort with luxury eco-lodges and private guides.",
    price: 11500,
    duration: "12 days",
    image:
      "https://images.unsplash.com/photo-1521294983045-366b68b2d3b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "adventure",
    rating: 4.9,
    reviews: 67,
    highlights: [
      "Luxury eco-lodges",
      "Private trekking guides",
      "Wildlife photography tours",
      "Glacier expeditions",
    ],
    level: "advanced",
    region: "americas",
  },
  {
    id: "7",
    title: "Moroccan Desert Luxury Camp",
    destination: "Sahara Desert, Morocco",
    description:
      "Experience the magic of the Sahara Desert in an exclusive luxury camp with traditional Berber hospitality.",
    price: 3200,
    duration: "5 days",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d5ce0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "cultural",
    rating: 4.6,
    reviews: 94,
    highlights: [
      "Luxury desert camp",
      "Camel trekking",
      "Private stargazing",
      "Traditional Berber cuisine",
    ],
    level: "intermediate",
    region: "africa",
  },
  {
    id: "8",
    title: "Bora Bora Pearl Farm Resort",
    destination: "Bora Bora, French Polynesia",
    description:
      "Discover the beauty of pearl farming while staying in an overwater bungalow in paradise.",
    price: 8900,
    duration: "7 days",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "beach",
    rating: 4.8,
    reviews: 178,
    highlights: [
      "Overwater bungalow",
      "Pearl farm tour",
      "Lagoon snorkeling",
      "Polynesian cultural show",
    ],
    level: "beginner",
    region: "oceania",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Victoria Sterling",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "The Santorini experience exceeded all expectations. Every detail was meticulously planned, and the villa was absolutely breathtaking. This is luxury travel at its finest.",
    tour: "Santorini Luxury Villa Experience",
  },
  {
    id: "2",
    name: "James Wellington",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "The African safari was transformative. Seeing the Great Migration while staying in such luxurious accommodations was an experience I'll treasure forever.",
    tour: "African Safari Private Reserve",
  },
  {
    id: "3",
    name: "Sophia Chen",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "The cultural immersion in Kyoto was profound. The ryokan stays and private temple tours provided an authentic yet luxurious experience of Japanese tradition.",
    tour: "Kyoto Imperial Palace & Ryokan",
  },
  {
    id: "4",
    name: "Michael Rodriguez",
    location: "Madrid, Spain",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "The Patagonia expedition was beyond incredible. The luxury eco-lodges combined with the raw beauty of nature created the perfect adventure.",
    tour: "Patagonia Luxury Expedition",
  },
  {
    id: "5",
    name: "Elena Volkov",
    location: "Moscow, Russia",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "The Maldives retreat was pure paradise. The overwater villa and underwater dining experience were absolutely magical. Worth every penny.",
    tour: "Maldives Overwater Villa Retreat",
  },
  {
    id: "6",
    name: "David Kim",
    location: "Seoul, South Korea",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "The Swiss Alps helicopter adventure was the trip of a lifetime. The luxury alpine lodge and Michelin-starred dining made it unforgettable.",
    tour: "Swiss Alps Helicopter Adventure",
  },
];

export const categories = [
  { value: "all", label: "All Categories" },
  { value: "luxury", label: "Luxury" },
  { value: "adventure", label: "Adventure" },
  { value: "cultural", label: "Cultural" },
  { value: "beach", label: "Beach" },
  { value: "safari", label: "Safari" },
];

export const regions = [
  { value: "all", label: "All Regions" },
  { value: "europe", label: "Europe" },
  { value: "asia", label: "Asia" },
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "oceania", label: "Oceania" },
];

export const experienceLevels = [
  { value: "all", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];
