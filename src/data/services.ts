import {
  LayoutGrid,
  Settings2,
  Activity,
  Server,
  ShieldCheck,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  hero: string;
  intro: string;
  outcomes: string[];
  deliverables: string[];
  process: { title: string; desc: string }[];
}


export const services: Service[] = [
  {
    slug: "tracking-architecture",
    name: "Tracking Architecture & Solution Design",
    short: "Blueprint a tracking system that scales with your business.",
    icon: LayoutGrid,
    hero: "Design a tracking system your team can actually trust",
    intro:
      "We design a complete Solution Design Document (SDD) and tracking architecture so every team — marketing, product, analytics — works from the same source of truth.",
    outcomes: [
      "One unified data model across web, app and server",
      "Predictable event schemas that scale with new releases",
      "Stakeholder-aligned tracking plan with full documentation",
    ],
    deliverables: ["Solution Design Document (SDD)", "Event taxonomy & naming conventions", "Data layer specification", "Implementation roadmap"],
    process: [
      { title: "Discovery", desc: "Audit existing tracking, business goals and KPIs." },
      { title: "Design", desc: "Build SDD, data layer spec and event taxonomy." },
      { title: "Validate", desc: "Stakeholder review with marketing, product and engineering." },
      { title: "Handover", desc: "Implementation roadmap with priorities and ownership." },
    ],
  },
  {
    slug: "analytics-implementation",
    name: "Analytics Implementation",
    short: "GA4, GTM and Adobe Launch implementation done right the first time.",
    icon: Settings2,
    hero: "Analytics implementation that holds up under scrutiny",
    intro:
      "From GA4 to Adobe Analytics, we implement tracking with engineering rigor — clean data layers, version-controlled containers and no rogue tags.",
    outcomes: [
      "Reliable conversion tracking from day one",
      "Clean GTM / Adobe Launch container with governance",
      "Mobile and web SDKs aligned to one schema",
    ],
    deliverables: ["GTM / Adobe Launch container build", "GA4 / Adobe Analytics setup", "Mobile SDK migration", "Third-party tag integration"],
    process: [
      { title: "Plan", desc: "Map every event to the SDD and prioritize rollout." },
      { title: "Build", desc: "Container, data layer, and SDK changes in staging." },
      { title: "Test", desc: "Cross-browser and cross-device QA before publish." },
      { title: "Launch", desc: "Versioned release with monitoring in place." },
    ],
  },
  {
    slug: "conversion-event-tracking",
    name: "Conversion & Event Tracking",
    short: "Capture every conversion accurately — no duplicates, no gaps.",
    icon: Activity,
    hero: "Eliminate inconsistent conversion data for good",
    intro:
      "We standardize how conversions and events are captured across every channel so your reports, ad platforms and CRM finally agree.",
    outcomes: [
      "Conversions match across GA4, Ads Manager and CRM",
      "Zero duplicate or missing key events",
      "Funnel stages mapped to real buyer behavior",
    ],
    deliverables: ["Event standardization across platforms", "Deduplication logic", "Funnel & journey mapping", "Conversion validation report"],
    process: [
      { title: "Audit", desc: "Identify conversion mismatches across platforms." },
      { title: "Standardize", desc: "Define canonical events and parameters." },
      { title: "Implement", desc: "Roll out across web, app and server." },
      { title: "Reconcile", desc: "Validate parity across every reporting surface." },
    ],
  },
  {
    slug: "server-side-tracking",
    name: "Server-Side Tracking",
    short: "Own your data with first-party, server-side architecture.",
    icon: Server,
    hero: "Stop losing conversion data to browser restrictions",
    intro:
      "Server-side GTM, Meta CAPI and first-party pipelines that survive ad blockers, ITP and cookie restrictions — so your ad spend decisions run on complete data.",
    outcomes: [
      "Recover 15–40% of conversion data lost to client-side restrictions",
      "First-party data you own, not rented from third parties",
      "Privacy-safe tracking that respects consent",
    ],
    deliverables: ["Server-side GTM setup", "Meta Conversions API (CAPI)", "First-party data pipeline", "Consent-aware routing"],
    process: [
      { title: "Architect", desc: "Design the server-side stack and data flow." },
      { title: "Deploy", desc: "Stand up sGTM in your cloud with custom domain." },
      { title: "Integrate", desc: "Wire up CAPI, Google Ads, TikTok and others." },
      { title: "Monitor", desc: "Continuous parity checks vs client-side baseline." },
    ],
  },
  {
    slug: "qa-data-validation",
    name: "QA & Data Validation",
    short: "Catch broken tracking before it costs you decisions.",
    icon: ShieldCheck,
    hero: "Data you can defend in any leadership meeting",
    intro:
      "End-to-end QA, automated validation and continuous monitoring so tracking issues are caught before they reach your dashboards.",
    outcomes: [
      "Confidence in every number your team reports",
      "Tracking regressions caught at deploy, not at month-end",
      "Faster debugging with structured logs and parity checks",
    ],
    deliverables: ["Tracking & tag debugging", "Cross-platform validation", "Funnel & event QA", "Continuous monitoring setup"],
    process: [
      { title: "Inspect", desc: "Manual + automated checks across the stack." },
      { title: "Validate", desc: "Compare data across GA4, CAPI, CRM and warehouse." },
      { title: "Fix", desc: "Resolve broken tags, schemas and pipelines." },
      { title: "Monitor", desc: "Always-on alerts for tracking drift." },
    ],
  },
  {
    slug: "analytics-reporting-attribution",
    name: "Analytics Reporting & Attribution",
    short: "Turn clean data into reporting your leadership team trusts.",
    icon: BarChart3,
    hero: "Build reporting your leadership team actually relies on",
    intro:
      "We turn validated data into custom GA4, Looker Studio and Adobe dashboards with attribution models that match how your business actually works.",
    outcomes: [
      "One source of truth for every campaign decision",
      "Attribution that reflects your real buyer journey",
      "Executive-ready dashboards refreshed automatically",
    ],
    deliverables: ["Campaign performance dashboards", "Custom GA4 & Looker Studio reports", "ROI & attribution analysis", "Executive reporting cadence"],
    process: [
      { title: "Frame", desc: "Define the questions reporting must answer." },
      { title: "Model", desc: "Choose attribution and unify data sources." },
      { title: "Build", desc: "Design dashboards in GA4, Looker, or Adobe." },
      { title: "Iterate", desc: "Refine with stakeholders monthly." },
    ],
  },
];

export const navServices = services.map((s) => ({
  slug: s.slug,
  name: s.name.split(" & ")[0],
  short: s.short,
  icon: s.icon,
}));

export const navResources = [
  {
    name: 'Blog',
    desc: 'Latest articles on analytics and MarTech.',
    href: '/blog',
  },
  {
    name: 'Case Studies',
    desc: 'See how we helped other businesses.',
    href: '/case-studies',
  },
  {
    name: 'Guides & Tools',
    desc: 'Free resources to improve your tracking.',
    href: '/resources',
  },
];
