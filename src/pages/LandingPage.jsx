import React from "react"
import Navbar from "../components/landing/Navbar"
import Content from "../components/landing/Content"

export default function LandingPage({ children }) {
  return (
    <div
      style={{ backgroundImage: "url(images/image.png)" }}
      className={`min-h-screen bg-center bg-cover px-24 py-4`}
    >
      <Navbar />
      <Content />
    </div>
  )
}
