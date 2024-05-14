import React from "react"

// other
import { Navbar } from "../components/other/Navbar"
import Hero from "../components/other/Hero"
import AboutUs from "../components/other/AboutUs"
import { IntroContent } from "../components/other/IntroContent"
import { Sidebar } from "../components/other/Sidebar"

export const OtherPage = () => {
  return (
    <>
      <div className="transition-all block sm:hidden">
        <Sidebar />
      </div>

      <div className="transition-all hidden sm:block">
        <Navbar />
        <Hero />
        <AboutUs />
        <IntroContent />
      </div>
    </>
  )
}
