import React, { useState } from "react"
import About from "../components/portfolio/About"
import Experience from "../components/portfolio/Experience"
import Content3D from "../components/portfolio/Content3D"
import Contact from "../components/portfolio/Contact"
import Hobbies from "../components/portfolio/Hobbies"
import Skills from "../components/portfolio/Skills"

export default function PortfolioPage() {
  return (
    <>
      <Content3D />
      <About />
      <Skills />
      <Experience />
      <Hobbies />
      <Contact />
    </>
  )
}
