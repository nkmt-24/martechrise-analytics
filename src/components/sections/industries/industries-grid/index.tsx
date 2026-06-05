import IndustriesGridContent, { IndustryData } from "./IndustriesGridContent";

const industries: IndustryData[] = [
  {
    iconName: "ShoppingCart",
    title: "E-commerce",
    tagline: "Track Revenue, Not Just Traffic",
    cases: ["Purchase tracking", "Cart abandonment", "Product performance", "Attribution"],
    impact: "Improve ROAS and conversions",
    imageSrc: "/assets/INDUSTRIES PAGE_images/8.png"
  },
  {
    iconName: "Landmark",
    title: "Finance (BFSI)",
    tagline: "Analytics That Balances Accuracy & Compliance",
    cases: ["Lead-to-application tracking", "Secure data collection", "Funnel visibility", "Attribution"],
    impact: "Reliable decisions in regulated environments",
    imageSrc: "/assets/INDUSTRIES PAGE_images/7.png"
  },
  {
    iconName: "Stethoscope",
    title: "Healthcare",
    tagline: "Privacy-First Analytics Without Losing Insights",
    cases: ["Consent tracking", "Appointment tracking", "Patient journey", "Privacy compliance"],
    impact: "Insights with compliance",
    imageSrc: "/assets/INDUSTRIES PAGE_images/6.png"
  },
  {
    iconName: "Plane",
    title: "Travel",
    tagline: "Optimize Complex Booking Journeys",
    cases: ["Booking funnel tracking", "Drop-off analysis", "Journey tracking", "Campaign insights"],
    impact: "Increase booking conversions",
    imageSrc: "/assets/INDUSTRIES PAGE_images/5.png"
  },
  {
    iconName: "Shield",
    title: "Insurance",
    tagline: "Track Intent Across Long Customer Journeys",
    cases: ["Quote-to-policy tracking", "Lead quality", "Attribution", "Funnel tracking"],
    impact: "Improve conversion rates",
    imageSrc: "/assets/INDUSTRIES PAGE_images/4.png"
  },
  {
    iconName: "Database",
    title: "Life Sciences",
    tagline: "Structured Data for Complex Ecosystems",
    cases: ["Stakeholder tracking", "Compliance tracking", "Data integration", "Reporting"],
    impact: "Better visibility across channels",
    imageSrc: "/assets/INDUSTRIES PAGE_images/3.png"
  }
];

export default function IndustriesGridSection() {
  return <IndustriesGridContent industries={industries} />;
}
