import React from "react"
import { Link } from "react-router-dom"

// ✅ Images (place these in src/assets/)
import healthImg from "../assets/health.png"
import eduImg from "../assets/education.png"
import digitalImg from "../assets/digital.png"
import aboutImg from "../assets/about.jpg"

export default function Landing() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-zinc-900">
      {/* Background Light */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white" />
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute left-1/2 top-[20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_70%,rgba(255,255,255,0.9)_100%)]" />
      </div>

      {/* NAVBAR */}
      <header className="w-full">
        <div className="mx-auto max-w-6xl px-6 py-7 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black grid place-items-center">
              Z
            </div>
            <span className="font-semibold text-lg text-zinc-900">Zenova Group</span>
          </Link>

         <Link
  to="/contact"
  className="group relative px-5 py-2.5 rounded-2xl bg-blue-600 text-white font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
>
  {/* Glow */}
  <span className="absolute -inset-1 rounded-2xl bg-blue-600/40 blur-xl opacity-30 group-hover:opacity-60 transition" />

  {/* Shine */}
  <span className="absolute -left-20 top-0 h-full w-16 bg-white/25 rotate-12 group-hover:left-[120%] transition-all duration-700" />

  <span className="relative flex items-center gap-2">
    <span>📩</span>
    Contact Us
  </span>
