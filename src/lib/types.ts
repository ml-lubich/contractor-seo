export type Trade =
  | "plumber"
  | "hvac"
  | "electrician"
  | "roofer"
  | "painter"
  | "landscaper"
  | "general-contractor"
  | "pest-control"
  | "garage-door"
  | "locksmith";

export const TRADES: { value: Trade; label: string; icon: string }[] = [
  { value: "plumber", label: "Plumber", icon: "🔧" },
  { value: "hvac", label: "HVAC Technician", icon: "❄️" },
  { value: "electrician", label: "Electrician", icon: "⚡" },
  { value: "roofer", label: "Roofer", icon: "🏠" },
  { value: "painter", label: "Painter", icon: "🎨" },
  { value: "landscaper", label: "Landscaper", icon: "🌿" },
  { value: "general-contractor", label: "General Contractor", icon: "🔨" },
  { value: "pest-control", label: "Pest Control", icon: "🐛" },
  { value: "garage-door", label: "Garage Door", icon: "🚪" },
  { value: "locksmith", label: "Locksmith", icon: "🔑" },
];

export interface GeneratedPage {
  id: string;
  user_id: string;
  trade: Trade;
  city: string;
  state: string;
  business_name: string;
  phone: string;
  slug: string;
  seo_content: SEOContent | null;
  created_at: string;
  updated_at: string;
  is_published: boolean;
}

export interface SEOContent {
  title: string;
  metaDescription: string;
  h1: string;
  h2s: string[];
  bodyContent: string[];
  services: string[];
  faqs: { question: string; answer: string }[];
  schemaMarkup: object;
}

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: 19,
    pages: 1,
    features: [
      "1 SEO landing page",
      "Schema markup",
      "Mobile responsive",
      "Click-to-call button",
      "Monthly SEO updates",
    ],
  },
  {
    name: "Growth",
    price: 49,
    pages: 5,
    popular: true,
    features: [
      "5 SEO landing pages",
      "Schema markup",
      "Mobile responsive",
      "Click-to-call button",
      "Weekly SEO updates",
      "Google Maps embed",
      "Reviews section",
    ],
  },
  {
    name: "Pro",
    price: 99,
    pages: -1,
    features: [
      "Unlimited SEO pages",
      "Schema markup",
      "Mobile responsive",
      "Click-to-call button",
      "Daily SEO updates",
      "Google Maps embed",
      "Reviews section",
      "Priority support",
      "Custom domain",
    ],
  },
];
