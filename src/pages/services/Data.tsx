// src/pages/services/DataEngineering.tsx

import {
  Database,
  Server,
  BarChart3,
  CloudUpload,
  Workflow,
  LineChart,
} from "lucide-react";
import { useInViewFadeUp } from "../../Hooks/useInViewFadeUp";
import ServiceBanner from "../../components/ServiceBanner";

export default function DataEngineeringPage() {
  const { ref: s1, visible: v1 } = useInViewFadeUp(0.2);
  const { ref: s2, visible: v2 } = useInViewFadeUp(0.2);
  const { ref: s3, visible: v3 } = useInViewFadeUp(0.2);

  return (
    <div className="min-h-screen bg-[#070C18] text-[#E9F3FF]">

      {/* ===================== PAGE BANNER ===================== */}
      <ServiceBanner
        title="Data Engineering"
        subtitle="ETL • Pipelines • Warehousing • Analytics"
        icon={<Database className="h-12 w-12 text-[#67E8F9]" />}
        image="/images/services/data/hero-data.jpg"
      />

      {/* ================= WHAT WE DELIVER ================= */}
      <section
        ref={s1}
        className={`max-w-6xl mx-auto px-6 py-24 fade-up ${v1 ? "visible" : ""}`}
      >
        <h2 className="text-3xl font-semibold mb-10 text-[#2DD4BF]">
          What We Deliver
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 bg-[#0A1528]/80 border border-white/10 rounded-xl backdrop-blur-xl
            hover:border-[#2DD4BF] hover:shadow-[0_0_20px_#2DD4BF88] transition-all">
            <Database className="h-12 w-12 text-[#67E8F9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Warehousing</h3>
            <p className="text-slate-400 text-sm">
              Analytics-ready warehouses designed for BI, reporting, and scale.
            </p>
          </div>

          <div className="p-8 bg-[#0A1528]/80 border border-white/10 rounded-xl backdrop-blur-xl
            hover:border-[#2DD4BF] hover:shadow-[0_0_20px_#2DD4BF88] transition-all">
            <Workflow className="h-12 w-12 text-[#67E8F9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">ETL / ELT Pipelines</h3>
            <p className="text-slate-400 text-sm">
              Automated ingestion, transformations, and streaming pipelines.
            </p>
          </div>

          <div className="p-8 bg-[#0A1528]/80 border border-white/10 rounded-xl backdrop-blur-xl
            hover:border-[#2DD4BF] hover:shadow-[0_0_20px_#2DD4BF88] transition-all">
            <CloudUpload className="h-12 w-12 text-[#67E8F9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Data Migration</h3>
            <p className="text-slate-400 text-sm">
              Secure migration to AWS, Azure, or GCP with zero downtime.
            </p>
          </div>

        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section
        ref={s2}
        className={`max-w-6xl mx-auto px-6 py-20 fade-up ${v2 ? "visible" : ""}`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-[#2DD4BF]">
              Modern Data Stack
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Enterprise-grade tools for reliability, performance, and scale.
            </p>

            <ul className="mt-6 grid gap-3 text-slate-400">
              <li>✓ Airflow, Prefect, Dagster</li>
              <li>✓ Snowflake, BigQuery, Redshift</li>
              <li>✓ dbt, Spark, Kafka</li>
              <li>✓ PostgreSQL, MongoDB, ClickHouse</li>
              <li>✓ Superset, Power BI, Tableau</li>
              <li>✓ Kubernetes + Docker</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl border border-white/10 bg-[#0A1528] p-4 shadow-[0_0_30px_#2DD4BF33]">
            <img
              src="/images/services/data/techstack-data.jpg"
              alt="data engineering stack"
              className="w-full h-80 object-cover rounded-xl opacity-95"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section
        ref={s3}
        className={`max-w-6xl mx-auto px-6 py-24 fade-up ${v3 ? "visible" : ""}`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="order-2 md:order-1">
            <img
              src="/images/services/data/dashboard-data.png"
              alt="analytics dashboard"
              className="rounded-2xl border border-white/10 shadow-[0_0_35px_#2DD4BF44] object-cover h-80 w-full"
              loading="lazy"
            />
          </div>

          {/* TEXT */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-6 text-[#2DD4BF]">
              Clean, Reliable, and Real-Time Data
            </h2>

            <div className="grid gap-6 text-slate-400">

              <div className="flex items-start gap-3">
                <BarChart3 className="mt-1 text-[#67E8F9]" />
                <span>Analytics-ready datasets that drive decisions</span>
              </div>

              <div className="flex items-start gap-3">
                <Server className="mt-1 text-[#67E8F9]" />
                <span>High-availability data platforms</span>
              </div>

              <div className="flex items-start gap-3">
                <LineChart className="mt-1 text-[#67E8F9]" />
                <span>Centralized KPIs and automated reporting</span>
              </div>

            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/start-project"
            className="inline-block px-8 py-3 rounded-xl bg-[#2DD4BF]
              text-[#062014] font-semibold
              hover:bg-[#67E8F9] hover:shadow-[0_0_30px_#2DD4BF88] transition-all"
          >
            Discuss My Data Project →
          </a>
        </div>
      </section>
    </div>
  );
}
