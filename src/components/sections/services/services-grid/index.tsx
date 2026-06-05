import ServicesGridContent, { ServiceData } from "./ServicesGridContent";

// Data fetched or defined at the server side
const services: ServiceData[] = [
  {
    icon: "Network",
    title: "Tracking Architecture & Solution Design",
    description: "We design the foundation before implementation.",
    bullets: [
      "Business requirement mapping",
      "Measurement planning & KPI definition",
      "Solution Design Document (SDD)",
      "Scalable data layer architecture"
    ]
  },
  {
    icon: "Blocks",
    title: "Implementation Across Platforms",
    description: "Seamless deployment across your analytics ecosystem.",
    bullets: [
      "Web & mobile tracking implementation",
      "GA4, Adobe Analytics setups",
      "Tag management system config",
      "Marketing & third-party integrations"
    ]
  },
  {
    icon: "Database",
    title: "Data Collection & Event Standardization",
    description: "Ensure consistent and meaningful data capture.",
    bullets: [
      "Standardized event naming",
      "Conversion & micro-event tracking",
      "Cross-domain & cross-device",
      "Funnel & journey-based tracking"
    ]
  },
  {
    icon: "Server",
    title: "Server-Side & First-Party Data Setup",
    description: "Future-proof your tracking infrastructure.",
    bullets: [
      "Server-side tagging architecture",
      "First-party data pipelines",
      "Conversion API integrations",
      "Data control & privacy enhancements"
    ]
  },
  {
    icon: "CheckSquare",
    title: "QA, Validation & Data Accuracy",
    description: "We ensure everything works as expected.",
    bullets: [
      "End-to-end tracking validation",
      "Debugging & issue resolution",
      "Cross-tool data comparison",
      "Data accuracy testing frameworks"
    ]
  },
  {
    icon: "LineChart",
    title: "Insights, Reporting & Optimization",
    description: "Transform tracking into actionable business insights.",
    bullets: [
      "Custom dashboards aligned to KPIs",
      "Funnel performance analysis",
      "Attribution & channel performance",
      "Continuous optimization"
    ]
  }
];

export default function ServicesSection() {
  return <ServicesGridContent services={services} />;
}
