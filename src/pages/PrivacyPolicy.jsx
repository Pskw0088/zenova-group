import React from "react";

export default function PrivacyPolicy() {
  const lastUpdated = "03 Feb 2026"; // change as you want

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-white/80 text-sm md:text-base max-w-3xl">
            Zenova Group respects your privacy and is committed to protecting
            your personal information.
          </p>
          <p className="mt-2 text-white/70 text-sm">
            Last Updated: <span className="font-semibold">{lastUpdated}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6 md:p-10">
          <p className="text-zinc-700 leading-relaxed">
            This Privacy Policy explains how <span className="font-semibold">Zenova Group</span>{" "}
            (“we”, “our”, “us”) collects, uses, and protects your data when you
            visit our website or contact us for our services.
          </p>

          {/* Sections */}
          <div className="mt-10 space-y-10">
            {/* 1 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black">
                1. Information We Collect
              </h2>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="mt-4 list-disc pl-6 text-zinc-700 space-y-2">
                <li>
                  <span className="font-semibold">Personal Details:</span> Name,
                  email address, phone number, company name (if provided).
                </li>
                <li>
                  <span className="font-semibold">Message Content:</span>{" "}
                  Information you share when you contact us via forms, email or WhatsApp.
                </li>
                <li>
                  <span className="font-semibold">Technical Data:</span> Browser
                  type, device type, IP address, pages visited, time spent (for
                  analytics & security).
                </li>
              </ul>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black">
                2. How We Use Your Information
              </h2>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                We use your information for purposes such as:
              </p>
              <ul className="mt-4 list-disc pl-6 text-zinc-700 space-y-2">
                <li>Responding to your inquiries and support requests</li>
                <li>Providing services and project communication</li>
                <li>Improving our website experience and performance</li>
                <li>Security, fraud prevention and legal compliance</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black">
                3. Cookies & Tracking
              </h2>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                We may use cookies to enhance your browsing experience.
                Cookies help us understand user interaction and improve our content.
                You can disable cookies from your browser settings at any time.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black">
                4. Sharing of Information
              </h2>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                We do not sell, trade, or rent your personal information to others.
                We may share data only when necessary for:
              </p>
              <ul className="mt-4 list-disc pl-6 text-zinc-700 space-y-2">
                <li>Service delivery (only trusted tools / platforms)</li>
                <li>Legal requirements or law enforcement requests</li>
                <li>Protecting Zenova Group’s rights and safety</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black">
                5. Data Security
              </h2>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                We take reasonable technical and organizational measures to protect
                your personal data from unauthorized access, misuse, or loss.
                However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black">
                6. Third-Party Links
              </h2>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                Our website may contain links to third-party websites.
                We are not responsible for their content or privacy practices.
                Please review their privacy policy before sharing your data.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black">
                7. Your Rights
              </h2>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                You may request to access, update, or delete your personal data.
                To make such a request, contact us using the details below.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black">
                8. Changes to This Policy
              </h2>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                We may update this Privacy Policy from time to time.
                Any updates will be posted on this page with a revised date.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-black">
                9. Contact Us
              </h2>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                If you have questions about this Privacy Policy, you can contact us:
              </p>

              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-xl">
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="font-semibold text-black">
                    support@zenovagroup.in
                  </p>
                </div>

                <div className="p-4 border rounded-xl">
                  <p className="text-sm text-zinc-500">Phone</p>
                  <p className="font-semibold text-black">+91 XXXXX XXXXX</p>
                </div>

                <div className="p-4 border rounded-xl">
                  <p className="text-sm text-zinc-500">Website</p>
                  <p className="font-semibold text-black">zenovagroup.in</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold hover:bg-zinc-900 transition"
                >
                  Contact Support
                </a>
              </div>
            </section>
          </div>

          {/* Footer note */}
          <div className="mt-12 border-t pt-6 text-sm text-zinc-500">
            By using our website, you agree to this Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
}
