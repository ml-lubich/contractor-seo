import { Trade, TRADES, SEOContent } from "./types";

const TRADE_SERVICES: Record<Trade, string[]> = {
  plumber: [
    "Emergency Plumbing Repairs",
    "Water Heater Installation & Repair",
    "Drain Cleaning & Unclogging",
    "Sewer Line Repair & Replacement",
    "Pipe Leak Detection & Repair",
    "Bathroom & Kitchen Plumbing",
    "Garbage Disposal Installation",
    "Water Softener Installation",
    "Gas Line Installation & Repair",
    "Toilet Repair & Installation",
  ],
  hvac: [
    "AC Installation & Replacement",
    "Heating System Repair",
    "HVAC Maintenance Plans",
    "Ductwork Installation & Repair",
    "Thermostat Installation",
    "Indoor Air Quality Solutions",
    "Heat Pump Services",
    "Furnace Repair & Installation",
    "Commercial HVAC Services",
    "Emergency HVAC Repair",
  ],
  electrician: [
    "Electrical Panel Upgrades",
    "Wiring & Rewiring",
    "Lighting Installation",
    "Outlet & Switch Installation",
    "Ceiling Fan Installation",
    "Generator Installation",
    "Electrical Safety Inspections",
    "EV Charger Installation",
    "Surge Protection",
    "Emergency Electrical Repair",
  ],
  roofer: [
    "Roof Replacement",
    "Roof Repair",
    "Roof Inspection",
    "Shingle Roofing",
    "Metal Roofing",
    "Flat Roof Services",
    "Gutter Installation & Repair",
    "Storm Damage Repair",
    "Roof Leak Repair",
    "Commercial Roofing",
  ],
  painter: [
    "Interior Painting",
    "Exterior Painting",
    "Cabinet Painting & Refinishing",
    "Deck & Fence Staining",
    "Wallpaper Removal",
    "Drywall Repair & Texturing",
    "Pressure Washing",
    "Color Consultation",
    "Commercial Painting",
    "Trim & Molding Painting",
  ],
  landscaper: [
    "Lawn Maintenance",
    "Landscape Design",
    "Tree & Shrub Trimming",
    "Irrigation System Installation",
    "Hardscaping & Patios",
    "Sod Installation",
    "Mulching & Bed Maintenance",
    "Seasonal Cleanups",
    "Outdoor Lighting",
    "Drainage Solutions",
  ],
  "general-contractor": [
    "Home Renovations",
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "Room Additions",
    "Basement Finishing",
    "Deck & Patio Construction",
    "Siding Installation",
    "Window & Door Replacement",
    "Concrete Work",
    "Commercial Build-Outs",
  ],
  "pest-control": [
    "Termite Treatment",
    "Rodent Control",
    "Ant & Insect Removal",
    "Bed Bug Treatment",
    "Mosquito Control",
    "Wildlife Removal",
    "Cockroach Treatment",
    "Preventative Pest Plans",
    "Commercial Pest Control",
    "Crawl Space Treatment",
  ],
  "garage-door": [
    "Garage Door Installation",
    "Garage Door Repair",
    "Garage Door Opener Installation",
    "Spring Replacement",
    "Panel Replacement",
    "Garage Door Maintenance",
    "Emergency Garage Door Repair",
    "Commercial Garage Doors",
    "Insulated Garage Doors",
    "Smart Garage Door Openers",
  ],
  locksmith: [
    "Emergency Lockout Service",
    "Lock Rekeying",
    "Lock Installation",
    "Key Duplication",
    "Smart Lock Installation",
    "Car Key Replacement",
    "Commercial Lock Services",
    "Master Key Systems",
    "Safe Installation & Opening",
    "Access Control Systems",
  ],
};

function getTradeLabel(trade: Trade): string {
  return TRADES.find((t) => t.value === trade)?.label ?? trade;
}

function getTradeNoun(trade: Trade): string {
  const map: Record<Trade, string> = {
    plumber: "plumber",
    hvac: "HVAC technician",
    electrician: "electrician",
    roofer: "roofer",
    painter: "painter",
    landscaper: "landscaper",
    "general-contractor": "general contractor",
    "pest-control": "pest control expert",
    "garage-door": "garage door specialist",
    locksmith: "locksmith",
  };
  return map[trade];
}

