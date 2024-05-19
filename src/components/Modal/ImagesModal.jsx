import React, { useEffect, useRef } from "react"

import { Swiper, SwiperSlide } from "swiper/react"

import DynamicFAIcon from "../../utils/DynamicFAIcon"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./swiper.css"

import { Pagination, Mousewheel, Autoplay } from "swiper/modules"

export default function ImagesModal({ isOpen, images, onClose }) {
  const modalRef = useRef()

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

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="p-4 rounded max-h-full max-w-full w-auto flex flex-col"
      >
        <button className="absolute top-10 right-5 z-50" onClick={onClose}>
          <DynamicFAIcon name="FaTimes" color="#FFF" size={30} />
        </button>
        {/* <div className="flex overflow-x-auto py-4 space-x-2">
          {images?.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Preview"
              className="rounded h-auto max-h-[80vh]  object-contain"
            />
          ))}
        </div> */}

        <Swiper
          watchSlidesProgress={true}
          slidesPerView="auto"
          // centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, Mousewheel, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            776: { slidesPerView: 2, spaceBetween: 20 },
            1100: { slidesPerView: 3, spaceBetween: 20 },
            1500: { slidesPerView: 4, spaceBetween: 20 },
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
                  className="rounded-xl h-auto max-h-[80vh] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
