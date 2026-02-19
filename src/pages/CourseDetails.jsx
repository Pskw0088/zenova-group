import { useParams, Link, useNavigate } from "react-router-dom"

/* 🔥 RAZORPAY SDK LOADER */
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true

    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)

    document.body.appendChild(script)
  })
}

const courseData = {
  "fitness-busy": {
    title: "Fitness Program – Busy Schedule",
    price: 2000,
    duration: "6 Weeks",
    level: "Beginner",
    description:
      "Designed for working professionals with limited time to start fitness consistently.",
    includes: [
      "30–40 minute workouts",
      "Beginner-friendly routines",
      "Simple nutrition structure",
      "Home or gym flexibility",
      "Weekly guidance",
    ],
  },

  "fitness-intermediate": {
    title: "Fitness Program – Intermediate Level",
    price: 2000,
    duration: "8 Weeks",
    level: "Intermediate",
    description:
      "For people who already work out and want better strength and performance.",
    includes: [
      "Progressive strength plans",
      "Structured workout splits",
      "Conditioning & stamina",
      "Mobility & recovery",
      "Performance tracking",
    ],
  },

  "fat-loss": {
    title: "Fat Loss Program",
    price: 3000,
    duration: "10–12 Weeks",
    level: "All Levels",
    description:
      "Dedicated fat loss transformation program focused on sustainable results.",
    includes: [
      "Fat loss roadmap",
      "Calorie & macro planning",
      "Fat-loss focused workouts",
      "Lifestyle & habit correction",
      "Weekly progress review",
    ],
  },
}

export default function CourseDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const course = courseData[id]

  if (!course) {
    return <div className="p-10">Course not found</div>
  }

  

  /* 🔥 PAYMENT HANDLER */
  
  const handlePayment = async () => {
    const loaded = await loadRazorpayScript()

    if (!loaded) {
      alert("Razorpay SDK failed to load. Disable ad-blocker & retry.")
      return
    }

    const key = import.meta.env.VITE_RAZORPAY_KEY
    if (!key) {
      alert("Razorpay key missing in .env")
      return
    }

    const options = {
      key,
      amount: course.price * 100,
      currency: "INR",
      name: "Zenova Health",
      description: course.title,

      handler: function (response) {
        console.log("Payment success:", response)

        // ✅ PAYMENT SUCCESS KE BAAD REDIRECT
        navigate(`/course-access/${id}`)
      },

      theme: {
        color: "#2563eb",
      },
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <Link to="/health" className="text-blue-600 font-semibold hover:underline">
          ← Back to Programs
        </Link>

        <h1 className="mt-6 text-4xl font-black">{course.title}</h1>
        <p className="mt-3 text-zinc-600">{course.description}</p>

        <div className="mt-6 flex gap-4 text-sm">
          <span className="rounded-full bg-zinc-100 px-4 py-1">
            Duration: {course.duration}
          </span>
          <span className="rounded-full bg-zinc-100 px-4 py-1">
            Level: {course.level}
          </span>
        </div>

        <p className="mt-6 text-3xl font-extrabold">₹{course.price}</p>
        <p className="text-sm text-zinc-500">One-time program fee</p>

        <h2 className="mt-8 text-xl font-bold">What’s Included</h2>
        <ul className="mt-4 space-y-2 text-zinc-700">
          {course.includes.map((item, i) => (
            <li key={i}>✅ {item}</li>
          ))}
        </ul>

        <button
          onClick={handlePayment}
          className="mt-10 w-full rounded-xl bg-blue-600 px-6 py-4 text-white font-bold hover:bg-blue-700 transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}