function getTradeServiceNoun(trade: Trade): string {
  const map: Record<Trade, string> = {
    plumber: "plumbing",
    hvac: "HVAC",
    electrician: "electrical",
    roofer: "roofing",
    painter: "painting",
    landscaper: "landscaping",
    "general-contractor": "contracting",
    "pest-control": "pest control",
    "garage-door": "garage door",
    locksmith: "locksmith",
  };
  return map[trade];
}

export function generateSEOContent(
  trade: Trade,
  city: string,
  state: string,
  businessName: string,
  phone: string
): SEOContent {
  const tradeLabel = getTradeLabel(trade);
  const tradeNoun = getTradeNoun(trade);
  const serviceNoun = getTradeServiceNoun(trade);
  const services = TRADE_SERVICES[trade];
  const location = `${city}, ${state}`;

  const title = `${businessName} — #1 ${tradeLabel} in ${location} | Licensed & Insured`;
  const metaDescription = `Looking for a reliable ${tradeNoun} in ${location}? ${businessName} offers professional ${serviceNoun} services. Licensed, insured & 5-star rated. Call ${phone} for a free estimate.`;

  const h1 = `${businessName} — ${city}'s Most Trusted ${tradeLabel}`;
  const h2s = [
    `Professional ${tradeLabel} Services in ${location}`,
    `Why ${city} Homeowners Choose ${businessName}`,
    `Our ${tradeLabel} Services`,
    `Service Areas Near ${city}`,
    `Frequently Asked Questions`,
    `What Our Customers Say`,
  ];

  const bodyContent = [
    `Looking for a dependable ${tradeNoun} in ${location}? ${businessName} has been proudly serving the ${city} community with top-quality ${serviceNoun} services. Whether you need emergency repairs or planned installations, our licensed and insured team is ready to help.`,
    `At ${businessName}, we understand that ${serviceNoun} issues can be stressful. That's why we offer prompt, professional service with upfront pricing and no hidden fees. Our ${city}-based team knows the local building codes and requirements, ensuring every job is done right the first time.`,
    `We're committed to providing ${city} residents with exceptional ${serviceNoun} services at competitive prices. From routine maintenance to complex installations, ${businessName} is the name ${city} trusts for all ${serviceNoun} needs. Contact us today at ${phone} for a free estimate.`,
  ];

  const faqs = [
    {
      question: `How much does a ${tradeNoun} cost in ${city}?`,
      answer: `${serviceNoun.charAt(0).toUpperCase() + serviceNoun.slice(1)} costs in ${city} vary depending on the scope of work. At ${businessName}, we offer free estimates and competitive pricing. Call us at ${phone} for a personalized quote.`,
    },
    {
      question: `Are you licensed and insured in ${state}?`,
      answer: `Yes! ${businessName} is fully licensed and insured to perform ${serviceNoun} work in ${state}. We carry full liability insurance for your protection.`,
    },
    {
      question: `Do you offer emergency ${serviceNoun} services in ${city}?`,
      answer: `Absolutely. ${businessName} offers 24/7 emergency ${serviceNoun} services throughout the ${city} area. Call ${phone} anytime for immediate assistance.`,
    },
    {
      question: `What areas do you serve near ${city}?`,
      answer: `We serve ${city} and the surrounding communities within a 30-mile radius. Contact us to confirm service availability in your area.`,
    },
    {
      question: `Do you offer free estimates?`,
      answer: `Yes, ${businessName} provides free, no-obligation estimates for all ${serviceNoun} services in the ${city} area. Call ${phone} to schedule yours today.`,
    },
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    description: metaDescription,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "",
      longitude: "",
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${tradeLabel} Services`,
      itemListElement: services.slice(0, 5).map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };

  return {
    title,
    metaDescription,
    h1,
    h2s,
    bodyContent,
    services,
    faqs,
    schemaMarkup,
  };
}

export function generateSlug(
  businessName: string,
  trade: Trade,
  city: string
): string {
  const parts = [businessName, trade, city];
  return parts
    .join("-")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
