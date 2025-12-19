const badges = [
  { src: "/badges/aws-partner.svg", label: "AWS Cloud Experience" },
  { src: "/badges/iso-security.svg", label: "Security Best Practices" },
  { src: "/badges/python-expert.svg", label: "Advanced Python & AI" },
  { src: "/badges/oracle-apex.svg", label: "Oracle APEX Expertise" },
];

export default function TrustBadges() {
  return (
    <section className="relative py-20 bg-[#060B16] text-white overflow-hidden">

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.035] pointer-events-none" />

      {/* Soft glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px]
        -translate-x-1/2 -translate-y-1/2
        bg-[#2DD4BF]/10 blur-[160px] rounded-full"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#67E8F9]
          drop-shadow-[0_0_12px_#67E8F9aa]">
          Trusted Expertise
        </h2>

        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
          Proven experience across cloud, security, data, automation, and enterprise platforms.
        </p>

        {/* Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">

          {badges.map((b, i) => (
            <div
              key={i}
              className="
                group flex flex-col items-center gap-4
                p-8 rounded-2xl
                bg-[#0D1A33]/55 backdrop-blur-xl
                border border-white/10
                shadow-[0_0_22px_rgba(0,0,0,0.45)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#67E8F9]/60
                hover:shadow-[0_0_36px_#67E8F955]
              "
            >
              {/* Badge image */}
              <div className="h-24 flex items-center justify-center">
                <img
                  src={b.src}
                  alt={b.label}
                  className="
                    h-20 md:h-[88px]
                    opacity-90
                    transition-transform duration-300
                    group-hover:opacity-100
                    group-hover:scale-105
                  "
                  loading="lazy"
                />
              </div>

              {/* Label */}
              <span className="text-sm font-medium text-slate-300 text-center">
                {b.label}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}