// src/pages/services/WebDev.tsx

import {
  Code,
  Layout,
  Cpu,
  Rocket,
  Server,
  RefreshCw,
} from "lucide-react";
import { useInViewFadeUp } from "../../Hooks/useInViewFadeUp";
import ServiceBanner from "../../components/ServiceBanner";

export default function WebDevPage() {
  const { ref: s1, visible: v1 } = useInViewFadeUp(0.2);
  const { ref: s2, visible: v2 } = useInViewFadeUp(0.2);
  const { ref: s3, visible: v3 } = useInViewFadeUp(0.2);

  return (
    <div className="min-h-screen bg-[#070C18] text-[#E9F3FF]">

      {/* ===================== PAGE BANNER ===================== */}
      <ServiceBanner
        title="Web Development"
        subtitle="Full-Stack • Modern • High-Performance Engineering"
        icon={<Layout className="h-12 w-12 text-[#67E8F9]" />}
        image="/images/services/web/hero-web.jpeg"
      />

      {/* ===================== WHAT WE BUILD ===================== */}
      <section
        ref={s1}
        className={`max-w-6xl mx-auto px-6 py-24 fade-up ${v1 ? "visible" : ""}`}
      >
        <h2 className="text-3xl font-semibold mb-10 text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9aa]">
          What We Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="
              p-8 rounded-xl border border-white/10 bg-[#0D1A33]/70
              backdrop-blur-xl shadow-[0_0_20px_#0006]
              hover:border-[#67E8F9] hover:shadow-[0_0_25px_#67E8F955]
              transition-all group
            "
          >
            <img
              src="/images/services/web/site-build.jpg"
              alt="Business Websites"
              className="rounded-lg h-40 w-full object-cover mb-4 opacity-90"
            />
            <Layout className="h-12 w-12 text-[#67E8F9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business Websites</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enterprise-grade responsive websites with exceptional performance
              and UX-focused storytelling.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="
              p-8 rounded-xl border border-white/10 bg-[#0D1A33]/70
              backdrop-blur-xl shadow-[0_0_20px_#0006]
              hover:border-[#67E8F9] hover:shadow-[0_0_25px_#67E8F955]
              transition-all group
            "
          >
            <img
              src="/images/services/web/fullstack.jpg"
              alt="Full Stack Development"
              className="rounded-lg h-40 w-full object-cover mb-4 opacity-90"
            />
            <Server className="h-12 w-12 text-[#67E8F9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full-Stack Apps</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Secure backend APIs, dashboards, authentication flows, databases,
              and automation workflows.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="
              p-8 rounded-xl border border-white/10 bg-[#0D1A33]/70
              backdrop-blur-xl shadow-[0_0_20px_#0006]
              hover:border-[#67E8F9] hover:shadow-[0_0_25px_#67E8F955]
              transition-all group
            "
          >
            <img
              src="/images/services/web/ai-web.jpg"
              alt="AI Web Development"
              className="rounded-lg h-40 w-full object-cover mb-4 opacity-90"
            />
            <Cpu className="h-12 w-12 text-[#67E8F9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Enhanced Platforms</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI assistants, recommendations, analytics, NLP search, and
              automated workflows integrated into web systems.
            </p>
          </div>

        </div>
      </section>

      {/* ===================== TECH STACK ===================== */}
      <section
        ref={s2}
        className={`max-w-6xl mx-auto px-6 py-20 fade-up ${v2 ? "visible" : ""}`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9aa]">
              Modern Tech Stack Built for Scale
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Scalable, SEO-optimized, and secure architectures using the
              latest web engineering tools.
            </p>

            <ul className="mt-6 grid gap-3 text-slate-400">
              <li>✓ React, Next.js, Vite</li>
              <li>✓ Node.js, Express, FastAPI</li>
              <li>✓ PostgreSQL, MongoDB, Supabase</li>
              <li>✓ Tailwind, ShadCN UI, Framer Motion</li>
              <li>✓ REST APIs + GraphQL + Webhooks</li>
              <li>✓ CI/CD, Docker, Cloud Deployment</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl border border-white/10 bg-[#0A1528] p-4 shadow-[0_0_25px_#67E8F933]">
            <img
              src="/images/services/web/techstack-web.jpg"
              alt="web tech stack"
              className="w-full h-80 object-cover rounded-xl opacity-95"
            />
          </div>

        </div>
      </section>

      {/* ===================== PERFORMANCE SECTION ===================== */}
      <section
        ref={s3}
        className={`max-w-6xl mx-auto px-6 py-24 fade-up ${v3 ? "visible" : ""}`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="order-2 md:order-1">
            <img
              src="/images/services/web/performance-web.jpg"
              alt="web performance optimization"
              className="rounded-2xl border border-white/10 shadow-[0_0_35px_#67E8F944] object-cover h-80 w-full"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-6 text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9aa]">
              Fast, Beautiful & Optimized for Growth
            </h2>

            <div className="grid gap-6 text-slate-400">

              <div className="flex items-start gap-3">
                <Rocket className="mt-1 text-[#67E8F9]" />
                <span>Blazing performance (Lighthouse optimized)</span>
              </div>

              <div className="flex items-start gap-3">
                <Code className="mt-1 text-[#67E8F9]" />
                <span>Smooth animations & pixel-perfect components</span>
              </div>

              <div className="flex items-start gap-3">
                <RefreshCw className="mt-1 text-[#67E8F9]" />
                <span>Technical SEO, structured data & metadata</span>
              </div>

            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/start-project"
            className="
              inline-block px-8 py-3 rounded-xl font-semibold
              bg-[#2DD4BF] text-[#062014]
              hover:bg-[#67E8F9] hover:shadow-[0_0_35px_#67E8F9aa]
              transition-all
            "
          >
            Build My Web App →
          </a>
        </div>
      </section>
    </div>
  );
}
