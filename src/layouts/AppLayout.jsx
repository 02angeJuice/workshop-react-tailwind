import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Arrow from "./Arrow"

export default function AppLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  console.log(isScrolled)

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <main>{children}</main>
      <Footer />

      <Arrow isScrolled={isScrolled} />
    </>
  )
}
