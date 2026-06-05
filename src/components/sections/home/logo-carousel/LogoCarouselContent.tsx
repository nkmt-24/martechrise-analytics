import Image from "next/image";
import LogoCarouselAnimation from "./LogoCarouselAnimation";

export interface LogoData {
  src: string;
  name: string;
}

interface Props {
  logos: LogoData[];
}

export default function LogoCarouselContent({ logos }: Props) {
  // Double the logos for a perfectly seamless '50%' translation loop
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="bg-transparent py-6 -mt-10 mb-20 relative z-20 overflow-hidden px-4">
      <div className="max-w-[1100px] mx-auto">

        {/* Soft Glass Pill Container */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem] py-5 px-2 relative overflow-hidden flex items-center">

          {/* Fading Edges to hide logos as they enter/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 to-transparent z-10 rounded-l-[2rem]" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 to-transparent z-10 rounded-r-[2rem]" />

          {/* Marquee Wrapper */}
          <div className="flex w-full overflow-hidden">
            <LogoCarouselAnimation className="flex gap-20 items-center shrink-0 w-max px-10">
              {doubledLogos.map((logo, i) => (
                <div
                  key={i}
                  className="relative h-20 w-28 md:h-32 md:w-40 shrink-0 flex items-center justify-center  cursor-default"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </LogoCarouselAnimation>
          </div>

        </div>
      </div>
    </section>
  );
}
