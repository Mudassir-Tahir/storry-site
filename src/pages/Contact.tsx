import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // replace

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const update = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Please enter a valid email.";
    if (form.message.trim().length < 8)
      return "Message must be at least 8 characters.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const validation = validate();
    if (validation) {
      setError(validation);
      return;
    }

    setSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("_replyto", form.email);
      fd.append("message", form.message);
      fd.append("_subject", "New Contact Submission");

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (!res.ok) throw new Error("Failed");

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Could not send your message. Try again or email hello@storry.tech.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#070C18] text-[#E9F3FF] min-h-screen pt-24">
      <Helmet>
        <title>Contact — Storry</title>
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative text-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.06]" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 
                        w-[900px] h-[900px] bg-[#2DD4BF]/25 
                        blur-[140px] rounded-full" />

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-5xl font-bold text-[#67E8F9] drop-shadow-[0_0_15px_#2DD4BF]"
        >
          Let's Build Something Great
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          className="text-lg text-slate-300 max-w-2xl mx-auto mt-4"
        >
          Tell us about your idea — automation, dashboards, scraping, AI, cloud, or security.
          We reply within <span className="text-[#67E8F9] font-semibold">24 hours.</span>
        </motion.p>
      </section>

      <div className="wave wave-bottom-dark wave-animated" />

      {/* ================= FORM SECTION WITH BACKGROUND ================= */}
      <section className="relative overflow-hidden">

        {/* Background image */}
        <img
          src="/images/contact/form-bg.jpeg"
          alt=""
           className="absolute inset-0 w-full h-full object-cover opacity-35 contrast-110"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#070C18]/75" />
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-10"
          >
            <h2 className="text-3xl font-bold text-[#67E8F9]">
              Contact Information
            </h2>

            <p className="text-slate-300 leading-relaxed">
              We're ready to discuss your project, automation, AI/ML, dashboards,
              applications, cloud infrastructure, or security.
            </p>

            <div className="space-y-6 text-slate-300">
              <div className="flex gap-4 items-center">
                <Mail className="text-[#67E8F9]" /> info@storry.tech
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-[#67E8F9]" /> +92 300 00047125
              </div>
              <div className="flex gap-4 items-center">
                <MapPin className="text-[#67E8F9]" /> Multan, Pakistan (Remote)
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="bg-[#0D1A33]/70 border border-white/10 backdrop-blur-xl 
                       p-10 rounded-2xl shadow-[0_0_40px_#0006]"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="text-center py-20"
              >
                <h2 className="text-3xl font-bold text-[#67E8F9] mb-4">
                  Message Sent!
                </h2>
                <p className="text-slate-300">We’ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {error && (
                  <div className="text-sm text-red-400 bg-red-900/20 p-3 rounded-md border border-red-600/40">
                    {error}
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    className="input-dark"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    className="input-dark"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={5}
                    className="input-dark"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send />
                  )}
                  {submitting ? "Sending..." : "Send Message"}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
