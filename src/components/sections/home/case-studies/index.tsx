import CaseStudiesContent, { CaseStudy } from "./CaseStudiesContent";

const studies: CaseStudy[] = [
  {
    title: "Fixing Broken Conversion Tracking",
    desc: "A business was losing critical conversion data due to incorrect GA4 implementation. We restructured their tracking and implemented accurate event tracking.",
    res1: "35% improvement in tracking accuracy",
    res2: "Reliable conversion data for campaign decisions",
    image: "/assets/HOME-PAGE_IMAGES/11.png"
  },
  {
    title: "Improving Meta Ads Attribution",
    desc: "The client faced major data mismatch between Meta Ads and analytics platforms. We implemented server-side tracking and Meta Conversion API.",
    res1: "Improved attribution accuracy",
    res2: "Better campaign optimization",
    image: "/assets/HOME-PAGE_IMAGES/12.png"
  },
  {
    title: "Identifying Conversion Drop-offs",
    desc: "A travel platform struggled with low booking conversions despite high traffic. We implemented full funnel tracking and analyzed user drop-offs.",
    res1: "Identified key drop-off stages",
    res2: "Enabled data-driven funnel optimization",
    image: "/assets/HOME-PAGE_IMAGES/13.png"
  }
];

export default function CaseStudiesSection() {
  return <CaseStudiesContent studies={studies} />;
}
