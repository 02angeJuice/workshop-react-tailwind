import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Arrow from "./Arrow"

import { ImagesModalContext } from "../contexts"
import ImagesModal from "../components/Modal/ImagesModal"

export default function AppLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState([])

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

      {/* Modal */}
      <ImagesModal isOpen={isOpen} images={images} onClose={closeModal} />
    </>
  )
}
