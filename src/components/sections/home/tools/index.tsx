import ToolsContent, { ToolCategory } from "./ToolsContent";

const categories: ToolCategory[] = [
  {
    title: "Analytics & Customer Data Platforms",
    list: ["Adobe Analytics", "Adobe Experience Platform", "Adobe RT-CDP", "Adobe CJA"]
  },
  {
    title: "Activation & Personalization",
    list: ["Adobe Target", "Adobe Journey Optimizer (AJO)", "Adobe Campaign", "Adobe Audience Manager"]
  },
  {
    title: "Tag Management & Data Collection",
    list: ["Adobe Data Collection / Web SDK", "Tealium iQ", "Tealium AudienceStream", "Tealium EventStream", "Google Tag Manager", "GA4", "Meta Conversion API"]
  },
  {
    title: "Experimentation & Optimization",
    list: ["Optimizely"]
  },
  {
    title: "Data Visualization & Reporting",
    list: ["BigQuery", "Looker Studio", "Power BI", "Tableau"]
  }
];

export default function ToolsSection() {
  return <ToolsContent categories={categories} />;
}
