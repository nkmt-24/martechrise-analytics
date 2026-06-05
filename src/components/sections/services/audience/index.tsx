import AudienceContent, { AudienceData } from "./AudienceContent";

const audiences: AudienceData[] = [
  { icon: "ShoppingCart", title: "E-commerce", desc: "Scaling paid campaigns" },
  { icon: "MonitorPlay", title: "SaaS", desc: "Tracking product and user journeys" },
  { icon: "Settings2", title: "Enterprises", desc: "Using Adobe or CDP ecosystems" },
  { icon: "Users", title: "Marketing Teams", desc: "Struggling with data accuracy" },
  { icon: "ActivitySquare", title: "GA4 Migrations", desc: "Modern tracking upgrades" },
];

export default function AudienceSection() {
  return <AudienceContent audiences={audiences} />;
}
