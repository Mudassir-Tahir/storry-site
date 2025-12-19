// src/pages/services/Cybersecurity.tsx

import { Shield, Lock, ShieldAlert, Terminal, Key, Bug } from "lucide-react";
import { useInViewFadeUp } from "../../Hooks/useInViewFadeUp";
import ServiceBanner from "../../components/ServiceBanner";

export default function SecurityPage() {
  const { ref: s1, visible: v1 } = useInViewFadeUp(0.2);
  const { ref: s2, visible: v2 } = useInViewFadeUp(0.2);
  const { ref: s3, visible: v3 } = useInViewFadeUp(0.2);

  return (
    <div className="min-h-screen bg-[#070C18] text-[#E9F3FF]">

      {/* ===================== PAGE BANNER ===================== */}
      <ServiceBanner
        title="Cybersecurity"
        subtitle="SOC • Pentesting • Zero Trust • Threat Detection"
        icon={<Shield className="h-12 w-12 text-[#67E8F9]" />}
        image="/images/services/security/hero-security.jpeg"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ===================== SECURITY CAPABILITIES ===================== */}
        <section ref={s1} className={`py-24 fade-up ${v1 ? "visible" : ""}`}>
          <h2 className="text-3xl font-semibold mb-10 text-[#67E8F9] drop-shadow-[0_0_12px_#67E8F9]">
            Security Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="
              p-8 rounded-xl bg-[#0D1A33]/70 border border-white/10
              backdrop-blur-xl shadow-[0_0_20px_#0005]
              hover:border-[#67E8F9] hover:shadow-[0_0_25px_#67E8F955]
              transition-all
            ">
              <ShieldAlert className="h-12 w-12 text-[#67E8F9] mb-4" />
              <h3 className="text-xl font-semibold mb-2">SOC Monitoring</h3>
              <p className="text-slate-400 text-sm">
                Threat detection, SIEM integration, automated alerting & continuous monitoring.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="
              p-8 rounded-xl bg-[#0D1A33]/70 border border-white/10
              backdrop-blur-xl shadow-[0_0_20px_#0005]
              hover:border-[#67E8F9] hover:shadow-[0_0_25px_#67E8F955]
              transition-all
            ">
              <Shield className="h-12 w-12 text-[#67E8F9] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Penetration Testing</h3>
              <p className="text-slate-400 text-sm">
                Web, mobile, network, API, and infrastructure testing with complete reporting.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="
              p-8 rounded-xl bg-[#0D1A33]/70 border border-white/10
              backdrop-blur-xl shadow-[0_0_20px_#0005]
              hover:border-[#67E8F9] hover:shadow-[0_0_25px_#67E8F955]
              transition-all
            ">
              <Lock className="h-12 w-12 text-[#67E8F9] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zero Trust Architecture</h3>
              <p className="text-slate-400 text-sm">
                IAM, MFA, RBAC, segmentation, and full Zero Trust implementation.
              </p>
            </div>

          </div>
        </section>


        {/* ===================== THREAT DETECTION SECTION ===================== */}
        <section ref={s2} className={`py-20 fade-up ${v2 ? "visible" : ""}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl font-semibold mb-4 text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9]">
                Threat Detection & Rapid Response
              </h2>

              <p className="text-slate-300 leading-relaxed">
                We use AI-backed detection, log correlation, and attacker behavior analytics  
                to identify threats in real time — before they escalate.
              </p>

              <ul className="mt-6 grid gap-3 text-slate-400">
                <li>✓ SIEM + SOAR Automation</li>
                <li>✓ Centralized logging & alerting</li>
                <li>✓ Behavior analytics & anomaly detection</li>
              </ul>
            </div>

            <img
              src="/images/services/security/threat-detection.jpg"
              alt="Security Operations"
              className="rounded-2xl border border-white/10 shadow-[0_0_35px_#67E8F966] object-cover h-80 w-full"
              loading="lazy"
            />

          </div>
        </section>


        {/* ===================== RED TEAM / BLUE TEAM ===================== */}
        <section ref={s3} className={`py-24 fade-up ${v3 ? "visible" : ""}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE LEFT */}
            <img
              src="/images/services/security/redblue-team.jpg"
              alt="Red Team Blue Team"
              className="rounded-2xl border border-white/10 shadow-[0_0_35px_#67E8F933] object-cover h-80 w-full"
              loading="lazy"
            />

            {/* TEXT RIGHT */}
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9]">
                Offensive & Defensive Security
              </h2>

              <div className="grid gap-4 text-slate-400">
                
                <div className="flex items-start gap-3">
                  <Terminal className="mt-1 text-[#67E8F9]" />
                  Red-team simulations & ethical hacking engagements
                </div>

                <div className="flex items-start gap-3">
                  <Bug className="mt-1 text-[#67E8F9]" />
                  Vulnerability scanning, patch management & hardening
                </div>

                <div className="flex items-start gap-3">
                  <Key className="mt-1 text-[#67E8F9]" />
                  Identity, MFA, RBAC, and privileged access security
                </div>

              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <a
              href="/start-project"
              className="
                inline-block px-8 py-3 rounded-xl bg-[#2DD4BF]
                text-[#062014] font-semibold
                hover:bg-[#67E8F9] hover:shadow-[0_0_30px_#67E8F9AA]
                transition-all
              "
            >
              Secure My Infrastructure →
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
