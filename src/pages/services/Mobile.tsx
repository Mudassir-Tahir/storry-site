// src/pages/services/MobileApps.tsx

import {
  Smartphone,
  AppWindow,
  Rocket,
  Cpu,
  Figma,
  PhoneCall,
} from "lucide-react";
import { useInViewFadeUp } from "../../Hooks/useInViewFadeUp";
import ServiceBanner from "../../components/ServiceBanner";

export default function MobileAppsPage() {
  const { ref: s1, visible: v1 } = useInViewFadeUp(0.2);
  const { ref: s2, visible: v2 } = useInViewFadeUp(0.2);
  const { ref: s3, visible: v3 } = useInViewFadeUp(0.2);

  return (
    <div className="min-h-screen bg-[#070C18] text-[#E9F3FF]">

      {/* ===================== PAGE BANNER ===================== */}
      <ServiceBanner
        title="Mobile App Development"
        subtitle="Cross-Platform • Scalable • Elegant UX"
        icon={<Smartphone className="h-12 w-12 text-[#67E8F9]" />}
        image="/images/services/mobile/hero-mobile.jpg"
      />

      {/* ===================== CAPABILITIES ===================== */}
      <section
        ref={s1}
        className={`max-w-6xl mx-auto px-6 py-24 fade-up ${v1 ? "visible" : ""}`}
      >
        <h2 className="text-3xl font-semibold mb-10 text-[#67E8F9] drop-shadow-[0_0_10px_#67E8F9aa]">
          Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-xl border border-white/10 bg-[#0D1A33]/70
            backdrop-blur-xl shadow-[0_0_20px_#0005]
            hover:border-[#67E8F9] hover:shadow-[0_0_25px_#67E8F955] transition-all">
            <Smartphone className="h-12 w-12 text-[#67E8F9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cross-Platform Apps</h3>
            <p className="text-slate-400 text-sm">
              Flutter & React Native apps for iOS and Android with native performance.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-white/10 bg-[#0D1A33]/70
            backdrop-blur-xl shadow-[0_0_20px_#0005]
            hover:border-[#67E8F9] hover:shadow-[0_0_25px_#67E8F955] transition-all">
            <AppWindow className="h-12 w-12 text-[#67E8F9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI / UX Design</h3>
            <p className="text-slate-400 text-sm">
              Pixel-perfect interfaces designed in Figma with fluid animations.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-white/10 bg-[#0D1A33]/70
            backdrop-blur-xl shadow-[0_0_20px_#0005]
            hover:border-[#67E8F9] hover:shadow-[0_0_25px_#67E8F955] transition-all">
            <Rocket className="h-12 w-12 text-[#67E8F9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Store Deployment</h3>
            <p className="text-slate-400 text-sm">
              Google Play & App Store publishing, compliance, and CI pipelines.
            </p>
          </div>

        </div>
      </section>

      {/* ===================== ARCHITECTURE ===================== */}
      <section
        ref={s2}
        className={`max-w-6xl mx-auto px-6 py-20 fade-up ${v2 ? "visible" : ""}`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-[#67E8F9]">
              Modern Mobile Architecture
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Offline-first, scalable, API-driven mobile architectures designed
              for performance and reliability.
            </p>

            <ul className="mt-6 grid gap-3 text-slate-400">
              <li>✓ Flutter / Dart</li>
              <li>✓ React Native</li>
              <li>✓ Firebase, Supabase, Appwrite</li>
              <li>✓ Local DBs (Hive, SQLite, Realm)</li>
              <li>✓ Serverless APIs & Cloud Functions</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl border border-white/10 bg-[#0A1528] p-4 shadow-[0_0_30px_#67E8F933]">
            <img
              src="/images/services/mobile/architecture-mobile.jpg"
              alt="mobile app architecture"
              className="w-full h-80 object-cover rounded-xl opacity-95"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* ===================== UX & FEATURES ===================== */}
      <section
        ref={s3}
        className={`max-w-6xl mx-auto px-6 py-24 fade-up ${v3 ? "visible" : ""}`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="order-2 md:order-1">
            <img
              src="/images/services/mobile/ux-mobile.jpeg"
              alt="mobile UX design"
              className="rounded-2xl border border-white/10 shadow-[0_0_35px_#67E8F966] object-cover h-80 w-full"
              loading="lazy"
            />
          </div>

          {/* TEXT */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-6 text-[#67E8F9]">
              Smooth, User-Centric Experiences
            </h2>

            <div className="grid gap-6 text-slate-400">
              <div className="flex items-start gap-3">
                <Cpu className="mt-1 text-[#67E8F9]" />
                <span>High-performance rendering & animations</span>
              </div>

              <div className="flex items-start gap-3">
                <Figma className="mt-1 text-[#67E8F9]" />
                <span>Custom UI systems aligned with your brand</span>
              </div>

              <div className="flex items-start gap-3">
                <PhoneCall className="mt-1 text-[#67E8F9]" />
                <span>Chat, maps, payments, notifications & real-time APIs</span>
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
              hover:bg-[#67E8F9] hover:shadow-[0_0_35px_#67E8F9aa] transition-all"
          >
            Start My Mobile App →
          </a>
        </div>
      </section>
    </div>
  );
}
