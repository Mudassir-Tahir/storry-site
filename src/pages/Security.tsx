import { Helmet } from "react-helmet-async";

export default function Security() {
  return (
    <div className="bg-[#070C18] text-[#E9F3FF] min-h-screen pt-28">
      <Helmet>
        <title>Security — Storry</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-[#67E8F9] mb-6">
          Security Practices
        </h1>

        <p className="text-slate-300 mb-6">
          Security is a core principle at <strong>Storry</strong>. We design and
          deliver systems with security built-in, not added later.
        </p>

        <section className="space-y-6 text-slate-300 leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Secure Development
            </h2>
            <p>
              We follow secure coding practices, code reviews, and dependency
              management to reduce vulnerabilities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Infrastructure Security
            </h2>
            <p>
              Systems are deployed using hardened environments, access controls,
              encryption, and monitoring best practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Data Protection
            </h2>
            <p>
              Sensitive data is handled responsibly, with encryption at rest and
              in transit where applicable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Responsible Disclosure
            </h2>
            <p>
              If you discover a security issue, please report it responsibly to:
              <br />
              <span className="text-[#67E8F9]">security@storry.tech</span>
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}
