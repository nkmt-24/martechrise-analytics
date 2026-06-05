import { BarChart, Shield, Lock } from 'lucide-react';


export const heroContent = {
  badge: {
    icon: BarChart,
    text: "MarTechRise — Empowering Businesses"
  },
  title: {
    main: "Fix Broken Tracking &",
    highlight: "Unlock Accurate Data"
  },
  subtitle: "We help brands eliminate data loss, fix tracking issues, and improve attribution so you can scale your marketing campaigns with confidence.",
  ctas: [
    { text: "Book Free Analytics Audit", variant: "primary" as const, href: "/audit" },
    // { text: "View Solutions", variant: "outline" as const, href: "/services" }
  ],
  dashboardImage: "/assets/1.png",
  floatingIndicators: [
    { title: "100% Validated", subtitle: "Data Pipeline", icon: Shield, color: "emerald" },
    { title: "Compliance Ready", subtitle: "GDPR/CCPA", icon: Lock, color: "indigo" }
  ]
};
