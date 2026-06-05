import PricingContent, { PricingPlan } from "./PricingContent";

const plans: PricingPlan[] = [
  {
    title: "Project-Based",
    desc: "End-to-end setup for new or existing systems.",
    features: ['Comprehensive setup', 'Custom SDD', 'Full QA & Validation'],
    isPopular: false
  },
  {
    title: "Audit & Fix",
    desc: "Identify and resolve tracking issues quickly to restore data trust.",
    features: ['Deep-dive GA4/GTM audit', 'Fix broken metrics', 'Data accuracy tests', 'Attribution alignment'],
    isPopular: true
  },
  {
    title: "Ongoing Support",
    desc: "Continuous optimization, monitoring, and enhancements.",
    features: ['Dedicated analytics engineer', 'Weekly QA monitoring', 'New feature implementation', 'Strategic reporting'],
    isPopular: false
  }
];

export default function PricingSection() {
  return <PricingContent plans={plans} />;
}
