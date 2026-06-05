import LogoCarousel from "@/components/sections/home/logo-carousel";
import Problems from "@/components/sections/home/problems";
import Services from "@/components/sections/home/services";
import CaseStudies from "@/components/sections/home/case-studies";
import Trust from "@/components/sections/home/trust";
import Tools from "@/components/sections/home/tools";
import Process from "@/components/sections/home/process";
import Testimonials from "@/components/sections/home/testimonials";
import About from "@/components/sections/home/About";
import LandingCTA from "@/components/sections/home/landing-cta";
import HeroSection from "./(home)/hero-section";
import TestimonialSection from "./(home)/testimonial-section";

export const revalidate = 3600;

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <HeroSection />
      <LogoCarousel />
      <Problems />
      <Services />
      <CaseStudies />
      <Trust />
      <Tools />
      <Process />
      <TestimonialSection />
      <About />
      <LandingCTA />
    </div>
  );
}
