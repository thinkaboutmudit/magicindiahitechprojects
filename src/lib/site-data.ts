import aeroClassicCityImg from "@/assets/projects/aero-classic-city.jpeg";
import aeroClassicCityGallery1 from "@/assets/projects/aero-classic-city-1.jpeg";
import aeroClassicCityGallery2 from "@/assets/projects/aero-classic-city-2.jpeg";
import aeroClassicCityGallery3 from "@/assets/projects/aero-classic-city-3.jpeg";
import aeroClassicCityGallery4 from "@/assets/projects/aero-classic-city-4.jpeg";
import aeroClassicCityGallery5 from "@/assets/projects/aero-classic-city-5.jpeg";
import aeroClassicCityGallery6 from "@/assets/projects/aero-classic-city-6.jpeg";
import aeroDreamCityImg from "@/assets/projects/aero-dream-city.jpeg";
import aeroDreamCityGallery1 from "@/assets/projects/aero-dream-city-1.jpeg";
import aeroDreamCityGallery2 from "@/assets/projects/aero-dream-city-2.jpeg";
import aeroDreamCityGallery3 from "@/assets/projects/aero-dream-city-3.jpeg";
import hillockMeadowsImg from "@/assets/projects/hillock-meadows-farms.jpeg";
import hillockMeadowsGallery1 from "@/assets/projects/hillock-meadows-farms-1.jpeg";
import hillockMeadowsGallery2 from "@/assets/projects/hillock-meadows-farms-2.jpeg";
import hillockMeadowsGallery3 from "@/assets/projects/hillock-meadows-farms-3.jpeg";
import magicMeadowsImg from "@/assets/projects/the-magic-meadows.jpeg";
import magicMeadowsGallery1 from "@/assets/projects/the-magic-meadows-1.jpeg";
import magicMeadowsGallery2 from "@/assets/projects/the-magic-meadows-2.jpeg";
import magicMeadowsGallery3 from "@/assets/projects/the-magic-meadows-3.jpeg";
import magicMeadowsGallery4 from "@/assets/projects/the-magic-meadows-4.jpeg";
import magicMeadowsGallery5 from "@/assets/projects/the-magic-meadows-5.jpeg";
import magicMeadowsGallery6 from "@/assets/projects/the-magic-meadows-6.jpeg";
import heroImg1 from "@/assets/hero-1.svg";
import heroImg2 from "@/assets/hero-2.svg";
import heroImg3 from "@/assets/hero-3.svg";
import heroImg4 from "@/assets/hero-4.svg";
import heroImg5 from "@/assets/hero-5.svg";

export const PROJECTS = [
  { slug: "aero-classic-city", name: "Aero Classic City", location: "Yamuna Expressway, Greater Noida", price: "₹25K per sq.yd", size: "100–1000 sq.yd", type: "", image: aeroClassicCityImg, desc: "A landmark township along Yamuna Expressway offering modern plots and apartments with world-class infrastructure.", gallery: [aeroClassicCityGallery1, aeroClassicCityGallery2, aeroClassicCityGallery3, aeroClassicCityGallery4, aeroClassicCityGallery5, aeroClassicCityGallery6] },
  { slug: "aero-dream-city", name: "Aero Dream City", location: "Tappal Chowk, Yamuna Expressway", price: "₹25K per sq.yd", size: "100–500 sq.yd", type: "", image: aeroDreamCityImg, desc: "Strategically located residential development with premium amenities and excellent connectivity.", gallery: [aeroDreamCityGallery1, aeroDreamCityGallery2, aeroDreamCityGallery3] },
  { slug: "hillock-meadows-farms", name: "Hillock Meadows Farms", location: "Near Rajaji National Park, Dehradun", price: "₹18K per sq.yd", size: "120–2248 sq.yd", type: "", image: hillockMeadowsImg, desc: "Lush farm plots and cottages bordering the pristine Rajaji National Park — a serene escape into nature.", gallery: [hillockMeadowsGallery1, hillockMeadowsGallery2, hillockMeadowsGallery3] },
  { slug: "the-magic-meadows", name: "The Magic Meadows", location: "Dehradun", price: "₹18K per sq.yd", size: "Plots & Cottages", type: "", image: magicMeadowsImg, desc: "Picturesque meadows with curated plots and ready cottages — your private slice of the Doon valley.", gallery: [magicMeadowsGallery1, magicMeadowsGallery2, magicMeadowsGallery3, magicMeadowsGallery4, magicMeadowsGallery5, magicMeadowsGallery6] },

];

export const HERO_FRAMES = [
  { image: heroImg1, title: "Let's Find Your Dream Home Today!", sub: "Whether it's your first home, an upgrade, or an investment — we're here to guide you every step of the way." },
  { image: heroImg2, title: "Unlock Your Dream Home!", sub: "MagicIndia – one of India's leading real estate platforms, where finding your next property is easy and hassle-free." },
  { image: heroImg3, title: "Your Dream Home Awaits — Find It Today!", sub: "Looking for a home in your dream location? We make finding the perfect property simple, fast, and stress-free." },
  { image: heroImg4, title: "Live Closer to Nature", sub: "From the green foothills of Dehradun to the rising skylines of Greater Noida — find a home that matches your story." },
  { image: heroImg5, title: "Invest in Tomorrow, Today.", sub: "Curated, high-return properties backed by 12+ years of trust and craftsmanship." },
];

export const AMENITIES = [
  { name: "Car Parking", icon: "Car" },
  { name: "Fitness Center", icon: "Dumbbell" },
  { name: "Rooftop Garden", icon: "Trees" },
  { name: "Indoor Pool", icon: "Waves" },
  { name: "Pet Friendly", icon: "PawPrint" },
  { name: "Playground", icon: "ToyBrick" },
  { name: "Power Backup", icon: "Zap" },
  { name: "Swimming Pool", icon: "Waves" },
  { name: "EV Charging", icon: "Plug" },
  { name: "Kids' Play Area", icon: "Baby" },
];

export const STATS = [
  { value: 850, suffix: "+", label: "Elegant Apartments" },
  { value: 950, suffix: "+", label: "Luxury Houses" },
  { value: 18000, suffix: "+", label: "Satisfied Guests" },
  { value: 2000, suffix: "+", label: "Happy Owners" },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects", hasDropdown: true },
  { to: "/legal", label: "Legal" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];
