import ScenariosContent from "./ScenariosContent";

const scenarios: string[] = [
  "Your GA4 or Adobe data doesn't match expectations",
  "You're planning a new analytics implementation",
  "You're migrating from Universal Analytics or legacy systems",
  "Your marketing attribution is unclear",
  "You're scaling campaigns but lack reliable insights",
  "Your tracking setup has become too complex to manage"
];

export default function ScenariosSection() {
  return <ScenariosContent scenarios={scenarios} />;
}
