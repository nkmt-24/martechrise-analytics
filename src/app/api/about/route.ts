import { NextResponse } from 'next/server';

export async function GET() {
  const aboutData = {
    title: "About MarTechRise",
    description: [
      "We are a team of digital analytics specialists focused on solving complex tracking and data challenges.",
      "Our mission is simple: Help businesses trust their data and make better decisions.",
      "With hands-on experience across industries, we help brands fix broken tracking, eliminate data gaps, and build reliable analytics systems that scale. From implementation to optimization, we ensure your data is accurate, actionable, and future-ready."
    ],
    stats: [
      { id: 1, value: "6x", label: "Adobe Certifications, Tealium & GA4", icon: "Award" },
      { id: 2, value: "15+", label: "Years of Experience", icon: "Star" },
      { id: 3, value: "35+", label: "Enterprise & SMB Projects Delivered", icon: "BarChart", span: 2 }
    ]
  };

  return NextResponse.json(aboutData, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
