import ServicesContent, { ServiceData } from "./ServicesContent";

const services: ServiceData[] = [
  {
    title: "Analytics & Tracking",
    desc: "Set up accurate, scalable tracking across your website and apps.",
    image: "/assets/HOME-PAGE_IMAGES/5.png",
    bullets: ["Solution Design Document (SDD)", "GTM / Adobe Launch setup", "Web & Mobile SDK migration", "Third-party tags integration"]
  },
  {
    title: "Server-Side Tracking",
    desc: "Eliminate data loss and improve tracking accuracy with modern architecture.",
    image: "/assets/HOME-PAGE_IMAGES/6.png",
    bullets: ["Server-side GTM setup", "Meta Conversion API (CAPI)", "First-party data collection", "Privacy-safe tracking"]
  },
  {
    title: "CDP Implementation",
    desc: "Unify and activate your customer data across platforms.",
    image: "/assets/HOME-PAGE_IMAGES/7.png",
    bullets: ["Adobe RT-CDP & Tealium", "Audience segmentation", "Real-time data activation"]
  },
  {
    title: "Analytics Audit",
    desc: "Identify what’s broken and where data is being lost.",
    image: "/assets/HOME-PAGE_IMAGES/8.png",
    bullets: ["Missing conversion tracking", "Broken or misfiring tags", "Detailed audit report"]
  },
  {
    title: "Data Validation",
    desc: "Fix tracking issues and ensure your data is clean and reliable.",
    image: "/assets/HOME-PAGE_IMAGES/9.png",
    bullets: ["Tracking & tag debugging", "Cross-platform validation", "Funnel validation"]
  },
  {
    title: "Reporting & Insights",
    desc: "Turn your data into clear, actionable business insights.",
    image: "/assets/HOME-PAGE_IMAGES/10.png",
    bullets: ["Campaign performance", "Custom dashboards (GA4/Looker)", "ROI & attribution analysis"]
  }
];

export default function ServicesSection() {
  return <ServicesContent services={services} />;
}
