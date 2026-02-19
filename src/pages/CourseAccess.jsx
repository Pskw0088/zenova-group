import { useParams, Link } from "react-router-dom"

export default function CourseAccess() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-white text-zinc-900 px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-black">
          🎉 Welcome to Your Course
        </h1>

        <p className="mt-4 text-zinc-600">
          You are successfully enrolled in:
        </p>

        <p className="mt-2 text-2xl font-bold capitalize">
          {id.replace("-", " ")}
        </p>

        <div className="mt-8 rounded-2xl border bg-zinc-50 p-6 text-left">
          <h2 className="text-xl font-bold">What happens next?</h2>
          <ul className="mt-4 space-y-2 text-zinc-700">
            <li>✅ Course material will be shared via WhatsApp / Email</li>
            <li>✅ Coach will contact you within 24 hours</li>
            <li>✅ Onboarding instructions will be provided</li>
          </ul>
        </div>

        <Link
          to="/health"
          className="mt-10 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 transition"
        >
          Back to Programs
        </Link>
      </div>
    </div>
  )
}
