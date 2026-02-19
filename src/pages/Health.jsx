import React from "react"
import { Link } from "react-router-dom"

export default function Health() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 text-zinc-900">
        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl md:text-5xl font-black">
          Zenova <span className="text-blue-600">Health</span>
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-600 leading-relaxed">
          Zenova Health offers structured fitness and fat loss programs designed
          for different lifestyles and experience levels.
        </p>

        {/* COURSES */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-bold">Fitness – Busy Schedule</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Ideal for working professionals starting their fitness journey.
            </p>

            <p className="mt-4 text-2xl font-extrabold text-zinc-900">
              ₹2,000
            </p>
            <p className="text-xs text-zinc-500">One-time program fee</p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>✅ Short & effective workouts</li>
              <li>✅ Beginner-friendly routine</li>
              <li>✅ Simple nutrition structure</li>
              <li>✅ Home or gym based</li>
            </ul>

            <Link
  to="/course/fitness-busy"
  className="mt-6 block w-full rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700 transition"
>
  Enroll Now
</Link>

          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-bold">Fitness – Intermediate Level</h2>
            <p className="mt-2 text-sm text-zinc-600">
              For people who already work out and want better results.
            </p>

            <p className="mt-4 text-2xl font-extrabold text-zinc-900">
              ₹2,000
            </p>
            <p className="text-xs text-zinc-500">One-time program fee</p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>✅ Progressive workout plans</li>
              <li>✅ Strength & conditioning focus</li>
              <li>✅ Improved endurance & stamina</li>
              <li>✅ Consistency & performance tracking</li>
            </ul>

            <Link
  to="/course/fitness-intermediate"
  className="mt-6 block w-full rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700 transition"
>
  Enroll Now
</Link>

          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-bold">Fat Loss Program</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Dedicated fat loss program for visible body transformation.
            </p>

            <p className="mt-4 text-2xl font-extrabold text-zinc-900">
              ₹3,000
            </p>
            <p className="text-xs text-zinc-500">One-time program fee</p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>✅ Structured fat loss roadmap</li>
              <li>✅ Nutrition focused on fat reduction</li>
              <li>✅ Training for maximum calorie burn</li>
              <li>✅ Progress review & guidance</li>
            </ul>

            <Link
  to="/course/fat-loss"
  className="mt-6 block w-full rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700 transition"
>
  Enroll Now
</Link>

          </div>

        </div>
      </div>
    </div>
  )
}
