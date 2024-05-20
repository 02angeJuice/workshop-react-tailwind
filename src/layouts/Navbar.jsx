import React, { useEffect, useState } from "react"
import "./Navbar.css"

const navigation = [
  { name: "index", href: "#index", current: true },
  { name: "my-self", href: "#about", current: false },
  { name: "skills", href: "#skills", current: false },
  { name: "exp", href: "#exp", current: false },
  { name: "hobbies", href: "#hobbies", current: false },
  { name: "contact", href: "#contact", current: false },
]

export default function Navbar({ isScrolled }) {
  const [activeHash, setActiveHash] = useState("")

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <nav
      className={`transition-all p-3 fixed top-0 w-full z-50 ${
        isScrolled
          ? "bg-black bg-opacity-50 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      } rounded-b-xl`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#">
          <img
            className="h-auto max-w-12 grayscale hover:grayscale-0"
            src="logo.png"
            alt="logo"
          />
        </a>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex">
          <div className="flex gap-6">
            {navigation?.map((item, idx) => (
              <a
                key={idx}
                href={item?.href}
                className={`${
                  activeHash === item?.href
                    ? "border-b-2 border-white text-lime-300"
                    : "text-white"
                }
                  hover:text-lime-300
                `}
              >
                {item?.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} inline-block`}
      >
        <div className="flex flex-col gap-2 pl-4 mt-4">
          {navigation?.map((item, idx) => (
            <a
              key={idx}
              href={item?.href}
              className={`${
                activeHash === item?.href
                  ? "border-b-2 border-white text-lime-300"
                  : "text-white"
              }
                hover:text-lime-300
              `}
              onClick={() => setMenuOpen(false)}
            >
              {item?.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
