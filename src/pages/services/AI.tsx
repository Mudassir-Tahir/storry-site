import { Cpu, Bot, Brain } from "lucide-react";
import { useInViewFadeUp } from "../../Hooks/useInViewFadeUp";
import ServiceBanner from "../../components/ServiceBanner";

export default function AIPage() {
  const { ref: s1, visible: v1 } = useInViewFadeUp(0.2);
  const { ref: s2, visible: v2 } = useInViewFadeUp(0.2);
  const { ref: s3, visible: v3 } = useInViewFadeUp(0.2);

  return (
    <div className="min-h-screen bg-[#070C18] text-[#E9F3FF] relative">

      {/* ===================== PAGE BANNER ===================== */}
      <ServiceBanner
        title="AI Solutions"
        subtitle="Automation • Intelligence • Predictive Systems"
        icon={<Brain className="h-12 w-12 text-[#67E8F9]" />}
        image="/images/services/ai/hero-ai.jpeg"
      />

      {/* ===================== FEATURE GRID ===================== */}
      <section
        ref={s1}
        className={`max-w-6xl mx-auto px-6 py-24 fade-up ${v1 ? "visible" : ""}`}
      >
        <h2 className="text-3xl font-semibold mb-10 text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9AA]">
          What We Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "ML Models",
              desc: "Forecasting, NLP, computer vision, recommendations, anomaly detection.",
              img: "/images/services/ai/feature-ml.jpeg",
            },
            {
              icon: Bot,
              title: "AI Assistants",
              desc: "Chatbots, automation agents, workflow copilots, API-driven systems.",
              img: "/images/services/ai/feature-assistant.png",
            },
            {
              icon: Cpu,
              title: "AI Integration",
              desc: "AI in ERPs, CRMs, cloud apps, dashboards, and enterprise workflows.",
              img: "/images/services/ai/feature-integration.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-6 rounded-xl border border-white/10 bg-[#0D1A33]/70 
                backdrop-blur-xl shadow-[0_0_20px_#0004]
                hover:border-[#67E8F9] hover:shadow-[0_0_22px_#67E8F955]
                transition-all group
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4 opacity-90"
                loading="lazy"
              />

              <item.icon className="h-10 w-10 text-[#67E8F9] mb-3 drop-shadow-[0_0_8px_#67E8F9]" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== IMAGE + TEXT ===================== */}
      <section
        ref={s2}
        className={`max-w-6xl mx-auto px-6 py-20 fade-up ${v2 ? "visible" : ""}`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9]">
              AI That Powers Growth
            </h2>
            <p className="text-slate-300 leading-relaxed">
              From automated insights to enterprise-grade intelligence —
              our AI systems increase efficiency, reduce costs, and unlock
              new capabilities across your organization.
            </p>
          </div>

          <img
            src="/images/services/ai/growth-ai.jpeg"
            className="rounded-2xl border border-white/10 shadow-[0_0_40px_#67E8F955] object-cover h-80 w-full"
            alt="AI Illustration"
            loading="lazy"
          />
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section
        ref={s3}
        className={`text-center py-28 fade-up ${v3 ? "visible" : ""}`}
      >
        <h2 className="text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_#67E8F9]">
          Start Your AI Project
        </h2>
        <p className="text-slate-400 mt-3 mb-6">
          Let’s build intelligent systems that accelerate your business.
        </p>

        <a
          href="/start-project"
          className="
            inline-block px-8 py-3 rounded-xl bg-[#2DD4BF]
            text-[#062014] font-semibold
            hover:bg-[#67E8F9] hover:shadow-[0_0_30px_#67E8F9AA]
            transition-all
          "
        >
          Start AI Project NOW →
        </a>
      </section>
    </div>
  );
}
