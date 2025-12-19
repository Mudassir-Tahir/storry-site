import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <div className="bg-[#070C18] text-[#E9F3FF] min-h-screen pt-28">
      <Helmet>
        <title>Terms & Conditions — Storry</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-[#67E8F9] mb-6">
          Terms & Conditions
        </h1>

        <p className="text-slate-300 mb-6">
          By accessing or using the Storry website and services, you agree to the
          following terms and conditions.
        </p>

        <section className="space-y-6 text-slate-300 leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Services
            </h2>
            <p>
              Storry provides software development, automation, data engineering,
              AI, cloud, and security services. Service scope is defined per project.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Intellectual Property
            </h2>
            <p>
              All content, designs, and materials on this website are owned by
              Storry unless otherwise stated. Client deliverables are governed by
              project agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Limitation of Liability
            </h2>
            <p>
              We are not liable for indirect or consequential damages arising from
              the use of our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              External Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for their content or practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Updates
            </h2>
            <p>
              These terms may be updated periodically. Continued use of the site
              indicates acceptance of the latest version.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}
