import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <div className="bg-[#070C18] text-[#E9F3FF] min-h-screen pt-28">
      <Helmet>
        <title>Privacy Policy — Storry</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-[#67E8F9] mb-6">
          Privacy Policy
        </h1>

        <p className="text-slate-300 mb-6">
          At <strong>Storry</strong>, we respect your privacy and are committed to protecting
          the personal information you share with us.
        </p>

        <section className="space-y-6 text-slate-300 leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Information We Collect
            </h2>
            <p>
              We may collect your name, email address, and message details when you
              contact us through our website or communication channels.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To respond to inquiries and project discussions</li>
              <li>To provide requested services or information</li>
              <li>To improve our services and communication</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Data Protection
            </h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect your data against unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Third-Party Services
            </h2>
            <p>
              We do not sell or rent your personal data. Limited third-party services
              (such as form handling or analytics) may process data only as required.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy, contact us at:
              <br />
              <span className="text-[#67E8F9]">hello@storry.tech</span>
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}
