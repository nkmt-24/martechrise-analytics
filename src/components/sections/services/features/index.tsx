import FeaturesContent, { FeatureData } from "./FeaturesContent";

const features: FeatureData[] = [
  { title: "Structured", desc: "Every implementation follows a defined framework" },
  { title: "Validated", desc: "No tracking goes live without QA" },
  { title: "Business-aligned", desc: "Tracking mapped to actual KPIs" },
  { title: "Scalable", desc: "Designed for future growth and integrations" }
];

export default function FeaturesSection() {
  return <FeaturesContent features={features} />;
}
