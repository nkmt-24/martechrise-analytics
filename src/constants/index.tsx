// Minimal constants file for migration
import React from 'react';
import {
    LineChart,
    Target,
    ShieldCheck,
    BarChart,
    Search,
    Compass,
    CheckCircle2,
    Zap,
    Globe,
    Database,
    BarChart3,
    TrendingUp,
    Award
} from 'lucide-react';

export const getIcon = (iconName: string, size = 20) => {
    switch (iconName) {
        case 'ShieldCheck': return <ShieldCheck size={size} />;
        case 'Target': return <Target size={size} />;
        case 'LineChart': return <LineChart size={size} />;
        case 'BarChart': return <BarChart size={size} />;
        case 'Search': return <Search size={size} />;
        case 'Compass': return <Compass size={size} />;
        case 'CheckCircle2': return <CheckCircle2 size={size} />;
        case 'Zap': return <Zap size={size} />;
        case 'Globe': return <Globe size={size} />;
        case 'Database': return <Database size={size} />;
        case 'BarChart3': return <BarChart3 size={size} />;
        case 'TrendingUp': return <TrendingUp size={size} />;
        case 'Award': return <Award size={size} />;
        default: return null;
    }
};

export const METRICS = [
    { value: '500', suffix: '+', label: 'Audits Performed' },
    { value: '99.9', suffix: '%', label: 'Data Accuracy' },
    { value: '40', suffix: '%', label: 'Avg. ROI Increase' },
    { value: '15', suffix: 'yr', label: 'Industry Expertise' }
];

export const INDUSTRIES = [
    {
        slug: 'e-commerce',
        name: 'E-commerce',
        icon: 'Compass',
        solution: 'Custom purchase schemas and LTV modeling.',
        challenges: ["Cart Abandonment", "ROAS Misattribution", "Data Silos"]
    },
    {
        slug: 'saas',
        name: 'SaaS',
        icon: 'Zap',
        solution: 'Funnel tracking and churn prediction architecture.',
        challenges: ["Churn Analysis", "Subscription Lifecycle", "Trial Conversion"]
    },
    {
        slug: 'fintech',
        name: 'Fintech',
        icon: 'ShieldCheck',
        solution: 'Secure, compliant data pipelines and conversion flows.',
        challenges: ["Security Compliance", "Identity Verification", "KYC Dropoff"]
    },
    {
        slug: 'healthcare',
        name: 'Healthcare',
        icon: 'Target',
        solution: 'HIPAA compliant measurement strategies.',
        challenges: ["HIPAA Compliance", "Patient Journey", "Telehealth Adoption"]
    }
];

export const NAV_ITEMS = [
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Users', href: '/users' },
];

export const SIDEBAR_NAV = NAV_ITEMS;

export const HOME_FAQ = [
  { question: "Why do we need a technical analytics audit?", answer: "Most enterprises have significant data leakage. An audit identifies gaps between your business goals and current tracking capabilities." },
  { question: "Do you support GA4 and Adobe Analytics?", answer: "Yes, we specialize in both platforms, including complex server-side migrations." },
  { question: "How long does a typical implementation take?", answer: "Timeline varies from 4-12 weeks depending on complexity." }
];

export const ABOUT_FAQ = [
  {
    question: "What makes MarTechRise different?",
    answer: "We focus on sustainable, accurate data architecture."
  }
];
