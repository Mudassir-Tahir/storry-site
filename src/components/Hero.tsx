export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36  py-28 md:py-36">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/main-hero.jpeg')",
        }}
      />

      {/* ================= DARK OVERLAY (READABILITY) ================= */}
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-b
                   from-[#070C18]/60 via-[#070C18]/50 to-[#070C18]"
      />

      {/* ================= SUBTLE GRID ================= */}
      <div
        className="absolute inset-0 -z-10 bg-[url('/grid-light.svg')] opacity-[0.06]"
      />

      {/* ================= GLOW ACCENT ================= */}
      <div
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px]
                   -translate-x-1/2 -translate-y-1/2
                   bg-[#2DD4BF]/20 blur-[160px] rounded-full -z-10"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* -------- LEFT CONTENT -------- */}
        <div className="space-y-6">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-xl">
            Build, Automate & Secure
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Your Digital Operations
            </span>
          </h1>

          <p className="text-lg text-slate-200 max-w-xl leading-relaxed">
            Smart apps, reliable data extraction, useful AI, and security that actually works.
            Everything engineered for scale and automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#2DD4BF] text-[#062014]
                         font-semibold shadow-[0_0_30px_#2DD4BF88]
                         hover:bg-[#67E8F9] transition-all"
            >
              Start a Project →
            </a>

            <a
              href="/services"
              className="px-6 py-3 rounded-xl border border-white/30
                         text-white font-semibold hover:bg-white/10 transition-all"
            >
              Explore Services
            </a>
          </div>

        </div>

        {/* -------- RIGHT IMAGE -------- */}
        <div className="relative flex justify-center">

          <div
            className="absolute inset-0 w-[85%] h-[85%] bg-[#67E8F9]/20
                       blur-[90px] rounded-full -z-10"
          />

          <img
            src="/images/hero/main-hero.jpeg"
            alt="Storry – Automation, AI, Secure Development"
            className="w-full max-w-md rounded-2xl
                       shadow-[0_0_45px_#000a]"
            loading="eager"
          />
        </div>

      </div>
    </section>
  );
}
