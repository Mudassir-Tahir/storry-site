import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Send,
  Smartphone,
  Cpu,
  Cloud,
  Shield,
  Code,
  Database,
  Layers
} from "lucide-react";
import Testimonials from "../components/Testimonials";
import TrustBadges from "../components/TrustBadges";

export default function StartProject() {
  const [step, setStep] = useState(1);

  // FORM DATA STATE
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    message: "",
  });

  const update = (field: string, value: string) =>
    setFormData((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    (e.target as HTMLFormElement).submit();
  };

  return (
    <div className="min-h-screen bg-[#070C18] text-[#E9F3FF] py-24 px-6">
      {/* ====================== PAGE HEADER ======================= */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-[#67E8F9] drop-shadow-[0_0_14px_#2DD4BF]">
          Start a Project
        </h1>
        <p className="text-slate-300 mt-2">
          Tell us about your idea — and let’s build something extraordinary together.
        </p>
      </div>

      {/* ====================== MULTI STEP WRAPPER ======================= */}
      <div className="max-w-3xl mx-auto bg-[#0A1528]/70 border border-white/10 rounded-2xl p-10 backdrop-blur-xl shadow-[0_0_25px_#2DD4BF33]">

        {/* Step Indicator */}
        <div className="flex justify-center gap-4 mb-10 text-sm">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`
                w-8 h-8 flex items-center justify-center rounded-full border 
                ${step === n
                  ? "bg-[#2DD4BF] text-black border-[#67E8F9]"
                  : "border-[#67E8F9]/40 text-[#67E8F9]/50"}
              `}
            >
              {n}
            </div>
          ))}
        </div>

        {/* ====================== FORM ======================= */}
        <form
          action="https://formspree.io/f/xkgnbzba"
          method="POST"
          onSubmit={handleSubmit}
        >

          {/* STEP 1 — PROJECT TYPE */}
          {step === 1 && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-xl font-semibold text-[#2DD4BF] mb-6 text-center">
                What type of project do you need?
              </h2>

              {/* GRID OF SERVICES */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { id: "ai", label: "AI Solutions", icon: Cpu },
                  { id: "cloud", label: "Cloud Architecture", icon: Cloud },
                  { id: "security", label: "Cybersecurity", icon: Shield },
                  { id: "web", label: "Web Development", icon: Code },
                  { id: "data", label: "Data Engineering", icon: Database },
                  { id: "mobile", label: "Mobile Apps", icon: Smartphone },

                  // ⭐ NEW SERVICE
                  { id: "apex", label: "APEX & ERP", icon: Layers },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => update("service", item.label)}
                    className={`
                      p-6 rounded-xl border cursor-pointer transition-all backdrop-blur 
                      ${formData.service === item.label
                        ? "border-[#2DD4BF] bg-[#0A1528]/80 shadow-[0_0_15px_#2DD4BF88]"
                        : "border-white/10 hover:border-[#2DD4BF]/60"}
                    `}
                  >
                    <item.icon className="h-10 w-10 text-[#67E8F9] mb-3" />
                    <h3 className="font-semibold">{item.label}</h3>
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-10">
                <button
                  type="button"
                  disabled={!formData.service}
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-[#2DD4BF] text-black font-semibold flex items-center gap-2
                    disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#67E8F9] transition-all"
                >
                  Next <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 — BUDGET & TIMELINE */}
          {step === 2 && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-xl font-semibold text-[#2DD4BF] mb-6 text-center">
                Project Details
              </h2>

              {/* Budget */}
              <div>
                <label className="block mb-2 text-slate-300">Budget Range</label>
                <select
                  name="Budget"
                  required
                  value={formData.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className="w-full p-3 bg-[#0A1528] border border-white/10 rounded-xl text-slate-200 
                    focus:border-[#2DD4BF] outline-none"
                >
                  <option value="">Select...</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block mb-2 text-slate-300">Timeline</label>
                <select
                  name="Timeline"
                  required
                  value={formData.timeline}
                  onChange={(e) => update("timeline", e.target.value)}
                  className="w-full p-3 bg-[#0A1528] border border-white/10 rounded-xl text-slate-200 
                    focus:border-[#2DD4BF] outline-none"
                >
                  <option value="">Select...</option>
                  <option value="1–2 weeks">1–2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2–3 months">2–3 months</option>
                  <option value="Long-term partnership">Long-term partnership</option>
                </select>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-xl border border-[#2DD4BF]/40 text-[#2DD4BF] font-semibold flex items-center gap-2
                    hover:border-[#67E8F9] transition-all"
                >
                  <ArrowLeft size={18} /> Back
                </button>

                <button
                  type="button"
                  disabled={!formData.budget || !formData.timeline}
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl bg-[#2DD4BF] text-black font-semibold flex items-center gap-2
                    disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#67E8F9] transition-all"
                >
                  Next <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 — CONTACT INFO */}
          {step === 3 && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-xl font-semibold text-[#2DD4BF] mb-6 text-center">
                Tell us about you
              </h2>

              {/* Hidden fields sent to Formspree */}
              <input type="hidden" name="Service" value={formData.service} />
              <input type="hidden" name="Budget" value={formData.budget} />
              <input type="hidden" name="Timeline" value={formData.timeline} />

              {/* Name */}
              <div>
                <label className="block mb-2 text-slate-300">Your Name</label>
                <input
                  type="text"
                  name="Name"
                  required
                  className="w-full p-3 bg-[#0A1528] border border-white/10 rounded-xl text-slate-200 
                    focus:border-[#2DD4BF] outline-none"
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-slate-300">Your Email</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full p-3 bg-[#0A1528] border border-white/10 rounded-xl text-slate-200 
                    focus:border-[#2DD4BF] outline-none"
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-slate-300">Project Details</label>
                <textarea
                  name="Message"
                  rows={4}
                  className="w-full p-3 bg-[#0A1528] border border-white/10 rounded-xl text-slate-200 
                    focus:border-[#2DD4BF] outline-none"
                  onChange={(e) => update("message", e.target.value)}
                ></textarea>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl border border-[#2DD4BF]/40 text-[#2DD4BF] font-semibold flex items-center gap-2
                    hover:border-[#67E8F9] transition-all"
                >
                  <ArrowLeft size={18} /> Back
                </button>

                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-[#2DD4BF] text-black font-semibold flex items-center gap-2
                    hover:bg-[#67E8F9] hover:shadow-[0_0_30px_#2DD4BF88] transition-all"
                >
                  Send <Send size={18} />
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      <TrustBadges />
      <Testimonials />
    </div>
  );
}
