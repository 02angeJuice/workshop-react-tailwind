import React, { useContext, useEffect, useState } from "react"
import { tech_stacks } from "../../constants/dummy_data"
import DynamicFAIcon from "../../utils/DynamicFAIcon"
import ImagesModal from "../Modal/ImagesModal"
import { ImagesModalContext } from "../../contexts"

const filter = [
  { title: "All", category: "ALL" },
  { title: "Mobile", category: "MOBILE" },
  { title: "React", category: "REACT" },
]

const works = [
  {
    title: "Booking Resort & Ticket",
    description:
      "A website for booking hotels and tickets to attractions, offering various interesting information.",
    thumbnail: "works/resort/thumbnail.png",
    tags: ["React", "Zustand", "MUI", "NestJS", "SQL"],
    images: [],
    link_github: null,
    link_web: "https://www.nongnooch.io/nongnooch-resort/home",
    category: ["MOBILE", "REACT"],
  },
  {
    title: "Digital Assets",
    description:
      "A website for collecting digital assets, enabling auctions and trading, with Omise as the payment gateway.",
    thumbnail: "works/digital-assets/thumbnail.png",
    tags: ["React", "Redux", "MUI", "NestJS", "SQL"],
    images: [],
    link_github: null,
    link_web: "https://www.nongnooch.io/Nongnooch(NDA)/home",
    category: "REACT",
  },
  {
    title: "Pics Search",
    description:
      "A website for searching various images, integrated with the Unsplash API.",
    thumbnail: "works/pics-search/thumbnail.png",
    images: [],
    tags: ["React"],
    link_github: "https://github.com/02angeJuice/pics-search",
    link_web: "https://pics-search-api.netlify.app/",
    category: "REACT",
  },
  {
    title: "The Burger",
    description:
      "A website for simulating order placement and creating burgers simultaneously.",
    thumbnail: "works/burger/thumbnail.png",
    images: [],
    tags: ["React", "Redux"],
    link_github: "https://github.com/02angeJuice/the-burger-remake",
    link_web: "https://the-burger-remake.netlify.app",
    category: "REACT",
  },
  {
    title: "Grocify Homepage",
    description: "A homepage designed for a grocery store website.",
    thumbnail: "works/grocify-home/thumbnail.png",
    images: [],
    tags: ["React", "Tailwind"],
    link_github: "https://github.com/02angeJuice/workshop-grocery-tailwind",
    link_web: "https://grocery-hompage.netlify.app",
    category: "REACT",
  },
  {
    title: "Landing Homepage",
    description: "A simple landing page.",
    thumbnail: "works/starter-landing/thumbnail.png",
    images: [],
    tags: ["React", "Tailwind"],
    link_github: "https://github.com/02angeJuice/workshop-landing-tailwind",
    link_web: "https://starter-landing-homepage.netlify.app",
    category: "REACT",
  },
  {
    title: "Handheld Express App",
    description:
      "A mobile app for handheld devices used in parcel management through barcode scanning.",
    thumbnail: "works/express/thumbnail.jpg",
    images: [
      "works/express/1.jpg",
      "works/express/2.jpg",
      "works/express/3.jpg",
      "works/express/4.jpg",
      "works/express/5.jpg",
      "works/express/6.jpg",
      "works/express/7.jpg",
    ],
    tags: ["React Native", "Redux", "NestJS", "SQL"],
    link_github: null,
    link_web: null,
    category: ["MOBILE"],
  },
  {
    title: "Auto Delete Todo",
    description: "Simple todo list with auto delete feature",
    thumbnail: "works/todo/thumbnail.png",
    images: [],
    tags: ["React", "Zustand", "MUI"],
    link_github: "https://github.com/02angeJuice/todo-list",
    link_web: "https://auto-todo-list.netlify.app",
    category: "REACT",
  },

  {
    title: "Form Validation",
    description: "Form validation with React and Redux",
    thumbnail: "works/form-validation/thumbnail.png",
    images: [],
    tags: ["React", "Redux", "Tailwind"],
    link_github: "https://github.com/02angeJuice/practice_2",
    link_web: "https://demo-form-validation.netlify.app/",
    category: "REACT",
  },
]

