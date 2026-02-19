import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "./pages/Landing"
import Health from "./pages/Health"
import Education from "./pages/Education"
import Digital from "./pages/Digital"
import Contact from "./pages/Contact"
import CourseDetails from "./pages/CourseDetails"
import CourseAccess from "./pages/CourseAccess"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050b1a] text-white">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/health" element={<Health />} />
          <Route path="/education" element={<Education />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course-access/:id" element={<CourseAccess />} />

          {/* ✅ ADD THIS LINE */}
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
