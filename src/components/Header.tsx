import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },   // NEW ITEM
  { to: "/contact", label: "Contact" },
];


export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "relative px-3 py-2 text-sm font-semibold rounded-md transition-all duration-300";

  const linkIdle =
    "text-slate-300 hover:text-[#67E8F9]";

  const linkActive =
    "text-[#67E8F9] font-bold";

  return (
    <header
  className={`
    sticky top-0 z-50 backdrop-blur-xl border-b border-white/10
    transition-all duration-300
    ${
      scrolled
        ? "bg-[#060B16]/95 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]"
        : "bg-transparent" 
    }
  `}
>
      <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">

        {/* ================= LOGO + BRAND ================= */}
        <a
          href="/"
          className="flex items-center gap-4 group select-none"
        >

          {/* LOGO CONTAINER */}
          <div className="relative h-20 w-20 flex items-center justify-center">

            {/* Neon glow outside */}
            <div className="absolute inset-0 rounded-full bg-[#2DD4BF]/30 blur-xl -z-20 animate-pulse-slow"></div>

            {/* Rotating neon ring */}
            <div className="absolute inset-0 rounded-full border border-[#67E8F9]/40 animate-spin-slow -z-10"></div>

            {/* WHITE BACKDROP FOR VISIBILITY */}
            <div className="absolute inset-[6px] rounded-full bg-white shadow-[0_0_12px_#ffffffaa]"></div>

            {/* LOGO */}
            <img
              src="/storry-logo1.svg"
              className="relative h-18 w-18 object-contain transition-all duration-500 
               group-hover:scale-110 drop-shadow-[0_0_12px_#2DD4BFaa]"
              alt="Storry logo"
            />
          </div>

          {/* TEXT BLOCK */}
          <div className="flex flex-col leading-tight">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#EAF7FF]
                             group-hover:text-[#67E8F9] transition-all duration-300 drop-shadow-[0_0_8px_#000]">
              STORRY
            </span>
            <span className="text-xs md:text-sm text-slate-400 -mt-1">
              Intelligent Tech, Trusted Solutions
            </span>
          </div>
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
              end
            >
              {l.label}

              {/* neon underline */}
              <span
                aria-hidden="true"
                className={`
                  absolute left-0 right-0 -bottom-[2px] h-[2px] rounded-full
                  bg-gradient-to-r from-[#2DD4BF] via-[#67E8F9] to-[#2DD4BF]
                  transition-transform duration-300 origin-left
                  ${location.pathname === l.to ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                `}
              />
            </NavLink>
          ))}
        </nav>

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden md:block">
          <Link
            to="/start-project"
            className="
              inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold
              bg-[#2DD4BF] text-[#062014]
              shadow-[0_0_25px_#2DD4BF55]
              hover:bg-[#67E8F9] hover:shadow-[0_0_30px_#67E8F9aa]
              transition-all
            "
          >
            Start a Project →
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="md:hidden p-2 rounded hover:bg-white/10 text-[#EAF7FF]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A1528]/95 backdrop-blur-xl shadow-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2">

            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <Link
              to="/start-project"
              onClick={() => setOpen(false)}
              className="
                mt-3 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold
                bg-[#2DD4BF] text-[#062014]
                shadow hover:bg-[#67E8F9] hover:shadow-[0_0_25px_#67E8F9aa]
                transition
              "
            >
              Start a Project →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
