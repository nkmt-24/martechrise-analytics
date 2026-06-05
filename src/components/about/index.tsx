import AboutContent, { AboutData } from "./AboutContent";

// Fallback data
const fallbackData: AboutData = {
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

// Simulated data fetching from NestJS backend
async function getAboutData(): Promise<AboutData> {
  try {
    // Attempt to fetch from the specific API endpoint. 
    // Uses process.env.NEXT_PUBLIC_API_URL or defaults to a placeholder.
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
    const res = await fetch(`${baseUrl}/about`, { next: { revalidate: 3600 } });
    
    if (!res.ok) {
      console.warn(`API responded with status ${res.status}. Using fallback data for about section.`);
      return fallbackData;
    }

    return await res.json();
  } catch (error) {
    // Fallback data matching the previous hardcoded values to ensure the app doesn't break
    console.warn("Failed to reach backend API. Using fallback data for about section.");
    return fallbackData;
  }
}

export default async function AboutSection() {
  // Leverage Next.js app router server components architecture by awaiting fetch on the server side
  const data = await getAboutData();

  return <AboutContent data={data} />;
}
