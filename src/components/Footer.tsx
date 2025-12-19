import { Mail, Phone, MapPin, Facebook, Linkedin, Github, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const socials = [
  {
    href: "https://www.linkedin.com/company/108224157/admin/dashboard/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/storry-tech",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://web.facebook.com/profile.php?id=61579080812917",
    label: "Facebook",
    icon: Facebook,
  },
];


export default function Footer() {
  return (
    <footer className="relative bg-[#040810] text-[#E9F3FF] overflow-hidden pt-40 pb-12">

      {/* ======= PREMIUM TOP CTA WAVE ======= */}
      <div className="absolute top-0 left-0 w-full">
        <div className="wave wave-top-dark wave-animated w-full"></div>
      </div>

      {/* ======= PREMIUM CTA CARD ======= */}
      <div className="relative max-w-6xl mx-auto px-6 -mt-32 mb-16">
        <div className="
          bg-gradient-to-br from-[#0F1C33] to-[#0A1528]
          border border-white/10 
          shadow-[0_0_45px_#0d223955]
          rounded-3xl p-10 md:p-14 backdrop-blur-xl
        ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                <Sparkles className="text-[#67E8F9]" />
                Ready to Build Something Amazing?
              </h3>
              <p className="text-slate-300 max-w-xl">
                Get a custom plan for automation, AI/ML, dashboards, ERP, or cybersecurity.
                Fast response. Expert execution.
              </p>
            </div>

            <Link
              to="/start-project"
              className="
                inline-flex items-center gap-3 px-7 py-3
                rounded-xl text-[#062014] font-semibold text-lg
                bg-[#2DD4BF] shadow-[0_0_22px_#2DD4BFaa]
                hover:bg-[#67E8F9] hover:shadow-[0_0_32px_#67E8F9dd]
                transition-all duration-300
              "
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </div>

      {/* ===== FLOATING PARTICLES (Tech Aesthetic) ===== */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.14]">
        <div className="particle"></div>
        <div className="particle2"></div>
        <div className="particle3"></div>
      </div>

      {/* NEON GRID */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.04]"></div>

      {/* ================= MAIN FOOTER GRID ================= */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-14 z-10">

        {/* ===== BRAND BLOCK ===== */}
        <div>
          <div className="flex items-center gap-4 mb-4 group">

            {/* LOGO CONTAINER */}
            <div className="relative h-20 w-20 flex items-center justify-center">

              {/* Outer neon aura */}
              <div className="absolute inset-0 rounded-full bg-[#2DD4BF]/35 blur-2xl -z-20 animate-pulse-slow"></div>

              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-[#67E8F9]/30 animate-spin-slow -z-10"></div>

              {/* WHITE INNER CIRCLE (for visibility) */}
              <div className="absolute inset-[8px] rounded-full bg-white shadow-[0_0_20px_#ffffffcc]"></div>

              {/* LOGO (SVG) */}
              <img
                src="/storry-logo1.svg"
                className="
                  relative h-16 w-16 object-contain drop-shadow-[0_0_12px_#2DD4BFaa]
                  transition-all duration-500 group-hover:scale-110
                "
                alt="Storry logo"
              />
            </div>

            <div>
              <p className="text-3xl font-extrabold tracking-tight text-[#67E8F9] drop-shadow-[0_0_18px_#2DD4BFcc]">
                STORRY
              </p>
              <p className="text-xs opacity-80 -mt-1">Intelligent Tech, Trusted Solutions</p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed max-w-sm">
            We build automation, AI/ML systems, data pipelines, secure cloud setups,
            dashboards, scraping engines, and enterprise-grade cybersecurity.
          </p>
        </div>

        {/* ===== SERVICES ===== */}
        <div>
          <h3 className="text-lg font-semibold text-[#67E8F9] mb-4">Services</h3>
          <ul className="space-y-2 text-slate-300">
                {[
              ["Web Development", "/services/web-development"],
              ["AI & ML Pipelines", "/services/ai"],
              ["Data Engineering", "/services/data-engineering"],
              ["Cloud & DevOps", "/services/cloud"],
              ["Cybersecurity & SOC", "/services/cybersecurity"],
              ["APEX & ERP", "/services/apex-erp"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link className="hover-link" to={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== COMPANY ===== */}
        <div>
          <h3 className="text-lg font-semibold text-[#67E8F9] mb-4">Company</h3>
          <ul className="space-y-2 text-slate-300">
          <li>
              <Link className="hover-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <span className="opacity-60">Blog (Coming Soon)</span>
            </li>
            <li>
              <Link
                className="hover-link"
                to="/start-project"
              >
                Start a Project
              </Link>
            </li>
            <li>
              <Link className="hover-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div>
          <h3 className="text-lg font-semibold text-[#67E8F9] mb-4">Get in Touch</h3>

          <div className="space-y-4 text-slate-300">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#67E8F9]" /> info@storry.tech
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#67E8F9]" /> +92 300 0047125
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#67E8F9]" /> Multan, PK (Remote Worldwide)
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-8">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
        group p-2 rounded-full bg-[#0D1A33]
        border border-white/10
        hover:bg-[#162544]
        transition shadow-[0_0_15px_#0005]
      "
              >
                <Icon
                  size={18}
                  className="text-[#67E8F9] group-hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== BOTTOM INFO BAR ===== */}
      <div className="relative max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/10 
                flex flex-col md:flex-row justify-between text-sm text-slate-500">

        <p>© {new Date().getFullYear()} Storry. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link className="hover-link" to="/privacy">
            Privacy
          </Link>
          <Link className="hover-link" to="/terms">
            Terms
          </Link>
          <Link className="hover-link" to="/security">
            Security
          </Link>
        </div>
      </div>

    </footer>
  );
}
