// src/pages/services/Cloud.tsx

import { Cloud as CloudIcon, Server, Zap, Database } from "lucide-react";
import { useInViewFadeUp } from "../../Hooks/useInViewFadeUp";
import ServiceBanner from "../../components/ServiceBanner";

export default function CloudPage() {
  const { ref: s1, visible: v1 } = useInViewFadeUp(0.2);
  const { ref: s2, visible: v2 } = useInViewFadeUp(0.2);
  const { ref: s3, visible: v3 } = useInViewFadeUp(0.2);

  return (
    <div className="min-h-screen bg-[#070C18] text-[#E9F3FF]">

      {/* ===================== PAGE BANNER ===================== */}
      <ServiceBanner
        title="Cloud Architecture"
        subtitle="Scalable Systems • Automation • Reliability"
        icon={<CloudIcon className="h-12 w-12 text-[#67E8F9]" />}
        image="/images/services/cloud/hero-cloud.jpeg"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ===================== WHAT WE BUILD ===================== */}
        <section
          ref={s1}
          className={`py-24 fade-up ${v1 ? "visible" : ""}`}
        >
          <h2 className="text-3xl font-semibold mb-10 text-[#67E8F9] drop-shadow-[0_0_12px_#67E8F9]">
            Cloud Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CloudIcon,
                title: "Cloud Migration",
                desc: "Lift & shift, replatforming, and cloud-native modernization.",
              },
              {
                icon: Server,
                title: "Infrastructure as Code",
                desc: "Terraform, Pulumi, GitOps, secure environments & DR patterns.",
              },
              {
                icon: Zap,
                title: "CI/CD Automation",
                desc: "Containers, pipelines, deployment automation & secret management.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  p-8 rounded-xl bg-[#0D1A33]/70 border border-white/10 
                  backdrop-blur-xl shadow-[0_0_20px_#0005]
                  hover:border-[#67E8F9] hover:shadow-[0_0_22px_#67E8F955]
                  transition-all group
                "
              >
                <item.icon className="h-12 w-12 text-[#67E8F9] mb-4 drop-shadow-[0_0_8px_#67E8F9]" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== ARCHITECTURE VISUAL ===================== */}
        <section
          ref={s2}
          className={`py-20 fade-up ${v2 ? "visible" : ""}`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9]">
                Resilient & Cost-Effective Cloud
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We design systems that scale automatically, recover instantly,
                and maintain predictable cost efficiency. From multi-region
                deployments to autoscaling compute, resilience is engineered
                into every layer.
              </p>

              <ul className="mt-6 text-slate-400 grid gap-2">
                <li>✓ Multi-region cloud deployments</li>
                <li>✓ Autoscaling & autoshrink compute</li>
                <li>✓ Zero-downtime blue/green releases</li>
              </ul>
            </div>

            <img
              src="/images/services/cloud/growth-cloud.jpeg"
              alt="Cloud Architecture Illustration"
              className="rounded-2xl border border-white/10 shadow-[0_0_40px_#67E8F933] object-cover h-80 w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===================== DATA & STORAGE ===================== */}
        <section
          ref={s3}
          className={`py-24 fade-up ${v3 ? "visible" : ""}`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div className="order-2 md:order-1">
              <img
                src="/images/services/cloud/data-storage.jpeg"
                alt="Cloud Data & Storage"
                className="rounded-2xl border border-white/10 shadow-[0_0_40px_#67E8F933] object-cover h-80 w-full"
                loading="lazy"
              />
            </div>

            {/* TEXT */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-semibold mb-4 text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9]">
                Data & Storage Patterns
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We architect secure, efficient, analytics-ready data systems —
                from transactional workloads to pipelines & lakehouses.
              </p>

              <div className="mt-6 grid gap-3 text-slate-400">
                <div className="flex items-start gap-3">
                  <Database className="text-[#67E8F9] mt-1" />
                  Managed DBs, caching layers & indexing strategies
                </div>

                <div className="flex items-start gap-3">
                  <Database className="text-[#67E8F9] mt-1" />
                  Blob/object storage with lifecycle automation
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="/start-project"
              className="
                inline-block px-8 py-3 rounded-xl bg-[#2DD4BF]
                text-[#062014] font-semibold
                hover:bg-[#67E8F9] hover:shadow-[0_0_30px_#67E8F9AA]
                transition-all
              "
            >
              Start a Cloud Project →
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
