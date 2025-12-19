import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad R.",
    role: "CTO, Ecommerce Startup",
    quote:
      "Storry built our data automation system and reduced manual work by 90%. The AI-based categorization was next-level.",
    rating: 5,
  },
  {
    name: "Sarah Malik",
    role: "Head of Operations, Logistics Firm",
    quote:
      "Their scraping + dashboard solution gave us real-time visibility for the first time. Super reliable and scalable.",
    rating: 5,
  },
  {
    name: "Imran Khan",
    role: "CEO, FinTech Company",
    quote:
      "Their security audit & cloud hardening saved us from a critical production issue. Extremely professional team.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#070C18] text-white relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.05] pointer-events-none"></div>
      <div className="absolute w-[600px] h-[600px] bg-[#67E8F9]/10 blur-[150px] rounded-full top-10 left-20"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#2DD4BF]/10 blur-[150px] rounded-full bottom-10 right-10"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_18px_#67E8F9aa] mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#0D1A33]/40 border border-white/10 p-8 shadow-xl backdrop-blur-xl
                         hover:shadow-[0_0_35px_#67E8F9aa] transition-all duration-300"
            >
              <Quote className="text-[#67E8F9] opacity-70 mb-3" />

              <p className="text-slate-300 leading-relaxed">{t.quote}</p>

              {/* Stars */}
              <div className="flex mt-4">
                {Array(t.rating)
                  .fill(0)
                  .map((_, idx) => (
                    <Star key={idx} size={18} className="text-[#2DD4BF] fill-[#2DD4BF]" />
                  ))}
              </div>

              <div className="mt-4">
                <div className="text-lg font-semibold text-white">{t.name}</div>
                <div className="text-sm text-slate-400">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
