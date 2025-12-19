import { Helmet } from "react-helmet-async";
import { Users, Target, Rocket, Star, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#070C18] text-[#E9F3FF] pt-24">

      <Helmet>
        <title>About Us — Storry</title>
        <meta
          name="description"
          content="Learn about Storry — a modern engineering team focused on software, automation, AI/ML, scraping, data engineering, and enterprise security."
        />
      </Helmet>

      {/* ========================= HERO ========================= */}
      <section className="relative text-center px-6 py-24 overflow-hidden">

        {/* Neon Grid */}
        <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.05] pointer-events-none"></div>

        {/* Glow Field */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
                        bg-[#2DD4BF]/20 blur-[140px] rounded-full pointer-events-none"></div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#67E8F9] drop-shadow-[0_0_12px_#2DD4BF]">
          About Storry
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-4">
          A specialized engineering team building automation, AI systems, enterprise cybersecurity,
          and high-performance data pipelines.
        </p>
      </section>

      {/* TOP WAVE */}
      <div className="wave wave-top-dark wave-animated"></div>

      {/* ========================= MISSION ========================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        {/* LEFT: Mission text */}
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[#67E8F9] drop-shadow-[0_0_10px_#2DD4BF]">
            <Target size={36} className="text-[#67E8F9]" />
            Our Mission
          </h2>

          <p className="text-slate-300 leading-relaxed mt-4">
            Our mission is simple:
            <span className="text-[#67E8F9] font-semibold"> build reliable, scalable, and secure systems</span>
            that solve real business problems.
            <br /><br />
            Whether it’s scraping complex data, building dashboards, integrating machine learning,
            automating workflows, or deploying cloud-native infrastructure — we do it with clarity,
            precision, and long-term maintainability in mind.
          </p>
        </div>

        {/* RIGHT: Mission Highlights Box */}
        <div className="bg-[#0D1A33]/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl">
          <ul className="space-y-5 text-slate-300">
            <li className="flex gap-3 items-start">
              <Star className="text-[#67E8F9]" />
              Clean, maintainable engineering patterns
            </li>
            <li className="flex gap-3 items-start">
              <Star className="text-[#67E8F9]" />
              Security-first deployment mindset
            </li>
            <li className="flex gap-3 items-start">
              <Star className="text-[#67E8F9]" />
              Practical automation & real business outcomes
            </li>
            <li className="flex gap-3 items-start">
              <Star className="text-[#67E8F9]" />
              Data accuracy and reliability at scale
            </li>
          </ul>
        </div>

      </section>

      {/* BOTTOM WAVE */}
      <div className="wave wave-bottom-dark wave-animated"></div>

      {/* ========================= VALUES ========================= */}
      <section className="py-24 bg-[#0A1528]">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          {/* Innovation */}
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2 text-[#67E8F9] drop-shadow-[0_0_10px_#2DD4BF]">
              <Rocket size={24} /> Innovation
            </h3>
            <p className="text-slate-300 mt-2">
              Forward-looking architecture designed for speed, scale, and longevity.
            </p>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2 text-[#67E8F9] drop-shadow-[0_0_10px_#2DD4BF]">
              <Users size={24} /> Partnership
            </h3>
            <p className="text-slate-300 mt-2">
              Transparent communication, weekly updates, and aligned delivery.
            </p>
          </div>

          {/* Trust */}
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2 text-[#67E8F9] drop-shadow-[0_0_10px_#2DD4BF]">
              <HeartHandshake size={24} /> Trust
            </h3>
            <p className="text-slate-300 mt-2">
              Secure, well-documented systems that teams can depend on.
            </p>
          </div>

        </div>
      </section>

      {/* ========================= CTA ========================= */}
      <section className="text-center py-24">

        <h2 className="text-3xl font-bold text-[#67E8F9] drop-shadow-[0_0_10px_#2DD4BF]">
          Let’s Build Something Extraordinary
        </h2>

        <p className="text-slate-300 max-w-xl mx-auto mt-3">
          Whether it’s AI, automation, dashboards, SOC tooling, or data pipelines —
          we help ambitious teams ship faster.
        </p>

        <a
          href="/start-project"
          className="inline-block mt-8 px-8 py-3 rounded-xl bg-[#2DD4BF] text-[#062014] font-semibold
                     shadow-[0_0_20px_#2DD4BF66] hover:bg-[#67E8F9]
                     hover:shadow-[0_0_30px_#67E8F9aa] transition-all"
        >
          Start a Project →
        </a>

      </section>
    </div>
  );
}
