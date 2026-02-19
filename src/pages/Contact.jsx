import React from "react"
import { Link } from "react-router-dom"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 text-zinc-900">
        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl md:text-5xl font-black">
          Contact <span className="text-blue-600">Zenova Group</span>
        </h1>

        <p className="mt-4 text-zinc-600 max-w-2xl leading-relaxed">
          Connect with us for LeanExec enrollment, coaching inquiries, or digital services.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Direct Contact */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-zinc-900">Direct Contact</h2>

            <p className="text-zinc-700 mt-3">📩 info@zenovagroup.com</p>
            <p className="text-zinc-700 mt-2">📞 +91 8595367745</p>

            <a
              href="https://wa.me/918595367745?text=Hi%20Zenova%20Group!%20I%20want%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-sm"
            >
              WhatsApp Now
            </a>
          </div>

          {/* Quick Form */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-zinc-900">Quick Form</h2>
            <p className="text-zinc-500 text-sm mt-2">
              (Next step: connect form to Google Sheets / Email)
            </p>

            <form className="mt-5 space-y-3">
              <input
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-blue-200"
              />
              <input
                placeholder="Your Email"
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-blue-200"
              />
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-blue-200 min-h-[120px]"
              />
              <button
                type="button"
                className="w-full px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
