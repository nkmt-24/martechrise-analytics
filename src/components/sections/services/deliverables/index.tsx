import DeliverablesContent from "./DeliverablesContent";

const approachCards = [
  {
    title: "Structured Framework",
    description: "Follows a defined framework",
    image: "/assets/SERVICE PAGE_images/19.png" // Since the repo has 25 to 30.png
  },
  {
    title: "System Building",
    description: "Reliable, scalable data systems",
    image: "/assets/SERVICE PAGE_images/18.png"
  },
  {
    title: "Accuracy & Precision",
    description: "Tracking aligned with actual KPIs",
    image: "/assets/SERVICE PAGE_images/17.png"
  }
];

const features = [
  {
    title: "Structured",
    description: "Every implementation follows a defined framework",
    icon: "ClipboardList"
  },
  {
    title: "Validated",
    description: "No tracking goes live without QA",
    icon: "ShieldCheck"
  },
  {
    title: "Business-aligned",
    description: "Tracking mapped to actual KPIs",
    icon: "LineChart"
  },
  {
    title: "Scalable",
    description: "Designed for future growth and integrations",
    icon: "TrendingUp"
  }
];

export default function DeliverablesSection() {
  return <DeliverablesContent approachCards={approachCards} features={features} />;
}
