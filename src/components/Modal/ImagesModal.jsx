import React, { useEffect, useRef } from "react"

import { Swiper, SwiperSlide } from "swiper/react"

import DynamicFAIcon from "../../utils/DynamicFAIcon"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./swiper.css"

import { Pagination, Mousewheel, Autoplay, Keyboard } from "swiper/modules"

export default function ImagesModal({ isOpen, images, onClose }) {
  const modalRef = useRef()

  useEffect(() => {
    if (isOpen) {
      // document.body.style.filter = "blur(5px)"
      document.body.style.overflow = "hidden"
    } else {
      // document.body.style.filter = "none"
      document.body.style.overflow = "auto"
    }

    return () => {
      // document.body.style.filter = "none"
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="p-4 rounded max-h-full w-full flex flex-col"
      >
        <button className="absolute top-10 right-5 z-50" onClick={onClose}>
          <DynamicFAIcon name="FaTimes" color="#FFF" size={30} />
        </button>

        <Swiper
          watchSlidesProgress={true}
          slidesPerView="auto"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          modules={[Pagination, Mousewheel, Autoplay, Keyboard]}
          spaceBetween={20}
          breakpoints={{
            776: { slidesPerView: 2, spaceBetween: 20 },
            1100: { slidesPerView: 3, spaceBetween: 20 },
            1500: { slidesPerView: 4, spaceBetween: 20 },
            2000: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {images?.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full">
                <img
                  key={index}
                  src={src}
                  alt="Preview"
                  className="rounded-xl w-auto h-[90vh] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
