import React from "react"
import { Link } from "react-router-dom"

export default function Education() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 text-zinc-900">
        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl md:text-5xl font-black">
          Zenova <span className="text-blue-600">Education</span>
        </h1>

        <p className="mt-4 text-zinc-600 max-w-2xl leading-relaxed">
          Zenova Education handles academic excellence via coaching and concept clarity.
          Currently focused on <b>9th Grade Science</b>.
        </p>

        {/* ✅ STRONG CARDS (VISIBLE CHANGE) */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {["NCERT + CBSE Focus", "Weekly Tests + Notes", "Doubt Support + Revision"].map(
            (item, i) => (
              <div
                key={i}
                className="rounded-3xl border-2 border-zinc-300 bg-gradient-to-b from-blue-50 to-white p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:border-blue-400 transition-all duration-300 flex items-center gap-4 min-h-[120px]"
              >
                {/* icon badge */}
                <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-lg font-black shadow-md">
                  ✓
                </div>

                <p className="text-base md:text-lg font-extrabold text-zinc-900 leading-snug">
                  {item}
                </p>
              </div>
            )
          )}
        </div>

        <Link
          to="/contact"
          className="inline-block mt-10 px-7 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-md"
        >
          Join Coaching
        </Link>
      </div>
    </div>
  )
}
