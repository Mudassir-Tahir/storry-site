import { Cpu, ShieldCheck, Code2, Rocket } from "lucide-react";

const cards = [
  {
    icon: <Code2 size={36} className="text-blue-700" />,
    title: "Web Development",
    text: "Fast, scalable, enterprise-grade apps and internal tools.",
  },
  {
    icon: <Cpu size={36} className="text-blue-700" />,
    title: "AI & Automation",
    text: "AI workflows, scraping, bots, data pipelines and models.",
  },
  {
    icon: <ShieldCheck size={36} className="text-blue-700" />,
    title: "Cybersecurity",
    text: "Risk assessment, SOC, monitoring and hardened architecture.",
  },
  {
    icon: <Rocket size={36} className="text-blue-700" />,
    title: "Digital Transformation",
    text: "We modernize your internal systems end-to-end.",
  },
];

export default function HomeServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          What We <span className="text-blue-700">Deliver</span>
        </h2>

        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          A complete suite of engineering & intelligence services  
          to boost your business.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group bg-white border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition relative"
            >
              <div className="mb-4">{c.icon}</div>
              <h3 className="font-semibold text-lg text-slate-900">{c.title}</h3>
              <p className="mt-2 text-slate-600">{c.text}</p>

              <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition origin-left rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
