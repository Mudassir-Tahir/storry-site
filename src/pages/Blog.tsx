import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <section className="pt-24 min-h-[70vh] text-center bg-[#070C18] text-white relative">

      <Helmet>
        <title>Blog — Coming Soon | Storry</title>
      </Helmet>

      <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.06]" />

      <h1 className="text-5xl font-extrabold text-[#67E8F9] drop-shadow-[0_0_20px_#2DD4BF]">
        Blog
      </h1>

      <p className="mt-4 text-slate-300 text-lg max-w-xl mx-auto">
        We're building high-quality case studies, tutorials, and engineering insights.
      </p>

      <p className="mt-2 text-slate-400">Coming Soon…</p>
    </section>
  );
}
