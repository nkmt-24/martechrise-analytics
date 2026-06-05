import ImpactContent, { ImpactData } from "./ImpactContent";

const highlights: ImpactData[] = [
  { industry: "E-commerce", text: "Improved conversion tracking accuracy and campaign optimization" },
  { industry: "Finance", text: "Enabled complete visibility into lead-to-application funnel" },
  { industry: "Travel", text: "Identified booking drop-offs and improved conversion flow" },
  { industry: "D2C", text: "Improved attribution with server-side tracking" }
];

export default function ImpactSection() {
  return <ImpactContent highlights={highlights} />;
}
