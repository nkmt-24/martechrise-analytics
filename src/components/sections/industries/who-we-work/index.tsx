import WhoWeWorkContent, { WorkValueData } from "./WhoWeWorkContent";

const workValues: WorkValueData[] = [
  { iconName: "TrendingUp", title: "Revenue Impact", iconColor: "text-indigo-600" },
  { iconName: "ShieldCheck", title: "Compliance", iconColor: "text-purple-600" },
  { iconName: "Users", title: "Customer Experience", iconColor: "text-blue-600" }
];

export default function WhoWeWorkSection() {
  return <WhoWeWorkContent workValues={workValues} />;
}
