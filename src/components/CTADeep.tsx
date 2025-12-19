// src/components/CTADeep.tsx
export default function CTADeep() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#070C18] text-white">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.04] pointer-events-none"></div>

      {/* Neon Glow Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1528] via-[#0D1A33] to-[#070C18] opacity-90" />

      {/* Glow Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-[#67E8F9]/20 blur-[150px] rounded-full top-10 left-20 animate-pulse-slow"></div>
      <div className="absolute w-[450px] h-[450px] bg-[#2DD4BF]/25 blur-[150px] rounded-full bottom-10 right-20 animate-pulse-slower"></div>

      {/* Light Beam */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(103,232,249,0.15),transparent_75%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-[#67E8F9] drop-shadow-[0_0_20px_#67E8F9aa]">
          Move Faster with Modern Engineering
        </h2>

        <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you're building automation, AI, scraping, data pipelines, dashboards, or secure infrastructure —
          we deliver reliable systems with enterprise precision.
        </p>

        {/* BUTTON ROW */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Primary CTA */}
          <a
            href="/start-project"
            className="
              inline-flex items-center justify-center gap-2
              px-8 py-4 rounded-xl text-lg font-semibold
              bg-[#2DD4BF] text-[#062014]
              hover:bg-[#67E8F9] hover:shadow-[0_0_35px_#67E8F955]
              transition-all duration-300 shadow-[0_0_25px_#2DD4BF55]
            "
          >
            Start a Project →
          </a>

          {/* Secondary CTA (Book Demo) */}
          <a
            href='/contact?type=demo'
            className="
              inline-flex items-center justify-center gap-2
              px-8 py-4 rounded-xl text-lg font-semibold
              border border-[#67E8F9]/40 text-[#67E8F9]
              hover:bg-[#0D1A33] hover:border-[#67E8F9] hover:shadow-[0_0_25px_#67E8F944]
              transition-all duration-300
            "
          >
            Book a Demo
          </a>
        </div>

      </div>
    </section>
  );
}
