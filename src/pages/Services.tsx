import { useEffect, useState } from "react";
import { Cpu, Cloud, Shield, Code, Database, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useInViewFadeUp } from "../Hooks/useInViewFadeUp";

const serviceSections = [
  { id: "ai", title: "AI Solutions", icon: <Cpu className="h-9 w-9" />, desc: "Custom AI models, automation, prediction engines, and intelligent pipelines.", href: "/services/ai" },
  { id: "cloud", title: "Cloud Architecture", icon: <Cloud className="h-9 w-9" />, desc: "Scalable cloud-native systems, DevOps, Kubernetes, pipelines, and automation.", href: "/services/cloud" },
  { id: "cyber", title: "Cybersecurity", icon: <Shield className="h-9 w-9" />, desc: "Enterprise-grade hardening, SOC analysis, SIEM, threat detection, and automation.", href: "/services/cybersecurity" },
  { id: "web", title: "Web Development", icon: <Code className="h-9 w-9" />, desc: "Full-stack applications, dashboards, portals, APIs, ERP/CRM solutions.", href: "/services/web-development" },
  { id: "data", title: "Data Engineering", icon: <Database className="h-9 w-9" />, desc: "ETL pipelines, warehousing, BI dashboards, lakehouses, real-time analytics.", href: "/services/data-engineering" },
  { id: "mobile", title: "Mobile Apps", icon: <Smartphone className="h-9 w-9" />, desc: "Cross-platform apps with Flutter/React Native, API integration and cloud sync.", href: "/services/mobile-apps" },
  { id: "apex", title: "APEX & ERP", icon: <Database className="h-9 w-9" />, desc: "Custom ERP dashboards, APEX app development, database automation, and enterprise workflows.", href: "/services/apex-erp" },
];

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Services() {
  const [activeId, setActiveId] = useState(serviceSections[0].id);

  /* ---- Stable, center-based active section detection ---- */
  useEffect(() => {
    const onScroll = () => {
      const center = window.innerHeight / 2;
      let closest = activeId;
      let min = Infinity;

      serviceSections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - center);
        if (dist < min) {
          min = dist;
          closest = s.id;
        }
      });

      setActiveId(closest);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeId]);

  return (
    <section className="bg-[#070C18] text-[#E9F3FF]">

      {/* HEADER */}
      <header className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.05]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#2DD4BF]/15 blur-[140px] rounded-full" />

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#67E8F9]">
          Our Services
        </h1>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Enterprise-grade systems engineered for performance, security, and scale.
        </p>
      </header>

      {/* SERVICE NAV */}
      <div className="sticky top-20 z-40 max-w-6xl mx-auto px-4">
        <div className="bg-[#0A1528]/85 backdrop-blur-xl border border-white/10 rounded-2xl
                        shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]
                        px-4 py-3 flex flex-wrap justify-center gap-2">
          {serviceSections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToId(s.id)}
              className={`px-4 py-2 text-sm rounded-lg font-semibold transition-all
                ${activeId === s.id
                  ? "bg-[#67E8F9] text-[#062014] shadow-[0_0_18px_#67E8F9aa]"
                  : "text-slate-300 hover:text-[#67E8F9]"
                }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* SECTIONS */}
      <div className="mt-24">
        {serviceSections.map((s, i) => {
          const { ref, visible } = useInViewFadeUp(0.25);
          const even = i % 2 === 0;

          return (
            <section
              key={s.id}
              id={s.id}
              ref={ref}
              className={`fade-up ${visible ? "visible" : ""}
                relative py-28 scroll-mt-[140px]
                ${even ? "bg-[#0A1528]" : "bg-[#070C18]"}`}
            >

              {i !== 0 && (
                <div className={`wave ${even ? "wave-top-light" : "wave-top-dark"} wave-animated absolute top-0 left-0 w-full`} />
              )}

              <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* TEXT */}
                <div className={`space-y-5 ${even ? "" : "md:order-2"}`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#0D1A33]/70 border border-white/10 text-[#67E8F9]">
                      {s.icon}
                    </div>
                    <h2 className="text-3xl font-semibold text-[#67E8F9]">
                      {s.title}
                    </h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed max-w-xl">
                    {s.desc}
                  </p>

                  <Link
                    to={s.href}
                    className="inline-block px-6 py-2.5 rounded-lg
                               bg-[#2DD4BF] text-[#062014] font-semibold
                               hover:bg-[#67E8F9] hover:shadow-[0_0_22px_#67E8F9aa]
                               transition-all"
                  >
                    View Details →
                  </Link>
                </div>

                {/* IMAGE */}
                <div className={`${even ? "" : "md:order-1"}
                  bg-[#0D1A33]/45 border border-white/5 p-2 rounded-2xl
                  backdrop-blur-md shadow-[0_0_30px_#0007]`}>
                  <img
                    src={`/images/services/${s.id}.jpeg`}
                    alt={s.title}
                    className="w-full h-72 md:h-80 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={`wave ${even ? "wave-bottom-light" : "wave-bottom-dark"} wave-animated absolute bottom-0 left-0 w-full`} />
            </section>
          );
        })}
      </div>
    </section>
  );
}
