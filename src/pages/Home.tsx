import { useEffect } from "react";
import HeroCreative from "../components/HeroCreative";
import LogoMarquee from "../components/LogoMarquee";
import ServicesShowcase from "../components/ServicesShowcase";
import ProcessSteps from "../components/ProcessSteps";
import CTADeep from "../components/CTADeep";

export default function Home() {
  // Force Home to always start from the very top whenever it mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-[#070C18] text-white">
      <HeroCreative />
      
      {/* smooth dark → darker transition */}
      <div className="bg-[#0A1528] py-6">
        <LogoMarquee />
      </div>

      <ServicesShowcase />

      <div className="bg-[#0A1528]">
        <ProcessSteps />
      </div>

      <CTADeep />
    </div>
  );
}