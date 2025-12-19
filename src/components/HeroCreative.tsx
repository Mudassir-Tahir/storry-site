import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ---------------------------------------------------------
   Typewriter Hook
--------------------------------------------------------- */
const PHRASES = [
  "Build, Automate & Secure",
  "Scrape. Clean. Analyze.",
  "APIs, Dashboards & Bots",
  "Data, AI/ML & APEX ERP",
];

function useTypewriter(
  phrases: string[],
  typingSpeed = 55,
  holdMs = 1200,
  eraseSpeed = 35
) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<"type" | "erase">("type");
  const timer = useRef<number | null>(null);

  const current = phrases[i % phrases.length];
  const reducedMotion = useMemo(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    if (reducedMotion) {
      setText(current);
      return;
    }

    const tick = () => {
      setText((t) => {
        if (dir === "type") {
          const next = current.slice(0, t.length + 1);
          if (next === current) {
            timer.current = window.setTimeout(() => setDir("erase"), holdMs);
          }
          return next;
        } else {
          const next = current.slice(0, Math.max(0, t.length - 1));
          if (next.length === 0) {
            setDir("type");
            setI((p) => (p + 1) % phrases.length);
          }
          return next;
        }
      });
    };

    const interval = window.setInterval(
      tick,
      dir === "type" ? typingSpeed : eraseSpeed
    );

    return () => {
      window.clearInterval(interval);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [current, dir, eraseSpeed, holdMs, reducedMotion, typingSpeed, phrases.length]);

  return text;
}

/* ---------------------------------------------------------
   HERO CREATIVE — HEIGHT INCREASED ONLY
--------------------------------------------------------- */
export default function HeroCreative() {
  const typed = useTypewriter(PHRASES);

  return (
    <section
      className="
        relative isolate overflow-hidden text-white
        min-h-[73vh]   /* ✅ ONLY CHANGE: increased hero height */
      "
    >

      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center scale-[1.03]"
        style={{ backgroundImage: "url('/images/hero/main-hero.jpeg')" }}
      />

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b
        from-[#070C18]/80 via-[#070C18]/65 to-[#070C18]/90" />

      {/* ================= GRID ================= */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid-light.svg')] opacity-[0.06]" />

      {/* ================= CONTROLLED GLOW ================= */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[800px] h-[800px] rounded-full bg-[#2DD4BF]/18 blur-[140px] -z-10"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-6xl px-6
        pt-24 pb-20 md:pt-28 md:pb-24">

        {/* pill */}
        <div className="inline-flex items-center gap-2 rounded-full
          border border-[#2DD4BF44]
          bg-[#0a1a2c]/70 px-4 py-1.5
          text-xs text-[#67E8F9] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF]" />
          Practical IT • Data • AI • Security
        </div>

        {/* heading */}
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight flex flex-wrap items-center gap-2">
          <span className="text-[#67E8F9] drop-shadow-[0_0_14px_#2DD4BF] whitespace-nowrap">
            Storry —
          </span>
          <span className="text-slate-100 whitespace-nowrap">
            {typed}
            <span className="cursor-neon ml-1" />
          </span>
        </h1>

        {/* subheading */}
        <p className="mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
          Modern software, intelligent automations, actionable data pipelines,
          AI that solves real problems, and enterprise-grade security, engineered to scale.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/start-project"
            className="px-7 py-3 rounded-xl font-semibold
              bg-[#2DD4BF] text-[#062014]
              hover:bg-[#67E8F9]
              hover:shadow-[0_0_22px_#2DD4BF99]
              transition-all"
          >
            Start a Project →
          </Link>

          <Link
            to="/services"
            className="px-7 py-3 rounded-xl font-semibold
              border border-[#2DD4BF55] text-[#67E8F9]
              backdrop-blur
              hover:bg-[#0d1b2e]
              hover:border-[#67E8F9]
              transition-all"
          >
            Explore Services
          </Link>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="mt-28 flex justify-center">
          <div className="flex flex-col items-center text-[11px] text-slate-400 tracking-widest">
            <span>SCROLL</span>
            <span className="mt-3 h-10 w-[2px]
              bg-gradient-to-b from-[#67E8F9] to-transparent
              animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}