</Link>
        </div>
      </header>

      {/* HERO */}
      <main className="mx-auto max-w-6xl px-6 pt-10 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Pill tag */}
          <div className="px-5 py-2 rounded-full border border-blue-200 text-blue-700 text-xs tracking-widest font-semibold uppercase bg-blue-50">
            Building the future of business
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-4xl md:text-6xl font-black leading-tight text-zinc-900">
            Empowering Excellence
          </h1>
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-blue-600">
            Across Industries
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-zinc-600 max-w-2xl leading-relaxed">
            A diversified parent company driving innovation in health, education, and digital business
            services with a commitment to excellence and growth.
          </p>

          {/* ✅ PREMIUM BUTTONS (ICON + GLOW + SHINE) */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Primary Button */}
            <a
              href="#ecosystem"
              className="group relative px-7 py-3 rounded-2xl bg-blue-600 text-white font-bold shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
            >
              {/* Glow Ring */}
              <span className="absolute -inset-1 rounded-2xl bg-blue-600/40 blur-xl opacity-40 group-hover:opacity-70 transition" />

              {/* Shine Effect */}
              <span className="absolute -left-24 top-0 h-full w-20 bg-white/25 rotate-12 group-hover:left-[120%] transition-all duration-700" />

              <span className="relative flex items-center gap-2">
                <span className="text-lg">🚀</span>
                Explore Our Ecosystem <span className="text-xl">→</span>
              </span>
            </a>

            {/* Secondary Button */}
            <a
              href="#about"
              className="group px-7 py-3 rounded-2xl border-2 border-zinc-300 bg-white text-zinc-900 font-bold hover:border-blue-400 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="text-lg">📘</span>
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 w-full max-w-3xl grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-blue-600 text-3xl font-black">3</p>
              <p className="text-zinc-500 text-xs tracking-widest mt-1 uppercase">Verticals</p>
            </div>

            <div className="text-center">
              <p className="text-blue-600 text-3xl font-black">100%</p>
              <p className="text-zinc-500 text-xs tracking-widest mt-1 uppercase">Dedicated</p>
            </div>

            <div className="text-center">
              <p className="text-blue-600 text-3xl font-black">∞</p>
              <p className="text-zinc-500 text-xs tracking-widest mt-1 uppercase">Potential</p>
            </div>
          </div>

          {/* Scroll Icon */}
          <div className="mt-14">
            <div className="h-9 w-6 rounded-full border-2 border-blue-300 flex justify-center">
              <div className="h-2 w-1.5 rounded-full bg-blue-600 mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </main>

      {/* ECOSYSTEM SECTION */}
      <section id="ecosystem" className="mx-auto max-w-6xl px-6 pb-24">
        {/* Small icon top */}
        <div className="flex justify-center mb-8">
          <div className="h-10 w-10 rounded-full border border-blue-200 flex items-center justify-center bg-white">
            <div className="h-5 w-2.5 rounded-full border border-blue-400" />
          </div>
        </div>

        <h2 className="text-center text-3xl md:text-4xl font-black text-zinc-900">
          Our <span className="text-blue-600">Ecosystem</span>
        </h2>

        <p className="text-center text-zinc-600 mt-3">
          Three distinct verticals, one unified vision of excellence
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Health */}
          <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition duration-300">
            <div className="h-44 bg-zinc-50">
              <img src={healthImg} alt="Zenova Health" className="w-full h-full object-cover" />
            </div>

            <div className="p-6">
              <div className="h-12 w-12 rounded-2xl border border-blue-200 bg-blue-50 flex items-center justify-center mb-5">
                <span className="text-blue-700 text-xl">❤</span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900">Zenova Health</h3>
              <p className="text-blue-600 text-sm font-semibold mt-1">
                Fat Loss for Professionals
              </p>

              <p className="text-zinc-600 text-sm mt-4 leading-relaxed">
                Empowering busy professionals with science-backed, sustainable fat loss programs designed
                to fit seamlessly into demanding lifestyles.
              </p>

              <Link
                to="/health"
                className="mt-6 inline-flex text-blue-600 font-semibold text-sm hover:underline items-center gap-2"
              >
                Explore More <span className="text-lg">↗</span>
              </Link>
            </div>
          </div>

          {/* Education */}
          <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition duration-300">
            <div className="h-44 bg-zinc-50">
              <img src={eduImg} alt="Zenova Education" className="w-full h-full object-cover" />
            </div>

            <div className="p-6">
              <div className="h-12 w-12 rounded-2xl border border-blue-200 bg-blue-50 flex items-center justify-center mb-5">
                <span className="text-blue-700 text-xl">🎓</span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900">Zenova Education</h3>
              <p className="text-blue-600 text-sm font-semibold mt-1">
                9th Grade Science Excellence
              </p>

              <p className="text-zinc-600 text-sm mt-4 leading-relaxed">
                Transforming science education with engaging, comprehensive curriculum designed to inspire
                curiosity and academic excellence in young minds.
              </p>

              <Link
                to="/education"
                className="mt-6 inline-flex text-blue-600 font-semibold text-sm hover:underline items-center gap-2"
              >
                Explore More <span className="text-lg">↗</span>
              </Link>
            </div>
          </div>

          {/* Digital */}
          <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition duration-300">
            <div className="h-44 bg-zinc-50">
              <img src={digitalImg} alt="Zenova Digital" className="w-full h-full object-cover" />
            </div>

            <div className="p-6">
              <div className="h-12 w-12 rounded-2xl border border-blue-200 bg-blue-50 flex items-center justify-center mb-5">
                <span className="text-blue-700 text-xl">👜</span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900">Zenova Digital</h3>
              <p className="text-blue-600 text-sm font-semibold mt-1">
                Digital Business Services
              </p>

              <p className="text-zinc-600 text-sm mt-4 leading-relaxed">
                Delivering cutting-edge digital solutions and business services that drive growth,
                efficiency, and competitive advantage in the modern marketplace.
              </p>

              <Link
                to="/digital"
                className="mt-6 inline-flex text-blue-600 font-semibold text-sm hover:underline items-center gap-2"
              >
                Explore More <span className="text-lg">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center mb-16">
          <p className="text-zinc-600 text-sm">
            Interested in partnering with one of our verticals?
          </p>

          <Link
            to="/contact"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition shadow-sm"
          >
            Get in Touch
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase">
              About Us
            </div>

            <h2 className="mt-6 text-3xl md:text-5xl font-black leading-tight text-zinc-900">
              Building a Legacy of{" "}
              <span className="text-blue-600">Trust & Innovation</span>
            </h2>

            <p className="mt-5 text-zinc-600 leading-relaxed max-w-xl">
              Zenova Group is a diversified parent company committed to excellence across multiple sectors.
              Our mission is to create sustainable value through strategic investments and operational
              excellence.
            </p>

            <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white font-black grid place-items-center">
                  📄
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zinc-900">
                    MSME Registered & Certified
                  </h3>
                  <p className="text-zinc-600 text-sm mt-2 leading-relaxed">
                    As a registered Micro, Small & Medium Enterprise, Zenova Group is committed to fostering
                    entrepreneurship, innovation, and sustainable growth while maintaining the highest standards
                    of corporate governance and transparency.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-zinc-600 text-sm">
              <div className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full bg-blue-600 text-white grid place-items-center text-xs font-black">
                  ✓
                </span>
                <p>Diversified portfolio across health, education, and digital services</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full bg-blue-600 text-white grid place-items-center text-xs font-black">
                  ✓
                </span>
                <p>Commitment to innovation and sustainable business practices</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full bg-blue-600 text-white grid place-items-center text-xs font-black">
                  ✓
                </span>
                <p>Focus on creating value for stakeholders and communities</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-sm">
              <img
                src={aboutImg}
                alt="About Zenova Group"
                className="w-full h-[360px] md:h-[420px] object-cover"
              />
            </div>

            <div className="absolute top-6 right-6 rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-blue-600 text-white font-black grid place-items-center">
                  ↗
                </div>
                <div>
                  <p className="text-lg font-black leading-5 text-zinc-900">3+</p>
                  <p className="text-zinc-500 text-xs">Verticals</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-8 rounded-2xl border border-zinc-200 bg-white/95 backdrop-blur px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-blue-600 text-white font-black grid place-items-center">
                  🏅
                </div>
                <div>
                  <p className="font-bold leading-5 text-zinc-900">MSME</p>
                  <p className="text-zinc-500 text-xs">Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black grid place-items-center">
                Z
              </div>
              <p className="font-bold text-lg text-zinc-900">Zenova Group</p>
            </div>

            <p className="text-zinc-600 text-sm mt-4 leading-relaxed max-w-sm">
              A diversified parent company driving innovation and excellence across health,
              education, and digital business services. Building the future, one vertical at a time.
            </p>

           <div className="flex gap-3 mt-6">
  {[
    { label: "in", href: "https://www.linkedin.com" },
    { label: "x", href: "https://x.com" },
    { label: "f", href: "https://facebook.com" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group h-11 w-11 rounded-2xl border-2 border-zinc-200 bg-zinc-50 grid place-items-center text-zinc-700 font-extrabold shadow-sm hover:shadow-xl hover:-translate-y-0.5 hover:border-blue-400 hover:bg-white transition-all duration-300"
    >
      <span className="group-hover:text-blue-600 transition">{item.label}</span>

      {/* glow */}
      <span className="absolute opacity-0 group-hover:opacity-100 transition duration-300 -z-10 h-11 w-11 rounded-2xl bg-blue-600/25 blur-xl"></span>
    </a>
  ))}
