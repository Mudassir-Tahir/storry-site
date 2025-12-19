// src/components/ProcessSteps.tsx
import { useInViewFadeUp } from "../Hooks/useInViewFadeUp";
import { BrainCircuit, Compass, Wrench, ShieldCheck, Rocket, Workflow } from "lucide-react";

const steps = [
  {
    title: "Discover",
    desc: "Clarify goals, constraints, workflows, integrations, and real business pain points.",
    icon: <Compass className="w-8 h-8 text-[#67E8F9]" />,
  },
  {
    title: "Design",
    desc: "Plan system architecture, data flows, security layers, and automation logic.",
    icon: <Workflow className="w-8 h-8 text-[#67E8F9]" />,
  },
  {
    title: "Build",
    desc: "Develop high-performance features in clean, testable increments.",
    icon: <Wrench className="w-8 h-8 text-[#67E8F9]" />,
  },
  {
    title: "Automate",
    desc: "Replace manual work with bots, schedulers, pipelines, and alerting.",
    icon: <BrainCircuit className="w-8 h-8 text-[#67E8F9]" />,
  },
  {
    title: "Secure",
    desc: "Harden systems, enforce policies, review logs, and implement SOC practices.",
    icon: <ShieldCheck className="w-8 h-8 text-[#67E8F9]" />,
  },
  {
    title: "Ship & Support",
    desc: "Deploy, monitor, iterate, and continuously improve the solution.",
    icon: <Rocket className="w-8 h-8 text-[#67E8F9]" />,
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative py-28 bg-[#070C18] text-white overflow-hidden">

      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-[#2DD4BF]/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9aa] text-center">
          How We Build
        </h2>
        <p className="mt-3 text-slate-300 text-center max-w-2xl mx-auto">
          A predictable, transparent, and modern delivery process — engineered for reliability.
        </p>

        {/* PROCESS TIMELINE */}
        <div className="relative mt-16">

          {/* Vertical glowing connector (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[3px] h-full 
                          bg-gradient-to-b from-[#67E8F9] via-[#2DD4BF55] to-transparent 
                          rounded-full opacity-60"></div>

          <div className="grid md:grid-cols-2 gap-y-14 gap-x-10">

            {steps.map((step, i) => {
              const { ref, visible } = useInViewFadeUp(0.2);

              const leftSide = i % 2 === 0; // alternate

              return (
                <div
                  key={step.title}
                  id={`step-${i}`}
                  ref={ref}
                  className={`
                    fade-up ${visible ? "visible" : ""}
                    relative flex flex-col gap-3 p-8 rounded-2xl 
                    bg-[#0A1528]/60 backdrop-blur-xl border border-white/10
                    shadow-[0_0_20px_rgba(0,0,0,0.4)]
                  `}
                >
                  {/* FOCUS DOT (desktop timeline connector) */}
                  <div
                    className={`
                      hidden md:block absolute top-10 w-6 h-6 rounded-full 
                      bg-[#67E8F9] shadow-[0_0_20px_#67E8F9] 
                      border border-[#2DD4BF] 
                      ${leftSide ? "right-[-20px]" : "left-[-20px]"}
                    `}
                  />

                  {/* ICON */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#0D1A33]/80 border border-white/10 shadow-[0_0_18px_#2DD4BF33]">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
