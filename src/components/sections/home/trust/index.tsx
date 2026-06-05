import TrustContent from "./TrustContent";

const reasons: string[] = [
  "Deep expertise in GA4 & Adobe Analytics",
  "Strong experience in tracking, debugging & data accuracy",
  "Focus on business outcomes, not just tools",
  "End-to-end analytics implementation",
  "Fast turnaround & reliable support"
];

export default function TrustSection() {
  return <TrustContent reasons={reasons} />;
}