</div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900">Our Verticals</h4>
            <div className="mt-4 space-y-3 text-zinc-600 text-sm">
              <Link className="hover:text-zinc-900 block" to="/health">
                Zenova Health
              </Link>
              <Link className="hover:text-zinc-900 block" to="/education">
                Zenova Education
              </Link>
              <Link className="hover:text-zinc-900 block" to="/digital">
                Zenova Digital
              </Link>
              <Link className="hover:text-zinc-900 block" to="/contact">
                Careers
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900">Contact Us</h4>
            <div className="mt-4 space-y-4 text-zinc-600 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600">✉</span>
                <div>
                  <p className="text-zinc-500">Email</p>
                  <p className="text-zinc-900">info@zenovagroup.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-600">📞</span>
                <div>
                  <p className="text-zinc-500">Phone</p>
                  <p className="text-zinc-900">+91 8595367745</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-600">📍</span>
                <div>
                  <p className="text-zinc-500">Location</p>
                  <p className="text-zinc-900">
                    Business District, <br /> Corporate Tower
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© 2026 Zenova Group. All rights reserved.</p>

            <div className="relative">
  {/* strong glow */}
  <div className="absolute -inset-2 rounded-full bg-blue-600/40 blur-2xl opacity-80"></div>

  {/* badge */}
  <div className="relative px-4 py-2 rounded-full border-2 border-blue-400 bg-blue-600 text-white font-bold shadow-[0_0_30px_rgba(37,99,235,0.65)]">
    MSME Registered
  </div>
</div>


            <div className="flex gap-5">
              <Link to="/privacy-policy" className="hover:text-zinc-900 cursor-pointer">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-zinc-900 cursor-pointer">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-zinc-900 cursor-pointer">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
