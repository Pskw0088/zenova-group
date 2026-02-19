import React from "react"
import { Link } from "react-router-dom"

export default function Digital() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 text-zinc-900">
        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl md:text-5xl font-black">
          Zenova <span className="text-blue-600">Digital</span>
        </h1>

        <p className="mt-4 text-zinc-600 max-w-2xl leading-relaxed">
          Zenova Digital provides B2B lead generation & sales automation.
          Powered by 55,000+ verified software engineers database and Apollo extracted leads.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Services */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-zinc-900">Services</h2>
            <ul className="mt-4 space-y-2 text-zinc-700 text-sm">
              <li>✅ Apollo leads extraction + verification</li>
              <li>✅ Cold outreach + follow up system</li>
              <li>✅ Sales automation workflows</li>
              <li>✅ Landing pages for conversion</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-zinc-900">Get Leads Now</h2>
            <p className="text-zinc-500 text-sm mt-3">
              We’ll build your outbound pipeline fast.
            </p>

            <Link
              to="/contact"
              className="mt-5 block text-center px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-sm"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