export default function Skills() {
  const [cate, setCate] = useState("ALL")
  const [dataList, setDataList] = useState([])

  const { openModal } = useContext(ImagesModalContext)

  useEffect(() => {
    const fetchData = () => {
      const newList = works.filter(
        (item) => cate === "ALL" || item.category?.includes(cate)
      )

      setDataList(newList)
    }

    fetchData()
  }, [cate])

  return (
    <section id="skills" className="py-16">
      <div className={`container mx-auto`}>
        <div className="flex justify-between">
          <div className="text-3xl font-semibold">
            <span className="text-lime-200 font-extrabold">Skills</span> and
            other
          </div>

          <div
            className="text-3xl font-semibold relative
            hover:text-amber-200
            hover:before:content-['']
            hover:before:absolute
            hover:before:inset-0
            hover:before:bg-amber-200
            hover:before:opacity-50
            hover:before:rounded-full
            hover:before:blur-xl"
          >
            <DynamicFAIcon name="FaTrophy" />
          </div>
        </div>

        {/* Filter Categories */}
        <div className="mt-5 flex gap-4">
          {filter?.map((item, idx) => {
            return (
              <button
                type="button"
                key={idx}
                onClick={() => setCate(item?.category)}
                className={`px-3 py-1 font-semibold rounded-lg 
                hover:${cate === item?.category ? "bg-n-6" : "bg-lime-300"}
                hover:${cate === item?.category ? "text-lime-300" : "text-n-6"}
                
                ${
                  cate === item?.category
                    ? "bg-n-6 text-lime-300 outline outline-lime-500 outline-2"
                    : "bg-n-1 text-n-7"
                }`}
              >
                {item?.title}
              </button>
            )
          })}
        </div>

        {/* Works */}
        <div className="mt-10">
          <div className="grid grid-cols-12 gap-5 mt-5">
            {dataList?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                >
                  <div
                    className="p-4 bg-n-6 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between
                    h-full
                    hover:ring-4
                    hover:ring-lime-300
                    hover:bg-n-7
                    hover:shadow-lg hover:shadow-lime-100
                    group"
                  >
                    <div>
                      {/* Thumbnail */}
                      <div className="h-48 rounded-md overflow-hidden">
                        <img
                          className="w-full h-full object-contain
                          transition-transform duration-100
                          group-hover:scale-110"
                          src={item?.thumbnail}
                          alt={item?.title}
                        />
                      </div>

                      {/* Title & Description */}
                      <div className="my-2 text-center md:text-left">
                        <blockquote>
                          <p
                            className="text-lg font-medium
                          group-hover:text-lime-200"
                          >
                            {item?.title}
                          </p>
                        </blockquote>
                        <p className="text-xs text-n-3 font-mono">
                          {item?.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="space-y-2 ">
                      <div className="flex space-x-2 justify-start">
                        {item?.images?.length > 0 && (
                          <button
                            type="button"
                            onClick={() => openModal(item?.images)}
                            className="bg-white rounded-full p-1 text-n-10
                              hover:scale-95
                              hover:text-n-8
                              hover:bg-yellow-300
                              relative
                              hover:before:content-['']
                              hover:before:absolute
                              hover:before:inset-0
                              hover:before:bg-yellow-300
                              hover:before:opacity-50
                              hover:before:rounded-full
                              hover:before:blur-md"
                          >
                            <DynamicFAIcon name="FaPhotoVideo" size="20" />
                          </button>
                        )}

                        {item?.link_github && (
                          <a
                            className="bg-white rounded-full p-1 text-n-10
                              hover:scale-95
                              hover:text-n-8
                              hover:bg-lime-300
                              relative
                              hover:before:content-['']
                              hover:before:absolute
                              hover:before:inset-0
                              hover:before:bg-lime-300
                              hover:before:opacity-50
                              hover:before:rounded-full
                              hover:before:blur-md"
                            href={item?.link_github}
                            target="_blank"
                          >
                            <DynamicFAIcon name="FaGithubAlt" size="20" />
                          </a>
                        )}

                        {item?.link_web && (
                          <a
                            className="bg-white rounded-full p-1 text-n-10
                              hover:scale-95
                              hover:text-n-8 
                              hover:bg-sky-300
                              relative
                              hover:before:content-['']
                              hover:before:absolute
                              hover:before:inset-0
                              hover:before:bg-sky-300
                              hover:before:opacity-50
                              hover:before:rounded-full
                              hover:before:blur-md"
                            href={item?.link_web}
                            target="_blank"
                          >
                            <DynamicFAIcon name="FaGlobeAsia" size="20" />
                          </a>
                        )}
                      </div>

                      <div className="flex gap-1 flex-wrap border-t-[1px] border-n-5 pt-2 border-dashed">
                        {item?.tags?.map((cate, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-n-5 rounded-md"
                          >
                            {cate}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tech Stacks */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">My stacks used</h2>
          <div className="flex flex-wrap gap-2 mt-5">
            {tech_stacks?.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-n-5 rounded-md 
                transition-transform duration-100
                hover:scale-110
                hover:ring-4 ring-lime-300
                hover:bg-n-7"
              >
                <img className="h-12 w-auto " src={item?.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
