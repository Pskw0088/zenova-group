import { Link } from "react-router-dom"

/* 🔥 REUSABLE BUTTON (SAME FOR ALL) */
const Button = ({ to, text, primary }) => {
  const base =
    "mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-bold transition-all duration-300"

  const primaryStyle =
    "bg-blue-600 text-white hover:bg-blue-700"

  const secondaryStyle =
    "border border-zinc-200 text-zinc-900 hover:bg-zinc-900 hover:text-white"

  return (
    <Link
      to={to}
      className={`${base} ${primary ? primaryStyle : secondaryStyle}`}
    >
      {text}
    </Link>
  )
}

export default function Education() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-14">

        {/* Header */}
        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl md:text-5xl font-black">
          Zenova <span className="text-blue-600">Education</span>
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-600 leading-relaxed">
          Zenova Education helps students and professionals learn practical
          skills, crack exams, and build careers with structured resources
          and courses.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {/* COURSES */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h2 className="text-2xl font-bold">Courses</h2>

            <p className="mt-3 text-sm text-zinc-600">
              Skill-based and career-focused courses to help you grow.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>✅ Programming Languages</li>
              <li>✅ Web Development</li>
              <li>✅ Creative Software</li>
              <li>✅ Data & AI</li>
            </ul>

            <Button
              to="/education/courses"
              text="Explore Courses"
              primary
            />
          </div>

          {/* STUDENT RESOURCES */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h2 className="text-2xl font-bold">Student Resources</h2>

            <p className="mt-3 text-sm text-zinc-600">
              Notes, assignments, and real-world projects.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>📘 Notes</li>
              <li>📝 Assignments</li>
              <li>💻 Projects</li>
            </ul>

            <Button
              to="/education/resources"
              text="View Resources"
            />
          </div>

          {/* CAREER SUPPORT */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h2 className="text-2xl font-bold">Career Support</h2>

            <p className="mt-3 text-sm text-zinc-600">
              Guidance to help you crack interviews.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>📄 Resume Building</li>
              <li>🎯 Interview Preparation</li>
              <li>🚀 Career Guidance</li>
            </ul>

            <Button
              to="/education/career"
              text="Get Career Help"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
