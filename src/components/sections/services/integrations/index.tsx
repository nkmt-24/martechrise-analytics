import IntegrationsContent, { IntegrationCategory } from "./IntegrationsContent";

const categories: IntegrationCategory[] = [
  { name: "Ad Platforms", tools: "Meta, Google Ads, LinkedIn, TikTok" },
  { name: "CRM Systems", tools: "Salesforce, HubSpot, Pipedrive" },
  { name: "CDP & Personalization", tools: "Segment, Tealium, mParticle" },
  { name: "Data Warehouses", tools: "BigQuery, Snowflake, Redshift" },
  { name: "Experimentation", tools: "Optimizely, VWO, Google Optimize" },
];

export default function IntegrationsSection() {
  return <IntegrationsContent categories={categories} />;
}
