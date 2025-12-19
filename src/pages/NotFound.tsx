import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden bg-[#070C18]">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.06] pointer-events-none"></div>

      {/* Aurora glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[600px] h-[600px] bg-[#2DD4BF22] blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        {/* 404 DIGITS */}
        <h1 className="text-[110px] md:text-[150px] font-extrabold leading-none 
                       text-[#67E8F9] drop-shadow-[0_0_20px_#2DD4BF]
                       animate-pulse-slow">
          404
        </h1>

        <p className="mt-4 text-lg text-slate-300">
          The page you're looking for doesn't exist.
        </p>

        {/* CTA */}
        <Link
          to="/"
          className="
            mt-8 inline-block px-6 py-3 rounded-xl font-semibold
            bg-[#2DD4BF] text-[#062014]
            hover:bg-[#67E8F9] hover:shadow-[0_0_20px_#67E8F9aa]
            transition-all
          "
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
