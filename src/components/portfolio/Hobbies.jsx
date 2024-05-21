import React, { useContext } from "react"
import DynamicFAIcon from "../../utils/DynamicFAIcon"
import { ImagesModalContext } from "../../contexts"
import TopicSection from "../Fragments/TopicSection"

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
  {
    name: "Learn and listen to dhamma",
    thumbnail: "my-self/hobbies/2/thumbnail.jpg",
  },
  {
    name: "Read some favorite books",
    thumbnail: "my-self/hobbies/3/thumbnail.jpg",
    images: [],
  },
]

export default function Hobbies() {
  const { openModal } = useContext(ImagesModalContext)

  return (
    <section id="hobbies" className="py-16">
      <div className="container mx-auto">
        <TopicSection id="hobbies" obsName="observe" iconName="FaPizzaSlice">
          <span className="text-lime-200 font-extrabold">Hobbies</span>
          &nbsp;and interests
        </TopicSection>

        <h2 className="mt-5 text-2xl">"go with the flow of nature"</h2>

        {/* Hobbies */}
        <div className="mt-10">
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
                    hover:text-lime-200
                    hover:bg-n-7
                    hover:shadow-lg hover:shadow-lime-100
                    group"
                  >
                    <div className="h-60 overflow-hidden">
                      <img
                        className="w-full h-full object-cover
                        transition-all duration-200
                        group-hover:scale-110"
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
