import React, { useState } from "react"
import ImagesModal from "../Modal/ImagesModal"
import DynamicFAIcon from "../../utils/DynamicFAIcon"

const hobbies = [
  {
    name: "Travel for food and relax",
    thumbnail: "my-self/hobbies/1/thumbnail.jpg",
    images: [
      "my-self/hobbies/1/1.jpg",
      "my-self/hobbies/1/2.jpg",
      "my-self/hobbies/1/3.jpg",
      "my-self/hobbies/1/4.jpg",
      "my-self/hobbies/1/5.jpg",
      "my-self/hobbies/1/6.jpg",
      "my-self/hobbies/1/7.jpg",
      "my-self/hobbies/1/8.jpg",
      "my-self/hobbies/1/9.jpg",
      "my-self/hobbies/1/10.jpg",
      "my-self/hobbies/1/11.jpg",
      "my-self/hobbies/1/12.jpg",
      "my-self/hobbies/1/13.jpg",
      "my-self/hobbies/1/14.jpg",
      "my-self/hobbies/1/15.jpg",
      "my-self/hobbies/1/16.jpg",
      "my-self/hobbies/1/17.jpg",
      "my-self/hobbies/1/18.jpg",
    ],
  },
  {
    name: "Learn and listen to dhamma",
    thumbnail: "my-self/hobbies/2/thumbnail.jpg",
  },
  {
    name: "Read some favorite books",
    thumbnail: "my-self/hobbies/3/thumbnail.jpg",
    images: [],
  },
  {
    name: "Practice cooking at home with family",
    thumbnail: "my-self/hobbies/4/thumbnail.jpg",
    images: [
      "my-self/hobbies/4/1.jpg",
      "my-self/hobbies/4/2.jpg",
      "my-self/hobbies/4/3.jpg",
      "my-self/hobbies/4/4.jpg",
      "my-self/hobbies/4/5.jpg",
      "my-self/hobbies/4/6.jpg",
      "my-self/hobbies/4/7.jpg",
      "my-self/hobbies/4/8.jpg",
      "my-self/hobbies/4/9.jpg",
      "my-self/hobbies/4/10.jpg",
      "my-self/hobbies/4/11.jpg",
    ],
  },
  {
    name: "Go back to the countryside to visit my mother",
    thumbnail: "my-self/hobbies/5/thumbnail.jpg",
    images: [
      "my-self/hobbies/5/1.jpg",
      "my-self/hobbies/5/2.jpg",
      "my-self/hobbies/5/3.jpg",
      "my-self/hobbies/5/4.jpg",
      "my-self/hobbies/5/5.jpg",
      "my-self/hobbies/5/6.jpg",
      "my-self/hobbies/5/7.jpg",
      "my-self/hobbies/5/8.jpg",
      "my-self/hobbies/5/9.jpg",
      "my-self/hobbies/5/10.jpg",
    ],
  },
]

export default function Hobbies() {
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState([])

  const openModal = (images) => {
    setImages(images)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setImages([])
  }

  return (
    <section id="hobbies" className="py-16">
      {/* Modal */}
      <ImagesModal isOpen={isOpen} images={images} onClose={closeModal} />

      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-3xl font-semibold">
            <span className="text-lime-300 font-extrabold">Hobbies</span> and
            interests
          </div>
          <div className="text-3xl font-semibold hover:text-yellow-300">
            <DynamicFAIcon name="FaPizzaSlice" />
          </div>
        </div>

        {/* Hobbies */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">
            "go with the flow of nature"
          </h2>
          <div className="grid grid-cols-12 gap-5 mt-5">
            {hobbies?.map((item, idx) => {
              const isHasImages = item?.images?.length > 0

              return (
                <div
                  key={idx}
                  className={`col-span-12 md:col-span-6 lg:col-span-4 ${
                    isHasImages ? "hover:cursor-pointer" : ""
                  }`}
                  onClick={() => {
                    if (isHasImages) {
                      openModal(item?.images)
                    }
                  }}
                >
                  <div
                    className="bg-n-6 rounded-lg shadow-lg overflow-hidden flex flex-col 
                    hover:ring-4
                    hover:ring-lime-300
                    hover:text-lime-400
                    hover:bg-n-9 "
                  >
                    <div className="h-60 overflow-hidden">
                      <img
                        className="w-full h-full object-cover hover:scale-110 transition-all duration-200"
                        src={item?.thumbnail}
                        alt={item?.name}
                      />
                    </div>
                    <div className="p-4 text-center md:text-left">
                      <blockquote>
                        <p className="text-lg font-medium ">{item?.name}</p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
