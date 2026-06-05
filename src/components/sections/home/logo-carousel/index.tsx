import LogoCarouselContent, { LogoData } from "./LogoCarouselContent";

const logos: LogoData[] = [
  // { src: "/assets/logo-carousel/Adobe-logo.png", name: "Adobe" },
  // { src: "/assets/logo-carousel/Google-Analytics-Logo.png", name: "Google Analytics" },
  // { src: "/assets/logo-carousel/tealium-logo.png", name: "Tealium" },
  // { src: "/assets/logo-carousel/PowerBI.webp", name: "Power BI" },
  { src: "/assets/logo-carousel/1.png", name: "Logo 1" },
  { src: "/assets/logo-carousel/2.png", name: "Logo 2" },
  { src: "/assets/logo-carousel/3.png", name: "Logo 3" },
  { src: "/assets/logo-carousel/4.png", name: "Logo 4" },
  { src: "/assets/logo-carousel/5.png", name: "Logo 5" },
  { src: "/assets/logo-carousel/6.png", name: "Logo 6" },
  { src: "/assets/logo-carousel/7.png", name: "Logo 7" },
  { src: "/assets/logo-carousel/8.png", name: "Logo 8" },
  { src: "/assets/logo-carousel/9.png", name: "Logo 9" },
  { src: "/assets/logo-carousel/10.png", name: "Logo 10" },
];

export default function LogoCarouselSection() {
  return <LogoCarouselContent logos={logos} />;

}
