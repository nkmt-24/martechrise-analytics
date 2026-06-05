import ProcessContent, { ProcessStep } from "./ProcessContent";

const steps: ProcessStep[] = [
  {
    iconName: "Search",
    title: "Step 1: Audit & Discovery",
    desc: "We analyze your current tracking setup to identify data gaps, broken tags, and inconsistencies.",
    micro: "Find what's broken"
  },
  {
    iconName: "Map",
    title: "Step 2: Strategy & Solution Design",
    desc: "We define a scalable tracking architecture, including data layer design and measurement strategy.",
    micro: "Plan the right setup"
  },
  {
    iconName: "Wrench",
    title: "Step 3: Implementation & Fixes",
    desc: "We implement and fix tracking using client-side and server-side solutions for accurate data collection.",
    micro: "Fix & deploy tracking"
  },
  {
    iconName: "BarChart2",
    title: "Step 4: Validation & Insights",
    desc: "We validate data accuracy and provide actionable insights to support better marketing decisions.",
    micro: "Ensure accuracy & insights"
  }
];

export default function ProcessSection() {
  return <ProcessContent steps={steps} />;
}
