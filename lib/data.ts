import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface Metal {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface VideoShowcase {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

export interface ContactInfo {
  companyName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phones: {
    ory: string;
    sultan: string;
  };
  email: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const CONTACT_INFO: ContactInfo = {
  companyName: "O&S Welding Fabrication LLC",
  address: {
    street: "11 W Prospect Ave",
    city: "Mount Prospect",
    state: "IL",
    zip: "60056",
    full: "11 W Prospect Ave, Mount Prospect, IL 60056",
  },
  phones: {
    ory: "773-815-2391",
    sultan: "773-567-2574",
  },
  email: "os.welders@gmail.com",
  hours: "7:30 AM – 6:30 PM (Mon–Sat)",
  coordinates: {
    lat: 42.0664,
    lng: -87.9373,
  },
};

export const SERVICES: Service[] = [
  {
    id: "mig-welding",
    title: "GMAW (MIG Welding)",
    description:
      "High-speed, versatile gas metal arc welding for steel, stainless steel, and aluminum projects.",
    icon: "Zap",
    features: ["Fast production", "Clean welds", "All positions"],
  },
  {
    id: "tig-welding",
    title: "GTAW (TIG Welding)",
    description:
      "Precision tungsten inert gas welding for high-quality, aesthetic welds on thin materials.",
    icon: "Flame",
    features: ["Precision work", "Clean finish", "Exotic metals"],
  },
  {
    id: "flux-core",
    title: "FCAW (Flux-Core Welding)",
    description:
      "Robust flux-cored arc welding ideal for outdoor and windy conditions, thick materials.",
    icon: "Wind",
    features: ["Outdoor capable", "Deep penetration", "Heavy-duty"],
  },
  {
    id: "stick-welding",
    title: "SMAW (Stick Welding)",
    description:
      "Reliable shielded metal arc welding for structural, repair, and field applications.",
    icon: "Hammer",
    features: ["Field ready", "All-weather", "Structural"],
  },
  {
    id: "plasma-cutting",
    title: "Plasma Cutting",
    description:
      "Precise plasma cutting services available by special appointment for complex cuts.",
    icon: "Scissors",
    features: ["By appointment", "Complex cuts", "Various metals"],
  },
  {
    id: "mobile-welding",
    title: "Mobile Welding & Cutting",
    description:
      "We bring our equipment to your location for on-site welding and cutting services.",
    icon: "Truck",
    features: ["On-site service", "Same-day available", "Emergency repairs"],
  },
  {
    id: "structural-repairs",
    title: "Structural Repairs",
    description:
      "Large and small structural repairs, building reinforcement, and support installations.",
    icon: "Building2",
    features: ["Building repair", "Reinforcement", "Code compliant"],
  },
  {
    id: "hvac-support",
    title: "HVAC Roof Support",
    description:
      "Professional installation and repair of HVAC roof supports and mounting systems.",
    icon: "Wind",
    features: ["Installation", "Repair", "Maintenance"],
  },
  {
    id: "truck-trailer",
    title: "Truck & Trailer Services",
    description:
      "Comprehensive truck and trailer repair, modification, and custom fabrication work.",
    icon: "Truck",
    features: ["Repairs", "Modifications", "Custom work"],
  },
  {
    id: "aluminum-repair",
    title: "Aluminum Bracket Repair",
    description:
      "Expert repair of broken aluminum brackets and components with TIG welding.",
    icon: "Wrench",
    features: ["TIG welding", "Precision repair", "Quick turnaround"],
  },
  {
    id: "heavy-equipment",
    title: "Heavy Equipment Repair",
    description:
      "Professional repair services for heavy machinery, construction equipment, and industrial tools.",
    icon: "Cog",
    features: ["Industrial grade", "Field service", "Emergency repair"],
  },
  {
    id: "gates-fences",
    title: "Gate & Fence Repair",
    description:
      "Residential and commercial gate and fence repair, installation, and custom fabrication.",
    icon: "Shield",
    features: ["Residential", "Commercial", "Custom design"],
  },
  {
    id: "gas-line",
    title: "Commercial Gas Line Repair",
    description:
      "Licensed commercial gas line repair and installation services.",
    icon: "Flame",
    features: ["Licensed", "Safety certified", "Emergency service"],
  },
  {
    id: "demolition",
    title: "Demolition Work",
    description:
      "Professional demolition services for metal structures, equipment removal, and site preparation.",
    icon: "HardHat",
    features: ["Safe removal", "Site prep", "Scrap disposal"],
  },
  {
    id: "custom-fabrication",
    title: "Custom Fabrication",
    description:
      "Custom metal fabrication from concept to completion, following your specifications or our AutoCAD designs.",
    icon: "Ruler",
    features: ["AutoCAD design", "Custom projects", "Prototype to production"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Large Orders",
    description:
      "High-volume manufacturing and production runs. We work with general contractors and handle large-scale projects.",
    icon: "Factory",
    features: ["Large volume", "GC partnerships", "Production runs"],
  },
];

export const METALS: Metal[] = [
  {
    id: "mild-steel",
    name: "Mild Steel",
    description:
      "The most common structural steel, excellent for general fabrication and construction.",
    icon: "Box",
  },
  {
    id: "stainless-steel",
    name: "Stainless Steel",
    description:
      "Corrosion-resistant steel ideal for food service, medical, and outdoor applications.",
    icon: "Shield",
  },
  {
    id: "galvanized-steel",
    name: "Galvanized Steel",
    description:
      "Zinc-coated steel providing superior rust protection for outdoor structures.",
    icon: "Droplets",
  },
  {
    id: "aluminum",
    name: "Aluminum",
    description:
      "Lightweight, corrosion-resistant metal perfect for aerospace, automotive, and decorative work.",
    icon: "Feather",
  },
  {
    id: "cast-steel",
    name: "Cast Steel",
    description:
      "High-strength steel castings for heavy-duty industrial applications.",
    icon: "Anvil",
  },
  {
    id: "other-alloys",
    name: "Other Alloys",
    description:
      "We work with various specialty alloys. Contact us to confirm availability for your project.",
    icon: "Sparkles",
  },
];

export const VIDEO_SHOWCASE: VideoShowcase[] = [
  {
    id: "video-1",
    title: "Precision Welding Work",
    url: "https://www.pinterest.com/pin/57772807715335199/",
    thumbnail:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "video-2",
    title: "Custom Fabrication Project",
    url: "https://www.pinterest.com/pin/18999629674733011/",
    thumbnail:
      "https://images.unsplash.com/photo-1587132116726-e2c5e9f25b06?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "video-3",
    title: "Mobile Welding Service",
    url: "https://www.pinterest.com/pin/18999629674733011/",
    thumbnail:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "licensed",
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for your peace of mind and protection.",
    icon: "Shield",
  },
  {
    id: "processes",
    title: "10+ Welding Processes",
    description:
      "Master multiple welding techniques to handle any project requirement.",
    icon: "Zap",
  },
  {
    id: "mobile",
    title: "Mobile Services",
    description:
      "We come to your location with professional equipment for on-site work.",
    icon: "Truck",
  },
  {
    id: "cad",
    title: "AutoCAD Design",
    description:
      "Create detailed AutoCAD drawings of any complexity for your projects.",
    icon: "PenTool",
  },
  {
    id: "contractors",
    title: "Work with GCs",
    description:
      "Experienced working with general contractors on large commercial projects.",
    icon: "Handshake",
  },
  {
    id: "volume",
    title: "High-Volume Orders",
    description:
      "Equipped to handle manufacturing and large-scale production runs.",
    icon: "Package",
  },
  {
    id: "response",
    title: "Fast Response Time",
    description:
      "Same-day service available for urgent repairs and emergency situations.",
    icon: "Clock",
  },
  {
    id: "quality",
    title: "Premium Quality",
    description:
      "Committed to delivering exceptional craftsmanship on every project.",
    icon: "Award",
  },
];
