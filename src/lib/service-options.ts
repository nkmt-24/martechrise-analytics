/**
 * Centralized service options — used in admin forms and frontend filters.
 * Values match the canonical slugs in services-data.ts and siteConfig.services.
 */
export const SERVICE_OPTIONS: { label: string; value: string }[] = [
  { label: 'Tracking Architecture & Solution Design', value: 'tracking-architecture' },
  { label: 'Analytics Implementation',                value: 'analytics-implementation' },
  { label: 'Conversion & Event Tracking',             value: 'conversion-event-tracking' },
  { label: 'Server-Side Tracking',                    value: 'server-side-tracking' },
  { label: 'QA & Data Validation',                    value: 'qa-data-validation' },
  { label: 'Analytics Reporting & Attribution',        value: 'analytics-reporting-attribution' },
];
