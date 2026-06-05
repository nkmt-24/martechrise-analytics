import ApproachContent, { ApproachData } from "./ApproachContent";

const approaches: ApproachData[] = [
  {
    title: "Customer Journey Complexity",
    desc: "Simple (e-com) to multi-step (finance, insurance)"
  },
  {
    title: "Compliance Requirements",
    desc: "Standard vs strict (healthcare, finance)"
  },
  {
    title: "Tracking Depth",
    desc: "Events vs full funnel lifecycle"
  },
  {
    title: "Attribution Models",
    desc: "Short vs long decision cycles"
  }
];

export default function ApproachSection() {
  return <ApproachContent approaches={approaches} />;
}
