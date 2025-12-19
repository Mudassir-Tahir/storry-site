// src/pages/services/ApexERP.tsx

import { Layers, Database, Workflow, BarChart3, Settings } from "lucide-react";
import { useInViewFadeUp } from "../../Hooks/useInViewFadeUp";
import ServiceBanner from "../../components/ServiceBanner";

export default function ApexERPPage() {
  const { ref: s1, visible: v1 } = useInViewFadeUp(0.2);
  const { ref: s2, visible: v2 } = useInViewFadeUp(0.2);
  const { ref: s3, visible: v3 } = useInViewFadeUp(0.2);
  const { ref: s4, visible: v4 } = useInViewFadeUp(0.2);

  return (
    <div className="min-h-screen bg-[#070C18] text-[#E9F3FF]">

      {/* ===================== PAGE BANNER ===================== */}
      <ServiceBanner
        title="APEX & ERP Solutions"
        subtitle="Enterprise Workflows • Dashboards • Database Apps"
        icon={<Layers className="h-12 w-12 text-[#67E8F9]" />}
        image="/images/services/apex/hero-apex.jpg"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ===================== SYSTEM OVERVIEW ===================== */}
        <section
          ref={s1}
          className={`mt-20 fade-up ${v1 ? "visible" : ""}`}
        >
          <div
            className="
      rounded-2xl border border-white/10 bg-[#0D1A33]/60
      backdrop-blur-xl p-6 shadow-[0_0_30px_#0008]
    "
          >
            <img
              src="/images/services/apex/overview-apex.jpg"
              alt="APEX ERP system overview"
              className="
        w-full max-h-[420px]
        object-contain
        rounded-xl
        opacity-95
      "
              loading="lazy"
            />
          </div>
        </section>


        {/* ===================== WHAT WE BUILD ===================== */}
        <section
          ref={s2}
          className={`mt-24 fade-up ${v2 ? "visible" : ""}`}
        >
          <h2 className="text-3xl font-semibold text-[#67E8F9] drop-shadow-[0_0_12px_#67E8F9]">
            What We Build
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="p-6 rounded-xl bg-[#0A1528]/70 border border-white/10
              hover:border-[#67E8F9] hover:shadow-[0_0_20px_#67E8F955]
              backdrop-blur-xl transition">
              <Layers className="text-[#67E8F9] w-10 h-10 mb-3" />
              <h3 className="text-xl font-semibold">Custom APEX Apps</h3>
              <p className="mt-2 text-slate-300 text-sm">
                HR, Finance, CRM, procurement, and enterprise operations systems.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0A1528]/70 border border-white/10
              hover:border-[#67E8F9] hover:shadow-[0_0_20px_#67E8F955]
              backdrop-blur-xl transition">
              <Workflow className="text-[#67E8F9] w-10 h-10 mb-3" />
              <h3 className="text-xl font-semibold">ERP Workflow Automation</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Multi-step approvals, validations, and process automation.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0A1528]/70 border border-white/10
              hover:border-[#67E8F9] hover:shadow-[0_0_20px_#67E8F955]
              backdrop-blur-xl transition">
              <Database className="text-[#67E8F9] w-10 h-10 mb-3" />
              <h3 className="text-xl font-semibold">Database-Centric Systems</h3>
              <p className="mt-2 text-slate-300 text-sm">
                High-performance Oracle-backed applications at scale.
              </p>
            </div>

          </div>
        </section>

        {/* ===================== DASHBOARDS & ANALYTICS ===================== */}
        <section
          ref={s3}
          className={`mt-24 grid md:grid-cols-2 gap-12 items-center fade-up ${v3 ? "visible" : ""}`}
        >
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#67E8F9]">
              <BarChart3 /> Dashboards & Analytics
            </h2>

            <p className="mt-3 text-slate-300">
              Interactive dashboards, KPIs, role-based reporting, and real-time insights.
            </p>

            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• KPI dashboards & BI views</li>
              <li>• Scheduled & automated reports</li>
              <li>• Secure RBAC-based access</li>
            </ul>
          </div>

          <img
            src="/images/services/apex/dashboard-apex.jpg"
            alt="ERP dashboards"
            className="rounded-2xl border border-white/10 shadow-[0_0_35px_#67E8F966] h-80 w-full object-cover"
            loading="lazy"
          />
        </section>

        {/* ===================== SECURITY & PERFORMANCE ===================== */}
        <section
          ref={s4}
          className={`mt-24 grid md:grid-cols-2 gap-12 items-center fade-up ${v4 ? "visible" : ""}`}
        >
          <img
            src="/images/services/apex/security-apex.jpeg"
            alt="ERP security and performance"
            className="rounded-2xl border border-white/10 shadow-[0_0_35px_#67E8F933] h-80 w-full object-cover"
            loading="lazy"
          />

          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#67E8F9]">
              <Settings /> Security & Enterprise Readiness
            </h2>

            <p className="mt-3 text-slate-300 leading-relaxed">
              Built for compliance, performance, and long-term maintainability.
            </p>

            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Secure authentication & RBAC</li>
              <li>• Optimized PL/SQL & Oracle queries</li>
              <li>• Backups, auditing & high availability</li>
            </ul>
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section
          ref={s4}
          className={`text-center py-28 fade-up ${v4 ? "visible" : ""}`}
        >
          <h2 className="text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_#67E8F9]">
            Start Your APEX Project
          </h2>

          <p className="text-slate-400 mt-3 mb-6 max-w-xl mx-auto">
            Let’s build secure, scalable, and enterprise-ready ERP solutions
            tailored to your organization.
          </p>

          <a
            href="/start-project"
            className="
      inline-block px-8 py-3 rounded-xl bg-[#2DD4BF]
      text-[#062014] font-semibold
      hover:bg-[#67E8F9]
      hover:shadow-[0_0_30px_#67E8F9AA]
      transition-all
    "
          >
            Start Your APEX Project →
          </a>
        </section>

      </div>
    </div>
  );
}
