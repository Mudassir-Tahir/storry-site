// src/components/ServicesShowcase.tsx

import { Link } from "react-router-dom";
import {
  Code,
  Database,
  Workflow,
  Shield,
  BrainCircuit,
  Smartphone,
} from "lucide-react";

const cards = [
  {
    title: "AI / Machine Learning",
    desc: "Prediction models, automation, NLP, and intelligent systems.",
    icon: <BrainCircuit className="w-8 h-8 text-[#67E8F9]" />,
    href: "/services/ai",
  },
  {
    title: "Cloud Architecture",
    desc: "Deploy scalable apps, CI/CD pipelines, containers, and automation.",
    icon: <Workflow className="w-8 h-8 text-[#67E8F9]" />,
    href: "/services/cloud",
  },
  {
    title: "Cybersecurity & SOC",
    desc: "Hardening, SIEM, monitoring, threat detection, incident handling.",
    icon: <Shield className="w-8 h-8 text-[#67E8F9]" />,
    href: "/services/cybersecurity",
  },
  {
    title: "Web Development",
    desc: "Dashboards, portals, APIs, React, Vite, Node, MERN stack.",
    icon: <Code className="w-8 h-8 text-[#67E8F9]" />,
    href: "/services/web-development",
  },
  {
    title: "Data Engineering",
    desc: "ETL pipelines, data lakes, warehousing, BI dashboards.",
    icon: <Database className="w-8 h-8 text-[#67E8F9]" />,
    href: "/services/data-engineering",
  },
  {
    title: "Mobile Apps",
    desc: "Flutter, React Native, cloud-connected mobile applications.",
    icon: <Smartphone className="w-8 h-8 text-[#67E8F9]" />,
    href: "/services/mobile-apps",
  },

  // ⭐ NEW FIXED SERVICE CARD
  {
    title: "APEX & ERP",
    desc: "Custom APEX apps, ERP workflows, enterprise modules, and DB automation.",
    icon: <Database className="w-8 h-8 text-[#67E8F9]" />,
    href: "/services/apex-erp",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-24 bg-[#070C18] text-white relative">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-5 pointer-events-none"></div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9aa]">
          What We Build
        </h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          High-performance, secure, and scalable systems — built with modern engineering workflows.
        </p>

        {/* Neon Tech Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={i}
              className="
                group relative rounded-2xl p-6 border border-white/10 
                bg-[#0A1528]/60 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.4)]
                hover:border-[#67E8F9]/40 hover:shadow-[0_0_25px_#67E8F955] 
                transition-all duration-300
              "
            >
              {/* Glow Frame */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#67E8F911] to-[#2DD4BF11] opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">{c.icon}</div>

                <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{c.desc}</p>

                {c.href && (
                  <Link
                    to={c.href}
                    className="
                      mt-4 inline-block text-sm font-semibold text-[#67E8F9]
                      group-hover:underline underline-offset-4
                    "
                  >
                    View Details →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
