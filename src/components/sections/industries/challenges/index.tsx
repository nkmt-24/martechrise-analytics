import ChallengesContent from "./ChallengesContent";

const problems: string[] = [
  "Broken or incomplete tracking",
  "Data mismatch across tools",
  "Missing conversions",
  "Poor attribution clarity",
  "Lack of trust in analytics"
];

export default function ChallengesSection() {
  return <ChallengesContent problems={problems} />;
}
