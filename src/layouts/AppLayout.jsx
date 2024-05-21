import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

import Navbar from "./Navbar"
import Footer from "./Footer"
import Arrow from "./Arrow"

import { ImagesModalContext, NavObserverContext } from "../contexts"
import ImagesModal from "../components/Modal/ImagesModal"

export default function AppLayout({ children }) {
  const [activeHash, setActiveHash] = useState("")

  const [isScrolled, setIsScrolled] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState([])

  const isMobile = useMediaQuery({ maxWidth: 640 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1280 })

  // Observer
  useEffect(() => {
    const topics = document.querySelectorAll(".observe")
    const sections = document.querySelectorAll("section")

    const optionsTopics = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const optionsSections = {
      root: null,
      rootMargin: "0px",
      threshold: isTabletOrMobile ? (isMobile ? 0.1 : 0.4) : 0.5,
    }

    const obsToics = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id !== "index") {
            entry.target.classList.add(
              "text-yellow-300",
              `before:content-['']`,
              "before:absolute",
              "before:inset-0",
              "before:bg-yellow-300",
              "before:opacity-50",
              "before:rounded-full",
              "before:blur-xl",
              "opacity-100",
              "translate-x-0"
            )
          }
        } else {
          if (entry.target.id !== "index") {
            entry.target.classList.remove(
              "text-yellow-300",
              `before:content-['']`,
              "before:absolute",
              "before:inset-0",
              "before:bg-yellow-300",
              "before:opacity-50",
              "before:rounded-full",
              "before:blur-xl",
              "opacity-100",
              "translate-x-0"
            )
          }
        }
      })
    }, optionsTopics)

    const obsSections = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`)
        }
      })
    }, optionsSections)

    topics.forEach((topic) => {
      obsToics.observe(topic)
    })

    sections.forEach((section) => {
      obsSections.observe(section)
    })

    return () => {
      topics.forEach((topic) => {
        obsToics.unobserve(topic)
      })

      sections.forEach((section) => {
        obsSections.unobserve(section)
      })
    }
  }, [])

  // Scroll Event
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

  // Modal
  const openModal = (images) => {
    setImages(images)
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
    setImages([])
  }

  return (
    <>
      <NavObserverContext.Provider value={{ activeHash }}>
        <ImagesModalContext.Provider
          value={{ isOpen, closeModal, openModal, images, setImages }}
        >
          <Navbar isScrolled={isScrolled} />
          <div className={`${isOpen ? "blur-sm" : ""}`}>
            <main>{children}</main>

            <Footer />
          </div>
          <Arrow isScrolled={isScrolled} />
        </ImagesModalContext.Provider>
      </NavObserverContext.Provider>

      {/* Modal */}
      <ImagesModal isOpen={isOpen} images={images} onClose={closeModal} />
    </>
  )
}
