import { ShieldCheck } from 'lucide-react';

export const philosophyContent = {
    title: "Measurement Without Compromise",
    points: [
        { title: "Precision-First", desc: "We believe a 1% data discrepancy is a bug, not an inevitability.", icon: ShieldCheck },
        { title: "Architecture Over Implementation", desc: "We build scalable foundations, not temporary tags.", icon: ShieldCheck },
        { title: "Context Over Content", desc: "Data is useless without business context. We map every metric to a KPI.", icon: ShieldCheck }
    ],
    governance: {
        title: "Data Governance & Trust",
        description: "Our approach to data governance ensures that your analytics stack remains a 'Source of Truth' for years. We establish technical schemas, naming conventions, and validation protocols that prevent data decay.",
        metrics: [
            { value: "99.8%", label: "Avg. Reconciliation" },
            { value: "100%", label: "GDPR Compliance" }
        ]
    }
};
