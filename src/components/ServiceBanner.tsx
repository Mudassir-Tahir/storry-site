// src/components/ServiceBanner.tsx
import React from "react";

interface ServiceBannerProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  image?: string;  // ← NEW
}

export default function ServiceBanner({
  title,
  subtitle,
  icon,
  image
}: ServiceBannerProps) {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.06] pointer-events-none"></div>

      {/* Glow Field */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
          w-[900px] h-[900px] bg-[#2DD4BF]/15 blur-[130px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <div className="mb-4">{icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_#2DD4BF]">
            {title}
          </h1>
          <p className="text-slate-300 mt-4">{subtitle}</p>
        </div>

        {/* RIGHT BANNER IMAGE */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full max-h-80 object-cover rounded-2xl border border-white/10 shadow-[0_0_40px_#67E8F955]"
            loading="eager"
          />
        )}

      </div>
    </section>
  );
}

